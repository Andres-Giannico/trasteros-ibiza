'use client'

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { useLanguage } from "@/hooks/useLanguage";

export default function FAQs() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-neutral-50">
      <Container>
        <SectionTitle title={t.faqs.title} subtitle={t.faqs.description} />
        <div className="mt-8 grid md:grid-cols-2 gap-4">
          {t.faqs.items.map((faq, index) => (
            <details key={index} className="group rounded-xl border border-black/10 bg-white p-5 open:shadow-md transition">
              <summary className="cursor-pointer list-none font-medium flex items-center justify-between">
                {faq.question}
                <span className="ml-4 text-neutral-500 group-open:rotate-45 transition">+</span>
              </summary>
              <p className="mt-2 text-neutral-600 text-sm">{faq.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}


