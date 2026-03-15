import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cómo automatizar cobros recurrentes en trasteros?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Puedes automatizar cobros recurrentes usando software de gestión como Storagefy integrado con Stripe. El cliente introduce sus datos de pago una vez y el sistema cobra automáticamente en cada ciclo (mensual, trimestral, etc.). Incluye recordatorios y links de pago 24/7.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué software de facturación usar para self storage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Para self storage conviene un software que integre reservas, cobros recurrentes, control de acceso y facturación. Plataformas como Storagefy ofrecen todo en uno con Stripe para tarjeta y SEPA Direct Debit, ciclos configurables y área de cliente.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo funciona el cobro automático con Stripe en almacenamiento?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Stripe permite cobros recurrentes mediante suscripción. El operador configura el ciclo de facturación y el cliente guarda su tarjeta o domiciliación SEPA. Stripe intenta el cobro en cada ciclo y gestiona reintentos y recordatorios automáticamente.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué es la facturación recurrente SEPA para trasteros?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La facturación recurrente SEPA usa domiciliación bancaria para cobrar el alquiler automáticamente cada mes o en el ciclo acordado. El cliente autoriza el cargo una vez y el banco ejecuta los cobros posteriores sin intervención manual.",
      },
    },
  ],
};

export const metadata: Metadata = {
  title: "Sistema Automático con Storagefy - Trasteros Ibiza",
  description: "Cómo Storagefy nos permite gestionar ambas ubicaciones de Trasteros Ibiza de forma 100% automática. Reservas, cobros recurrentes, acceso 24/7 sin necesidad de estar presente en la isla.",
  alternates: {
    canonical: "/storagefy",
    languages: { es: "/storagefy", en: "/storagefy?lang=en" },
  },
};

export default function StoragefyLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        strategy="beforeInteractive"
      />
      <Header />
      {children}
      <Footer />
    </>
  );
}
