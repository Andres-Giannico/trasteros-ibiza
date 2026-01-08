'use client'

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { useLanguage } from "@/hooks/useLanguage";

export default function ClientArea() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenido */}
          <div className="will-animate">
            <div className="inline-block rounded-full bg-orange-100 px-4 py-1 text-sm font-semibold text-orange-700 border border-orange-200 mb-4">
              {t.clientArea.badge}
            </div>
            <SectionTitle
              title={t.clientArea.title}
              subtitle={t.clientArea.description}
            />
            
            {/* Características destacadas */}
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{t.clientArea.features.doorControl.title}</h3>
                  <p className="text-gray-600 text-sm">{t.clientArea.features.doorControl.description}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{t.clientArea.features.invoices.title}</h3>
                  <p className="text-gray-600 text-sm">{t.clientArea.features.invoices.description}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{t.clientArea.features.secure.title}</h3>
                  <p className="text-gray-600 text-sm">{t.clientArea.features.secure.description}</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <Button 
                href="https://clientes.storagefy.app/" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-lg hover:shadow-xl text-white border-0"
              >
                {t.clientArea.cta}
              </Button>
            </div>
          </div>

          {/* Visual - Mockup de móvil o ilustración */}
          <div className="order-2 lg:order-1 will-animate" style={{ animationDelay: "0.2s" }}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-orange-50 to-orange-100 p-8">
              <div className="bg-white rounded-xl shadow-lg p-6">
                {/* Mockup de móvil con área de cliente */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 pb-4 border-b border-gray-200">
                    <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <div>
                      <div className="h-3 w-24 bg-gray-200 rounded"></div>
                      <div className="h-2 w-16 bg-gray-100 rounded mt-1"></div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                      <span className="text-white font-semibold text-sm">Abrir Puerta</span>
                    </div>
                    <div className="h-8 bg-gray-100 rounded"></div>
                    <div className="h-8 bg-gray-100 rounded"></div>
                    <div className="h-8 bg-gray-100 rounded w-3/4"></div>
                  </div>
                </div>
              </div>
              
              {/* Decoración */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-orange-200/30 rounded-full blur-2xl"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-orange-300/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

