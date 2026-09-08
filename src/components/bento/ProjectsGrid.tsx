"use client";

import { useProjects } from "@/data/projects";
import { useTranslation } from "@/providers/LanguageContext";
import ProjectCard from "../ui/ProjectCard";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      staggerDirection: -1,
    },
  },
} as const;

const cardVariants = {
  hidden: {
    opacity: 0,
    y: -250,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
} as const;

export default function EventGrid() {
  const { t } = useTranslation();
  const projects = useProjects();

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full max-w-6xl mx-auto"
    >
      {projects.map((project) => (
        <motion.div
          key={project.id}
          variants={cardVariants}
          className={`col-span-1 ${project.gridSpan} h-full`}
        >
          <ProjectCard
            color={project.color}
            title={project.title}
            description={project.description}
            img={project.img}
            stack={project.stack}
            links={project.links}
            demoText={t.projects.demoBtn}
            codeText={t.projects.codeBtn}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}