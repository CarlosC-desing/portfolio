"use client";
import { motion } from "framer-motion";
import TechnologiesCard from "../ui/TechnologiesCard";
import TitleBadges from "../ui/TitlesBadges";
import {
  FRONTEND_DATA,
  BACKEND_DATA,
  ENVIRONMENT_DATA,
  DESIGN_DATA,
} from "@/data/technologies";

const topSectionVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.08
    }
  },
} as const;

const topCardVariants = {
  hidden: { opacity: 0, y: 25, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" }
  },
} as const;

const wrestlingLeftVariants = {
  hidden: { opacity: 0, x: -100, flexBasis: "50%" },
  show: {
    opacity: [0, 1, 1, 1, 1, 1],
    x: [-100, 15, -10, 8, -3, 0],
    flexBasis: ["50%", "45%", "62%", "52%", "58%", "66.66%"],
    transition: {
      duration: 1.4,
      times: [0, 0.2, 0.4, 0.6, 0.8, 1],
      ease: "easeInOut",
    },
  },
} as const;

const wrestlingRightVariants = {
  hidden: { opacity: 0, x: 100, flexBasis: "50%" },
  show: {
    opacity: [0, 1, 1, 1, 1, 1],
    x: [100, -15, 10, -8, 3, 0],
    flexBasis: ["50%", "55%", "38%", "48%", "42%", "33.33%"],
    transition: {
      duration: 1.4,
      times: [0, 0.2, 0.4, 0.6, 0.8, 1],
      ease: "easeInOut",
    },
  },
} as const;

const wrestlingLeftDesignVariants = {
  hidden: { opacity: 0, x: -100, flexBasis: "50%" },
  show: {
    opacity: [0, 1, 1, 1, 1, 1],
    x: [-100, 15, -10, 8, -3, 0],
    flexBasis: ["50%", "55%", "38%", "48%", "42%", "33.33%"],
    transition: {
      duration: 1.4,
      times: [0, 0.2, 0.4, 0.6, 0.8, 1],
      ease: "easeInOut",
    },
  },
} as const;

const wrestlingRightDesignVariants = {
  hidden: { opacity: 0, x: 100, flexBasis: "50%" },
  show: {
    opacity: [0, 1, 1, 1, 1, 1],
    x: [100, -15, 10, -8, 3, 0],
    flexBasis: ["50%", "45%", "62%", "52%", "58%", "66.66%"],
    transition: {
      duration: 1.4,
      times: [0, 0.2, 0.4, 0.6, 0.8, 1],
      ease: "easeInOut",
    },
  },
} as const;

