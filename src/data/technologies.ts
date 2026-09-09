import { IconType } from "react-icons";
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiHtml5,
  SiCss, // Si tu versión falla con SiCss3, usa SiCss
  SiTailwindcss,
  SiReact,
  SiSass,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
  SiPostgresql,
  SiArchlinux,
  SiN8N,
  SiFigma,
  SiAdobeillustrator, // Si falla, reemplaza por SiAdobeillustrator o SiAdobe
} from "react-icons/si";
import { FaLinux } from "react-icons/fa";

export type TechnologiesId =
  | "JavaScript"
  | "TypeScript"
  | "Next.js"
  | "HTML5"
  | "CSS3"
  | "Tailwind"
  | "React"
  | "Sass"
  | "MongoDB"
  | "Express"
  | "Node.js"
  | "PostgreSQL"
  | "Linux CachyOS"
  | "N8N"
  | "Figma"
  | "Adobe Illustrator";

export type TechnologiesColor =
  | "flame-400"
  | "flame-500"
  | "flame-600"
  | "flame-700";

export const PROJECT_COLOR_CLASS: Record<TechnologiesColor, string> = {
  "flame-400": "bg-flame-400",
  "flame-500": "bg-flame-500",
  "flame-600": "bg-flame-600",
  "flame-700": "bg-flame-700",
};

export interface TechnologiesMeta {
  id: TechnologiesId;
  title: string;
  color: TechnologiesColor;
  icons: IconType[];
  gridSpan: string;
}

export const TECHNOLOGIES_DATA: TechnologiesMeta[] = [
  // FrontEnd
  {
    id: "JavaScript",
    title: "JavaScript",
    color: "flame-700",
    icons: [SiJavascript],
    gridSpan: "col-span-1 row-span-1",
  },
  {
    id: "TypeScript",
    title: "TypeScript",
    color: "flame-600",
    icons: [SiTypescript],
    gridSpan: "col-span-1 row-span-1",
  },
  {
    id: "Next.js",
    title: "Next.js",
    color: "flame-500",
    icons: [SiNextdotjs],
    gridSpan: "col-span-1 row-span-1",
  },
  {
    id: "HTML5",
    title: "HTML5",
    color: "flame-700",
    icons: [SiHtml5],
    gridSpan: "col-span-1 row-span-1",
  },
  {
    id: "CSS3",
    title: "CSS3",
    color: "flame-600",
    icons: [SiCss3],
    gridSpan: "col-span-1 row-span-1",
  },
  {
    id: "Tailwind",
    title: "Tailwind",
    color: "flame-500",
    icons: [SiTailwindcss],
    gridSpan: "col-span-1 row-span-3",
  },
  {
    id: "React",
    title: "React",
    color: "flame-700",
    icons: [SiReact],
    gridSpan: "col-span-1 row-span-1",
  },
  {
    id: "Sass",
    title: "Sass",
    color: "flame-600",
    icons: [SiSass],
    gridSpan: "col-span-1 row-span-1",
  },

  // BackEnd
  {
    id: "MongoDB",
    title: "MongoDB",
    color: "flame-500",
    icons: [SiMongodb],
    gridSpan: "col-span-1 row-span-2",
  },
  {
    id: "Express",
    title: "Express",
    color: "flame-500",
    icons: [SiExpress],
    gridSpan: "col-span-1 row-span-1",
  },
  {
    id: "Node.js",
    title: "Node.js",
    color: "flame-500",
    icons: [SiNodedotjs],
    gridSpan: "col-span-1 row-span-1",
  },
  {
    id: "PostgreSQL",
    title: "PostgreSQL",
    color: "flame-500",
    icons: [SiPostgresql],
    gridSpan: "col-span-1 row-span-2",
  },

  // Herramientas y Sistema
  {
    id: "Linux CachyOS",
    title: "Linux CachyOS",
    color: "flame-500",
    icons: [FaLinux, SiArchlinux],
    gridSpan: "col-span-1 row-span-1",
  },
  {
    id: "N8N",
    title: "N8N",
    color: "flame-500",
    icons: [SiN8N],
    gridSpan: "col-span-1 row-span-1",
  },
  {
    id: "Figma",
    title: "Figma",
    color: "flame-500",
    icons: [SiFigma],
    gridSpan: "col-span-1 row-span-1",
  },
  {
    id: "Adobe Illustrator",
    title: "Adobe Illustrator",
    color: "flame-500",
    icons: [SiAdobeillustrator],
    gridSpan: "col-span-1 row-span-1",
  },
];
