# 🏠 Trasteros Ibiza

Modern, bilingual website for storage unit rental in Ibiza with real-time availability and online booking.

[![Next.js](https://img.shields.io/badge/Next.js-15.5.5-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8)](https://tailwindcss.com/)

## ✨ Features

- 🌐 **Bilingual**: Full support for Spanish and English
- 📱 **Responsive**: Mobile-first design with smooth animations
- ⚡ **Real-time Availability**: Dedicated booking page with Storagefy widget
- 🎨 **Modern UI**: Clean, professional design with Tailwind CSS
- 🔒 **Type-safe**: Built with TypeScript
- 🚀 **Performance**: Optimized with Next.js 15 App Router
- 📄 **Multi-page**: Landing page + dedicated booking page

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Fonts**: [Inter](https://fonts.google.com/specimen/Inter)
- **Booking Widget**: [Storagefy](https://www.storagefy.app/)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Andres-Giannico/trasteros-ibiza.git

# Navigate to the project
cd trasteros-ibiza

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 📁 Project Structure

```
trasteros-ibiza/
├── src/
│   ├── app/
│   │   ├── layout.tsx             # Root layout
│   │   ├── page.tsx               # Home page (landing)
│   │   ├── globals.css            # Global styles
│   │   └── disponibilidad/        # Availability booking page
│   │       ├── layout.tsx         # Booking page layout
│   │       └── page.tsx           # Booking page with widget
│   ├── components/
│   │   ├── Header.tsx             # Navigation bar
│   │   ├── Hero.tsx               # Hero section
│   │   ├── Services.tsx           # Services section
│   │   ├── Locations.tsx          # Locations section
│   │   ├── Pricing.tsx            # Pricing plans
│   │   ├── WhyUs.tsx              # Why choose us section
│   │   ├── Stats.tsx              # Statistics section
│   │   ├── FAQs.tsx               # FAQ section
│   │   ├── CTA.tsx                # Call to action section
│   │   ├── Contact.tsx            # Contact form
│   │   ├── Footer.tsx             # Footer
│   │   ├── ui/                    # Reusable UI components
│   │   └── icons/                 # Custom SVG icons
│   ├── hooks/
│   │   └── useLanguage.ts         # Language management hook
│   └── lib/
│       └── translations.ts        # i18n translations
└── public/
    └── brand/                     # Brand assets (logos, images)
```

## 🌍 Internationalization

The website supports Spanish (default) and English. Language preferences are saved in localStorage.

To add translations, edit `src/lib/translations.ts`:

```typescript
export const translations = {
  es: { /* Spanish translations */ },
  en: { /* English translations */ }
};
```

## 🎨 Customization

### Colors

Brand colors are defined in `src/app/globals.css`:

```css
:root {
  --brand: #ff6a00;  /* Primary orange */
  --brand-50: #fff7ed;
  --brand-500: #ff6a00;
  --brand-600: #ea580c;
  /* ... */
}
```

### Storagefy Widget Token

Update the widget token in `src/components/StorageWidget.tsx`:

```tsx
data-token="YOUR_STORAGEFY_TOKEN_HERE"
```

## 📦 Build for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

## 🚀 Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Andres-Giannico/trasteros-ibiza)

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com/)
3. Vercel will auto-detect Next.js and deploy

## 📝 License

This project is private and proprietary.

## 👨‍💻 Author

**Andres Giannico**
- GitHub: [@Andres-Giannico](https://github.com/Andres-Giannico)

---

Built with ❤️ in Ibiza
