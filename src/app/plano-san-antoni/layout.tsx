import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Plano interactivo Sant Antoni - Trasteros Ibiza",
  description:
    "Plano en tiempo real de las unidades en Sant Antoni de Portmany. Consulta disponibilidad sobre el mapa interactivo de Trasteros Ibiza.",
  alternates: {
    canonical: "/plano-san-antoni",
    languages: {
      es: "/plano-san-antoni",
      en: "/plano-san-antoni?lang=en",
    },
  },
};

export default function PlanoSanAntoniLayout({
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
