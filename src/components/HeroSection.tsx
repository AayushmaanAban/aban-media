"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="bg-teal-40 relative py-12 md:py-24 lg:py-32 overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-purple-dark">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 h-[500px] w-full bg-gradient-to-br from-purple-accent/20 via-purple-medium/10 to-transparent"></div>
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col items-center gap-4 text-center">
          {/* Star rating display */}
          <div className="flex items-center gap-1 text-amber-400">
            {Array(5).fill(0).map((_, i) => (
              <StarIcon key={i} className="h-5 w-5 fill-current" />
            ))}
            <span className="ml-2 text-sm text-white">Trusted by 100+ Clients</span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white font-space-grotesk max-w-3xl">
            TRANSFORM YOUR MARKETING WITH{" "}
            <span className="bg-purple-gradient bg-clip-text text-transparent">
              ABAN MEDIA
            </span>
          </h1>

          {/* Subheading */}
          <p className="max-w-[700px] text-lg text-white/80 md:text-xl">
            We help businesses grow with powerful, results-driven marketing strategies.
            Leverage our expertise to reach your target audience and drive conversions.
          </p>

          {/* CTA Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <Button
              className="bg-purple-gradient rounded-md px-8 py-6 text-lg font-medium text-white shadow-purple-glow hover:opacity-90"
              asChild
            >
              <Link href="#contact">GET STARTED TODAY</Link>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-8 flex items-center gap-2 text-sm text-white/70">
            <CheckIcon className="h-4 w-4 text-purple-accent" />
            <span>Free Consultation</span>
            <CheckIcon className="ml-4 h-4 w-4 text-purple-accent" />
            <span>Results Guaranteed</span>
            <CheckIcon className="ml-4 h-4 w-4 text-purple-accent" />
            <span>Expert Team</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function StarIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
