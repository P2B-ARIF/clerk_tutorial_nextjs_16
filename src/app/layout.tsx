import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "@/components/Navbar";

const outfit = Outfit({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Clerk Practice Studio",
  description: "Practice-friendly UI for Clerk flows and profile pages.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${outfit.className} antialiased`}>
          <main className="container mx-auto h-screen relative">
            <div className="bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),rgba(0,0,0,0)_55%)] h-96 absolute -top-20 left-0 w-375"></div>
            <Navbar />
            <div id="clerk-captcha" />
            <div className="pt-24 h-full content-center ">{children}</div>
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
