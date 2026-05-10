import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Valnora & Elric | Boutique product studio & founding engineering partner",
  description:
    "Valnora & Elric is a boutique product studio + founding engineering partner that designs, ships, and scales venture-grade SaaS/AI products end-to-end.",
  metadataBase: new URL("https://valnora.example.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "Valnora & Elric | Boutique product studio & founding engineering partner",
    description:
      "We design, ship, and scale venture-grade SaaS/AI products end-to-end.",
    url: "https://valnora.example.com",
    siteName: "Valnora & Elric",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Valnora & Elric | Boutique product studio & founding engineering partner",
    description:
      "We design, ship, and scale venture-grade SaaS/AI products end-to-end.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* JSON-LD */}
        <Script id="org-jsonld" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ProfessionalService',
            name: 'Valnora & Elric Private Limited',
            url: 'https://valnora.example.com',
            description:
              'Boutique product studio and founding engineering partner building venture-grade SaaS/AI products end-to-end.',
            sameAs: [],
            areaServed: 'Global',
            slogan: 'Architecture-first, revenue-focused, production from day one',
            brand: {
              '@type': 'Brand',
              name: 'Valnora & Elric',
            },
            serviceType: [
              'Product engineering',
              'AI & automation',
              'Mobile development',
              'DevOps & RevOps',
            ],
          })}
        </Script>
        {children}
      </body>
    </html>
  );
}
