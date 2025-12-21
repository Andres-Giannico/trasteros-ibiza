'use client'

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/hooks/useLanguage";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';
  const { language, changeLanguage, t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 border-b border-black/10">
      <div className="glass">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <Link href="#hero" className="flex items-center gap-3">
            <Image src="/brand/logo-squirrel.png" alt={t.header.companyName} width={50} height={50} className="rounded" />
            <span className="font-bold text-xl text-gray-900">{t.header.companyName}</span>
        </Link>
          
          {/* Language Switcher */}
          <div className="hidden sm:flex items-center gap-2 mr-6">
            <button
              onClick={() => changeLanguage('es')}
              className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${
                language === 'es' 
                  ? 'bg-orange-500 text-white' 
                  : 'text-gray-600 hover:text-orange-500'
              }`}
            >
              ES
            </button>
            <button
              onClick={() => changeLanguage('en')}
              className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${
                language === 'en' 
                  ? 'bg-orange-500 text-white' 
                  : 'text-gray-600 hover:text-orange-500'
              }`}
            >
              EN
            </button>
          </div>

          <button onClick={() => setOpen(!open)} className="sm:hidden p-2 rounded-md hover:bg-black/5" aria-label="Abrir menú">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          
        <nav className="hidden sm:flex items-center gap-6 text-sm">
            {isHome ? (
              <>
                <a href="#servicios" className="hover:text-black text-neutral-700">{t.header.menu.services}</a>
                <a href="#ubicaciones" className="hover:text-black text-neutral-700">{t.header.menu.locations}</a>
                <a href="#precios" className="hover:text-black text-neutral-700">{t.header.menu.pricing}</a>
              </>
            ) : (
              <>
                <Link href="/#servicios" className="hover:text-black text-neutral-700">{t.header.menu.services}</Link>
                <Link href="/#ubicaciones" className="hover:text-black text-neutral-700">{t.header.menu.locations}</Link>
                <Link href="/#precios" className="hover:text-black text-neutral-700">{t.header.menu.pricing}</Link>
              </>
            )}
            <Link href="/disponibilidad" className="hover:text-black text-neutral-700 font-medium text-orange-600">{t.header.menu.availability}</Link>
            <Link href="/#contacto" className="hover:text-black text-neutral-700">{t.header.menu.contact}</Link>
        </nav>
        </div>
      </div>
      
      {open && (
        <div className="sm:hidden border-t border-black/10">
          <div className="mx-auto max-w-7xl px-6 py-4 flex flex-col gap-3 text-sm">
            {/* Mobile Language Switcher */}
            <div className="flex items-center gap-2 pb-3 border-b border-gray-200">
              <span className="text-sm text-gray-600">Idioma:</span>
              <button
                onClick={() => changeLanguage('es')}
                className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${
                  language === 'es' 
                    ? 'bg-orange-500 text-white' 
                    : 'text-gray-600 hover:text-orange-500'
                }`}
              >
                ES
              </button>
              <button
                onClick={() => changeLanguage('en')}
                className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${
                  language === 'en' 
                    ? 'bg-orange-500 text-white' 
                    : 'text-gray-600 hover:text-orange-500'
                }`}
              >
                EN
              </button>
            </div>
            
            {isHome ? (
              <>
                <a href="#servicios" onClick={() => setOpen(false)} className="hover:text-black text-neutral-700">{t.header.menu.services}</a>
                <a href="#ubicaciones" onClick={() => setOpen(false)} className="hover:text-black text-neutral-700">{t.header.menu.locations}</a>
                <a href="#precios" onClick={() => setOpen(false)} className="hover:text-black text-neutral-700">{t.header.menu.pricing}</a>
              </>
            ) : (
              <>
                <Link href="/#servicios" onClick={() => setOpen(false)} className="hover:text-black text-neutral-700">{t.header.menu.services}</Link>
                <Link href="/#ubicaciones" onClick={() => setOpen(false)} className="hover:text-black text-neutral-700">{t.header.menu.locations}</Link>
                <Link href="/#precios" onClick={() => setOpen(false)} className="hover:text-black text-neutral-700">{t.header.menu.pricing}</Link>
              </>
            )}
            <Link href="/disponibilidad" onClick={() => setOpen(false)} className="hover:text-black text-neutral-700 font-medium text-orange-600">{t.header.menu.availability}</Link>
            {isHome ? (
              <a href="#contacto" onClick={() => setOpen(false)} className="hover:text-black text-neutral-700">{t.header.menu.contact}</a>
            ) : (
              <Link href="/#contacto" onClick={() => setOpen(false)} className="hover:text-black text-neutral-700">{t.header.menu.contact}</Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}