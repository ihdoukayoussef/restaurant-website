# Terrasse Miami

An editorial restaurant-bar website for a premium venue in Ain Diab, Casablanca. Built with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion and Lucide icons.

## Local development

Requirements: Node.js 20.9 or later and npm.

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Venue content

The venue name, phone and WhatsApp number, Casablanca address, Google Maps embed and directions link are configured in `src/config/site.ts`. Update the remaining social and hours details there. Menu items and prices are centralized in `src/data/menu.ts`.

The supplied cinematic video is available at `public/videos/restaurant.mp4` and is enabled in the hero. The hero retains its poster on playback failure and does not autoplay video when the visitor prefers reduced motion. Replace `public/images/*-placeholder.svg` with approved venue photography, keeping the filenames or updating their references. Those SVGs are labelled illustrations/placeholders, not venue photographs.

## Environment variables

No environment variables are required for local development. Before deployment, set `NEXT_PUBLIC_SITE_URL` to the canonical production origin. The canonical URL is used for metadata, sitemap and robots output.

## Production and Vercel

```bash
npm run build
npm run start
```

Import the repository into Vercel and use the detected Next.js defaults. No custom build command or output directory is needed. Add the production URL and approved media/content before launch.
