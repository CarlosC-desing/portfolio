"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "@/providers/LanguageContext";
import LanguageToggle from "../ui/LanguageToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <header className="flex justify-between items-center mx-auto w-full max-w-[1480px] gap-10">
      <div className="relative w-[50px] h-[50px] md:w-[70px] md:h-[70px] xl:w-[100px] xl:h-[100px]">
        <Image
          src="/logo.png"
          alt="Logo"
          fill
          className="object-contain"
          sizes="(max-width: 1024px) 50px, 100px"
        />
      </div>

      <div className="flex items-center gap-4 lg:hidden">
        <LanguageToggle />
        <button
          type="button"
          className="w-[100px] h-[50px] bg-flame-500 rounded-[10px] flex justify-center items-center"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          <Image
            src={isOpen ? "/svg/xIcon.svg" : "/svg/hamburgerIcon.svg"}
            alt={isOpen ? "Open Menu" : "Close Menu"}
            width={40}
            height={30}
          />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden absolute top-20 right-3 mt-5 bg-black/20 p-4 rounded-xl z-50 backdrop-blur-md border border-white/10"
          >
            <ul className="text-[13px] flex flex-col gap-3 uppercase font-bold text-flame-white">
              <li className="hover:text-flame-500">
                <a href="#about_me" onClick={() => setIsOpen(false)}>
                  {t.nav.about}
                </a>
              </li>
              <li className="hover:text-flame-500">
                <a href="#projects" onClick={() => setIsOpen(false)}>
                  {t.nav.projects}
                </a>
              </li>
              <li className="hover:text-flame-500">
                <a href="#technologies" onClick={() => setIsOpen(false)}>
                  {t.nav.technologies}
                </a>
              </li>
              <li className="hover:text-flame-500">
                <a href="#studies" onClick={() => setIsOpen(false)}>
                  {t.nav.studies}
                </a>
              </li>
              <li className="hover:text-flame-500">
                <a href="#contact" onClick={() => setIsOpen(false)}>
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>

      <nav className="hidden lg:flex bg-flame-500 rounded-[100px] w-full max-w-[1318px] h-[100px] lg:h-[70px] items-center justify-between px-10 xl:px-20">
        <ul className="flex gap-5 text-flame-900 font-black uppercase">
          <li className="hover:text-flame-white transition-colors">
            <a href="#about_me">{t.nav.about}</a>
          </li>
          <li className="hover:text-flame-white transition-colors">
            <a href="#projects">{t.nav.projects}</a>
          </li>
          <li className="hover:text-flame-white transition-colors">
            <a href="#technologies">{t.nav.technologies}</a>
          </li>
          <li className="hover:text-flame-white transition-colors">
            <a href="#studies">{t.nav.studies}</a>
          </li>
          <li className="hover:text-flame-white transition-colors">
            <a href="#contact">{t.nav.contact}</a>
          </li>
        </ul>

        <LanguageToggle />
      </nav>
    </header>
  );
}