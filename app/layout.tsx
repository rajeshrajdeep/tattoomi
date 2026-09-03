import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://www.tattoomi.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default:
      "Tattoomi | Best Tattoo Studio in Greater Kailash 2 (GK2), New Delhi",
    template: "%s | Tattoomi",
  },

  description:
    "Tattoomi is a professional tattoo studio in Greater Kailash 2 (GK2), New Delhi, specializing in custom, fine line, realism, blackwork, minimalist and personalized tattoos.",

  keywords: [
    "tattoo studio in Greater Kailash 2",
    "tattoo studio in GK2",
    "tattoo studio in Delhi",
    "best tattoo studio in Delhi",
    "best tattoo artist in Delhi",
    "tattoo artist in GK2",
    "custom tattoo Delhi",
    "fine line tattoo Delhi",
    "realism tattoo Delhi",
    "blackwork tattoo Delhi",
    "minimalist tattoo Delhi",
    "tattoo shop Delhi",
  ],

  authors: [{ name: "Tattoomi" }],
  creator: "Tattoomi",
  publisher: "Tattoomi",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Tattoomi",
    title:
      "Tattoomi | Best Tattoo Studio in Greater Kailash 2 (GK2), New Delhi",
    description:
      "Professional tattoo studio in GK2, New Delhi offering custom tattoos, fine line, realism, blackwork and minimalist tattoo designs.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tattoomi Tattoo Studio - Greater Kailash 2, New Delhi",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Tattoomi | Best Tattoo Studio in Greater Kailash 2 (GK2), New Delhi",
    description:
      "Professional tattoo studio in GK2, New Delhi. Custom tattoos, fine line, realism, blackwork and more.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "TattooParlor",
  "@id": `${siteUrl}/#tattoomi`,
  name: "Tattoomi",
  url: siteUrl,
  description:
    "Professional tattoo studio in Greater Kailash 2 (GK2), New Delhi.",
  image: `${siteUrl}/og-image.jpg`,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Greater Kailash 2",
    addressRegion: "Delhi",
    addressCountry: "IN",
  },
  areaServed: {
    "@type": "City",
    name: "New Delhi",
  },
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-IN"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </body>
    </html>
  );
}