export default function TechnologiesGrid() {
  const frontendWithColors = FRONTEND_DATA.map((item) => {
    let color = item.color;
    const t = String(item.title).toLowerCase();
    if (t.includes("javascript") || t.includes("html") || t.includes("react")) {
      color = "flame-800" as any;
    } else if (t.includes("typescript") || t.includes("css") || t.includes("sass")) {
      color = "flame-600" as any;
    } else if (t.includes("next") || t.includes("tailwind")) {
      color = "flame-500" as any;
    }
    return { ...item, color };
  });

  const backendWithColors = BACKEND_DATA.map((item) => {
    let color = item.color;
    const t = String(item.title).toLowerCase();
    if (t.includes("mongo") || t.includes("node")) {
      color = "flame-400" as any;
    } else if (t.includes("express") || t.includes("postgres")) {
      color = "flame-300" as any;
    }
    return { ...item, color };
  });

  const environmentWithColors = ENVIRONMENT_DATA.map((item) => {
    let color = item.color;
    const t = String(item.title).toLowerCase();
    if (t.includes("linux") || t.includes("cachyos") || t.includes("figma")) {
      color = "flame-400" as any;
    } else if (t.includes("n8n") || t.includes("illustrator")) {
      color = "flame-300" as any;
    }
    return { ...item, color };
  });

  const designWithColors = DESIGN_DATA.map((item) => {
    let color = item.color;
    const t = String(item.title).toLowerCase();
    if (t.includes("figma") || t.includes("linux") || t.includes("cachyos")) {
      color = "flame-400" as any;
    } else if (t.includes("illustrator") || t.includes("n8n")) {
      color = "flame-300" as any;
    }
    return { ...item, color };
  });

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-8 flex flex-col gap-16">

      <motion.div
        variants={topSectionVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 w-full"
      >
        <div className="lg:col-span-7 flex flex-col items-center gap-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="w-full flex justify-center"
          >
            <TitleBadges title="FrontEnd" />
          </motion.div>
          <div className="grid grid-cols-3 grid-rows-3 gap-4 w-full h-[580px]">
            <motion.div variants={topCardVariants} className="col-span-1 row-span-1"><TechnologiesCard {...frontendWithColors[0]} /></motion.div>
            <motion.div variants={topCardVariants} className="col-span-1 row-span-1"><TechnologiesCard {...frontendWithColors[1]} /></motion.div>
            <motion.div variants={topCardVariants} className="col-span-1 row-span-1"><TechnologiesCard {...frontendWithColors[2]} /></motion.div>
            <motion.div variants={topCardVariants} className="col-span-1 row-span-1"><TechnologiesCard {...frontendWithColors[3]} /></motion.div>
            <motion.div variants={topCardVariants} className="col-span-1 row-span-1"><TechnologiesCard {...frontendWithColors[4]} /></motion.div>
            <motion.div variants={topCardVariants} className="col-span-1 row-span-2"><TechnologiesCard {...frontendWithColors[5]} /></motion.div>
            <motion.div variants={topCardVariants} className="col-span-1 row-span-1"><TechnologiesCard {...frontendWithColors[6]} /></motion.div>
            <motion.div variants={topCardVariants} className="col-span-1 row-span-1"><TechnologiesCard {...frontendWithColors[7]} /></motion.div>
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col items-center gap-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="w-full flex justify-center"
          >
            <TitleBadges title="BackEnd" />
          </motion.div>
          <div className="grid grid-cols-2 grid-rows-6 gap-4 w-full h-[580px]">
            <motion.div variants={topCardVariants} className="col-start-1 row-start-1 col-span-1 row-span-4"><TechnologiesCard {...backendWithColors[0]} /></motion.div>
            <motion.div variants={topCardVariants} className="col-start-2 row-start-1 col-span-1 row-span-2"><TechnologiesCard {...backendWithColors[1]} /></motion.div>
            <motion.div variants={topCardVariants} className="col-start-1 row-start-5 col-span-1 row-span-2"><TechnologiesCard {...backendWithColors[2]} /></motion.div>
            <motion.div variants={topCardVariants} className="col-start-2 row-start-3 col-span-1 row-span-4"><TechnologiesCard {...backendWithColors[3]} /></motion.div>
          </div>
        </div>
      </motion.div>

      <div className="flex flex-col gap-12 w-full">

        <div className="flex flex-col items-center gap-4 w-full">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4 }}
            className="w-full flex justify-center"
          >
            <TitleBadges title="Entorno y Automatización" />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col sm:flex-row gap-4 w-full h-auto sm:h-[180px] overflow-hidden"
          >
            <motion.div variants={wrestlingLeftVariants} className="w-full h-full">
              <TechnologiesCard {...environmentWithColors[0]} />
            </motion.div>
            <motion.div variants={wrestlingRightVariants} className="w-full h-full">
              <TechnologiesCard {...environmentWithColors[1]} />
            </motion.div>
          </motion.div>
        </div>

        <div className="flex flex-col items-center gap-4 w-full">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4 }}
            className="w-full flex justify-center"
          >
            <TitleBadges title="Creatividad y Diseño UX/UI" />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col sm:flex-row gap-4 w-full h-auto sm:h-[180px] overflow-hidden"
          >
            <motion.div variants={wrestlingLeftDesignVariants} className="w-full h-full">
              <TechnologiesCard {...designWithColors[0]} />
            </motion.div>
            <motion.div variants={wrestlingRightDesignVariants} className="w-full h-full">
              <TechnologiesCard {...designWithColors[1]} />
            </motion.div>
          </motion.div>
        </div>

      </div>

    </section>
  );
}