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

export type TechnologiesColor = "flame-400" | "flame-500" | "flame-600" | "flame-700";

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
  img: string[];
  gridSpan: string;
}

export const TECHNOLOGIES_DATA: TechnologiesMeta[] = [
  // FrontEnd
  { id: "JavaScript", title: "JavaScript", color: "flame-700", img: ["/svg/js.svg"], gridSpan: "col-span-1 row-span-1" },
  { id: "TypeScript", title: "TypeScript", color: "flame-600", img: ["/svg/ts.svg"], gridSpan: "col-span-1 row-span-1" },
  { id: "Next.js", title: "Next.js", color: "flame-500", img: ["/svg/next.svg"], gridSpan: "col-span-1 row-span-1" },
  { id: "HTML5", title: "HTML5", color: "flame-700", img: ["/svg/html.svg"], gridSpan: "col-span-1 row-span-1" },
  { id: "CSS3", title: "CSS3", color: "flame-600", img: ["/svg/css.svg"], gridSpan: "col-span-1 row-span-1" },
  { id: "Tailwind", title: "Tailwind", color: "flame-500", img: ["/svg/twd.svg"], gridSpan: "col-span-1 row-span-3" },
  { id: "React", title: "React", color: "flame-700", img: ["/svg/react.svg"], gridSpan: "col-span-1 row-span-1" },
  { id: "Sass", title: "Sass", color: "flame-600", img: ["/svg/sass.svg"], gridSpan: "col-span-1 row-span-1" },

  // BackEnd
  { id: "MongoDB", title: "MongoDB", color: "flame-500", img: ["/svg/mongo.svg"], gridSpan: "col-span-1 row-span-2" },
  { id: "Express", title: "Express", color: "flame-500", img: ["/svg/express.svg"], gridSpan: "col-span-1 row-span-1" },
  { id: "Node.js", title: "Node.js", color: "flame-500", img: ["/svg/node.svg"], gridSpan: "col-span-1 row-span-1" },
  { id: "PostgreSQL", title: "PostgreSQL", color: "flame-500", img: ["/svg/postgre.svg"], gridSpan: "col-span-1 row-span-2" },

  // Herramientas y Sistema
  { id: "Linux CachyOS", title: "Linux CachyOS", color: "flame-500", img: ["/svg/lilnux.svg", "/svg/arch.svg", "/svg/cachyos.svg"], gridSpan: "col-span-1 row-span-1" },
  { id: "N8N", title: "N8N", color: "flame-500", img: ["/svg/n8n.svg"], gridSpan: "col-span-1 row-span-1" },
  { id: "Figma", title: "Figma", color: "flame-500", img: ["/svg/figma.svg"], gridSpan: "col-span-1 row-span-1" },
  { id: "Adobe Illustrator", title: "Adobe Illustrator", color: "flame-500", img: ["/svg/illustrator.svg"], gridSpan: "col-span-1 row-span-1" },
];