'use client'

import { useLayoutEffect } from "react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { useLanguage } from "@/hooks/useLanguage";

const WIDGET_SCRIPT = "https://www.storagefy.app/widget/widget.js";
const WIDGET_CSS = "https://www.storagefy.app/widget/widget.css";

export default function StorageWidget() {
  const { t } = useLanguage();

  useLayoutEffect(() => {
    document.querySelectorAll(`script[src="${WIDGET_SCRIPT}"]`).forEach((el) => el.remove());

    const script = document.createElement("script");
    script.src = WIDGET_SCRIPT;
    script.async = true;
    document.body.appendChild(script);

    if (!document.querySelector(`link[href="${WIDGET_CSS}"]`)) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = WIDGET_CSS;
      document.head.appendChild(link);
    }

    return () => {
      script.remove();
    };
  }, []);

  return (
    <section id="disponibilidad" className="py-20 bg-neutral-50">
      <Container>
        <div className="will-animate">
          <SectionTitle
            title={t.widget?.title || "Disponibilidad en Tiempo Real"}
            subtitle={t.widget?.description || "Consulta nuestros trasteros disponibles y reserva al instante."}
          />
        </div>
        
        <div className="mt-10 will-animate" style={{ animationDelay: "0.2s" }}>
          {/* Widget de Unidades Disponibles */}
          <div 
            id="storage-widget" 
            data-token="b120f3911a2c276d122df9b6e28a626ee62a1b6af7b86bdd89b8d5b07aa27edd"
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200"
          />
        </div>
      </Container>
    </section>
  );
}

