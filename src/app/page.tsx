"use client";

import Image from "next/image";
import TitleBadges from "@/components/ui/titlesBadges";
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen justify-center mt-[120px] gap-20">
      {/* Sección: About Me */}
      <motion.section
        id="about_me"
        className="scroll-mt-32"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="relative w-full max-w-lg h-[448px] flex flex-col rounded-2xl bg-[#D9D9D9]/5 backdrop-blur-[2px] border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
          {/* Contenedor del avatar con dimensiones fijas y centrado indestructible */}
          <div className="absolute -top-32 inset-x-0 mx-auto w-[246px] h-[246px] lg:left-6 lg:mx-0">
            <Image
              alt="avatar"
              src="/avatar.png"
              width={246}
              height={246}
              priority
            />
          </div>

          <div className="px-3 mt-[130px] flex flex-col items-center gap-2">
            <h1 className="text-flame-500 text-4xl font-black">
              Carlos Canelon
            </h1>
            <h2 className="text-flame-300 text-xl font-black">
              Creative FullStack Developer
            </h2>
            <p className="text-flame-white text-[13px] text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur asperiores porro ut tenetur impedit, doloremque
              provident? Odio ad quia.
            </p>
            <p className="text-flame-300 font-bold self-start text-left mb-5">
              Yaritagua - Venezuela
            </p>
            <button
              type="button"
              className="relative overflow-hidden bg-black w-[230px] h-[60px] rounded-[50px] flex justify-between px-5 items-center cursor-pointer before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:animate-shine"
            >
              <p className="text-flame-300 font-black text-2xl uppercase relative z-10">
                Github
              </p>
              <Image
                src="/svg/githubYellow.svg"
                alt="icono de github"
                width={50}
                height={50}
                className="relative z-10"
              />
            </button>
          </div>
        </div>
      </motion.section>

      {/* Sección: Projects */}
      <motion.section
        id="projects"
        className="scroll-mt-32"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <TitleBadges title="Projects" />
      </motion.section>

      {/* Sección: Technologies */}
      <motion.section
        id="technologies"
        className="scroll-mt-32"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <TitleBadges title="Technologies" />
      </motion.section>

      {/* Sección: Studies */}
      <motion.section
        id="studies"
        className="scroll-mt-32"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <TitleBadges title="Studies" />
      </motion.section>

      {/* Sección: Contact */}
      <motion.section
        id="contact"
        className="scroll-mt-32"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <TitleBadges title="Contact" />
      </motion.section>
    </main>
  );
}
