'use client'

import { useLanguage } from "@/hooks/useLanguage";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="py-8 border-t border-black/10 text-sm text-neutral-600">
      <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>{t.footer.copyright}</p>
        <div className="flex gap-4">
          <a href="#servicios" className="hover:text-black">{t.footer.links.services}</a>
          <a href="#ubicaciones" className="hover:text-black">{t.footer.links.locations}</a>
          <a href="#precios" className="hover:text-black">{t.footer.links.pricing}</a>
          <a href="#contacto" className="hover:text-black">{t.footer.links.contact}</a>
        </div>
      </div>
    </footer>
  );
}


