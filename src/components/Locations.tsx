'use client'

import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { useLanguage } from "@/hooks/useLanguage";

export default function Locations() {
  const { t } = useLanguage();

  return (
    <section id="ubicaciones" className="py-20">
      <Container>
        <SectionTitle title={t.locations.title} subtitle={t.locations.description} />
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.locations.items.map((location, index) => (
            <div key={index} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <h3 className="font-semibold text-lg text-gray-900">{location.name}</h3>
              <p className="mt-2 text-gray-700 text-sm">{location.address}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {location.features.map((feature, i) => (
                  <span key={i} className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded-full font-medium">
                    {feature}
                  </span>
                ))}
              </div>
              {location.links && location.links.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm border-t border-gray-100 pt-4">
                  {location.links.map((link, li) => (
                    <Link
                      key={li}
                      href={link.href}
                      className="font-semibold text-orange-600 hover:text-orange-700 underline underline-offset-2"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}


