"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mt-24 py-10 border-t border-gray-200 dark:border-gray-700"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">

        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-gray-600 mb-8" />

        <p className="text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Ángel Peña — Todos los derechos reservados.
        </p>

        <p className="text-xs text-gray-400 dark:text-gray-500 mt-3">
          Construido con Next.js, TailwindCSS y Framer Motion.
        </p>

      </div>
    </motion.footer>
  );
}
