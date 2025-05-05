"use client";

import { Card } from "@/components/ui/card";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Alex P.",
      position: "Digital Marketing Specialist",
      content: "Aban Media has transformed our marketing strategy completely. Their expertise in digital marketing and analytics helped us increase our conversion rates by 45% in just three months.",
    },
    {
      name: "Sarah L.",
      position: "E-commerce Manager",
      content: "From struggling to reach our target audience to seeing a 65% growth in engagement - Aban Media's social media management services have been a game-changer for our online store.",
    },
    {
      name: "Michael T.",
      position: "Startup Founder",
      content: "I'm going to easily clear $100,000 in revenue this quarter, no questions asked! Their marketing strategy and implementation have been perfect for our growth stage.",
    },
    {
      name: "Priya K.",
      position: "Marketing Director",
      content: "One of the best marketing agencies I have ever worked with. Their team is responsive, creative, and most importantly, they deliver results that impact our bottom line.",
    },
  ];

  return (
    <section id="testimonials" className="py-12 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-purple-dark">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-purple-accent/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-purple-accent/20 blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-space-grotesk mb-4">
            HEAR ABOUT OUR <span className="bg-purple-gradient bg-clip-text text-transparent">SUCCESS</span>
          </h2>
          <p className="max-w-[700px] mx-auto text-lg text-white/80">
            Discover what our clients say about working with Aban Media and the results we've delivered for their businesses.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <Card
              key={`testimonial-${testimonial.name}`}
              className="bg-purple-medium/40 border border-purple-light/20 gradient-border overflow-hidden hover:shadow-purple-glow transition-all"
            >
              <div className="p-6">
                <div className="flex items-center gap-1 mb-4 text-amber-400">
                  {Array(5).fill(0).map((_, i) => (
                    <StarIcon key={`star-${testimonial.name}-${i}`} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-white mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="ml-3">
                    <p className="text-sm font-medium text-white">{testimonial.name}</p>
                    <p className="text-xs text-white/70">{testimonial.position}</p>
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
