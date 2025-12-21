'use client'

import { useEffect } from "react";
import Container from "@/components/ui/Container";
import { useLanguage } from "@/hooks/useLanguage";

export default function DisponibilidadPage() {
  const { t, language } = useLanguage();

  useEffect(() => {
    // Cargar el script del widget si no está ya cargado
    const existingScript = document.querySelector('script[src="https://www.storagefy.app/widget/widget.js"]');
    
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://www.storagefy.app/widget/widget.js';
      script.async = true;
      document.body.appendChild(script);

      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://www.storagefy.app/widget/widget.css';
      document.head.appendChild(link);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 via-white to-orange-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
              {t.widget?.title || "Disponibilidad en Tiempo Real"}
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              {t.widget?.description || "Consulta nuestros trasteros disponibles y reserva al instante."}
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-gray-600">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {t.hero?.features?.split('✓')[1]?.trim() || "Acceso 7/7"}
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {t.hero?.features?.split('✓')[2]?.trim() || "Sin permanencia"}
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {t.hero?.features?.split('✓')[3]?.trim() || "Seguro incluido"}
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* Widget Section */}
      <section className="py-10 pb-20">
        <Container>
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
            {/* Widget de Unidades Disponibles */}
            <div 
              id="storage-widget" 
              data-token="b120f3911a2c276d122df9b6e28a626ee62a1b6af7b86bdd89b8d5b07aa27edd"
              className="min-h-[600px]"
            />
          </div>
        </Container>
      </section>

      {/* Info Section */}
      <section className="py-10 pb-20 bg-gray-50">
        <Container>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">
                {language === 'es' ? 'Reserva Instantánea' : 'Instant Booking'}
              </h3>
              <p className="text-gray-600 text-sm">
                {language === 'es' 
                  ? 'Selecciona tu trastero y reserva en minutos' 
                  : 'Select your storage unit and book in minutes'}
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">
                {language === 'es' ? 'Pago Seguro' : 'Secure Payment'}
              </h3>
              <p className="text-gray-600 text-sm">
                {language === 'es' 
                  ? 'Transacciones protegidas y encriptadas' 
                  : 'Protected and encrypted transactions'}
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">
                {language === 'es' ? 'Confirmación Inmediata' : 'Instant Confirmation'}
              </h3>
              <p className="text-gray-600 text-sm">
                {language === 'es' 
                  ? 'Recibe tu confirmación por email al instante' 
                  : 'Receive your confirmation by email instantly'}
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

