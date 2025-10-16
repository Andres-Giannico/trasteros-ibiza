import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Disponibilidad - Trasteros Ibiza",
  description: "Consulta la disponibilidad en tiempo real de nuestros trasteros y reserva al instante.",
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

