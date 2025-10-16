'use client'

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import IconOnline from "@/components/icons/IconOnline";
import IconTransparent from "@/components/icons/IconTransparent";
import IconSupport from "@/components/icons/IconSupport";
import { useLanguage } from "@/hooks/useLanguage";

export default function WhyUs() {
  const { t } = useLanguage();

  const bullets = t.whyUs.items.map((item, index) => ({
    title: item.title,
    desc: item.description,
    icon: [IconOnline, IconTransparent, IconSupport][index],
  }));
  return (
    <section className="py-20">
      <Container>
        <div className="will-animate">
        <SectionTitle
          title={t.whyUs.title}
          subtitle={t.whyUs.description}
        />
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {bullets.map((b, i) => (
            <div 
              key={b.title} 
              className={`will-animate group rounded-2xl border border-gray-200 p-6 bg-white shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:border-brand-300/50 relative overflow-hidden ${
                i === 0 ? 'animate-slide-in-left' : i === 1 ? 'animate-scale-in' : 'animate-slide-in-right'
              }`}
              style={{ animationDelay: `${0.3 + i * 0.2}s` }}
            >
              {/* Top accent border with drawing animation */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-400 to-brand-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              
              {/* Floating particles effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-4 right-4 w-2 h-2 bg-brand-400 rounded-full animate-pulse"></div>
                <div className="absolute bottom-6 left-6 w-1 h-1 bg-brand-300 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute top-1/2 right-2 w-1.5 h-1.5 bg-brand-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
              
              <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-brand-500 to-brand-600 text-white flex items-center justify-center shadow-lg group-hover:shadow-brand-500/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative z-10">
                <b.icon className="w-7 h-7 group-hover:animate-pulse" />
              </div>
              
              <h3 className="mt-5 font-bold text-xl text-gray-900 group-hover:text-brand-700 transition-all duration-300 group-hover:translate-x-1">{b.title}</h3>
              <p className="mt-3 text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{b.desc}</p>
              
              {/* Subtle background glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}


