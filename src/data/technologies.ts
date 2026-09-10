// src/data/technologies.ts
import { IconType } from "react-icons";
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiHtml5,
  SiCss,
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
  | "flame-300"
  | "flame-400"
  | "flame-500"
  | "flame-600"
  | "flame-700"
  | "flame-800";

export const PROJECT_COLOR_CLASS: Record<TechnologiesColor, string> = {
  "flame-300": "bg-flame-300",
  "flame-400": "bg-flame-400",
  "flame-500": "bg-flame-500",
  "flame-600": "bg-flame-600",
  "flame-700": "bg-flame-700",
  "flame-800": "bg-flame-800",
};

export interface TechnologiesMeta {
  id: TechnologiesId;
  title: string;
  color: TechnologiesColor;
  icons?: IconType[];
  iconColor?: string;
  iconClassName?: string | string[];
  imageSrc?: string;
}

export const FRONTEND_DATA: TechnologiesMeta[] = [
  { id: "JavaScript", title: "JavaScript", color: "flame-800", icons: [SiJavascript], iconColor: "text-[#F7DF1E]" },
  { id: "TypeScript", title: "TypeScript", color: "flame-600", icons: [SiTypescript], iconColor: "text-[#3178C6]" },
  { id: "Next.js", title: "Next.js", color: "flame-500", icons: [SiNextdotjs], iconColor: "text-black" },
  { id: "HTML5", title: "HTML5", color: "flame-800", icons: [SiHtml5], iconColor: "text-[#E34F26]" },
  { id: "CSS3", title: "CSS3", color: "flame-600", icons: [SiCss], iconColor: "text-[#1572B6]" },
  { id: "Tailwind", title: "Tailwind", color: "flame-500", icons: [SiTailwindcss], iconColor: "text-[#06B6D4]" },
  { id: "React", title: "React", color: "flame-800", icons: [SiReact], iconColor: "text-[#61DAFB]" },
  { id: "Sass", title: "Sass", color: "flame-600", icons: [SiSass], iconColor: "text-[#CC6699]" },
];

export const BACKEND_DATA: TechnologiesMeta[] = [
  { id: "MongoDB", title: "MongoDB", color: "flame-400", icons: [SiMongodb], iconColor: "text-[#47A248]" },
  { id: "Express", title: "Express", color: "flame-400", icons: [SiExpress], iconColor: "text-white", iconClassName: "stroke-[1.5]" },
  { id: "Node.js", title: "Node.js", color: "flame-300", icons: [SiNodedotjs], iconColor: "text-[#5FA04E]" },
  { id: "PostgreSQL", title: "PostgreSQL", color: "flame-300", icons: [SiPostgresql], iconColor: "text-[#4169E1]", iconClassName: "stroke-[1.5]" },
];

export const ENVIRONMENT_DATA: TechnologiesMeta[] = [
  { id: "Linux CachyOS", title: "Linux CachyOS", color: "flame-400", icons: [SiArchlinux, FaLinux], iconColor: "text-[#008080]", iconClassName: ["", "stroke-[1.5]"] },
  { id: "N8N", title: "N8N", color: "flame-300", icons: [SiN8N], iconColor: "text-[#FF6584]", iconClassName: "stroke-[1.5]" },
];

export const DESIGN_DATA: TechnologiesMeta[] = [
  { id: "Figma", title: "Figma", color: "flame-400", icons: [SiFigma], iconColor: "text-[#F24E1E]", iconClassName: "stroke-[1.5]" },
  { id: "Adobe Illustrator", title: "Adobe Illustrator", color: "flame-300", imageSrc: "/svg/adbillustrator.svg", iconClassName: "scale-125 md:scale-125" },
];