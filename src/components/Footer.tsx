'use client'

import { useLanguage } from "@/hooks/useLanguage";
import Link from "next/link";

export default function Footer() {
  const { t, language } = useLanguage();

  return (
    <footer className="py-12 border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Trasteros Ibiza</h3>
            <p className="text-sm text-gray-600">
              {t.footer.description || "Tu espacio extra, simple y al instante."}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">{language === 'es' ? "Enlaces" : "Links"}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/#servicios" className="text-gray-600 hover:text-orange-600 transition-colors">{t.footer.links.services}</Link></li>
              <li><Link href="/#ubicaciones" className="text-gray-600 hover:text-orange-600 transition-colors">{t.footer.links.locations}</Link></li>
              <li><Link href="/#precios" className="text-gray-600 hover:text-orange-600 transition-colors">{t.footer.links.pricing}</Link></li>
              <li><Link href="/disponibilidad" className="text-gray-600 hover:text-orange-600 transition-colors">{t.header.menu.availability}</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">{t.contact.info.title}</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span>📍</span>
                <span>{t.contact.info.address}</span>
              </li>
              <li>
                <a href="tel:+34675330148" className="hover:text-orange-600 transition-colors">{t.contact.info.phone}</a>
              </li>
              <li>
                <a href="mailto:trasterosibiza@gmail.com" className="hover:text-orange-600 transition-colors">{t.contact.info.email}</a>
              </li>
              <li>{t.contact.info.hours}</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-600 hover:text-orange-600 transition-colors">{t.footer.legal.privacy}</a></li>
              <li><a href="#" className="text-gray-600 hover:text-orange-600 transition-colors">{t.footer.legal.terms}</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <p>{t.footer.copyright}</p>
          <p className="text-xs">Made with ❤️ in Ibiza by Pinchetron</p>
        </div>
      </div>
    </footer>
  );
}


