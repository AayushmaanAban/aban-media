"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Card } from "@/components/ui/card";

// Define the validation schema for the form
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  businessName: z.string().min(2, {
    message: "Business name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  yearlyRevenue: z.string().min(1, {
    message: "Please enter your yearly revenue.",
  }),
  message: z.string().optional(),
});

export function ContactSection() {
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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Initialize form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      businessName: "",
      email: "",
      phone: "",
      yearlyRevenue: "",
      message: "",
    },
  });

  // Define submit handler
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Determine category based on yearly revenue
      const revenue = Number.parseFloat(
        values.yearlyRevenue.replace(/[₹,]/g, "")
      );
      const category = revenue >= 1500000 ? "To Call" : "Small Companies";

      console.log("Form submitted:", values);
      console.log("Category:", category);

      // Show success message
      toast.success("Form submitted successfully!");

      // Redirect to video for small companies
      if (category === "Small Companies") {
        setSubmitted(true);
        // In a real implementation, you'd redirect to a video page
        // window.location.href = "/resources/small-business";
      } else {
        setSubmitted(true);
        // In a real implementation, you'd store this lead in your "To Call" list
        // and show a different success message
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("There was an error submitting the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  // Format revenue input with commas for thousands
  function formatRevenue(value: string) {
    // Remove all non-numeric characters
    const numericValue = value.replace(/[^0-9.]/g, "");

    // Format with commas
    const parts = numericValue.split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return parts.join(".");
  }

  return (
    <section id="contact" className="py-12 md:py-24 relative">
      <div className="absolute inset-0 bg-purple-dark">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
        <div className="absolute left-20 top-20 h-60 w-60 rounded-full bg-purple-accent/10 blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="mb-5 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-space-grotesk mb-4">
            READY TO{" "}
            <span className="bg-purple-gradient bg-clip-text text-transparent">
              TRANSFORM
            </span>{" "}
            YOUR MARKETING?
          </h2>
          <p className="max-w-[700px] mx-auto text-lg text-white/80">
            Fill out the form below, and our team will get back to you to
            discuss how we can help your business grow.
          </p>
        </div>

        <div className="mx-auto max-w-4xl border border-purple-light rounded-lg flex justify-center items-center shadow-lg overflow-hidden">
          {!submitted ? (
            <>
              <div className="sm:w-[80%] w-full max-h-2xl noscroll bg-gray-200 text-black sm:my-11 overflow-hidden overflow-x-hidden overflow-y-auto rounded-lg ">
              <div className="bg-white p-8 rounded-b-lg relative">
          <div className="mb-8">
            <QuestionContent 
            nextStep={handleNext}
            
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

          {/* <div className="mt-6">
            <StepIndicator currentStep={currentStep} totalSteps={totalSteps} />
          </div> */}
        </div>
              </div>
            </>
          ) : (
            // <Card className="bg-purple-medium/40  border border-purple-light/20 gradient-border overflow-hidden shadow-purple-glow">
            //   <div className="p-6 md:p-8">
            //     <Form {...form}>
            //       <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            //         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            //           <FormField
            //             control={form.control}
            //             name="name"
            //             render={({ field }) => (
            //               <FormItem>
            //                 <FormLabel className="text-white">Full Name</FormLabel>
            //                 <FormControl>
            //                   <Input placeholder="John Doe" className="bg-purple-dark border-purple-light/30 text-white" {...field} />
            //                 </FormControl>
            //                 <FormMessage />
            //               </FormItem>
            //             )}
            //           />

            //           <FormField
            //             control={form.control}
            //             name="businessName"
            //             render={({ field }) => (
            //               <FormItem>
            //                 <FormLabel className="text-white">Business Name</FormLabel>
            //                 <FormControl>
            //                   <Input placeholder="Your Business" className="bg-purple-dark border-purple-light/30 text-white" {...field} />
            //                 </FormControl>
            //                 <FormMessage />
            //               </FormItem>
            //             )}
            //           />
            //         </div>

            //         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            //           <FormField
            //             control={form.control}
            //             name="email"
            //             render={({ field }) => (
            //               <FormItem>
            //                 <FormLabel className="text-white">Email</FormLabel>
            //                 <FormControl>
            //                   <Input type="email" placeholder="you@example.com" className="bg-purple-dark border-purple-light/30 text-white" {...field} />
            //                 </FormControl>
            //                 <FormMessage />
            //               </FormItem>
            //             )}
            //           />

            //           <FormField
            //             control={form.control}
            //             name="phone"
            //             render={({ field }) => (
            //               <FormItem>
            //                 <FormLabel className="text-white">Phone</FormLabel>
            //                 <FormControl>
            //                   <Input placeholder="Your Phone" className="bg-purple-dark border-purple-light/30 text-white" {...field} />
            //                 </FormControl>
            //                 <FormMessage />
            //               </FormItem>
            //             )}
            //           />
            //         </div>

            //         <FormField
            //           control={form.control}
            //           name="yearlyRevenue"
            //           render={({ field }) => (
            //             <FormItem>
            //               <FormLabel className="text-white">Yearly Revenue (₹)</FormLabel>
            //               <FormControl>
            //                 <Input
            //                   placeholder="15,00,000"
            //                   className="bg-purple-dark border-purple-light/30 text-white"
            //                   {...field}
            //                   onChange={(e) => {
            //                     const formattedValue = formatRevenue(e.target.value);
            //                     field.onChange(formattedValue);
            //                   }}
            //                 />
            //               </FormControl>
            //               <FormMessage />
            //             </FormItem>
            //           )}
            //         />

            //         <FormField
            //           control={form.control}
            //           name="message"
            //           render={({ field }) => (
            //             <FormItem>
            //               <FormLabel className="text-white">Message (Optional)</FormLabel>
            //               <FormControl>
            //                 <Input placeholder="Tell us about your marketing needs" className="bg-purple-dark border-purple-light/30 text-white" {...field} />
            //               </FormControl>
            //               <FormMessage />
            //             </FormItem>
            //           )}
            //         />

            //         <Button
            //           type="submit"
            //           className="w-full bg-purple-gradient font-bold py-6 shadow-purple-glow"
            //           disabled={isSubmitting}
            //         >
            //           {isSubmitting ? "Submitting..." : "GET STARTED NOW"}
            //         </Button>
            //       </form>
            //     </Form>
            //   </div>
            // </Card>
            <Card className="bg-purple-medium/40 border border-purple-light/20 gradient-border overflow-hidden shadow-purple-glow p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4 font-space-grotesk">
                Thank You for Your Submission!
              </h3>
              <p className="text-white/80 mb-6">
                Our team will review your information and reach out to you
                shortly.
              </p>
              <div className="aspect-video bg-purple-dark/60 rounded-md flex items-center justify-center mb-6">
                <p className="text-white/60">
                  Video content would be displayed here
                </p>
              </div>
              <Button
                className="bg-purple-gradient font-bold py-6 shadow-purple-glow"
                onClick={() => setSubmitted(false)}
              >
                Submit Another Inquiry
              </Button>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
}


import { ArrowDown, ArrowUp, Check } from 'lucide-react';
// import './App.css';

interface Option {
  nextStep?: () => void;
  id: string;
  text: string;
}

interface QuestionType {
  nextStep?: () => void;
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
  nextStep: () => void;
  onClick: () => void;
}> = ({ option,nextStep, isSelected, onClick }) => {
  return (
    <button
      className={`option-container sm:w-[50%] w-full flex items-center p-1 border rounded-md transition-all ${
        isSelected 
          ? 'border-gray-600 bg-indigo-50' 
          : 'border-gray-300 hover:border-gray-400'
      }`}
      onClick={()=>{onClick();nextStep()}}
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
  nextStep: () => void;
  onSelect: (questionId: string, optionId: string) => void;
  stepNumber: number;
}> = ({ question,nextStep, selectedOptionId, onSelect, stepNumber }) => {
  return (
    <div className="question-container">
      <h3 className="text-xl font-medium text-gray-800 mb-6">
        <span className="text-gray-600 mr-2">{stepNumber} →</span> {question.text}
      </h3>
      
      <div className="space-y-3">
        {question.options.map((option) => (
          <OptionButton
          nextStep={nextStep}
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