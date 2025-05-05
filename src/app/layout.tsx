import type { Metadata } from "next";
import { Space_Grotesk, Bitter } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import { Toaster } from "@/components/ui/sonner";

// Space Grotesk for headings (similar to the primary font on stealmyagency.com)
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Bitter for body text (complementary font)
const bitter = Bitter({
  variable: "--font-bitter",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aban Media | Premium Marketing Services",
  description: "Aban Media provides premium marketing services tailored for businesses. Connect with us to transform your marketing strategy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${bitter.variable}`}>
      <ClientBody>
        {children}
        <Toaster />
      </ClientBody>
    </html>
  );
}
