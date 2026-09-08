# 🚀 Personal Portfolio — Web & Software Engineering

> Un portafolio web moderno, modular e interactivo enfocado en rendimiento (60 FPS), micro-interacciones pulidas y una arquitectura de componentes escalable.

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.0-0055FF?style=flat-square&logo=framer)](https://www.framer.com/motion/)
[![Biome](https://img.shields.io/badge/Biome-Linter%20%26%20Formatter-60A5FA?style=flat-square)](https://biomejs.dev/)

---

## 🎨 Proceso de Diseño: De Wireframes a Alta Fidelidad

A diferencia de las plantillas prefabricadas, este proyecto fue concebido y construido totalmente desde cero, siguiendo un proceso de diseño enfocado en la experiencia de usuario (UX):

1. **Wireframing & Layout (Figma):** Definición de la jerarquía de contenidos, distribución del Bento Grid de proyectos y estructura Mobile-First.
2. **Diseño de Alta Fidelidad & Branding (Figma & Illustrator):** Elección de paleta de colores oscuros (`neutral-950`), guía tipográfica y exportación de assets vectoriales (SVG) optimizados.
3. **Prototipado Interactivo:** Pruebas de flujo y transiciones visuales antes de tirar la primera línea de código.

> 📁 **[Ver Lienzo y Prototipo en Figma](TU_LINK_DE_FIGMA_AQUI)** *(Opcional: coloca un enlace directo a tu archivo de Figma público)*

---

## ⚡ Tech Stack & Arquitectura

* **Framework:** [Next.js](https://nextjs.org/) (App Router)
* **Lenguaje:** [TypeScript](https://www.typescriptlang.org/) (Type Safety)
* **Estilos:** [Tailwind CSS](https://tailwindcss.com/) (Atomic Design)
* **Animaciones:** [Framer Motion](https://www.framer.com/motion/) (Efectos de física Spring, Staggering y Transformaciones de GPU)
* **Smooth Scroll:** [Lenis Scroll](https://lenis.darkroom.engineering/) (Desplazamiento suave hidraúlico)
* **Herramientas de Desarrollo:** [Biome](https://biomejs.dev/) para linting/formatting y `bun` / `pnpm` como gestor de dependencias.

---

## 🧩 Componentes Reutilizables & Animaciones Destacadas

* **Bento Grid con Física "Lego Fall":** Animaciones de caída progresiva con efectos de rebote (`spring`) calibrando `stiffness` y `damping` para simular impacto con el suelo.
* **Fondo SVG Interactivo:** Patrón de líneas dinámico que reacciona a las coordenadas `(x, y)` del cursor mediante `useMotionValue` y `useSpring` sin comprometer la GPU.
* **Navbar Flotante / Glassmorphism:** Barra fija con desenfoque de fondo (`backdrop-blur-md`) y animación de entrada suave.
* **Atomic Design UI:** Librería interna de componentes reutilizables (`Button`, `Card`, `Badge`) con la utilidad `cn()` (`clsx` + `tailwind-merge`) para evitar conflictos de clases.

---

## 🛠️ Instalación y Ejecución Local

1. **Clonar el repositorio:**
   ```fish
   git clone [https://github.com/tu-usuario/tu-repo-portfolio.git](https://github.com/tu-usuario/tu-repo-portfolio.git)
   cd tu-repo-portfolio 
   ```

## Instalar Dependencias
2. **Instalar dependencias:**
    ```fish
    bun install o pnpm install
    ```

## Iniciar el servidor de desarrollo
2. **Instalar dependencias:**
    ```fish
    bun dev o pnpm dev
    ```

2. **Servidor:**
    ```fish
    Abrir http://localhost:3000 en el navegador.
    ```    