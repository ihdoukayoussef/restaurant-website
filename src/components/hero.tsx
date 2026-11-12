
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";
import { siteConfig } from "@/config/site";

const heroImages = [
  siteConfig.heroPoster,
  "/images/dining-room-placeholder.svg",
  "/images/cocktails-placeholder.svg",
];

export function Hero() {
  const [activeImage, setActiveImage] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;

    const interval = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % heroImages.length);
    }, 6500);

    return () => window.clearInterval(interval);
  }, [reduceMotion]);

  return (
    <section id="home" className="relative isolate flex min-h-[92svh] items-center overflow-hidden bg-[#101a23] text-white">
      <div className="absolute inset-0 -z-20" aria-hidden="true">
        <AnimatePresence mode="sync">
          <motion.div
            key={activeImage}
            initial={reduceMotion ? false : { opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={heroImages[activeImage]}
              alt=""
              fill
              priority={activeImage === 0}
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {siteConfig.heroVideo && !reduceMotion && (
        <video
          className="absolute inset-0 -z-10 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={siteConfig.heroPoster}
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        >
          <source src={siteConfig.heroVideo} type="video/mp4" />
        </video>
      )}

      <div className="absolute inset-0 -z-10 bg-[#07121a]/35" aria-hidden="true" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#07121a]/85 via-[#07121a]/45 to-[#07121a]/10" aria-hidden="true" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#07121a]/65 via-transparent to-[#07121a]/25" aria-hidden="true" />

      <div className="mx-auto w-full max-w-7xl px-6 pb-24 pt-36 sm:px-10 lg:px-16">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-10 bg-[#b6cee0]" />
            <span className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.28em] text-white/85">
              <MapPin size={13} className="text-[#b6cee0]" />
              Ain Diab, Casablanca
            </span>
          </div>

          <h1 className="font-serif text-5xl leading-[1.08] tracking-tight sm:text-6xl lg:text-8xl">
            An experience
            <br />
            beyond the{" "}
            <span className="italic text-[#b6cee0]">ordinary.</span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-white/75 sm:text-lg">
            Food, drinks and unforgettable evenings in Ain Diab.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#menu"
              className="group inline-flex items-center gap-4 bg-[#b6cee0] px-7 py-4 text-sm font-semibold text-[#101a23] transition hover:bg-[#d0e0eb]"
            >
              Discover our menu
              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>

            <a
              href="#reservations"
              className="inline-flex items-center gap-3 border border-white/45 px-7 py-4 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-white hover:bg-white/10"
            >
              Reserve a table
            </a>
          </div>
        </motion.div>

        {/* Image indicators */}
        <div className="absolute bottom-10 right-8 flex items-center gap-2 sm:right-16">
          {heroImages.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Show hero image ${index + 1}`}
              aria-pressed={activeImage === index}
              onClick={() => setActiveImage(index)}
              className={`h-1 rounded-full transition-all duration-500 ${
                activeImage === index
                  ? "w-10 bg-[#b6cee0]"
                  : "w-4 bg-white/40 hover:bg-white/80"
              }`}
            />
          ))}
        </div>

        {/* Scroll cue */}
        <motion.a
          href="#experience"
          animate={reduceMotion ? undefined : { y: [0, 7, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 left-8 hidden items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-white/65 sm:flex sm:left-16"
        >
          <ArrowDown size={15} aria-hidden="true" />
          Scroll to discover
        </motion.a>
      </div>
    </section>
  );
}

export default Hero;
