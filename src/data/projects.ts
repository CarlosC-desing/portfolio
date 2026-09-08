"use client";

import { useTranslation } from "@/providers/LanguageContext";

export type ProjectId = "barberly" | "satrc" | "weyland" | "weyland2";

export type ProjectColor = "flame-400" | "flame-500" | "flame-600" | "flame-700";

export const PROJECT_COLOR_CLASS: Record<ProjectColor, string> = {
  "flame-400": "bg-flame-400",
  "flame-500": "bg-flame-500",
  "flame-600": "bg-flame-600",
  "flame-700": "bg-flame-700",
};

export interface ProjectMeta {
  id: ProjectId;
  color: ProjectColor;
  img: string;
  gridSpan: string;
  stack: string[];
  links: {
    demo?: string;
    github?: string;
  };
}

export interface Project extends ProjectMeta {
  title: string;
  description: string;
}

export const PROJECTS_DATA: ProjectMeta[] = [
  {
    id: "barberly",
    color: "flame-500",
    img: "/png/projects/image.png",
    gridSpan: "lg:col-span-5",
    stack: [
      "/svg/react.svg",
      "/svg/nextjs.svg",
      "/svg/tailwind.svg",
      "/svg/typescript.svg",
    ],
    links: {
      demo: "https://barberly-demo.com",
      github: "https://github.com/CarlosC-desing/barberly",
    },
  },
  {
    id: "satrc",
    color: "flame-700",
    img: "/png/projects/image.png",
    gridSpan: "lg:col-span-7",
    stack: ["/svg/githubYellow.svg"],
    links: {
      demo: "https://example.com",
      github: "https://github.com",
    },
  },
  {
    id: "weyland",
    color: "flame-400",
    img: "/png/projects/image.png",
    gridSpan: "lg:col-span-7",
    stack: ["/svg/react.svg", "/svg/typescript.svg", "/svg/tailwind.svg"],
    links: {
      github: "https://github.com/CarlosC-desing/weyland-yutani-spa",
    },
  },
  {
    id: "weyland2",
    color: "flame-600",
    img: "/png/projects/image.png",
    gridSpan: "lg:col-span-5",
    stack: ["/svg/react.svg", "/svg/typescript.svg", "/svg/tailwind.svg"],
    links: {
      demo: "https://example.com",
      github: "https://github.com/CarlosC-desing/weyland-yutani-spa",
    },
  },
];

export function useProjects(): Project[] {
  const { t } = useTranslation();

  return PROJECTS_DATA.map((project) => {
    const copy = t.projects[project.id];

    return {
      ...project,
      title: copy.title,
      description: copy.description,
    };
  });
}