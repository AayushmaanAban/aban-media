"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const getLinkHref = (section: string) => {
    return pathname === "/" ? `#${section}` : `/#${section}`;
  };

  return (
    <header className="relative z-20 w-full border-b border-purple-light/20 bg-purple-dark">
      <div className="container flex h-16 items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight text-white font-space-grotesk">
              ABAN <span className="text-purple-accent">MEDIA</span>
            </span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href={getLinkHref("services")}
            className="text-sm font-medium text-white/80 transition-colors hover:text-white"
          >
            Services
          </Link>
          <Link
            href={getLinkHref("how-it-works")}
            className="text-sm font-medium text-white/80 transition-colors hover:text-white"
          >
            How It Works
          </Link>
          <Link
            href="/case-study"
            className="text-sm font-medium text-white/80 transition-colors hover:text-white"
          >
            Case Study
          </Link>
          <Link
            href={getLinkHref("testimonials")}
            className="text-sm font-medium text-white/80 transition-colors hover:text-white"
          >
            Testimonials
          </Link>
          <Link
            href={getLinkHref("contact")}
            className="text-sm font-medium text-white/80 transition-colors hover:text-white"
          >
            Contact Us
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            className="bg-purple-gradient rounded-md px-4 py-2 text-sm font-medium text-white shadow-purple-glow hover:bg-purple-accent/80"
            asChild
          >
            <Link href={getLinkHref("contact")}>Get Started</Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm" />
          <div className="fixed inset-x-0 top-0 z-50 min-h-screen w-full transform bg-purple-dark p-6 shadow-lg animate-in slide-in-from-top">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center gap-2">
                <span className="text-xl font-bold text-white">
                  ABAN <span className="text-purple-accent">MEDIA</span>
                </span>
              </Link>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(false)}
              >
                <XIcon className="h-6 w-6" />
                <span className="sr-only">Close menu</span>
              </Button>
            </div>
            <nav className="mt-8 flex flex-col gap-6">
              <Link
                href={getLinkHref("services")}
                className="text-lg font-medium text-white/80 transition-colors hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href={getLinkHref("how-it-works")}
                className="text-lg font-medium text-white/80 transition-colors hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link
                href="/case-study"
                className="text-lg font-medium text-white/80 transition-colors hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                Case Study
              </Link>
              <Link
                href={getLinkHref("testimonials")}
                className="text-lg font-medium text-white/80 transition-colors hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                Testimonials
              </Link>
              <Link
                href={getLinkHref("contact")}
                className="text-lg font-medium text-white/80 transition-colors hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
              <Button
                className="mt-4 w-full bg-purple-gradient rounded-md px-4 py-2 text-lg font-medium text-white shadow-purple-glow"
                onClick={() => setMobileMenuOpen(false)}
                asChild
              >
                <Link href={getLinkHref("contact")}>Get Started</Link>
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function XIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
