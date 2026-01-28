"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "QA Automation Engineer",
    company: "One Inc",
    period: "2023 - Actual",
    description:
      "Automatización de pruebas con Cypress, C#, Selenium y APIs. Diseño de frameworks, mantenimiento de pipelines CI/CD, test planing y mejora continua del proceso de QA.",
  },
  {
    role: "QA Engineer",
    company: "Empresa anterior",
    period: "2021 - 2023",
    description:
      "Pruebas funcionales, regresiones, smoke tests, documentación clara, creación de test cases y soporte directo al equipo de desarrollo.",
  },
  {
    role: "Ingeniero en Mecatrónica",
    company: "UANL",
    period: "2019",
    description:
      "Formación en programación, control, electrónica, algoritmos y robótica. Fortaleció mi enfoque lógico y orientado a la resolución de problemas.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="max-w-4xl mx-auto px-6 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-semibold tracking-tight text-center mb-16"
      >
        Experiencia
      </motion.h2>

      <div className="relative border-l-2 border-gray-300 pl-8 space-y-14">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Punto en la línea */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: index * 0.15 }}
              className="absolute -left-[17px] top-1 w-4 h-4 bg-black rounded-full border-2 border-white shadow"
            ></motion.div>

            <div className="bg-white shadow-md rounded-xl p-6">
              <h3 className="text-2xl font-semibold">{exp.role}</h3>
              <p className="text-gray-700 font-medium">{exp.company}</p>
              <p className="text-sm text-gray-500 mb-3">{exp.period}</p>

              <p className="text-gray-600 leading-relaxed">{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
