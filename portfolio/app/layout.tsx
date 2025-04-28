import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Alice Orlandini",
  description: "Creazione Siti Web a Lucca, Capannori, Pisa, Altopascio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it-IT">
      <body
        className={`${raleway.variable} antialiased bg-background overflow-x-hidden`}
      >
        <Navbar />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
