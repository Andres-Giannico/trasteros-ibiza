import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Trasteros Ibiza - Almacenamiento Seguro desde 55€/mes | Reserva Online",
    template: "%s | Trasteros Ibiza"
  },
  description: "Alquila trasteros en Ibiza desde 55€/mes. Acceso 7/7, sin permanencia, seguridad total. Reserva online en 2 minutos. Ubicaciones en Sant Antoni y Ses Paisses.",
  keywords: [
    "trasteros ibiza",
    "almacenamiento ibiza",
    "trasteros san antonio",
    "guardamuebles ibiza",
    "almacén ibiza",
    "trasteros ses paisses",
    "alquiler trasteros ibiza",
    "trasteros baratos ibiza",
    "almacenamiento seguro ibiza",
    "trasteros 24 horas ibiza"
  ],
  authors: [{ name: "Trasteros Ibiza" }],
  creator: "Trasteros Ibiza",
  publisher: "Trasteros Ibiza",
  metadataBase: new URL("https://trasterosibiza.com"),
  alternates: {
    canonical: "/",
    languages: {
      "es": "/",
      "en": "/?lang=en"
    }
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "es_ES",
    alternateLocale: "en_US",
    url: "https://trasterosibiza.com",
    siteName: "Trasteros Ibiza",
    title: "Trasteros Ibiza - Almacenamiento Seguro desde 55€/mes",
    description: "Alquila trasteros en Ibiza desde 55€/mes. Acceso 7/7, sin permanencia, seguridad total. Reserva online en 2 minutos.",
    images: [
      {
        url: "/brand/IMG_7887.jpg",
        width: 1200,
        height: 630,
        alt: "Trasteros Ibiza - Almacenamiento seguro en Ibiza",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trasteros Ibiza - Almacenamiento Seguro desde 55€/mes",
    description: "Alquila trasteros en Ibiza desde 55€/mes. Acceso 7/7, sin permanencia, seguridad total.",
    images: ["/brand/IMG_7887.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Agregar cuando tengas Google Search Console
    // google: "tu-codigo-de-verificacion",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Trasteros Ibiza",
    "image": "https://trasterosibiza.com/brand/IMG_7887.jpg",
    "description": "Alquila trasteros en Ibiza desde 55€/mes. Acceso 7/7, sin permanencia, seguridad total. Reserva online en 2 minutos.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Carrer Rosers 7",
      "addressLocality": "Ses Paisses",
      "addressRegion": "Illes Balears",
      "postalCode": "07820",
      "addressCountry": "ES"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "38.9800",
      "longitude": "1.3000"
    },
    "url": "https://trasterosibiza.com",
    "telephone": "+34675330148",
    "email": "ibizatrasteros@gmail.com",
    "priceRange": "€€",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "06:00",
        "closes": "23:30"
      }
    ],
    "areaServed": {
      "@type": "City",
      "name": "Ibiza"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Trasteros y Almacenamiento",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Alquiler de Trasteros",
            "description": "Almacenamiento seguro con acceso 7/7, videovigilancia y alarmas"
          },
          "price": "55",
          "priceCurrency": "EUR",
          "availability": "https://schema.org/InStock"
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "200",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <html lang="es">
      <body className={`${inter.variable} antialiased`}>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
