'use client'

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import IconCheck from "@/components/icons/IconCheck";
import { useLanguage } from "@/hooks/useLanguage";

export default function Pricing() {
  const { t } = useLanguage();

  return (
    <section id="precios" className="py-20 bg-neutral-50">
      <Container>
        <div className="will-animate" style={{ animationDelay: "0.2s" }}>
        <SectionTitle title={t.pricing.title} subtitle={t.pricing.description} />
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 max-w-2xl mx-auto">
          {t.pricing.plans.map((plan, i) => (
            <div
              key={plan.name}
              className="will-animate group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2 relative overflow-hidden"
              style={{ animationDelay: `${0.4 + i * 0.2}s` }}
            >
              <div className="text-xs tracking-wide uppercase text-neutral-500">{plan.name}</div>
              <p className="mt-4 text-4xl font-extrabold">
                {plan.price}
                <span className="text-sm font-normal text-neutral-600">{plan.period}</span>
              </p>
              <ul className="mt-4 text-sm text-neutral-700 space-y-3">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <IconCheck className="w-4 h-4 text-orange-500"/> {feature}
                  </li>
                ))}
              </ul>
              <Button href="/disponibilidad" className="mt-6 w-full transition-all duration-300 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-lg hover:shadow-xl text-white">
                {t.pricing.cta}
              </Button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}


