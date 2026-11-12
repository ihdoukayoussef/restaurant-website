import Image from "next/image";
import { ArrowUpRight, Clock3, MapPin, Phone } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { siteConfig } from "@/config/site";

const atmosphereImages = [
  { src: "/images/dining-room-placeholder.svg", alt: "Restaurant interior image placeholder", label: "The dining room", className: "gallery-large" },
  { src: "/images/table-setting-placeholder.svg", alt: "Dining table image placeholder", label: "At the table", className: "" },
  { src: "/images/cuisine-placeholder.svg", alt: "Food presentation image placeholder", label: "On the menu", className: "" },
  { src: "/images/cocktails-placeholder.svg", alt: "Cocktail image placeholder", label: "At the bar", className: "" },
  { src: "/images/guests-placeholder.svg", alt: "Guests enjoying the venue image placeholder", label: "Into the evening", className: "gallery-wide" },
];

export function ExperienceSection() {
  return (
    <section className="experience-section section-pad" id="experience" aria-labelledby="experience-heading">
      <div className="section-inner experience-grid">
        <Reveal className="experience-copy">
          <p className="eyebrow">A place to settle in</p>
          <h2 id="experience-heading">Where Casablanca<br />comes <em>together.</em></h2>
          <p className="section-copy">Set along the coast of Casablanca, Terrasse Miami brings the table, the bar and the city into one easygoing rhythm.</p>
          <p className="section-copy secondary-copy">Come for a late lunch. Stay for the light changing over the Atlantic. The best evenings have never needed an occasion.</p>
          <a className="text-link" href="#reservations">Make an evening of it <ArrowUpRight size={15} aria-hidden="true" /></a>
        </Reveal>
        <Reveal className="experience-image-wrap" delay={0.12}>
          <Image src="/images/dining-room-placeholder.svg" alt="Placeholder for a photograph of the Terrasse Miami dining room" fill sizes="(max-width: 760px) 100vw, 55vw" className="editorial-image" />
          <span className="image-caption">The room, ready for you</span>
        </Reveal>
        <span className="experience-index" aria-hidden="true">01 / THE EXPERIENCE</span>
      </div>
    </section>
  );
}

export function AtmosphereSection() {
  return (
    <section className="atmosphere-section section-pad" id="atmosphere" aria-labelledby="atmosphere-heading">
      <div className="section-inner">
        <Reveal className="atmosphere-heading">
          <p className="eyebrow">A feeling, from first light to last call</p>
          <h2 id="atmosphere-heading">The art of <em>staying.</em></h2>
        </Reveal>
        <div className="gallery-grid">
          {atmosphereImages.map((image, index) => (
            <Reveal className={`gallery-tile ${image.className}`} delay={index % 2 ? 0.08 : 0} key={image.src}>
              <Image src={image.src} alt={image.alt} fill sizes="(max-width: 640px) 100vw, 50vw" className="gallery-image" />
              <span className="gallery-label">{image.label}<small>Image placeholder</small></span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ReservationsSection() {
  const whatsappUrl = siteConfig.contact.whatsappNumber
    ? `https://wa.me/${siteConfig.contact.whatsappNumber.replace(/\D/g, "")}`
    : "";

  return (
    <section className="reservations-section section-pad" id="reservations" aria-labelledby="reservation-heading">
      <div className="section-inner reservations-grid">
        <Reveal className="reservation-lead">
          <p className="eyebrow">Your table is waiting</p>
          <h2 id="reservation-heading">Make room<br />for a <em>good evening.</em></h2>
          <p className="section-copy">For a table, a celebration or just a little more information, our team would be glad to hear from you.</p>
        </Reveal>
        <Reveal className="reservation-details" delay={0.1}>
          <a className={whatsappUrl ? "whatsapp-link" : "whatsapp-link is-unavailable"} href={whatsappUrl || undefined} aria-disabled={!whatsappUrl}>
            <span>WhatsApp reservations</span><ArrowUpRight size={18} aria-hidden="true" />
          </a>
          {!whatsappUrl && <p className="detail-note">WhatsApp number to be added in site settings.</p>}
          <div className="detail-row"><Phone size={16} strokeWidth={1.4} aria-hidden="true" /><div><span>Call us</span><a href={`tel:${siteConfig.contact.phone.replace(/[^+\d]/g, "")}`}>{siteConfig.contact.phone}</a></div></div>
          <div className="detail-row"><Clock3 size={16} strokeWidth={1.4} aria-hidden="true" /><div><span>Opening hours</span><p>{siteConfig.contact.openingHours}</p></div></div>
        </Reveal>
      </div>
    </section>
  );
}

export function LocationSection() {
  const hasMap = Boolean(siteConfig.contact.mapEmbedUrl);
  const hasDirections = Boolean(siteConfig.contact.directionsUrl);

  return (
    <section className="location-section section-pad" id="location" aria-labelledby="location-heading">
      <div className="section-inner location-grid">
        <Reveal className="location-copy">
          <p className="eyebrow">By the Atlantic</p>
          <h2 id="location-heading">
            Ain Diab,<br />
            <em>Casablanca.</em>
          </h2>
          <p className="location-address">
            <MapPin size={16} strokeWidth={1.4} aria-hidden="true" />
            {siteConfig.contact.address}
          </p>
          {hasDirections ? (
            <a
              className="text-link"
              href={siteConfig.contact.directionsUrl}
              target="_blank"
              rel="noreferrer"
            >
              Get directions
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          ) : (
            <span className="location-note">
              Directions link will be added when the exact address is confirmed.
            </span>
          )}
        </Reveal>
        <Reveal className="map-frame" delay={0.1}>
          {hasMap ? (
            <iframe
              src={siteConfig.contact.mapEmbedUrl}
              title="Terrasse Miami location in Ain Diab, Casablanca"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          ) : (
            <div className="map-placeholder">
              <span className="map-grid" />
              <span className="map-pin">
                <MapPin size={20} strokeWidth={1.4} />
              </span>
              <span className="map-label">
                Ain Diab
                <small>Map embed placeholder</small>
              </span>
            </div>
          )}
          {hasDirections && (
            <a
              className="map-direction-button"
              href={siteConfig.contact.directionsUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Open route in Google Maps"
              title="Open route in Google Maps"
            >
              <MapPin size={20} aria-hidden="true" />
            </a>
          )}
        </Reveal>
      </div>
    </section>
  );
}
