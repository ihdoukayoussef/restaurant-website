import type { Metadata, Viewport } from "next";
import { siteConfig } from "@/config/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Terrasse Miami | Casablanca",
    template: "%s | Terrasse Miami",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: "Terrasse Miami | An experience beyond the ordinary",
    description: siteConfig.description,
    images: [{ url: siteConfig.heroPoster, width: 1920, height: 1080, alt: "Terrasse Miami, Casablanca" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terrasse Miami | Casablanca",
    description: siteConfig.description,
    images: [siteConfig.heroPoster],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#101a23",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
