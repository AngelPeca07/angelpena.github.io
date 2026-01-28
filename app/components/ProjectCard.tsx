"use client";

import { motion } from "framer-motion";

type Props = {
    title: string;
    description: string;
    image: string;
    demo: string;
    github: string;
    index: number;
};

export default function ProjectCard({
    title,
    description,
    image,
    demo,
    github,
    index,
}: Props) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="
                rounded-xl overflow-hidden bg-white border border-gray-200 shadow
                transition hover:shadow-xl hover:-translate-y-2 hover:border-gray-300
                hover:ring-2 hover:ring-black/10
            "
        >
            {/* Imagen */}
            <div className="relative h-48 w-full bg-gray-100 overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
            </div>

            <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-600 mb-4">{description}</p>

                <div className="flex gap-4 mt-4">
                    <a
                        href={demo}
                        className="
                            px-4 py-2 bg-black text-white rounded-lg 
                            hover:bg-gray-900 active:scale-95 transition-all
                        "
                    >
                        Demo
                    </a>

                    <a
                        href={github}
                        className="
                            px-4 py-2 border border-gray-300 rounded-lg
                            hover:bg-gray-100 active:scale-95 transition-all
                        "
                    >
                        Código
                    </a>
                </div>
            </div>
        </motion.div>
    );
}
