'use client'

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Icon247 from "@/components/icons/Icon247";
import IconSecurity from "@/components/icons/IconSecurity";
import IconFlexibility from "@/components/icons/IconFlexibility";
import { useLanguage } from "@/hooks/useLanguage";

export default function Services() {
  const { t } = useLanguage();

  const features = t.services.items.map((item, index) => ({
    title: item.title,
    desc: item.description,
    icon: [Icon247, IconSecurity, IconFlexibility, IconFlexibility, Icon247, IconSecurity][index],
  }));
  return (
    <section id="servicios" className="py-20 bg-neutral-50">
      <Container>
        <div className="will-animate">
          <SectionTitle title={t.services.title} subtitle={t.services.description} />
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="will-animate group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-brand-300/50 relative overflow-hidden"
              style={{ animationDelay: `${0.2 + i * 0.1}s` }}
            >
              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-brand-100 to-brand-200 text-brand-600 flex items-center justify-center group-hover:from-brand-200 group-hover:to-brand-300 transition-all duration-300">
                <f.icon className="w-6 h-6" />
              </div>
              <h3 className="mt-4 font-bold text-lg text-gray-900 group-hover:text-brand-700 transition-colors duration-300">{f.title}</h3>
              <p className="mt-2 text-gray-600 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}


