"use client";

import React, { useMemo, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { throttle } from "lodash"; // Throttle scroll event handler

export default function Header() {
  const sections = [
    { name: "Home", id: "home" },
    { name: "Projects", id: "projects" },
    { name: "Stack", id: "stack" },

    { name: "Experience", id: "experience" },



  ];

  const [activeSection, setActiveSection] = useState("Home");
  const [isClickScrolling, setIsClickScrolling] = useState(false); // New state for click-based scrolling

  // Scroll to the section when a link is clicked
  const handleScrollToSection = (id: string) => {
    setIsClickScrolling(true); // Disable scroll listener during smooth scrolling
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => setIsClickScrolling(false), 1000); // Re-enable listener after smooth scroll
    }
  };

  // Throttle scroll-based section detection
  const memoizedSections = useMemo(() => sections, [sections]);

  useEffect(() => {
    const handleScroll = throttle(() => {
      if (isClickScrolling) return; // Prevent scroll handler from firing during click-based scrolling

      const currentSection = memoizedSections.find((section) => {
        const element = document.getElementById(section.id);
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return (
          rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2
        );
      });

      if (currentSection && currentSection.name !== activeSection) {
        setActiveSection(currentSection.name);
      }
    }, 200);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [memoizedSections, activeSection, isClickScrolling, setActiveSection]);
  
  return (
    <header className="z-[99] relative">
      <motion.div
        className="fixed top-0 left-1/2 -translate-x-1/2 h-[4.5rem] w-full rounded-none  border-opacity-40 bg-neutral-800 bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav className="fixed flex top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-neutral-100 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {sections.map((section) => (
            <motion.li
              className="h-3/4 flex relative items-center justify-center"
              key={section.id}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <button
                className={`flex w-full items-center justify-center px-3 py-3 hover:text-gray-500  transition ${
                  activeSection === section.name ? "text-neutral-900" : ""
                }`}
                onClick={() => {
                  setActiveSection(section.name); // Update immediately
                  handleScrollToSection(section.id);
                }}
              >
                {section.name}
                {activeSection === section.name && (
                  <motion.span
                    className="bg-gray-100 rounded-full absolute inset-0 -z-10"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 40,
                    }}
                  ></motion.span>
                )}
              </button>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
