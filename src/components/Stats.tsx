'use client'

import Container from "@/components/ui/Container";
import { useLanguage } from "@/hooks/useLanguage";

export default function Stats() {
  const { t } = useLanguage();

  const items = [
    { label: t.stats.clients, value: "1.200+" },
    { label: t.stats.spaces, value: "8.000 m²" },
    { label: t.stats.years, value: "5+" },
    { label: t.stats.satisfaction, value: "4.9/5" },
  ];
  return (
    <section className="py-14">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white rounded-2xl border border-black/10 p-6 shadow-sm">
          {items.map((it) => (
            <div key={it.label} className="text-center">
              <div className="text-2xl font-extrabold tracking-tight">{it.value}</div>
              <div className="mt-1 text-xs text-neutral-600">{it.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}


