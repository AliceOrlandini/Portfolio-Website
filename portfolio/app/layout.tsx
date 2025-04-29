import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";
import JsonLd from "@/components/JsonLd";
import { FAQ_ITEMS } from "@/lib/constants";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Alice Orlandini",
  description: "Creazione Siti Web a Lucca, Capannori, Pisa, Altopascio per attività locali, professionisti e aziende.",
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
    "creazione siti web lucca",
    "creazione siti web capannori",
    "creazione siti web pisa",
    "creazione siti web altopascio",
    "creazione siti web professionisti",
    "creazione siti web aziende",
    "creazione siti web ecommerce",
    "creazione siti web responsive",
    "creazione siti web ottimizzati",
    "creazione siti web SEO",
    "creazione siti web veloci",
    "creazione siti web professionali",
    "creazione siti web personalizzati",
    "quanto costa un sito web",
    "sito web",
    "sito web lucca",
    "sito web capannori",
    "sito web pisa",
    "sito web altopascio",
    "sito web professionisti",
    "sito internet",
    "sito internet lucca",
    "sito internet capannori",
    "sito internet pisa",
    "sito internet altopascio",
    "sito internet professionisti",
    "sito internet aziende",
    "sito internet responsive",
  ],
  category: "website",
  openGraph: {
    title: "Alice Orlandini",
    description: "Creazione Siti Web a Lucca, Capannori, Pisa, Altopascio per attività locali, professionisti e aziende.",
    url: "https://aliceorlandini.it/",
    siteName: "Professional Studio MWS",
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
        <JsonLd data={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Alice Orlandini",
          "alternateName": "Alice Orlandini",
          "url": "https://aliceorlandini.it/",
          "email": "orlandinialice13@gmail.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Via Carlo Piaggia",
            "addressLocality": "Capannori",
            "postalCode": "55012",
            "addressCountry": "IT"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "43.849267",
            "longitude": "10.574746"
          },
          "priceRange": "€€",
          "description": "Creazione Siti Web a Lucca, Capannori, Pisa, Altopascio per attività locali, professionisti e aziende.",
          "areaServed": [
            { "@type": "Place", "name": "Lucca" },
            { "@type": "Place", "name": "Capannori" },
            { "@type": "Place", "name": "Pisa" },
            { "@type": "Place", "name": "Altopascio" },
            { "@type": "Place", "name": "Toscana" }
          ],
          "founder": {
            "@type": "Person",
            "name": "Alice Orlandini"
          },
          "serviceOffered": [
            {
              "@type": "Service",
              "name": "Creazione Siti Web",
              "description": "Creazione Siti Web a Lucca, Capannori, Pisa, Altopascio per attività locali, professionisti e aziende.",
              "serviceType": "Creazione Siti Web Vetrina"
            },
            {
              "@type": "Service",
              "name": "Creazione Siti Web Dinamici",
              "description": "Creazione Siti Web Dinamici a Lucca, Capannori, Pisa, Altopascio per attività locali, professionisti e aziende.",
              "serviceType": "Creazione Siti Web Dinamici"
            },
            {
              "@type": "Service",
              "name": "Creazione Siti Web Responsive",
              "description": "Creazione Siti Web Responsive a Lucca, Capannori, Pisa, Altopascio per attività locali, professionisti e aziende.",
              "serviceType": "Creazione Siti Web Responsive"
            }
          ],
          "hasPart": [
            {
              "@type": "WebPage",
              "name": "Prezzi Siti Web",
              "url": "https://aliceorlandini.it/prezzi"
            },
            {
              "@type": "ContactPage",
              "name": "Contatti",
              "url": "https://aliceorlandini.it/contatti"
            }
          ]
        }}/>

        <JsonLd data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": FAQ_ITEMS.map(({ question, answer }) => ({
            "@type": "Question",
            "name": question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": answer,
            }
          }))
        }} />
      </body>
    </html>
  );
}
