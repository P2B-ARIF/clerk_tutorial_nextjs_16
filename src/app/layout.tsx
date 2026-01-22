import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
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
    <html lang="en">
      <body
        className={`${outfit.className} antialiased`}
      >
        <main className='container mx-auto h-screen relative'>
          <Navbar />
          <div className="pt-24 h-full content-center ">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
