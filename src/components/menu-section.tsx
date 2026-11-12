"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { menuCategories } from "@/data/menu";
import { Reveal } from "@/components/reveal";

export function MenuSection() {
  const [activeId, setActiveId] = useState(menuCategories[0].id);
  const reduceMotion = useReducedMotion();
  const activeCategory = menuCategories.find(({ id }) => id === activeId) ?? menuCategories[0];

  return (
    <section className="menu-section section-pad" id="menu" aria-labelledby="menu-heading">
      <div className="section-inner menu-inner">
        <Reveal className="menu-intro">
          <p className="eyebrow">A taste of the evening</p>
          <h2 id="menu-heading">Made to be<br /><em>remembered.</em></h2>
          <p className="section-copy">Des packs à partager, des classiques bien servis, et de quoi prolonger la soirée.</p>
          <span className="menu-note">Prix en dirhams (DH) — Taxes et service compris.</span>
        </Reveal>
        <div className="menu-content">
          <div className="menu-tabs" role="tablist" aria-label="Menu categories">
            {menuCategories.map((category) => (
              <button
                className={activeId === category.id ? "menu-tab is-active" : "menu-tab"}
                key={category.id}
                id={`tab-${category.id}`}
                type="button"
                role="tab"
                aria-selected={activeId === category.id}
                aria-controls="menu-panel"
                onClick={() => setActiveId(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>
          <div className="menu-list" id="menu-panel" role="tabpanel" aria-labelledby={`tab-${activeCategory.id}`}>
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeCategory.id}
                initial={reduceMotion ? false : { opacity: 0, y: 7 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                {activeCategory.items.map((item, index) => (
                  <article className="menu-item" key={`${activeCategory.id}-${index}`}>
                    <div className="menu-item-copy">
                      <div className="menu-item-title"><h3>{item.name}</h3><span>{item.price}</span></div>
                      <p>{item.description}</p>
                    </div>
                  </article>
                ))}
              </motion.div>
            </AnimatePresence>
            <a className="text-link menu-full-link" href="#reservations">Ask us about the menu <ArrowUpRight size={15} aria-hidden="true" /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
