'use client'

import Container from '@/components/ui/Container';
import { useLanguage } from '@/hooks/useLanguage';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function StoragefyPage() {
  const { t } = useLanguage();

  return (
    <div id="main-content" className="min-h-screen bg-white text-gray-900">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-orange-50 via-white to-orange-50">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block rounded-full bg-orange-100 px-4 py-1 text-sm font-semibold text-orange-700 border border-orange-200 mb-4">
              {t.storagefy.badge}
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
              {t.storagefy.title}
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {t.storagefy.subtitle}
            </p>
            <p className="text-base text-gray-600 font-medium max-w-2xl mx-auto">
              {t.storagefy.hook}
            </p>
          </div>
        </Container>
      </section>

      {/* Content */}
      <section className="py-16">
        <Container>
          <div className="max-w-3xl mx-auto space-y-12">
            {/* Qué es Storagefy */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {t.storagefy.whatIs.title}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t.storagefy.whatIs.description}
              </p>
              <p className="text-gray-700 leading-relaxed">
                <a
                  href="https://storagefy.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-600 hover:text-orange-700 font-semibold underline underline-offset-2"
                >
                  Storagefy
                </a>
                {t.storagefy.whatIs.conclusion}
              </p>
            </div>

            {/* Automatización total */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {t.storagefy.automation.title}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                {t.storagefy.automation.description}
              </p>
              <ul className="space-y-3">
                {t.storagefy.automation.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center mt-0.5">
                      <svg className="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cómo funciona facturación recurrente */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {t.storagefy.billingSteps.title}
              </h2>
              <p className="text-gray-700 mb-6">{t.storagefy.billingSteps.subtitle}</p>
              <ol className="space-y-6">
                {t.storagefy.billingSteps.steps.map((step, i) => (
                  <li key={i}>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {i + 1}. {step.title}
                    </h3>
                    <p className="text-gray-700 text-sm">{step.description}</p>
                  </li>
                ))}
              </ol>
            </div>

            {/* Errores facturación manual */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {t.storagefy.manualMistakes.title}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                {t.storagefy.manualMistakes.description}
              </p>
              <ul className="space-y-3">
                {t.storagefy.manualMistakes.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-0.5 text-red-600 font-bold text-sm">
                      ×
                    </span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mini case study */}
            <div className="rounded-xl bg-orange-50 border border-orange-100 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                {t.storagefy.caseStudy.title}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t.storagefy.caseStudy.content}
              </p>
            </div>

            {/* Gestión remota */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {t.storagefy.remote.title}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t.storagefy.remote.description}
              </p>
            </div>

            {/* Beneficios para el cliente */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {t.storagefy.benefits.title}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                {t.storagefy.benefits.description}
              </p>
              <ul className="space-y-3">
                {t.storagefy.benefits.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center mt-0.5">
                      <svg className="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* FAQ */}
            <div className="border-t border-gray-200 pt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {t.storagefy.faq.title}
              </h2>
              <dl className="space-y-6">
                {t.storagefy.faq.items.map((item, i) => (
                  <div key={i} className="border-b border-gray-100 pb-6 last:border-0">
                    <dt className="font-semibold text-gray-900 mb-2">{item.question}</dt>
                    <dd className="text-gray-700 text-sm leading-relaxed">{item.answer}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* CTA */}
            <div className="pt-8 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                <div>
                  <p className="text-gray-700 font-medium mb-2">
                    {t.storagefy.cta.text}
                  </p>
                  <a
                    href="https://storagefy.co"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-600 hover:text-orange-700 font-semibold inline-flex items-center gap-1"
                  >
                    storagefy.co
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
                <Button
                  href="/disponibilidad"
                  className="bg-orange-500 hover:bg-orange-600 text-white"
                >
                  {t.storagefy.cta.button}
                </Button>
              </div>
            </div>

            <p className="pt-6">
              <Link href="/" className="text-orange-600 hover:text-orange-700 font-medium">
                {t.storagefy.backLink}
              </Link>
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}
