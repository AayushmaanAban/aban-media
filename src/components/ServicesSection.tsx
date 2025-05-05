"use client";

import { Card } from "@/components/ui/card";
import Link from "next/link";

export function ServicesSection() {
  const services = [
    {
      title: "Social Media Management",
      description: "Comprehensive social media strategy, content creation, and management to grow your online presence and engage with your audience.",
      icon: <SocialIcon className="h-10 w-10 text-purple-accent" />,
      link: "#contact",
    },
    {
      title: "PPC Advertising",
      description: "Strategic pay-per-click campaigns on platforms like Google, Facebook, and Instagram to drive targeted traffic and conversions.",
      icon: <AdIcon className="h-10 w-10 text-purple-accent" />,
      link: "#contact",
    },
    {
      title: "SEO Optimization",
      description: "Improve your search engine rankings with our data-driven SEO strategies to increase visibility and organic traffic.",
      icon: <SearchIcon className="h-10 w-10 text-purple-accent" />,
      link: "#contact",
    },
    {
      title: "Content Marketing",
      description: "Create valuable, relevant content that attracts and engages your target audience, establishing you as an industry authority.",
      icon: <ContentIcon className="h-10 w-10 text-purple-accent" />,
      link: "#contact",
    },
    {
      title: "Email Marketing",
      description: "Develop effective email campaigns that nurture leads, drive conversions, and strengthen customer relationships.",
      icon: <EmailIcon className="h-10 w-10 text-purple-accent" />,
      link: "#contact",
    },
    {
      title: "Analytics & Reporting",
      description: "Gain insights into your marketing performance with detailed analytics and reporting to optimize your strategies.",
      icon: <AnalyticsIcon className="h-10 w-10 text-purple-accent" />,
      link: "#contact",
    },
  ];

  return (
    <section id="services" className="py-12 md:py-24 relative">
      <div className="absolute inset-0 bg-purple-dark">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
      </div>

      <div className="container relative z-10">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-space-grotesk mb-4">
            PROFITABLE <span className="bg-purple-gradient bg-clip-text text-transparent">MARKETING SKILLS</span>
          </h2>
          <p className="max-w-[700px] mx-auto text-lg text-white/80">
            Our comprehensive marketing services help businesses of all sizes achieve their goals and drive growth.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={`service-${index}`} className="bg-purple-medium/40 border border-purple-light/20 transition-all hover:shadow-purple-glow gradient-border overflow-hidden">
              <div className="p-6">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2 font-space-grotesk">{service.title}</h3>
                <p className="text-white/70 mb-4">{service.description}</p>
                <div className="flex items-center">
                  <Link
                    href={service.link}
                    className="inline-flex items-center text-purple-accent hover:text-white transition-colors"
                  >
                    Learn More
                    <ArrowIcon className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArrowIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function SocialIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M18 16.36v-2.36a4 4 0 0 0-4-4v0" />
      <path d="M18 9v.5" />
      <circle cx="17" cy="19" r="2" />
      <circle cx="9" cy="13" r="2" />
      <path d="M10 9a1 1 0 0 0-1-1" />
      <path d="M3 15a1 1 0 0 0 1 1h4" />
      <circle cx="5" cy="19" r="2" />
    </svg>
  );
}

function AdIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="m7 13 4-4 10 10" />
      <path d="M7 9h4" />
      <path d="M11 7V3" />
    </svg>
  );
}

function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function ContentIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <line x1="10" y1="9" x2="8" y2="9" />
    </svg>
  );
}

function EmailIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
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
