'use client'

import Container from "@/components/ui/Container";
import Image from "next/image";
import { useLanguage } from "@/hooks/useLanguage";

export default function PersonalizedService() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 via-white to-orange-50">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Imagen */}
          <div className="order-2 lg:order-1 will-animate">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/imagen/stefano.png"
                alt={t.personalizedService.imageAlt}
                width={600}
                height={800}
                className="w-full h-auto object-cover"
                priority
              />
              {/* Overlay sutil */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
            </div>
          </div>

          {/* Contenido */}
          <div className="order-1 lg:order-2 will-animate">
            <div className="inline-block rounded-full bg-orange-100 px-4 py-1 text-sm font-semibold text-orange-700 border border-orange-200 mb-4">
              {t.personalizedService.badge}
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 mb-4">
              {t.personalizedService.title}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {t.personalizedService.description}
            </p>
            
            {/* Características destacadas */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{t.personalizedService.features.personal.title}</h3>
                  <p className="text-gray-600 text-sm">{t.personalizedService.features.personal.description}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{t.personalizedService.features.empathy.title}</h3>
                  <p className="text-gray-600 text-sm">{t.personalizedService.features.empathy.description}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{t.personalizedService.features.dedicated.title}</h3>
                  <p className="text-gray-600 text-sm">{t.personalizedService.features.dedicated.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

