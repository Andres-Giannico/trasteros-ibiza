"use client";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { useLanguage } from "@/hooks/useLanguage";
import { useState } from "react";

export default function Contact() {
  const { t, language } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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
                <div className="space-y-3 text-neutral-600">
                  <p className="flex items-start gap-2">
                    <span className="text-xl">📍</span>
                    <span>{t.contact.info.address}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-xl">📞</span>
                    <a href="tel:+34675330148" className="hover:text-orange-500 transition-colors">{t.contact.info.phone}</a>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-xl">✉️</span>
                    <a href="mailto:ibizatrasteros@gmail.com" className="hover:text-orange-500 transition-colors">{t.contact.info.email}</a>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-xl">🕒</span>
                    <span>{t.contact.info.hours}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <form
            className="will-animate grid grid-cols-1 gap-4"
            style={{ animationDelay: "0.2s" }}
            onSubmit={handleSubmit}
          >
            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <input 
                name="name"
                className="border border-gray-200 rounded-lg p-3 pl-10 w-full 
                           focus:ring-2 focus:ring-orange-500 focus:border-transparent
                           transition-all duration-200" 
                placeholder={t.contact.form.name} 
                required 
              />
            </div>
            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <input 
                name="email"
                className="border border-gray-200 rounded-lg p-3 pl-10 w-full 
                           focus:ring-2 focus:ring-orange-500 focus:border-transparent
                           transition-all duration-200" 
                placeholder={t.contact.form.email} 
                type="email" 
                required 
              />
            </div>
            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <input 
                name="phone"
                className="border border-gray-200 rounded-lg p-3 pl-10 w-full 
                           focus:ring-2 focus:ring-orange-500 focus:border-transparent
                           transition-all duration-200" 
                placeholder={t.contact.form.phone} 
                type="tel" 
              />
            </div>
            <div className="relative">
              <div className="absolute left-3 top-4 text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <textarea 
                name="message"
                className="border border-gray-200 rounded-lg p-3 pl-10 w-full 
                           focus:ring-2 focus:ring-orange-500 focus:border-transparent
                           transition-all duration-200 resize-none" 
                placeholder={t.contact.form.message} 
                rows={5} 
                required 
              />
            </div>
            {submitStatus === 'success' && (
              <div className="p-3 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm">
                {language === 'es' ? '✓ Mensaje enviado correctamente. Te contactaremos pronto.' : '✓ Message sent successfully. We\'ll contact you soon.'}
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                {language === 'es' ? '✗ Error al enviar el mensaje. Por favor, inténtalo de nuevo.' : '✗ Error sending message. Please try again.'}
              </div>
            )}
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting 
                ? (language === 'es' ? 'Enviando...' : 'Sending...')
                : t.contact.form.submit
              }
            </Button>
        </form>
      </div>
      </Container>
    </section>
  );
}


