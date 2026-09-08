// app/layout.tsx

import { Poppins, Varela_Round } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navigation/Navbar";

const poppinsFont = Poppins({
  variable: "--font-poppins-font",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const varelaRoundFont = Varela_Round({
  variable: "--font-varela-round",
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tattoomi.in"),
  title: "TATTOOMI Tattoo Studio | Greater Kailash 2, Delhi",
  description:
    "TATTOOMI is a tattoo and piercing studio in Greater Kailash 2, M Block Market, New Delhi. Custom tattoos, fine line, piercing & more. Book your appointment today.",
  keywords: [
    "tattoo studio Greater Kailash",
    "tattoo shop GK2",
    "tattoo artist M Block Market",
    "piercing studio Delhi",
    "TATTOOMI",
  ],
  authors: [{ name: "TATTOOMI Tattoo Studio" }],
  openGraph: {
    title: "TATTOOMI Tattoo Studio | Greater Kailash 2, Delhi",
    description:
      "Custom tattoos & piercing in Greater Kailash 2, M Block Market. Book your appointment today.",
    url: "https://tattoomi.in",
    siteName: "TATTOOMI Tattoo Studio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TATTOOMI Tattoo Studio",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TATTOOMI Tattoo Studio | Greater Kailash 2, Delhi",
    description:
      "Custom tattoos & piercing in Greater Kailash 2, M Block Market, New Delhi.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://tattoomi.in",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${poppinsFont.variable} ${varelaRoundFont.variable} min-h-svh min-w-svw sm:min-h-screen sm:min-w-screen antialiased`}
    >
      <body className="min-h-full min-w-full flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}