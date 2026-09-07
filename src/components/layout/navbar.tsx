"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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

      <button
        type="button"
        className="lg:hidden w-[100px] h-[50px] bg-flame-500 rounded-[10px] flex justify-center items-center"
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

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="sm:hidden absolute top-20 right-3 mt-5 bg-black/20 p-4 rounded-xl z-50 backdrop-blur-md"
          >
            <ul className="text-[13px] flex flex-col gap-3 uppercase font-bold text-flame-white">
              <li className="hover:text-flame-500">
                <Link href="#about_me" onClick={() => setIsOpen(false)}>
                  About Me
                </Link>
              </li>
              <li className="hover:text-flame-500">
                <Link href="#projects" onClick={() => setIsOpen(false)}>
                  Projects
                </Link>
              </li>
              <li className="hover:text-flame-500">
                <Link href="#technologies" onClick={() => setIsOpen(false)}>
                  Technologies
                </Link>
              </li>
              <li className="hover:text-flame-500">
                <Link href="#studies" onClick={() => setIsOpen(false)}>
                  Studies
                </Link>
              </li>
              <li className="hover:text-flame-500">
                <Link href="#contact" onClick={() => setIsOpen(false)}>
                  Contact
                </Link>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>

      <nav className="hidden lg:flex bg-flame-500 rounded-[100px] w-full max-w-[1318px] h-[100px] lg:h-[70px] items-center justify-end px-20">
        <ul className="flex gap-5 text-flame-900 font-black uppercase">
          <li className="hover:text-flame-white transition-colors">
            <Link href="#about_me">About Me</Link>
          </li>
          <li className="hover:text-flame-white transition-colors">
            <Link href="#projects">Projects</Link>
          </li>
          <li className="hover:text-flame-white transition-colors">
            <Link href="#technologies">Technologies</Link>
          </li>
          <li className="hover:text-flame-white transition-colors">
            <Link href="#studies">Studies</Link>
          </li>
          <li className="hover:text-flame-white transition-colors">
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
