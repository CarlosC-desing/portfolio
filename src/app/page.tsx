"use client";

import Image from "next/image";
import TitleBadges from "@/components/ui/titlesBadges";
import { motion } from "framer-motion";
import EventGrid from "@/components/bento/projectsGrid";

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen justify-center mt-[120px] gap-20 items-center">

      <h1 className="sr-only">Carlos Canelon — Creative FullStack Developer</h1>

      {/* Sección: About Me */}
      <section id="about_me" aria-labelledby="about-heading" className="scroll-mt-32">
        <motion.article
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
          className="relative w-full md:w-[1246] h-[448px] md:h-[500px] flex flex-col md:flex-row md:gap-5 rounded-2xl bg-[#D9D9D9]/5 backdrop-blur-[2px] border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]"
        >
          <div className="absolute md:relative md:flex md:justify-center -top-32 inset-x-0 mx-auto w-[246px] md:w-[623px] h-[246px] md:h-[623px] lg:left-6 lg:mx-0">
            <Image
              alt="Fotografía de Carlos Canelon"
              src="/avatar.png"
              width={623}
              height={570}
              priority
              className="w-full h-full object-cover"
            />
          </div>

          <header className="px-3 mt-[130px] md:mt-0 md:justify-center md:items-start md:h-full md:w-[900px] md:px-10 flex flex-col items-center gap-6">
            <h2 id="about-heading" className="text-flame-500 text-4xl font-black md:text-7xl">
              Carlos Canelon
            </h2>
            <p className="text-flame-300 text-xl md:text-4xl font-black">
              Creative FullStack Developer
            </p>
            <p className="text-flame-white text-[13px] text-justify italic md:text-2xl">
              I'm passionate about bridging UI design with solid architectures—always ensuring code quality, performance, and visual detail from start to finish.
            </p>
            <p className="text-flame-300 font-bold self-start text-left mb- md:text-4xl">
              Yaritagua - Venezuela
            </p>

            <a
              href="https://github.com/CarlosC-desing"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Perfil oficial de GitHub de Carlos Canelon"
              className="relative overflow-hidden bg-black w-full h-[60px] md:w-[531px] md:h-[105px] rounded-[50px] flex justify-between px-5 items-center cursor-pointer before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:animate-shine md:px-8"
            >
              <span className="text-flame-300 font-black text-2xl md:text-3xl uppercase relative z-10">
                Github
              </span>
              <Image
                src="/svg/githubYellow.svg"
                alt=""
                width={97}
                height={97}
                className="relative z-10"
              />
            </a>
          </header>
        </motion.article>
      </section>

      {/* Sección: Projects */}
      <section id="projects" aria-labelledby="projects-heading" className="scroll-mt-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <header className="mb-8 flex flex-col gap-12 justify-center items-center">
            <h2 id="projects-heading">
              <TitleBadges title="Projects" />
            </h2>
            <EventGrid />
          </header>
        </motion.div>
      </section>

      {/* Sección: Technologies */}
      <section id="technologies" aria-labelledby="tech-heading" className="scroll-mt-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <header className="mb-8">
            <h2 id="tech-heading">
              <TitleBadges title="Technologies" />
            </h2>
          </header>
        </motion.div>
      </section>

      {/* Sección: Studies */}
      <section id="studies" aria-labelledby="studies-heading" className="scroll-mt-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <header className="mb-8">
            <h2 id="studies-heading">
              <TitleBadges title="Studies" />
            </h2>
          </header>
        </motion.div>
      </section>

      {/* Sección: Contact */}
      <section id="contact" aria-labelledby="contact-heading" className="scroll-mt-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <header className="mb-8">
            <h2 id="contact-heading">
              <TitleBadges title="Contact" />
            </h2>
          </header>
        </motion.div>
      </section>

    </main>
  );
}