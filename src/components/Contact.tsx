"use client";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { useLanguage } from "@/hooks/useLanguage";

export default function Contact() {
  const { t, language } = useLanguage();

  return (
    <section id="contacto" className="py-20">
      <Container>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="will-animate">
            <SectionTitle
              title={t.contact.title}
              subtitle={t.contact.description}
            />
            <div className="mt-8 space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">{t.contact.info.title}</h3>
                <div className="space-y-2 text-neutral-600">
                  <p><strong>📍</strong> {t.contact.info.address}</p>
                  <p><strong>📞</strong> <a href="tel:+34971123456" className="hover:text-orange-500">{t.contact.info.phone}</a></p>
                  <p><strong>✉️</strong> <a href="mailto:info@trasterosibiza.com" className="hover:text-orange-500">{t.contact.info.email}</a></p>
                  <p><strong>🕒</strong> {t.contact.info.hours}</p>
                </div>
              </div>
            </div>
          </div>
          <form
            className="will-animate grid grid-cols-1 gap-4"
            style={{ animationDelay: "0.2s" }}
            onSubmit={(e) => {
              e.preventDefault();
              alert(language === 'es' ? "Gracias, te contactaremos pronto." : "Thank you, we'll contact you soon.");
            }}
          >
            <input className="border border-black/10 rounded-lg p-3 w-full" placeholder={t.contact.form.name} required />
            <input className="border border-black/10 rounded-lg p-3 w-full" placeholder={t.contact.form.email} type="email" required />
            <input className="border border-black/10 rounded-lg p-3 w-full" placeholder={t.contact.form.phone} type="tel" />
            <textarea className="border border-black/10 rounded-lg p-3 w-full" placeholder={t.contact.form.message} rows={5} required />
            <Button type="submit">{t.contact.form.submit}</Button>
          </form>
        </div>
      </Container>
    </section>
  );
}


