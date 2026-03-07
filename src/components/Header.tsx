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
          <Link href={isHome ? "#hero" : "/"} className="flex items-center gap-3">
            <Image src="/brand/logo-squirrel.png" alt={t.header.companyName} width={50} height={50} className="rounded" />
            <span className="font-bold text-xl text-gray-900">{t.header.companyName}</span>
        </Link>
          
          {/* Language Switcher */}
          <div className="hidden sm:flex items-center gap-2 mr-6" role="group" aria-label={language === 'es' ? 'Idioma' : 'Language'}>
            <button
              type="button"
              onClick={() => changeLanguage('es')}
              aria-pressed={language === 'es'}
              className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${
                language === 'es' 
                  ? 'bg-orange-500 text-white' 
                  : 'text-gray-700 hover:text-orange-500'
              }`}
            >
              ES
            </button>
            <button
              type="button"
              onClick={() => changeLanguage('en')}
              aria-pressed={language === 'en'}
              className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${
                language === 'en' 
                  ? 'bg-orange-500 text-white' 
                  : 'text-gray-700 hover:text-orange-500'
              }`}
            >
              EN
            </button>
          </div>

          <button type="button" onClick={() => setOpen(!open)} className="sm:hidden p-2 rounded-md hover:bg-black/5" aria-label={open ? (language === 'es' ? 'Cerrar menú' : 'Close menu') : (language === 'es' ? 'Abrir menú' : 'Open menu')} aria-expanded={open}>
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
            <a 
              href="https://clientes.storagefy.app/es/Tras%20IBZ/customer/login" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-orange-500 text-orange-600 bg-white text-sm font-semibold hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-200 shadow-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              {t.header.menu.clientArea}
            </a>
            <Link href="/disponibilidad" className="ml-2 px-4 py-2 rounded-lg bg-orange-500 text-white text-sm font-semibold hover:bg-orange-600 transition-colors shadow-sm">
              {t.header.cta}
            </Link>
        </nav>
        </div>
      </div>
      
      {open && (
        <div className="sm:hidden border-t border-black/10">
          <div className="mx-auto max-w-7xl px-6 py-4 flex flex-col gap-3 text-sm">
            {/* Mobile Language Switcher */}
            <div className="flex items-center gap-2 pb-3 border-b border-gray-200" role="group" aria-label={language === 'es' ? 'Idioma' : 'Language'}>
              <span className="text-sm text-gray-700">Idioma:</span>
              <button type="button" onClick={() => changeLanguage('es')} aria-pressed={language === 'es'} className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${language === 'es' ? 'bg-orange-500 text-white' : 'text-gray-700 hover:text-orange-500'}`}>ES</button>
              <button type="button" onClick={() => changeLanguage('en')} aria-pressed={language === 'en'} className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${language === 'en' ? 'bg-orange-500 text-white' : 'text-gray-700 hover:text-orange-500'}`}>EN</button>
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
            <a 
              href="https://clientes.storagefy.app/es/Tras%20IBZ/customer/login" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl border-2 border-orange-500 text-orange-600 bg-white font-semibold hover:bg-orange-500 hover:text-white transition-all duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              {t.header.menu.clientArea}
            </a>
            <Link href="/disponibilidad" onClick={() => setOpen(false)} className="mt-2 block w-full text-center px-4 py-3 rounded-lg bg-orange-500 text-white font-semibold hover:bg-orange-600">
              {t.header.cta}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}