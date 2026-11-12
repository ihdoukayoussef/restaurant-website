import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="section-inner footer-top">
        <Link className="footer-brand" href="#home" aria-label={`${siteConfig.name} home`}>
          <Image src={siteConfig.logo} alt="" width={210} height={40} className="footer-logo" />
        </Link>
        <nav className="footer-nav" aria-label="Footer navigation">
          <a href="#experience">Experience</a><a href="#menu">Menu</a><a href="#atmosphere">Atmosphere</a><a href="#reservations">Reservations</a><a href="#location">Location</a>
        </nav>
        <div className="footer-contact">
          <a href={`tel:${siteConfig.contact.phone.replace(/[^+\d]/g, "")}`}>{siteConfig.contact.phone}</a>
          {siteConfig.contact.instagramUrl ? <a href={siteConfig.contact.instagramUrl} target="_blank" rel="noreferrer">Instagram <ArrowUpRight size={14} /></a> : <span>Instagram details to be added</span>}
        </div>
      </div>
      <div className="section-inner footer-bottom">
        <span>© {year} {siteConfig.name}</span>
        <span>{siteConfig.contact.address}</span>
        <span>Made for evenings that linger.</span>
      </div>
    </footer>
  );
}
