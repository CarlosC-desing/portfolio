export interface Project {
  id: string;
  title: string;
  description: string;
  img: string;
  stack: string[];
  links: {
    demo?: string;
    github?: string;
  };
}

export const PROJECTS_DATA: Project[] = [
  {
    id: "barberly",
    title: "Barberly",
    description: "Aplicación de gestión y reservas para barberías con panel de administración y diseño moderno.",
    img: "/projects/barberly.png",
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
    id: "weyland-yutani",
    title: "Weyland-Yutani SPA",
    description: "Single Page Application temática inspirada en el universo de Alien, enfocada en rendimiento y UI personalizada.",
    img: "/projects/weyland.png",
    stack: [
      "/svg/react.svg",
      "/svg/typescript.svg",
      "/svg/tailwind.svg",
    ],
    links: {
      github: "https://github.com/CarlosC-desing/weyland-yutani-spa",
    },
  },
];