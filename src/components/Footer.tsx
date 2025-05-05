"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  const pathname = usePathname();

  const getLinkHref = (section: string) => {
    return pathname === "/" ? `#${section}` : `/#${section}`;
  };

  return (
    <footer className="bg-purple-dark border-t border-purple-light/20 py-12 relative">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />

      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold tracking-tight text-white font-space-grotesk">
                ABAN <span className="text-purple-accent">MEDIA</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-white/70">
              Premium marketing services to help your business grow and achieve its goals.
            </p>
            <div className="mt-6 flex space-x-4">
              <Link
                href="#"
                className="rounded-full p-2 text-white/70 hover:bg-purple-accent/20 hover:text-white"
              >
                <InstagramIcon className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="rounded-full p-2 text-white/70 hover:bg-purple-accent/20 hover:text-white"
              >
                <TwitterIcon className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="rounded-full p-2 text-white/70 hover:bg-purple-accent/20 hover:text-white"
              >
                <LinkedInIcon className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white font-space-grotesk">Company</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link
                    href={getLinkHref("about")}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href={getLinkHref("careers")}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/case-study"
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link
                    href={getLinkHref("blog")}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white font-space-grotesk">Services</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link
                    href={getLinkHref("services")}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    Social Media
                  </Link>
                </li>
                <li>
                  <Link
                    href={getLinkHref("services")}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    PPC Advertising
                  </Link>
                </li>
                <li>
                  <Link
                    href={getLinkHref("services")}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    SEO
                  </Link>
                </li>
                <li>
                  <Link
                    href={getLinkHref("services")}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    Content Marketing
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white font-space-grotesk">Contact</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link
                    href="mailto:info@abanmedia.com"
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    info@abanmedia.com
                  </Link>
                </li>
                <li>
                  <Link
                    href="tel:+919876543210"
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    +91 987-654-3210
                  </Link>
                </li>
                <li>
                  <span className="text-sm text-white/70">
                    Mumbai, India
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-purple-light/20" />

        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-white/70">
            © {new Date().getFullYear()} Aban Media. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <Link
              href={getLinkHref("privacy")}
              className="text-xs text-white/70 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href={getLinkHref("terms")}
              className="text-xs text-white/70 hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
