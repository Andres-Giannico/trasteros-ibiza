import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Política de Privacidad - Trasteros Ibiza",
  description: "Política de privacidad y protección de datos. RGPD y LOPDGDD. Tratamiento de datos personales en Trasteros Ibiza.",
  alternates: {
    canonical: "/privacidad",
    languages: { es: "/privacidad", en: "/privacidad?lang=en" },
  },
};

export default function PrivacidadLayout({
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
