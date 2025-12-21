import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Disponibilidad y Reserva Online - Trasteros Ibiza",
  description: "Consulta la disponibilidad en tiempo real de nuestros trasteros en Ibiza. Reserva online directamente desde el widget. Precios desde 55€/mes, sin permanencia.",
  keywords: [
    "trasteros disponibles ibiza",
    "reserva trasteros ibiza",
    "disponibilidad trasteros",
    "alquilar trastero ibiza online",
    "trasteros disponibles san antonio"
  ],
  alternates: {
    canonical: "/disponibilidad",
    languages: {
      "es": "/disponibilidad",
      "en": "/disponibilidad?lang=en"
    }
  },
  openGraph: {
    title: "Disponibilidad y Reserva Online - Trasteros Ibiza",
    description: "Consulta la disponibilidad en tiempo real y reserva tu trastero online. Desde 55€/mes.",
    url: "https://trasterosibiza.com/disponibilidad",
    type: "website",
  },
};

export default function DisponibilidadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

