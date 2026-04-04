import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Plano interactivo Ses Paisses - Trasteros Ibiza",
  description:
    "Plano en tiempo real de las unidades en Ses Paisses. Consulta disponibilidad sobre el mapa interactivo de Trasteros Ibiza.",
  alternates: {
    canonical: "/plano-ses-paisses",
    languages: {
      es: "/plano-ses-paisses",
      en: "/plano-ses-paisses?lang=en",
    },
  },
};

export default function PlanoSesPaissesLayout({
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
