'use client'

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import HeroVisual from "@/components/HeroVisual";
import { useLanguage } from "@/hooks/useLanguage";

export default function Hero() {
  const { t } = useLanguage();
  return (
    <section id="hero" className="relative overflow-hidden bg-hero-gradient">
      <Container className="pt-20 pb-20 sm:pt-28 sm:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="will-animate">
            <div className="inline-block rounded-full bg-white/80 px-3 py-1 text-sm font-semibold text-orange-600 border border-black/5 shadow-sm">
              {t.hero.badge}
            </div>
            <h1 className="mt-4 text-4xl sm:text-6xl font-extrabold tracking-tighter">
              {t.hero.title}{" "}
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                {t.hero.titleHighlight}
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-neutral-600">
              {t.hero.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3 items-center">
              <Button href="/disponibilidad" className="shadow-lg bg-orange-500 hover:bg-orange-600 text-white">
                <span>{t.hero.ctaPrimary}</span>
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14m-7-7 7 7-7 7" />
                </svg>
              </Button>
              <Button href="#contacto" variant="ghost" className="text-gray-700 hover:text-gray-900">
                {t.hero.ctaSecondary}
              </Button>
            </div>
            <p className="mt-4 text-xs text-neutral-500">{t.hero.features}</p>
          </div>
          <div className="hidden lg:block">
            <HeroVisual />
          </div>
        </div>
      </Container>
    </section>
  );
}


