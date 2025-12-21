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
    viewOnMap: string;
    googleMapsUrl: string;
    items: Array<{
      name: string;
      address: string;
      features: string[];
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
      description: "Almacenamiento seguro en Ibiza desde 55€/mes. Reserva online en 2 minutos y accede 7 días a la semana. Sin permanencia, sin sorpresas.",
      ctaPrimary: "Ver disponibilidad",
      ctaSecondary: "Hablar con un experto",
      features: "✓ Sin permanencia ✓ Acceso 7/7 ✓ Seguro incluido",
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
          description: "Accede a tu trastero los 7 días de la semana, sin restricciones.",
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
          features: ["Carga descarga", "Dentro del Pueblo de San Antonio", "Acceso 7/7", "Alarma", "Camaras de Seguridad"],
        },
        {
          name: "Ses Paisses",
          address: "Carrer Rosers 7, Ses Paisses 07820",
          features: ["Carga descarga", "A las afueras del Pueblo de San Antonio", "Acceso 7/7", "Alarma", "Camaras de Seguridad"],
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
          features: ["Acceso 7/7", "Seguridad y videovigilancia", "Alarma", "Carga y descarga", "Contratos flexibles"],
        },
      ],
      cta: "Ver disponibilidad",
      popular: "",
    },
    widget: {
      title: "Disponibilidad en Tiempo Real",
      description: "Consulta nuestros trasteros disponibles según tamaño y reserva online directamente desde el widget. Disponibilidad actualizada en tiempo real.",
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
          answer: "El precio incluye el alquiler del espacio, acceso 7/7, sistema de seguridad, videovigilancia y mantenimiento. No hay costes ocultos.",
        },
        {
          question: "¿Puedo acceder a mi trastero en cualquier momento?",
          answer: "Sí, nuestros trasteros están disponibles los 7 días de la semana. Tienes acceso completo con tu llave personal durante el horario de apertura.",
        },
        {
          question: "¿Qué pasa si necesito cancelar mi contrato?",
          answer: "Nuestros contratos son flexibles. Puedes cancelar con un preaviso de 30 días sin penalizaciones.",
        },
        {
          question: "¿Qué tamaño de trastero necesito?",
          answer: "Ofrecemos trasteros de diferentes tamaños. En nuestra sección de disponibilidad puedes ver todos los tamaños disponibles en tiempo real y elegir el que mejor se adapte a tus necesidades.",
        },
        {
          question: "¿Puedo cambiar de tamaño después?",
          answer: "Sí, nuestros contratos son flexibles. Si necesitas más o menos espacio, puedes cambiar de tamaño con un preaviso de 30 días.",
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
      },
      info: {
        title: "Información de contacto",
        address: "Carrer Rosers 7, Ses Paisses",
        phone: "+34 675 330 148",
        email: "trasterosibiza@gmail.com",
        hours: "Lunes a Domingo: 9:00 - 21:00",
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
      description: "Secure storage in Ibiza from 55€/month. Book online in 2 minutes and access 7 days a week. No commitment, no surprises.",
      ctaPrimary: "Check availability",
      ctaSecondary: "Talk to an expert",
      features: "✓ No commitment ✓ 7/7 access ✓ Insurance included",
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
          description: "Access your storage unit 7 days a week, no restrictions.",
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
          features: ["Loading and unloading", "Inside San Antonio Town", "7/7 Access", "Alarm", "Security Cameras"],
        },
        {
          name: "Ses Paisses",
          address: "Carrer Rosers 7, Ses Paisses 07820",
          features: ["Loading and unloading", "Outside San Antonio Town", "7/7 Access", "Alarm", "Security Cameras"],
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
          features: ["7/7 Access", "Security and video surveillance", "Alarm", "Loading and unloading", "Flexible contracts"],
        },
      ],
      cta: "Check availability",
      popular: "",
    },
    widget: {
      title: "Real-Time Availability",
      description: "Check our available storage units by size and book online directly from the widget. Real-time updated availability.",
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
          answer: "The price includes space rental, 7/7 access, security system, video surveillance and maintenance. There are no hidden costs.",
        },
        {
          question: "Can I access my storage unit at any time?",
          answer: "Yes, our storage units are available 7 days a week. You have full access with your personal key during opening hours.",
        },
        {
          question: "What happens if I need to cancel my contract?",
          answer: "Our contracts are flexible. You can cancel with 30 days notice without penalties.",
        },
        {
          question: "What size storage unit do I need?",
          answer: "We offer storage units of different sizes. In our availability section you can see all available sizes in real time and choose the one that best suits your needs.",
        },
        {
          question: "Can I change size later?",
          answer: "Yes, our contracts are flexible. If you need more or less space, you can change size with 30 days notice.",
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
      },
      info: {
        title: "Contact information",
        address: "Carrer Rosers 7, Ses Paisses",
        phone: "+34 675 330 148",
        email: "trasterosibiza@gmail.com",
        hours: "Monday to Sunday: 9:00 - 21:00",
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
