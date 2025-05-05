"use client";

import { Card } from "@/components/ui/card";

export function HowItWorksSection() {
  const steps = [
    {
      icon: <ClassroomIcon className="h-10 w-10 text-purple-accent" />,
      title: "CONSULTATION",
      description: "We begin with a detailed consultation to understand your business, goals, and target audience.",
    },
    {
      icon: <CoachingIcon className="h-10 w-10 text-purple-accent" />,
      title: "STRATEGY",
      description: "Our team develops a customized marketing strategy tailored to your specific needs and objectives.",
    },
    {
      icon: <CommunityIcon className="h-10 w-10 text-purple-accent" />,
      title: "IMPLEMENTATION",
      description: "We execute the strategy with precision, leveraging our expertise across various marketing channels.",
    },
    {
      icon: <AnalyticsIcon className="h-10 w-10 text-purple-accent" />,
      title: "ANALYSIS & OPTIMIZATION",
      description: "Continuous monitoring and analysis allows us to optimize campaigns for maximum ROI.",
    },
  ];

  return (
    <section id="how-it-works" className="py-12 md:py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-dark via-purple-medium/90 to-purple-dark" />

      <div className="container relative z-10">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-space-grotesk mb-4">
            HOW TO <span className="bg-purple-gradient bg-clip-text text-transparent">WORK WITH US</span>
          </h2>
          <p className="max-w-[700px] mx-auto text-lg text-white/80">
            Our proven four-step process ensures we deliver exceptional results for your business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card key={`step-${step.title}`} className="bg-purple-medium/40 border border-purple-light/20 gradient-border overflow-hidden">
              <div className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-dark">{step.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2 font-space-grotesk">{step.title}</h3>
                <p className="text-white/70">{step.description}</p>
                <div className="mt-4 flex justify-center">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-purple-accent text-purple-accent font-bold">
                    {index + 1}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClassroomIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 6H7L2 12.5 7 19h2" />
      <path d="M9 8.5c1 0 1.5.5 1.5 1.5s-.5 1.5-1.5 1.5" />
      <path d="m13 6 2 6-2 6" />
      <path d="M15 6h2l5 6.5L17 19h-2" />
    </svg>
  );
}

function CoachingIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 3h20" />
      <path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3" />
      <path d="m7 21 5-5 5 5" />
    </svg>
  );
}

function CommunityIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function AnalyticsIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 3v18h18" />
      <path d="M18 17V9" />
      <path d="M13 17V5" />
      <path d="M8 17v-3" />
    </svg>
  );
}
