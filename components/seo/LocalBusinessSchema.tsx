// components/seo/LocalBusinessSchema.tsx

export const LocalBusinessSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "TattooParlor",
    name: "TATTOOMI Tattoo Studio",
    image: "https://tattoomi.in/logo.jpeg",
    "@id": "https://tattoomi.in",
    url: "https://tattoomi.in",
    telephone: "+91-8218822812",
    email: "tattoomistudio@gmail.com",
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: "3rd Floor, M-10, Block M, Greater Kailash II,",
      addressLocality: "Greater Kailash, New Delhi, Delhi",
      postalCode: "110048",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 28.5355,
      longitude: 77.2410,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "12:00",
        closes: "22:00",
      },
    ],
    sameAs: [
      "https://www.instagram.com/tattoomistudio/",
      "https://www.facebook.com/tattoomistudio",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "28",
    },
    areaServed: [
      { "@type": "City", name: "New Delhi" },
      { "@type": "Place", name: "Greater Kailash 2" },
      { "@type": "Place", name: "Greater Kailash" },
      { "@type": "Place", name: "M Block Market" },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};