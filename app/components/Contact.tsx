"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
    return (
        <section
            id="contact"
            data-cy="section-contact"
            className="max-w-3xl mx-auto px-6 py-24 text-center"
        >
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-semibold tracking-tight mb-6"
            >
                Contacto
            </motion.h2>

            {/* PÁRRAFO */}
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.7 }}
                viewport={{ once: true }}
                className="text-lg text-gray-600 leading-relaxed mb-8"
            >
                ¿Quieres ponerte en contacto conmigo?
                Estoy disponible para proyectos, colaboraciones y oportunidades profesionales.
            </motion.p>

            {/* CONTENEDOR DE BOTONES */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
                viewport={{ once: true }}
                className="mt-8 flex flex-col md:flex-row justify-center items-center gap-6"
            >
                {/* BOTÓN EMAIL */}
                <a
                    href="mailto:jose.angpc@gmail.com"
                    data-cy="btn-email"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white rounded-full text-lg hover:bg-gray-800 transition"
                >
                    <Mail size={22} />
                    Envíame un correo
                </a>

                {/* BOTÓN DESCARGAR CV */}
                <a
                    href="/CV_Jose_A.Pen_a_2026.pdf"
                    download
                    data-cy="btn-download-cv"
                    className="px-8 py-4 bg-gray-200 text-black rounded-full text-lg hover:bg-gray-300 transition"
                >
                    Descargar CV (PDF)
                </a>
            </motion.div>

            {/* REDES SOCIALES */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.7 }}
                viewport={{ once: true }}
                className="mt-10 flex justify-center gap-6"
            >
                {/* GitHub */}
                <a
                    href="https://github.com/AngelPeca07"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cy="link-github"
                    className="p-4 rounded-full border border-gray-300 hover:bg-gray-100 transition shadow-sm"
                >
                    <Github size={24} />
                </a>

                {/* LinkedIn */}
                <a
                    href="https://www.linkedin.com/in/angel-pena-engineer"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cy="link-linkedin"
                    className="p-4 rounded-full border border-gray-300 hover:bg-gray-100 transition shadow-sm"
                >
                    <Linkedin size={24} />
                </a>
            </motion.div>

        </section>
    );
}
