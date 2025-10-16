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
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.pricing.plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`will-animate group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2 relative overflow-hidden ${
                i === 1 ? "scale-[1.05] ring-2 ring-brand-500 shadow-xl" : ""
              }`}
              style={{ animationDelay: `${0.4 + i * 0.2}s` }}
            >
              {/* Popular badge for featured plan */}
              {i === 1 && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-brand-500 to-brand-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    {t.pricing.popular}
                  </span>
                </div>
              )}
              
              {/* Gradient overlay for featured plan */}
              {i === 1 && (
                <div className="absolute inset-0 bg-gradient-to-br from-brand-50/80 to-transparent opacity-60"></div>
              )}
              <div className="text-xs tracking-wide uppercase text-neutral-500">{plan.name}</div>
              <p className="mt-4 text-4xl font-extrabold">
                {plan.price}
                <span className="text-sm font-normal text-neutral-600">{plan.period}</span>
              </p>
              <ul className="mt-4 text-sm text-neutral-700 space-y-3">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <IconCheck className="w-4 h-4 text-[--color-brand]"/> {feature}
                  </li>
                ))}
              </ul>
              <Button href="#contacto" className={`mt-6 w-full transition-all duration-300 ${
                i === 1 ? "bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 shadow-lg hover:shadow-xl" : ""
              }`}>
                {i === 1 ? `${t.pricing.cta} ${plan.name}` : t.pricing.cta}
              </Button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}


