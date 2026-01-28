"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="max-w-3xl mx-auto px-6 py-24 text-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-semibold tracking-tight mb-6"
      >
        Sobre mí
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        viewport={{ once: true }}
        className="text-lg text-gray-600 leading-relaxed mb-6"
      >
        Soy Angel Peña, ingeniero en mecatrónica y QA Automation Engineer.  
        Me especializo en pruebas automatizadas con Cypress, Selenium y C#, 
        creación de frameworks escalables, CI/CD y mejora continua de procesos 
        de calidad.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        viewport={{ once: true }}
        className="text-lg text-gray-600 leading-relaxed"
      >
        Disfruto aprender nuevas tecnologías, programar en C++, crear proyectos 
        web y resolver problemas complejos con algoritmos. Siempre busco aportar 
        valor en cada proyecto mediante calidad, eficiencia y buenas prácticas.
      </motion.p>

      {/* ---- TECH STACK section ---- */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.7 }}
        viewport={{ once: true }}
        className="mt-10 flex flex-wrap justify-center gap-3"
      >
        {[
          "Cypress",
          "Selenium",
          "C#",
          "JavaScript",
          "TypeScript",
          "SQL",
          "CI/CD",
          "Azure DevOps",
          "GitHub Actions",
          "Playwright",
        ].map((tech) => (
          <span
            key={tech}
            className="px-4 py-2 text-sm border rounded-full bg-gray-100 text-gray-700"
          >
            {tech}
          </span>
        ))}
      </motion.div>
    </section>
  );
}
