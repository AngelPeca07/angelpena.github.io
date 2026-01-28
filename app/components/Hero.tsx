"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center px-6 md:px-20"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-24 w-full">

        {/* --- TEXTO --- */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-sm font-medium tracking-[0.25em] text-gray-500"
          >
            QA AUTOMATION ENGINEER · SDET
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-2 text-6xl md:text-7xl font-semibold tracking-tight text-gray-900"
          >
            Ángel Peña
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-6 text-xl text-gray-700 leading-relaxed max-w-xl"
          >
            QA Automation Engineer especializado en Cypress, Selenium y C#. 
            Diseño frameworks de prueba, pipelines CI/CD y aseguro que el 
            código llegue a producción con calidad y confianza.
          </motion.p>

          {/* BOTONES */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-10 flex gap-6"
          >
            <a
              href="#projects"
              className="px-10 py-4 bg-black text-white rounded-full text-lg hover:bg-gray-800 transition"
            >
              Ver mis proyectos
            </a>

            <a
              href="#contact"
              className="px-10 py-4 border border-gray-300 text-gray-700 rounded-full text-lg hover:bg-gray-100 transition"
            >
              Contacto
            </a>
          </motion.div>
        </div>

        {/* --- FOTO + GLOW + BORDE ELEGANTE --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto"
        >
          {/* Glow suave */}
          <div className="absolute inset-0 blur-3xl bg-white/60 rounded-full" />

          {/* Imagen con borde blanco elegante */}
          <img
            src="https://picsum.photos/500/500"
            alt="Perfil"
            className="
              relative w-72 h-72 md:w-96 md:h-96 
              rounded-full object-cover shadow-2xl
              border-[6px] border-white
            "
          />
        </motion.div>

      </div>
    </section>
  );
}
