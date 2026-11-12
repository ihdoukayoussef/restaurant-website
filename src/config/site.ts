export const siteConfig = {
  name: "Terrasse Miami",
  shortName: "TM",
  tagline: "An experience beyond the ordinary",
  description:
    "Food, drinks and unforgettable evenings at Terrasse Miami, Casablanca.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
  logo: "/images/terrasse-miami-wordmark.svg",
  heroVideo: "/videos/restaurant.mp4" as string | null,
  heroPoster: "/images/hero-poster-placeholder.svg",
  contact: {
    phone: "+212 656-243195",
    whatsappNumber: "212656243195",
    instagramUrl: "https://www.instagram.com/grandeterrasse.miami/",
    address: "Terrasse Miami, H8WF+G58, Casablanca, Maroc",
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Terrasse%20Miami%2C%20H8WF%2BG58%2C%20Casablanca%2C%20Maroc",
    mapEmbedUrl: "https://www.google.com/maps?q=H8WF%2BG58%2C%20Casablanca%2C%20Morocco&z=15&output=embed",
    openingHours: " 7j/7, Midi-1h du matin",
  },
} as const;
