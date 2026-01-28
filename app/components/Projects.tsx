"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Proyecto 1",
    description: "Descripción breve del proyecto.",
    image: "https://picsum.photos/800/600",
    demo: "#",
    github: "#",
  },
  {
    title: "Proyecto 2",
    description: "Descripción breve del proyecto.",
    image: "https://picsum.photos/800/600",
    demo: "#",
    github: "#",
  },
  {
    title: "Proyecto 3",
    description: "Descripción breve del proyecto.",
    image: "https://picsum.photos/800/600",
    demo: "#",
    github: "#",
  },
  {
    title: "Proyecto 4",
    description: "Descripción breve del proyecto.",
    image: "https://picsum.photos/800/600",
    demo: "#",
    github: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-semibold tracking-tight text-center mb-16"
      >
        Mis Proyectos
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            index={index}
            title={project.title}
            description={project.description}
            image={project.image}
            demo={project.demo}
            github={project.github}
          />
        ))}
      </div>
    </section>
  );
}
