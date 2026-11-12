
"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { siteConfig } from "@/config/site";

const links = [
  { label: "The experience", href: "#experience" },
  { label: "Menu", href: "#menu" },
  { label: "Atmosphere", href: "#atmosphere" },
  { label: "Find us", href: "#location" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="absolute inset-0 border-b border-white/10 bg-[#101a23]/55 backdrop-blur-md" />

      <div className="relative mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-10 lg:px-16">
        <a
          href="#home"
          aria-label={`${siteConfig.name} home`}
          className="relative z-20 flex items-center"
        >
          <Image
            src={siteConfig.logo}
            alt=""
            width={210}
            height={40}
            priority
            className="h-auto max-h-10 w-auto max-w-[180px] object-contain object-left sm:max-w-[210px]"
          />
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-medium uppercase tracking-[0.15em] text-white/80 transition hover:text-[#b6cee0]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="#reservations"
            className="hidden items-center gap-2 border-b border-[#b6cee0]/80 px-1 py-3 text-xs font-semibold uppercase tracking-wider text-white transition hover:text-[#b6cee0] sm:inline-flex"
          >
            Reservations
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
            className="relative z-20 rounded-full border border-white/30 p-3 text-white transition hover:bg-white/10 lg:hidden"
          >
            {menuOpen ? <X size={19} aria-hidden="true" /> : <Menu size={19} aria-hidden="true" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            initial={reduceMotion ? false : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-x-0 top-0 z-10 min-h-screen bg-[#101a23] px-8 pb-12 pt-28 lg:hidden"
          >
            <div className="flex flex-col">
              {links.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={reduceMotion ? false : { opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: reduceMotion ? 0 : index * 0.07 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block border-b border-white/15 py-6 font-serif text-3xl text-white transition hover:text-[#b6cee0]"
                  >
                    {link.label}
                  </a>
                </motion.div>
              ))}

              <a
                href="#reservations"
                onClick={() => setMenuOpen(false)}
                className="mt-9 flex items-center justify-between bg-[#b6cee0] px-6 py-5 text-sm font-semibold text-[#101a23]"
              >
                Reserve your table
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

export default SiteHeader;
