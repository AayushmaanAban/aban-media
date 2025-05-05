"use client";
import React, { useState } from 'react';
import { ArrowDown, ArrowUp, Check } from 'lucide-react';
// import './App.css';

interface Option {
  id: string;
  text: string;
}

interface QuestionType {
  id: string;
  text: string;
  options: Option[];
}

interface FormDataType {
  question1: string;
  question2: string;
  question3: string;
  question4: string;
  question5: string;
}

const OptionButton: React.FC<{
  option: Option;
  isSelected: boolean;
  onClick: () => void;
}> = ({ option, isSelected, onClick }) => {
  return (
    <button
      className={`option-container sm:w-[50%] w-full flex items-center p-1 border rounded-md transition-all ${
        isSelected 
          ? 'border-gray-600 bg-indigo-50' 
          : 'border-gray-300 hover:border-gray-400'
      }`}
      onClick={onClick}
    >
      <div className={`option-badge mr-3 ${isSelected ? 'option-selected' : 'option-unselected'}`}>
        {option.id}
      </div>
      <span className="text-left text-gray-700 font-medium">{option.text}</span>
      {isSelected && (
        <Check className="ml-auto text-gray-600" size={20} />
      )}
    </button>
  );
};

const StepIndicator: React.FC<{
  currentStep: number;
  totalSteps: number;
}> = ({ currentStep, totalSteps }) => {
  return (
    <div className="flex justify-center space-x-2">
      {Array.from({ length: totalSteps }, (_, index) => (
        <div 
          key={index}
          className={`h-2 w-8 rounded-full transition-all duration-300 ${
            index === currentStep 
              ? 'bg-indigo-600' 
              : index < currentStep 
                ? 'bg-indigo-300' 
                : 'bg-gray-300'
          }`}
        />
      ))}
    </div>
  );
};

const QuestionContent: React.FC<{
  question: QuestionType;
  selectedOptionId: string;
  onSelect: (questionId: string, optionId: string) => void;
  stepNumber: number;
}> = ({ question, selectedOptionId, onSelect, stepNumber }) => {
  return (
    <div className="question-container">
      <h3 className="text-xl font-medium text-gray-800 mb-6">
        <span className="text-gray-600 mr-2">{stepNumber} →</span> {question.text}
      </h3>
      
      <div className="space-y-3">
        {question.options.map((option) => (
          <OptionButton
            key={option.id}
            option={option}
            isSelected={selectedOptionId === option.id}
            onClick={() => onSelect(question.id, option.id)}
          />
        ))}
      </div>
    </div>
  );
};

function FormUser() {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [formData, setFormData] = useState<FormDataType>({
    question1: '',
    question2: '',
    question3: '',
    question4: '',
    question5: ''
  });

  const questions: QuestionType[] = [
    {
      id: 'question1',
      text: 'Which of these is holding you back from hitting $100k/month+',
      options: [
        { id: 'A', text: 'Appointments' },
        { id: 'B', text: 'Sales' },
        { id: 'C', text: 'Fulfillment' },
        { id: 'D', text: 'Ops' },
        { id: 'E', text: 'Other' }
      ]
    },
    {
      id: 'question2',
      text: 'What does your agency currently make per month?',
      options: [
        { id: 'A', text: '$0-5,000' },
        { id: 'B', text: '$5,000-$10,000' },
        { id: 'C', text: '$10,000-$30,000' },
        { id: 'D', text: '$30,000-$100k' },
        { id: 'E', text: '$100,000+' }
      ]
    },
    {
      id: 'question3',
      text: 'How many team members do you currently have?',
      options: [
        { id: 'A', text: 'Just me' },
        { id: 'B', text: '2-3 people' },
        { id: 'C', text: '4-10 people' },
        { id: 'D', text: '11-20 people' },
        { id: 'E', text: '20+ people' }
      ]
    },
    {
      id: 'question4',
      text: 'What services does your agency offer?',
      options: [
        { id: 'A', text: 'Web Design / Development' },
        { id: 'B', text: 'SEO / Content Marketing' },
        { id: 'C', text: 'Social Media Management' },
        { id: 'D', text: 'Paid Advertising' },
        { id: 'E', text: 'Full Service / Multiple' }
      ]
    },
    {
      id: 'question5',
      text: 'How soon are you looking to scale your agency?',
      options: [
        { id: 'A', text: 'Immediately' },
        { id: 'B', text: 'Within 30 days' },
        { id: 'C', text: 'Within 90 days' },
        { id: 'D', text: '3-6 months' },
        { id: 'E', text: 'Just exploring options' }
      ]
    }
  ];

  const totalSteps = questions.length;

  const handleSelectOption = (questionId: string, optionId: string) => {
    setFormData({
      ...formData,
      [questionId]: optionId
    });
  };

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleSubmit();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Form submitted successfully! Check console for data.');
  };

  return (
    <div className="bg-gradient-to-br from-purple-950 to-black min-h-screen flex items-center justify-center p-4">
      <div className="modal-border w-full max-w-2xl">
        <div className="bg-gradient-to-b from-purple-950 to-black p-8 text-center rounded-t-lg">
          <h2 className="text-3xl font-bold mb-2 text-white pixel-font">
            Learn More About
          </h2>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white pixel-font">
            Stealing My $150/k/month Agency
          </h1>
          <p className="text-gray-300 text-lg mb-4">
            (Don't worry its not some $20/30/40k program, lets see how we can help)
          </p>
        </div>

        <div className="bg-white p-8 rounded-b-lg relative">
          <div className="mb-8">
            <QuestionContent 
            
              question={questions[currentStep]} 
              selectedOptionId={formData[questions[currentStep].id as keyof FormDataType]} 
              onSelect={handleSelectOption}
              stepNumber={currentStep + 1}
            />
          </div>

          <div className="flex justify-between items-center">
            <button 
              onClick={handleNext}
              className="ok-button text-white font-medium py-2 px-8 rounded-md"
            >
              OK
            </button>
            
            <div className="flex gap-2">
              <button 
                onClick={handlePrevious} 
                disabled={currentStep === 0}
                className={`nav-button p-2 rounded-md ${currentStep === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                <ArrowUp className="text-white" size={20} />
              </button>
              <button 
                onClick={handleNext} 
                disabled={!formData[questions[currentStep].id as keyof FormDataType]}
                className={`nav-button p-2 rounded-md ${!formData[questions[currentStep].id as keyof FormDataType] ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                <ArrowDown className="text-white" size={20} />
              </button>
            </div>
          </div>

          <div className="mt-6">
            <StepIndicator currentStep={currentStep} totalSteps={totalSteps} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormUser;