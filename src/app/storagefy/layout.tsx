import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sistema Automático con Storagefy - Trasteros Ibiza",
  description: "Cómo Storagefy nos permite gestionar ambas ubicaciones de Trasteros Ibiza de forma 100% automática. Reservas, pagos, acceso 24/7 sin necesidad de estar presente en la isla.",
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
      <Header />
      {children}
      <Footer />
    </>
  );
}
