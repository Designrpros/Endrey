import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script"; // 🚀 Import the Next.js script optimization loader
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Endrey // Studio 51",
  description: "A minimal, brutalist web portal documenting the music catalog, verse concepts, and backstory of artist Endrey (Studio 51 Records).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-white">
        {children}

        {/* 📊 Google Analytics Tracking Core Script Container */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ZKEHWC468B"
          strategy="afterInteractive"
        />
        
        {/* Initialization code wrapper */}
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-ZKEHWC468B');
          `}
        </Script>
      </body>
    </html>
  );
}