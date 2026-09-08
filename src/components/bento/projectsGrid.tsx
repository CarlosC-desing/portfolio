"use client";

import { useTranslation } from "@/providers/LanguageContext";
import ProjectCard from "../ui/projectCard";

export default function EventGrid() {
  const { t } = useTranslation();

  const projects = [
    {
      id: "barberly",
      title: t.projects.barberly.title,
      description: t.projects.barberly.description,
      img: "/projects/barberly.png",
      stack: ["/svg/react.svg", "/svg/nextjs.svg", "/svg/tailwind.svg", "/svg/typescript.svg"],
      links: {
        demo: "https://barberly-demo.com",
        github: "https://github.com/CarlosC-desing/barberly",
      },
    },
    {
      id: "satrc",
      title: t.projects.satrc.title,
      description: t.projects.satrc.description,
      img: "/svg/youtubeYellow.svg",
      stack: ["/svg/githubYellow.svg"],
      links: {
        demo: "https://example.com",
        github: "https://github.com",
      },
    },
    {
      id: "weyland-yutani",
      title: t.projects.weyland?.title || "Weyland-Yutani SPA",
      description: t.projects.weyland?.description || "Single Page Application temática inspirada en Alien.",
      img: "/projects/weyland.png",
      stack: ["/svg/react.svg", "/svg/typescript.svg", "/svg/tailwind.svg"],
      links: {
        github: "https://github.com/CarlosC-desing/weyland-yutani-spa",
      },
    },
    {
      id: "weyland-yutani2",
      title: t.projects.weyland2?.title || "Weyland-Yutani v2",
      description: t.projects.weyland2?.description || "Plataforma experimental con datos simulados e interfaz futurista.",
      img: "/projects/weyland.png",
      stack: ["/svg/react.svg", "/svg/typescript.svg", "/svg/tailwind.svg"],
      links: {
        demo: "https://example.com",
        github: "https://github.com/CarlosC-desing/weyland-yutani-spa",
      },
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl mx-auto">
      {projects.map((project) => (
        <ProjectCard
          color="bg-flame-500"
          key={project.id}
          title={project.title}
          description={project.description}
          img={project.img}
          stack={project.stack}
          links={project.links}
          demoText={t.projects.demoBtn}
          codeText={t.projects.codeBtn}
        />
      ))}
    </div>
  );
}