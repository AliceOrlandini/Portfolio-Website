import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";
import { SpeedInsights } from "@vercel/speed-insights/next"
import Head from "next/head";
import JsonLd from "@/components/JsonLd";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Alice Orlandini - Blog su Tecnologie, Coding e Didattica",
  description: "Nel mio blog trovi guide pratiche, esperienze reali, consigli tech e supporto per studenti: sviluppo web, coding e molto altro.",
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
    title: "Alice Orlandini - Blog su Tecnologie, Coding e Didattica",
    description: "Nel mio blog trovi guide pratiche, esperienze reali, consigli tech e supporto per studenti: sviluppo web, coding e molto altro.",
    url: "https://aliceorlandini.it/",
    siteName: "Alice Orlandini",
    images: "https://cdn.jsdelivr.net/gh/AliceOrlandini/Portfolio-Website@b3b6982/portfolio/assets/icon/icon2.png",
    locale: "it-IT",
    type: "website",
  },
  metadataBase: new URL("https://aliceorlandini.it/"),
  verification: {
    google: "EMVHO7zqss_-SQxCX9MuShIyVarE-dGxCRTLznYf9fQ"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it-IT" id="top" className="scroll-smooth">
      <Head>
        <link
          rel="preload"
          as="image"
          href="https://cdn.jsdelivr.net/gh/AliceOrlandini/Portfolio-Website@b3b6982/portfolio/assets/hero/hero-1024.png"
          imageSrcSet="https://cdn.jsdelivr.net/gh/AliceOrlandini/Portfolio-Website@b3b6982/portfolio/assets/hero/hero-480.png 480w, https://cdn.jsdelivr.net/gh/AliceOrlandini/Portfolio-Website@b3b6982/portfolio/assets/hero/hero-768.png 768w, https://cdn.jsdelivr.net/gh/AliceOrlandini/Portfolio-Website@b3b6982/portfolio/assets/hero/hero-1024.png 1024w"
          imageSizes="(max-width: 768px) 70vw, (max-width: 1024px) 33.33vw, 50vw"
        />
      </Head>
      <body
        className={`${raleway.variable} antialiased bg-background overflow-x-hidden`}
      >
        <Navbar />
        {children}
        <Footer />
        <Toaster toastOptions={{ className: 'font-raleway', }}/>
        <SpeedInsights/>
        <JsonLd data={
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Alice Orlandini",  
            "url": "https://aliceorlandini.it",  
            "jobTitle": "Blogger / Sviluppatrice",  
            "description": "Alice Orlandini è una blogger e sviluppatrice web con esperienza in HTML, CSS, JavaScript e PHP. Condivide le sue conoscenze attraverso articoli e guide pratiche.",  
            "sameAs": [
              "https://www.linkedin.com/in/aliceorlandini/",
              "https://github.com/aliceorlandini"
            ],
          }
        } />
      </body>
    </html>
  );
}
