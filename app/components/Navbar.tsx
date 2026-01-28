"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Inicio", href: "#hero", id: "hero" },
    { label: "Sobre mí", href: "#about", id: "about" },
    { label: "Experiencia", href: "#experience", id: "experience" },
    { label: "Proyectos", href: "#projects", id: "projects" },
  ];

  // Detectar sección activa según scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) =>
        document.querySelector(item.href)
      );

      sections.forEach((section, index) => {
        if (!section) return;
        const rect = section.getBoundingClientRect();

        if (rect.top <= 150 && rect.bottom >= 150) {
          setActiveSection(navItems[index].id);
        }
      });

      // Navbar aparece/desaparece según scroll
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false); // bajando
      } else {
        setShowNavbar(true); // subiendo
      }

      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: showNavbar ? 0 : -60, opacity: showNavbar ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/70 shadow-sm"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl font-semibold tracking-tight"
        >
          Angel.dev
        </motion.h1>

        {/* Menu Desktop */}
        <div className="hidden md:flex gap-8 text-gray-700 font-medium">
          {navItems.map((item, i) => (
            <a
              key={i}
              href={item.href}
              className={`transition ${
                activeSection === item.id
                  ? "text-black font-semibold border-b-2 border-black pb-1"
                  : "hover:text-black"
              }`}
            >
              {item.label}
            </a>
          ))}

          {/* Botón de Contacto */}
          <a
            href="#contact"
            className="ml-4 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-900 transition"
          >
            Contacto
          </a>
        </div>

        {/* Botón hamburguesa */}
        <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {/* Menu móvil */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white shadow-md px-6 py-4 flex flex-col gap-4"
        >
          {navItems.map((item, i) => (
            <a
              key={i}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`text-gray-700 font-medium ${
                activeSection === item.id ? "text-black font-semibold" : ""
              }`}
            >
              {item.label}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="px-4 py-2 bg-black text-white rounded-lg text-center"
          >
            Contacto
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
}
