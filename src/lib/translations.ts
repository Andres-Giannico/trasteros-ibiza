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
      clientArea: string;
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
    viewOnMap: string;
    googleMapsUrl: string;
    items: Array<{
      name: string;
      address: string;
      features: string[];
      links?: Array<{ label: string; href: string }>;
    }>;
  };
  
  // Trust Badges
  trustBadges: {
    secure: string;
    noCommitment: string;
    instantBooking: string;
    guaranteed: string;
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
    floorPlanLink: string;
    floorPlanLinkSanAntoni: string;
  };
  
  // CTA
  cta: {
    title: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  
  // Testimonials
  testimonials: {
    title: string;
    description: string;
    items: Array<{
      text: string;
      author: string;
      role?: string;
      date: string;
    }>;
  };
  
  // Personalized Service
  personalizedService: {
    badge: string;
    title: string;
    description: string;
    imageAlt: string;
    features: {
      personal: {
        title: string;
        description: string;
      };
      empathy: {
        title: string;
        description: string;
      };
      dedicated: {
        title: string;
        description: string;
      };
    };
  };
  
  // Client Area
  clientArea: {
    badge: string;
    title: string;
    description: string;
    cta: string;
    features: {
      doorControl: {
        title: string;
        description: string;
      };
      invoices: {
        title: string;
        description: string;
      };
      secure: {
        title: string;
        description: string;
      };
    };
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
      privacyNotice: string;
    };
    info: {
      title: string;
      address: string;
      phone: string;
      email: string;
      hours: string;
    };
  };
  
  // Storagefy page
  storagefy: {
    badge: string;
    title: string;
    subtitle: string;
    hook: string;
    whatIs: {
      title: string;
      description: string;
      conclusion: string;
    };
    automation: {
      title: string;
      description: string;
      items: string[];
    };
    billingSteps: {
      title: string;
      subtitle: string;
      steps: Array<{ title: string; description: string }>;
    };
    manualMistakes: {
      title: string;
      description: string;
      items: string[];
    };
    caseStudy: {
      title: string;
      content: string;
    };
    remote: {
      title: string;
      description: string;
    };
    benefits: {
      title: string;
      description: string;
      items: string[];
    };
    faq: {
      title: string;
      items: Array<{ question: string; answer: string }>;
    };
    cta: {
      text: string;
      button: string;
    };
    backLink: string;
  };

  // Floor plan Ses Paisses page
  floorPlanSesPaisses: {
    title: string;
    description: string;
    backToAvailability: string;
  };

  // Floor plan Sant Antoni page
  floorPlanSanAntoni: {
    title: string;
    description: string;
    backToAvailability: string;
  };
  
  // Footer
    footer: {
      description: string;
      links: {
        services: string;
        locations: string;
        pricing: string;
        contact: string;
        storagefy: string;
        floorPlanSesPaisses: string;
        floorPlanSanAntoni: string;
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
        clientArea: "Área Cliente",
      },
      cta: "Reservar ahora",
    },
    hero: {
      badge: "Alquiler de Trasteros en Ibiza",
      title: "Tu espacio extra,",
      titleHighlight: "simple y al instante.",
      description: "Almacenamiento seguro en Ibiza desde 55€/mes. Reserva online en 2 minutos y accede 7 días a la semana. Sin permanencia, sin sorpresas.",
      ctaPrimary: "Ver disponibilidad",
      ctaSecondary: "Hablar con un experto",
      features: "✓ Sin permanencia ✓ Acceso 7/7 (06:00-23:30) ✓ Seguro incluido ✓ IVA incluido",
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
          title: "Acceso 7/7",
          description: "Accede a tu trastero los 7 días de la semana de 06:00 a 23:30, sin restricciones.",
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
      viewOnMap: "Ver en Google Maps",
      googleMapsUrl: "https://maps.app.goo.gl/bwSDeYOryJMNlzZ3P?_imcp=1",
      items: [
        {
          name: "Sant Antoni de Portmany",
          address: "Calle Menendes Pidal 28, Sant Antoni de Portmany 07820",
          features: ["Carga descarga", "Dentro del Pueblo de San Antonio", "Acceso 7/7 (06:00-23:30)", "Alarma", "Camaras de Seguridad"],
          links: [
            { label: "Ver plano interactivo", href: "/plano-san-antoni" },
            { label: "Ver disponibilidad", href: "/disponibilidad" },
          ],
        },
        {
          name: "Ses Paisses",
          address: "Carrer Rosers 7, Ses Paisses 07820",
          features: ["Carga descarga", "A las afueras del Pueblo de San Antonio", "Acceso 7/7 (06:00-23:30)", "Alarma", "Camaras de Seguridad"],
          links: [
            { label: "Ver plano interactivo", href: "/plano-ses-paisses" },
            { label: "Ver disponibilidad", href: "/disponibilidad" },
          ],
        },
      ],
    },
    pricing: {
      title: "Precios",
      description: "Precios según el tamaño del trastero que necesites",
      plans: [
        {
          name: "Según tamaños",
          price: "Desde 55€",
          period: "/mes",
          features: ["Acceso 7/7 (06:00-23:30)", "Seguridad y videovigilancia", "Alarma", "Carga y descarga", "Contratos flexibles", "IVA incluido"],
        },
      ],
      cta: "Ver disponibilidad",
      popular: "",
    },
    widget: {
      title: "Disponibilidad en Tiempo Real",
      description: "Consulta nuestros trasteros disponibles según tamaño y reserva online directamente desde el widget. Disponibilidad actualizada en tiempo real.",
      floorPlanLink: "Ver plano interactivo (Ses Paisses)",
      floorPlanLinkSanAntoni: "Ver plano interactivo (Sant Antoni)",
    },
    
    faqs: {
      title: "Preguntas frecuentes",
      description: "Resolvemos tus dudas más comunes",
      items: [
        {
          question: "¿Cómo puedo reservar un trastero?",
          answer: "Es muy sencillo. Visita nuestra sección de disponibilidad donde encontrarás un widget interactivo con disponibilidad en tiempo real. Puedes ver los trasteros disponibles según tamaño y reservar online directamente desde el widget.",
        },
        {
          question: "¿Qué incluye el precio?",
          answer: "El precio incluye el alquiler del espacio, acceso 7/7 de 06:00 a 23:30, sistema de seguridad, videovigilancia, mantenimiento e IVA. No hay costes ocultos.",
        },
        {
          question: "¿Puedo acceder a mi trastero en cualquier momento?",
          answer: "Sí, nuestros trasteros están disponibles los 7 días de la semana de 06:00 a 23:30. Tienes acceso completo con tu llave personal durante este horario.",
        },
        {
          question: "¿Qué pasa si necesito cancelar mi contrato?",
          answer: "Nuestros contratos son flexibles. Puedes cancelar con un preaviso de 7 días sin penalizaciones.",
        },
        {
          question: "¿Qué tamaño de trastero necesito?",
          answer: "Ofrecemos trasteros de diferentes tamaños. En nuestra sección de disponibilidad puedes ver todos los tamaños disponibles en tiempo real y elegir el que mejor se adapte a tus necesidades.",
        },
        {
          question: "¿Puedo cambiar de tamaño después?",
          answer: "Sí, nuestros contratos son flexibles. Si necesitas más o menos espacio, puedes cambiar de tamaño sin preaviso. Hacemos el balance sobre el mes en curso.",
        },
        {
          question: "¿Qué no puedo almacenar?",
          answer: "No se pueden almacenar materiales peligrosos, inflamables, perecederos, animales vivos o cualquier objeto ilegal. Si tienes dudas, contáctanos antes de reservar.",
        },
      ],
    },
    cta: {
      title: "¿Listo para liberar espacio?",
      description: "Encuentra el trastero perfecto para ti. Contratación 100% online, rápida y sin sorpresas.",
      ctaPrimary: "Ver disponibilidad",
      ctaSecondary: "Contactar",
    },
    personalizedService: {
      badge: "Atención Personalizada",
      title: "Empatía Real",
      description: "Somos un grupo de amigos. No somos una gran corporación, por eso cada cliente es importante para nosotros. Te conocemos por tu nombre, entendemos tus necesidades y estamos aquí para ayudarte de verdad.",
      imageAlt: "Stefano - Fundador de Trasteros Ibiza",
      features: {
        personal: {
          title: "Trato Personal",
          description: "Conocemos a cada cliente y sus necesidades específicas. No eres un número, eres parte de nuestro grupo.",
        },
        empathy: {
          title: "Empatía Real",
          description: "Entendemos lo que significa necesitar espacio extra. Estamos aquí para hacerte la vida más fácil, no más complicada.",
        },
        dedicated: {
          title: "Atención Dedicada",
          description: "Como grupo de amigos, podemos dedicarte el tiempo que necesites. Tu satisfacción es nuestra prioridad.",
        },
      },
    },
    clientArea: {
      badge: "Tecnología Avanzada",
      title: "Área de Cliente Digital",
      description: "Gestiona tu trastero desde cualquier dispositivo. Abre la puerta desde tu móvil, consulta facturas, realiza pagos y mucho más, todo desde tu área de cliente personal.",
      cta: "Acceder al Área de Cliente",
      features: {
        doorControl: {
          title: "Control de Puertas Remoto",
          description: "Abre la puerta de tu trastero directamente desde tu móvil. Acceso digital durante el horario establecido (normalmente 06:00 a 22:00). Sin necesidad de llaves físicas.",
        },
        invoices: {
          title: "Gestión de Facturas y Pagos",
          description: "Consulta y descarga tus facturas al instante. Realiza seguimiento de tus pagos en tiempo real y accede a tu historial completo de transacciones.",
        },
        secure: {
          title: "Seguridad y Control",
          description: "Acceso autenticado y registrado. El sistema valida automáticamente el horario antes de permitir abrir la puerta. Máxima seguridad en cada acceso.",
        },
      },
    },
    testimonials: {
      title: "Lo que dicen nuestros clientes",
      description: "Experiencias reales de personas que confían en nosotros",
      items: [
        {
          text: "Trato ágil y gente de confianza. Siempre que termina la temporada es agradable saber que puedes dejar las cosas durante el invierno. Recomendado !!!!",
          author: "Boby Lauren",
          role: "Local Guide · 15 reseñas",
          date: "Hace 3 años",
        },
        {
          text: "Sin humedad, cámaras, alarma, seguridad perfecta y muy bien de precio. Gracias",
          author: "Alex Romero",
          role: "6 reseñas · 3 fotos",
          date: "Hace 3 años",
        },
        {
          text: "Tuve que cambiarme de piso y mientras buscaba casa dejé ahí la mayoría de mis cosas. Cuando fui a recogerlas todo estaba en buen estado, tal y como lo dejé. Los trasteros estaban limpios, mucho más que algunas de las casas que visité. También estaban bien de precio, así que les dejo mis cinco estrellas.",
          author: "Adrián Giménez",
          role: "6 reseñas",
          date: "Hace 7 años",
        },
        {
          text: "Really good service. My furniture and boxes of ornaments were well looked after through the winter.",
          author: "Paul",
          role: "Local Guide · 16 reseñas · 4 fotos",
          date: "Hace 2 años",
        },
      ],
    },
    trustBadges: {
      secure: "Pago seguro",
      noCommitment: "Sin permanencia",
      instantBooking: "Reserva online",
      guaranteed: "Satisfacción garantizada",
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
        privacyNotice: "Al enviar aceptas nuestra",
      },
      info: {
        title: "Información de contacto",
        address: "Carrer Rosers 7, Ses Paisses",
        phone: "+34 675 330 148",
        email: "info@trasteros-ibiza.com",
        hours: "Lunes a Domingo: 06:00 - 23:30",
      },
    },
    storagefy: {
      badge: "Sistema Automático",
      title: "Cómo automatizamos todo con Storagefy",
      subtitle: "Gestionamos nuestras dos ubicaciones en Ibiza de forma 100% automática. Sin necesidad de estar presentes en la isla. Reservas, pagos, acceso y facturación — todo desde el sistema.",
      hook: "La morosidad en trasteros suele superar el 30% cuando los cobros son manuales. Con facturación recurrente automatizada, nosotros la redujimos a menos del 10%. Así lo logramos.",
      whatIs: {
        title: "¿Qué es Storagefy?",
        description: "Storagefy es un software SaaS de gestión para operadores de self storage y parkings. Permite automatizar cobros recurrentes con Stripe (tarjeta o SEPA Direct Debit), configurar ciclos de facturación mensuales, quincenales, trimestrales o semestrales, y centralizar reservas, control de acceso y facturación en un solo sistema. En Trasteros Ibiza lo usamos desde el primer día.",
        conclusion: " nos permite operar de forma profesional y escalable, ofreciendo a nuestros clientes la mejor experiencia posible.",
      },
      automation: {
        title: "Automatización total del flujo operativo",
        description: "Todo el flujo está automatizado. Desde que un cliente reserva hasta que accede a su trastero:",
        items: [
          "Reserva online en tiempo real con disponibilidad actualizada al instante",
          "Cobro recurrente automático vía tarjeta o SEPA — sin gestiones manuales",
          "Acceso 24/7 mediante app: el cliente abre la puerta desde su móvil",
          "Facturación automática y área de cliente para consultar documentos",
          "Gestión unificada de ambas ubicaciones (Sant Antoni y Ses Paisses) desde una sola plataforma",
        ],
      },
      billingSteps: {
        title: "Cómo funciona la facturación recurrente en la práctica",
        subtitle: "Así opera el cobro automático en nuestro día a día:",
        steps: [
          { title: "Configuración del ciclo de cobro", description: "Definimos el ciclo (mensual, trimestral, etc.) y el método de pago. El cliente introduce sus datos una vez." },
          { title: "Cobro automático en fecha", description: "El sistema intenta el cobro en la fecha programada. Si falla, envía recordatorios automáticos." },
          { title: "Factura y acceso sin fricción", description: "El cliente recibe la factura por email y mantiene acceso a su trastero. Sin papeleos ni llamadas." },
        ],
      },
      manualMistakes: {
        title: "Errores habituales con facturación manual en trasteros",
        description: "Muchos operadores de almacenamiento cometen estos fallos cuando cobran a mano:",
        items: [
          "Enviar recordatorios tarde o de forma inconsistente, lo que aumenta la morosidad",
          "No tener links de pago 24/7 — el cliente quiere pagar pero no puede fuera del horario de oficina",
          "Perder tiempo con Excel y hojas de cálculo que se desactualizan y generan errores",
          "No integrar cobros con el control de acceso — pagos atrasados sin bloqueo automático",
        ],
      },
      caseStudy: {
        title: "Impacto operativo real",
        content: "En Trasteros Ibiza pasamos de gestionar todo manualmente a un sistema automatizado con Storagefy. La ocupación subió del 52% al 82% en 5 meses gracias al widget de reservas 24/7. La morosidad bajó del 35% al 8% con recordatorios automáticos y cobros recurrentes. Ahorramos unas 15 horas semanales en tareas administrativas.",
      },
      remote: {
        title: "Gestión remota — sin estar en la isla",
        description: "Gracias a Storagefy, podemos gestionar Trasteros Ibiza desde cualquier lugar. No necesitamos estar físicamente en la isla para que todo funcione: las reservas se procesan solas, los cobros recurrentes se ejecutan automáticamente y los clientes acceden con su móvil. Esto nos permite ofrecer un servicio fiable y profesional durante todo el año.",
      },
      benefits: {
        title: "Beneficios para el cliente",
        description: "La automatización no es solo para nosotros. Nuestros clientes disfrutan de:",
        items: [
          "Reserva en 2 minutos, sin papeleos ni esperas",
          "Acceso con el móvil — sin llaves físicas que perder",
          "Facturas y pagos siempre disponibles en el área de cliente",
          "Transparencia total: precios claros, sin sorpresas",
        ],
      },
      faq: {
        title: "Preguntas frecuentes sobre automatización de trasteros",
        items: [
          { question: "¿Cómo automatizar cobros recurrentes en trasteros?", answer: "Puedes automatizar cobros recurrentes usando software de gestión como Storagefy integrado con Stripe. El cliente introduce sus datos de pago una vez y el sistema cobra automáticamente en cada ciclo (mensual, trimestral, etc.). Incluye recordatorios y links de pago 24/7." },
          { question: "¿Qué software de facturación usar para self storage?", answer: "Para self storage conviene un software que integre reservas, cobros recurrentes, control de acceso y facturación. Plataformas como Storagefy ofrecen todo en uno con Stripe para tarjeta y SEPA Direct Debit, ciclos configurables y área de cliente." },
          { question: "¿Cómo funciona el cobro automático con Stripe en almacenamiento?", answer: "Stripe permite cobros recurrentes mediante suscripción. El operador configura el ciclo de facturación y el cliente guarda su tarjeta o domiciliación SEPA. Stripe intenta el cobro en cada ciclo y gestiona reintentos y recordatorios automáticamente." },
          { question: "¿Qué es la facturación recurrente SEPA para trasteros?", answer: "La facturación recurrente SEPA usa domiciliación bancaria para cobrar el alquiler automáticamente cada mes o en el ciclo acordado. El cliente autoriza el cargo una vez y el banco ejecuta los cobros posteriores sin intervención manual." },
        ],
      },
      cta: {
        text: "Conoce más sobre la plataforma que usamos:",
        button: "Ver disponibilidad",
      },
      backLink: "← Volver al inicio",
    },
    floorPlanSesPaisses: {
      title: "Plano interactivo — Ses Paisses",
      description: "Consulta la disposición de las unidades en tiempo real. Haz clic en cada espacio para ver disponibilidad y detalles.",
      backToAvailability: "← Ver disponibilidad y reservar",
    },
    floorPlanSanAntoni: {
      title: "Plano interactivo — Sant Antoni",
      description: "Consulta la disposición de las unidades en tiempo real. Haz clic en cada espacio para ver disponibilidad y detalles.",
      backToAvailability: "← Ver disponibilidad y reservar",
    },
    footer: {
      description: "Tu espacio extra, simple y al instante. Trasteros modernos y seguros en Ibiza.",
      links: {
        services: "Servicios",
        locations: "Ubicaciones",
        pricing: "Precios",
        contact: "Contacto",
        storagefy: "Sistema automático",
        floorPlanSesPaisses: "Plano Ses Paisses",
        floorPlanSanAntoni: "Plano Sant Antoni",
      },
      legal: {
        privacy: "Política de privacidad",
        terms: "Términos y condiciones",
      },
      copyright: "© 2025 Trasteros Ibiza. Todos los derechos reservados.",
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
        clientArea: "Client Area",
      },
      cta: "Book now",
    },
    hero: {
      badge: "Storage Rental in Ibiza",
      title: "Your extra space,",
      titleHighlight: "simple and instant.",
      description: "Secure storage in Ibiza from 55€/month. Book online in 2 minutes and access 7 days a week. No commitment, no surprises.",
      ctaPrimary: "Check availability",
      ctaSecondary: "Talk to an expert",
      features: "✓ No commitment ✓ 7/7 access (06:00-23:30) ✓ Insurance included ✓ VAT included",
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
          title: "7/7 access",
          description: "Access your storage unit 7 days a week from 06:00 to 23:30, no restrictions.",
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
      viewOnMap: "View on Google Maps",
      googleMapsUrl: "https://maps.app.goo.gl/bwSDeYOryJMNlzZ3P?_imcp=1",
      items: [
        {
          name: "Sant Antoni de Portmany",
          address: "Calle Menendes Pidal 28, Sant Antoni de Portmany 07820",
          features: ["Loading and unloading", "Inside San Antonio Town", "7/7 Access (06:00-23:30)", "Alarm", "Security Cameras"],
          links: [
            { label: "Interactive floor plan", href: "/plano-san-antoni" },
            { label: "Check availability", href: "/disponibilidad" },
          ],
        },
        {
          name: "Ses Paisses",
          address: "Carrer Rosers 7, Ses Paisses 07820",
          features: ["Loading and unloading", "Outside San Antonio Town", "7/7 Access (06:00-23:30)", "Alarm", "Security Cameras"],
          links: [
            { label: "Interactive floor plan", href: "/plano-ses-paisses" },
            { label: "Check availability", href: "/disponibilidad" },
          ],
        },
      ],
    },
    pricing: {
      title: "Pricing",
      description: "Prices according to the size of storage unit you need",
      plans: [
        {
          name: "By size",
          price: "From 55€",
          period: "/month",
          features: ["7/7 Access (06:00-23:30)", "Security and video surveillance", "Alarm", "Loading and unloading", "Flexible contracts", "VAT included"],
        },
      ],
      cta: "Check availability",
      popular: "",
    },
    widget: {
      title: "Real-Time Availability",
      description: "Check our available storage units by size and book online directly from the widget. Real-time updated availability.",
      floorPlanLink: "Interactive floor plan (Ses Paisses)",
      floorPlanLinkSanAntoni: "Interactive floor plan (Sant Antoni)",
    },
    
    faqs: {
      title: "Frequently asked questions",
      description: "We answer your most common questions",
      items: [
        {
          question: "How can I book a storage unit?",
          answer: "It's very simple. Visit our availability section where you'll find an interactive widget with real-time availability. You can see available storage units by size and book online directly from the widget.",
        },
        {
          question: "What does the price include?",
          answer: "The price includes space rental, 7/7 access from 06:00 to 23:30, security system, video surveillance, maintenance and VAT. There are no hidden costs.",
        },
        {
          question: "Can I access my storage unit at any time?",
          answer: "Yes, our storage units are available 7 days a week from 06:00 to 23:30. You have full access with your personal key during these hours.",
        },
        {
          question: "What happens if I need to cancel my contract?",
          answer: "Our contracts are flexible. You can cancel with 7 days notice without penalties.",
        },
        {
          question: "What size storage unit do I need?",
          answer: "We offer storage units of different sizes. In our availability section you can see all available sizes in real time and choose the one that best suits your needs.",
        },
        {
          question: "Can I change size later?",
          answer: "Yes, our contracts are flexible. If you need more or less space, you can change size without notice. We balance on the current month.",
        },
        {
          question: "What can't I store?",
          answer: "You cannot store dangerous materials, flammable items, perishables, live animals or any illegal objects. If you have doubts, contact us before booking.",
        },
      ],
    },
    cta: {
      title: "Ready to free up space?",
      description: "Find the perfect storage unit for you. 100% online contracting, fast and without surprises.",
      ctaPrimary: "Check availability",
      ctaSecondary: "Contact",
    },
    personalizedService: {
      badge: "Personalized Service",
      title: "Real Empathy",
      description: "We are a group of friends. We're not a big corporation, which is why every client matters to us. We know you by name, understand your needs, and we're here to truly help you.",
      imageAlt: "Stefano - Founder of Trasteros Ibiza",
      features: {
        personal: {
          title: "Personal Touch",
          description: "We know each client and their specific needs. You're not a number, you're part of our group.",
        },
        empathy: {
          title: "Real Empathy",
          description: "We understand what it means to need extra space. We're here to make your life easier, not more complicated.",
        },
        dedicated: {
          title: "Dedicated Attention",
          description: "As a group of friends, we can give you the time you need. Your satisfaction is our priority.",
        },
      },
    },
    clientArea: {
      badge: "Advanced Technology",
      title: "Digital Customer Portal",
      description: "Manage your storage unit from any device. Open the door from your mobile, check invoices, make payments and much more, all from your personal customer area.",
      cta: "Access Customer Portal",
      features: {
        doorControl: {
          title: "Remote Door Control",
          description: "Open your storage unit door directly from your mobile. Digital access during established hours (normally 06:00 to 22:00). No need for physical keys.",
        },
        invoices: {
          title: "Invoice and Payment Management",
          description: "Check and download your invoices instantly. Track your payments in real time and access your complete transaction history.",
        },
        secure: {
          title: "Security and Control",
          description: "Authenticated and logged access. The system automatically validates the schedule before allowing the door to open. Maximum security on every access.",
        },
      },
    },
    testimonials: {
      title: "What our clients say",
      description: "Real experiences from people who trust us",
      items: [
        {
          text: "Agile treatment and trustworthy people. Whenever the season ends, it's nice to know you can leave things during the winter. Recommended !!!!",
          author: "Boby Lauren",
          role: "Local Guide · 15 reviews",
          date: "3 years ago",
        },
        {
          text: "No humidity, cameras, alarm, perfect security and very well priced. Thanks",
          author: "Alex Romero",
          role: "6 reviews · 3 photos",
          date: "3 years ago",
        },
        {
          text: "I had to move apartments and while looking for a house, I left most of my things there. When I went to pick them up, everything was in good condition, just as I left it. The storage units were clean, much more so than some of the houses I visited. They were also well-priced, so I'm giving them my five stars.",
          author: "Adrián Giménez",
          role: "6 reviews",
          date: "7 years ago",
        },
        {
          text: "Really good service. My furniture and boxes of ornaments were well looked after through the winter.",
          author: "Paul",
          role: "Local Guide · 16 reviews · 4 photos",
          date: "2 years ago",
        },
      ],
    },
    trustBadges: {
      secure: "Secure payment",
      noCommitment: "No commitment",
      instantBooking: "Online booking",
      guaranteed: "Guaranteed satisfaction",
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
        privacyNotice: "By submitting you accept our",
      },
      info: {
        title: "Contact information",
        address: "Carrer Rosers 7, Ses Paisses",
        phone: "+34 675 330 148",
        email: "info@trasteros-ibiza.com",
        hours: "Monday to Sunday: 06:00 - 23:30",
      },
    },
    storagefy: {
      badge: "Automatic System",
      title: "How we automate everything with Storagefy",
      subtitle: "We manage our two locations in Ibiza 100% automatically. No need to be physically on the island. Bookings, payments, access and invoicing — all from the system.",
      hook: "Storage unit late payments often exceed 30% when billing is manual. With automated recurring billing, we reduced ours to under 10%. Here's how we did it.",
      whatIs: {
        title: "What is Storagefy?",
        description: "Storagefy is a SaaS management software for self storage and parking operators. It automates recurring payments via Stripe (card or SEPA Direct Debit), configurable billing cycles (monthly, bi-weekly, quarterly, semiannual), and centralises bookings, access control and invoicing in one system. At Trasteros Ibiza we've used it from day one.",
        conclusion: " enables us to operate professionally and at scale, offering our customers the best possible experience.",
      },
      automation: {
        title: "Full operational flow automation",
        description: "The entire flow is automated. From when a customer books until they access their unit:",
        items: [
          "Real-time online booking with instantly updated availability",
          "Automatic recurring payment via card or SEPA — no manual processing",
          "24/7 access via app: customers open the door from their mobile",
          "Automatic invoicing and customer area to check documents",
          "Unified management of both locations (Sant Antoni and Ses Paisses) from a single platform",
        ],
      },
      billingSteps: {
        title: "How recurring billing works in practice",
        subtitle: "This is how automatic collection operates in our daily workflow:",
        steps: [
          { title: "Billing cycle configuration", description: "We set the cycle (monthly, quarterly, etc.) and payment method. The customer enters their details once." },
          { title: "Automatic charge on due date", description: "The system attempts the charge on the scheduled date. If it fails, it sends automatic reminders." },
          { title: "Invoice and frictionless access", description: "The customer receives the invoice by email and keeps access to their unit. No paperwork or admin calls." },
        ],
      },
      manualMistakes: {
        title: "Common mistakes with manual billing in storage",
        description: "Many storage operators make these errors when billing manually:",
        items: [
          "Sending reminders late or inconsistently, which increases late payments",
          "No 24/7 payment links — the customer wants to pay but can't outside office hours",
          "Wasting time with Excel and spreadsheets that get outdated and cause errors",
          "Not integrating payments with access control — late payments without automatic blocking",
        ],
      },
      caseStudy: {
        title: "Real operational impact",
        content: "At Trasteros Ibiza we went from managing everything manually to an automated system with Storagefy. Occupancy rose from 52% to 82% in 5 months thanks to the 24/7 booking widget. Late payments dropped from 35% to 8% with automatic reminders and recurring billing. We save around 15 hours per week on admin tasks.",
      },
      remote: {
        title: "Remote management — without being on the island",
        description: "Thanks to Storagefy, we can manage Trasteros Ibiza from anywhere. We don't need to be physically on the island for everything to work: bookings are processed automatically, recurring payments run automatically and customers access with their mobile. This allows us to offer a reliable and professional service all year round.",
      },
      benefits: {
        title: "Benefits for the customer",
        description: "Automation isn't just for us. Our customers enjoy:",
        items: [
          "Book in 2 minutes, no paperwork or waiting",
          "Mobile access — no physical keys to lose",
          "Invoices and payments always available in the customer area",
          "Full transparency: clear prices, no surprises",
        ],
      },
      faq: {
        title: "Frequently asked questions about storage automation",
        items: [
          { question: "How to automate recurring payments in storage units?", answer: "You can automate recurring payments using management software like Storagefy integrated with Stripe. The customer enters their payment details once and the system charges automatically each cycle (monthly, quarterly, etc.). It includes reminders and 24/7 payment links." },
          { question: "What billing software to use for self storage?", answer: "For self storage, choose software that integrates bookings, recurring payments, access control and invoicing. Platforms like Storagefy offer everything in one with Stripe for card and SEPA Direct Debit, configurable cycles and a customer portal." },
          { question: "How does automatic Stripe billing work for storage?", answer: "Stripe enables recurring payments via subscription. The operator configures the billing cycle and the customer saves their card or SEPA mandate. Stripe attempts the charge each cycle and handles retries and reminders automatically." },
          { question: "What is recurring SEPA billing for storage units?", answer: "Recurring SEPA billing uses bank direct debit to collect rent automatically each month or in the agreed cycle. The customer authorises the charge once and the bank executes subsequent charges without manual intervention." },
        ],
      },
      cta: {
        text: "Find out more about the platform we use:",
        button: "Check availability",
      },
      backLink: "← Back to home",
    },
    floorPlanSesPaisses: {
      title: "Interactive floor plan — Ses Paisses",
      description: "See unit layout in real time. Tap each space for availability and details.",
      backToAvailability: "← Check availability and book",
    },
    floorPlanSanAntoni: {
      title: "Interactive floor plan — Sant Antoni",
      description: "See unit layout in real time. Tap each space for availability and details.",
      backToAvailability: "← Check availability and book",
    },
    footer: {
      description: "Your extra space, simple and instant. Modern and secure storage units in Ibiza.",
      links: {
        services: "Services",
        locations: "Locations",
        pricing: "Pricing",
        contact: "Contact",
        storagefy: "Automatic system",
        floorPlanSesPaisses: "Ses Paisses floor plan",
        floorPlanSanAntoni: "Sant Antoni floor plan",
      },
      legal: {
        privacy: "Privacy policy",
        terms: "Terms and conditions",
      },
      copyright: "© 2025 Trasteros Ibiza. All rights reserved.",
    },
  },
};
