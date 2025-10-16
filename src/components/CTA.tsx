'use client'

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { useLanguage } from "@/hooks/useLanguage";

export default function CTA() {
  const { t } = useLanguage();

  return (
    <section className="py-20">
      <Container>
        <div className="relative isolate overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-6 py-24 text-center shadow-2xl rounded-2xl sm:px-16">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {t.cta.title}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-neutral-300">
            {t.cta.description}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button href="/disponibilidad" className="bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 shadow-lg hover:shadow-xl text-white border-0">
              {t.cta.ctaPrimary}
            </Button>
            <Button href="#contacto" variant="ghost" className="text-white hover:bg-white/10 border border-white/20 hover:border-white/40">
              {t.cta.ctaSecondary} <span aria-hidden="true">→</span>
            </Button>
          </div>
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
            aria-hidden="true"
          >
            <circle cx={512} cy={512} r={512} fill="url(#8d958450-c69f-4251-94bc-4e091a323369)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="8d958450-c69f-4251-94bc-4e091a323369">
                <stop stopColor="#ff6a00" />
                <stop offset={1} stopColor="#ff9900" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </Container>
    </section>
  );
}
