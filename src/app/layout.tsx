import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Trasteros Ibiza",
  description: "Trasteros y almacenamiento en Ibiza. Seguros, cómodos y accesibles.",
  metadataBase: new URL("https://trasteros-ibiza.local"),
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Trasteros Ibiza",
    description: "Trasteros y almacenamiento en Ibiza.",
    images: [{ url: "/brand/IMG_7887.jpg" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
