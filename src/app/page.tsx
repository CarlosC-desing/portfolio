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
    <main className="flex flex-col min-h-screen mt-45 lg:mt-[180px] gap-20 mx-auto w-full">
      <h1 className="sr-only">Carlos Canelon — Creative FullStack Developer</h1>

      <section
        id="about_me"
        aria-labelledby="about-heading"
        className="scroll-mt-32 w-full 2xl:px-25"
      >
        <motion.article
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
          className="relative w-full max-w-[1246px] flex flex-col items-center pt-33 lg:pt-3 lg:flex-row lg:pl-120 xl:pl-150 rounded-2xl bg-[#D9D9D9]/7 backdrop-blur-[5px] border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] p-5"
        >
          <div className="absolute -top-32 lg:-left-3 w-[250px] h-[250px] lg:w-[470px] lg:h-[470px] xl:w-[623px] xl:h-[623px]">
            <Image
              alt="Fotografía de Carlos Canelon"
              src="/avatar.png"
              width={623}
              height={623}
              priority
              className="w-full h-full object-cover"
            />
          </div>

          <header className="flex flex-col gap-3 xl:gap-12 text-[13px] items-center justify-center">
            <h2
              id="about-heading"
              className="text-flame-500 text-3xl lg:text-6xl font-black lg:self-start"
            >
              Carlos Canelon
            </h2>
            <p className="text-flame-300 text-[21px] lg:text-3xl font-black lg:self-start">
              Creative FullStack Developer
            </p>
            <p className=" text-flame-white italic text-justify lg:text-[15px]">
              I'm passionate about bridging UI design with solid
              architectures—always ensuring code quality, performance, and
              visual detail from start to finish.
            </p>
            <p className="text-flame-300 font-black self-start lg:text-2xl">
              Yaritagua - Venezuela
            </p>

            <a
              href="https://github.com/CarlosC-desing"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Perfil oficial de GitHub de Carlos Canelon"
              className="relative overflow-hidden bg-black w-full h-[60px] md:h-[80px] lg:h-[75px] xl:h-[105px] lg:max-w-[450px] xl:max-w-[531px] rounded-[50px] flex justify-between px-5 md:px-8 items-center cursor-pointer before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:animate-shine z-10"
            >
              <span className="text-flame-300 font-black text-2xl md:text-3xl lg:text-2xl xl:text-3xl uppercase relative z-10">
                Github
              </span>
              <Image
                src="/svg/githubYellow.svg"
                alt="Github"
                width={60}
                height={60}
                className="relative z-10 md:w-[70px] md:h-[70px] lg:w-[55px] lg:h-[55px] xl:w-[80px] xl:h-[80px]"
              />
            </a>
          </header>
        </motion.article>
      </section>

      <section
        id="projects"
        aria-labelledby="projects-heading"
        className="scroll-mt-32 w-full"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <header className="mb-8 flex flex-col gap-12 items-center">
            <h2 id="projects-heading">
              <TitleBadges title="Projects" />
            </h2>
            <EventGrid />
          </header>
        </motion.div>
      </section>

      <section
        id="technologies"
        aria-labelledby="tech-heading"
        className="scroll-mt-32 w-full"
      >
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

      <section
        id="studies"
        aria-labelledby="studies-heading"
        className="scroll-mt-32 w-full"
      >
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

      <section
        id="contact"
        aria-labelledby="contact-heading"
        className="scroll-mt-32 w-full"
      >
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
