import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Términos y Condiciones - Trasteros Ibiza",
  description: "Términos y condiciones del servicio de alquiler de trasteros. Condiciones generales, normativa española y europea aplicable.",
  alternates: {
    canonical: "/terminos",
    languages: { es: "/terminos", en: "/terminos?lang=en" },
  },
};

export default function TerminosLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
