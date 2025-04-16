"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastInjection } from "@/lib/toast";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/app/components/navbar";
import "./globals.css";

const queryClient = new QueryClient();

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <QueryClientProvider client={queryClient}>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <main className="mx-auto max-w-screen-lg h-screen flex flex-col">
            <Navbar />
            <div className="flex-grow">{children}</div>
            <ToastInjection />
          </main>
        </body>
      </html>
    </QueryClientProvider>
  );
}
