export type Language = 'es' | 'en';

export interface Translations {
  // Header
  header: {
    companyName: string;
    menu: {
      services: string;
      locations: string;
      pricing: string;
      availability: string;
      contact: string;
    };
    cta: string;
  };
  
  // Hero
  hero: {
    badge: string;
    title: string;
    titleHighlight: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
    features: string;
  };
  
  // Stats
  stats: {
    clients: string;
    spaces: string;
    years: string;
    satisfaction: string;
  };
  
  // Why Us
  whyUs: {
    title: string;
    description: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  
  // Services
  services: {
    title: string;
    description: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  
  // Locations
  locations: {
    title: string;
    description: string;
    items: Array<{
      name: string;
      address: string;
      features: string[];
    }>;
  };
  
  // Pricing
  pricing: {
    title: string;
    description: string;
    plans: Array<{
      name: string;
      price: string;
      period: string;
      features: string[];
    }>;
    cta: string;
    popular: string;
  };
  
  // FAQs
  faqs: {
    title: string;
    description: string;
    items: Array<{
      question: string;
      answer: string;
    }>;
  };
  
  // Widget
  widget: {
    title: string;
    description: string;
  };
  
  // CTA
  cta: {
    title: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  
  // Contact
  contact: {
    title: string;
    description: string;
    form: {
      name: string;
      email: string;
      phone: string;
      message: string;
      submit: string;
    };
    info: {
      title: string;
      address: string;
      phone: string;
      email: string;
      hours: string;
    };
  };
  
  // Footer
  footer: {
    description: string;
    links: {
      services: string;
      locations: string;
      pricing: string;
      contact: string;
    };
    legal: {
      privacy: string;
      terms: string;
    };
    copyright: string;
  };
}

export const translations: Record<Language, Translations> = {
  es: {
    header: {
      companyName: "Trasteros Ibiza",
      menu: {
        services: "Servicios",
        locations: "Ubicaciones",
        pricing: "Precios",
        availability: "Disponibilidad",
        contact: "Contacto",
      },
      cta: "Reservar ahora",
    },
    hero: {
      badge: "Alquiler de Trasteros en Ibiza",
      title: "Tu espacio extra,",
      titleHighlight: "simple y al instante.",
      description: "Libera espacio en tu vida con nuestros trasteros modernos. Contrata online en minutos de forma segura y flexible.",
      ctaPrimary: "Ver planes y precios",
      ctaSecondary: "Hablar con un experto",
      features: "✓ Sin permanencia ✓ Acceso 24/7 ✓ Seguro incluido",
    },
    stats: {
      clients: "Clientes satisfechos",
      spaces: "Espacios disponibles",
      years: "Años de experiencia",
      satisfaction: "Satisfacción garantizada",
    },
    whyUs: {
      title: "¿Por qué elegirnos?",
      description: "Somos la opción más confiable para el almacenamiento en Ibiza",
      items: [
        {
          title: "Reserva 100% online",
          description: "Sin papeleos, sin esperas. Reserva tu trastero en minutos desde cualquier dispositivo.",
        },
        {
          title: "Precios transparentes",
          description: "Sin sorpresas ni costes ocultos. Todo incluido en el precio final que ves.",
        },
        {
          title: "Soporte personalizado",
          description: "Atención al cliente en español e inglés. Estamos aquí para ayudarte siempre.",
        },
      ],
    },
    services: {
      title: "Nuestros servicios",
      description: "Todo lo que necesitas para un almacenamiento perfecto",
      items: [
        {
          title: "Acceso 24/7",
          description: "Accede a tu trastero cuando quieras, sin horarios ni restricciones.",
        },
        {
          title: "Seguridad total",
          description: "Videovigilancia, alarmas y control de acceso. Tu espacio está 100% protegido.",
        },
        {
          title: "Contratos flexibles",
          description: "Alquila desde 1 mes hasta el tiempo que necesites. Sin compromisos.",
        },
      ],
    },
    locations: {
      title: "Nuestras ubicaciones",
      description: "Encuentra el trastero perfecto cerca de ti",
      items: [
        {
          name: "Ibiza Centro",
          address: "Calle Vara de Rey, 15",
          features: ["Fácil acceso", "Parking gratuito", "Carga y descarga"],
        },
        {
          name: "San Antonio",
          address: "Avenida Doctor Fleming, 8",
          features: ["Cerca del puerto", "Acceso directo", "Horario extendido"],
        },
        {
          name: "Santa Eulalia",
          address: "Calle Sant Jaume, 22",
          features: ["Zona tranquila", "Gran capacidad", "Climatizado"],
        },
      ],
    },
    pricing: {
      title: "Precios y planes",
      description: "Elige el plan que mejor se adapte a tus necesidades",
      plans: [
        {
          name: "Básico",
          price: "49€",
          period: "/mes",
          features: ["Acceso 24/7", "Seguridad y videovigilancia", "Contratos flexibles"],
        },
        {
          name: "Estándar",
          price: "79€",
          period: "/mes",
          features: ["Acceso 24/7", "Seguridad y videovigilancia", "Contratos flexibles"],
        },
        {
          name: "Premium",
          price: "119€",
          period: "/mes",
          features: ["Acceso 24/7", "Seguridad y videovigilancia", "Contratos flexibles"],
        },
      ],
      cta: "Elegir",
      popular: "Más Popular",
    },
    widget: {
      title: "Disponibilidad en Tiempo Real",
      description: "Consulta nuestros trasteros disponibles y reserva al instante.",
    },
    
    faqs: {
      title: "Preguntas frecuentes",
      description: "Resolvemos tus dudas más comunes",
      items: [
        {
          question: "¿Cómo puedo reservar un trastero?",
          answer: "Es muy sencillo. Solo tienes que elegir el plan que más te convenga, completar el formulario de contacto y nos pondremos en contacto contigo en menos de 24 horas.",
        },
        {
          question: "¿Qué incluye el precio?",
          answer: "El precio incluye el alquiler del espacio, acceso 24/7, sistema de seguridad, videovigilancia y mantenimiento. No hay costes ocultos.",
        },
        {
          question: "¿Puedo acceder a mi trastero en cualquier momento?",
          answer: "Sí, nuestros trasteros están disponibles las 24 horas del día, los 7 días de la semana. Tienes acceso completo con tu llave personal.",
        },
        {
          question: "¿Qué pasa si necesito cancelar mi contrato?",
          answer: "Nuestros contratos son flexibles. Puedes cancelar con un preaviso de 30 días sin penalizaciones.",
        },
      ],
    },
    cta: {
      title: "¿Listo para liberar espacio?",
      description: "Encuentra el trastero perfecto para ti. Contratación 100% online, rápida y sin sorpresas.",
      ctaPrimary: "Ver planes",
      ctaSecondary: "Contactar",
    },
    contact: {
      title: "Contacta con nosotros",
      description: "Estamos aquí para ayudarte. Envíanos un mensaje y te responderemos lo antes posible.",
      form: {
        name: "Nombre completo",
        email: "Email",
        phone: "Teléfono",
        message: "Mensaje",
        submit: "Enviar mensaje",
      },
      info: {
        title: "Información de contacto",
        address: "Calle Vara de Rey, 15, Ibiza",
        phone: "+34 971 123 456",
        email: "info@trasterosibiza.com",
        hours: "Lunes a Viernes: 9:00 - 18:00",
      },
    },
    footer: {
      description: "Tu espacio extra, simple y al instante. Trasteros modernos y seguros en Ibiza.",
      links: {
        services: "Servicios",
        locations: "Ubicaciones",
        pricing: "Precios",
        contact: "Contacto",
      },
      legal: {
        privacy: "Política de privacidad",
        terms: "Términos y condiciones",
      },
      copyright: "© 2024 Trasteros Ibiza. Todos los derechos reservados.",
    },
  },
  en: {
    header: {
      companyName: "Trasteros Ibiza",
      menu: {
        services: "Services",
        locations: "Locations",
        pricing: "Pricing",
        availability: "Availability",
        contact: "Contact",
      },
      cta: "Book now",
    },
    hero: {
      badge: "Storage Rental in Ibiza",
      title: "Your extra space,",
      titleHighlight: "simple and instant.",
      description: "Free up space in your life with our modern storage units. Book online in minutes safely and flexibly.",
      ctaPrimary: "View plans and pricing",
      ctaSecondary: "Talk to an expert",
      features: "✓ No commitment ✓ 24/7 access ✓ Insurance included",
    },
    stats: {
      clients: "Satisfied customers",
      spaces: "Available spaces",
      years: "Years of experience",
      satisfaction: "Guaranteed satisfaction",
    },
    whyUs: {
      title: "Why choose us?",
      description: "We are the most reliable option for storage in Ibiza",
      items: [
        {
          title: "100% online booking",
          description: "No paperwork, no waiting. Book your storage unit in minutes from any device.",
        },
        {
          title: "Transparent pricing",
          description: "No surprises or hidden costs. Everything included in the final price you see.",
        },
        {
          title: "Personalized support",
          description: "Customer service in Spanish and English. We're here to help you always.",
        },
      ],
    },
    services: {
      title: "Our services",
      description: "Everything you need for perfect storage",
      items: [
        {
          title: "24/7 access",
          description: "Access your storage unit whenever you want, no schedules or restrictions.",
        },
        {
          title: "Total security",
          description: "Video surveillance, alarms and access control. Your space is 100% protected.",
        },
        {
          title: "Flexible contracts",
          description: "Rent from 1 month to as long as you need. No commitments.",
        },
      ],
    },
    locations: {
      title: "Our locations",
      description: "Find the perfect storage unit near you",
      items: [
        {
          name: "Ibiza Center",
          address: "Calle Vara de Rey, 15",
          features: ["Easy access", "Free parking", "Loading and unloading"],
        },
        {
          name: "San Antonio",
          address: "Avenida Doctor Fleming, 8",
          features: ["Near the port", "Direct access", "Extended hours"],
        },
        {
          name: "Santa Eulalia",
          address: "Calle Sant Jaume, 22",
          features: ["Quiet area", "Large capacity", "Air conditioned"],
        },
      ],
    },
    pricing: {
      title: "Pricing and plans",
      description: "Choose the plan that best fits your needs",
      plans: [
        {
          name: "Basic",
          price: "49€",
          period: "/month",
          features: ["24/7 access", "Security and video surveillance", "Flexible contracts"],
        },
        {
          name: "Standard",
          price: "79€",
          period: "/month",
          features: ["24/7 access", "Security and video surveillance", "Flexible contracts"],
        },
        {
          name: "Premium",
          price: "119€",
          period: "/month",
          features: ["24/7 access", "Security and video surveillance", "Flexible contracts"],
        },
      ],
      cta: "Choose",
      popular: "Most Popular",
    },
    widget: {
      title: "Real-Time Availability",
      description: "Check our available storage units and book instantly.",
    },
    
    faqs: {
      title: "Frequently asked questions",
      description: "We answer your most common questions",
      items: [
        {
          question: "How can I book a storage unit?",
          answer: "It's very simple. Just choose the plan that suits you best, complete the contact form and we'll get back to you in less than 24 hours.",
        },
        {
          question: "What does the price include?",
          answer: "The price includes space rental, 24/7 access, security system, video surveillance and maintenance. There are no hidden costs.",
        },
        {
          question: "Can I access my storage unit at any time?",
          answer: "Yes, our storage units are available 24 hours a day, 7 days a week. You have full access with your personal key.",
        },
        {
          question: "What happens if I need to cancel my contract?",
          answer: "Our contracts are flexible. You can cancel with 30 days notice without penalties.",
        },
      ],
    },
    cta: {
      title: "Ready to free up space?",
      description: "Find the perfect storage unit for you. 100% online contracting, fast and without surprises.",
      ctaPrimary: "View plans",
      ctaSecondary: "Contact",
    },
    contact: {
      title: "Contact us",
      description: "We're here to help you. Send us a message and we'll get back to you as soon as possible.",
      form: {
        name: "Full name",
        email: "Email",
        phone: "Phone",
        message: "Message",
        submit: "Send message",
      },
      info: {
        title: "Contact information",
        address: "Calle Vara de Rey, 15, Ibiza",
        phone: "+34 971 123 456",
        email: "info@trasterosibiza.com",
        hours: "Monday to Friday: 9:00 - 18:00",
      },
    },
    footer: {
      description: "Your extra space, simple and instant. Modern and secure storage units in Ibiza.",
      links: {
        services: "Services",
        locations: "Locations",
        pricing: "Pricing",
        contact: "Contact",
      },
      legal: {
        privacy: "Privacy policy",
        terms: "Terms and conditions",
      },
      copyright: "© 2024 Trasteros Ibiza. All rights reserved.",
    },
  },
};
