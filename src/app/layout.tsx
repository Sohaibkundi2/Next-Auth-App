import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast"; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NextAuthApp",
  description: "Secure authentication app built with Next.js 13+ and TypeScript.",
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    title: "nextauthapp",
    description: "Secure auth system using Next.js 13+, TypeScript, MongoDB, and more.",
    siteName: "nextauthapp",
    type: "website",
  }  
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <Toaster position="top-right" reverseOrder={false} /> 
      </body>
    </html>
  );
}
