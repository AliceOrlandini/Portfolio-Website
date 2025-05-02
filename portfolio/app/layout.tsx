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
  description: "Il mio Blog personale, dove condivido le mie esperienze e le mie passioni.",
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' },
      { url: '/icon1.png', sizes: '96x96', type: 'image/png' },
      { url: '/icon0.svg', type: 'image/svg+xml' },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      notranslate: false,
      noarchive: false,
    }
  },
  generator: "Next.js",
  applicationName: "Alice Orlandini",
  referrer: 'origin-when-cross-origin',
  keywords: [
    "Alice Orlandini",
    "Blog Informatica",
    "Blog",
    "Blog Lucca",
    "Informatica Capannori",
    "Ripetizioni Informatica",
  ],
  category: "website",
  openGraph: {
    title: "Alice Orlandini",
    description: "Il mio Blog personale, dove condivido le mie esperienze e le mie passioni.",
    url: "https://aliceorlandini.it/",
    siteName: "Alice Orlandini",
    // images: "https://aliceorlandini.it/images/icon.png",
    locale: "it-IT",
    type: "website",
  },
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
        <Toaster toastOptions={{ className: 'font-raleway', }}/>
      </body>
    </html>
  );
}
