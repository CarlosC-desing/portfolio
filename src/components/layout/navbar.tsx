"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="py-10 flex justify-between items-center">
      <div className="relative w-[50px] h-[50px] md:w-[80px] md:h-[80px]">
        <Image
          src="/logo.png"
          alt="Imagen con diferentes tamaños"
          fill
          className="p-1"
          sizes="(max-width: 768px) 192px, 384px"
        />
      </div>

      <button
        type="button"
        className="relative sm:hidden w-[80px] h-[40px] bg-flame-500 rounded-[10px]"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        <Image
          src={isOpen ? "/svg/xIcon.svg" : "/svg/hamburgerIcon.svg"}
          alt="Imagen secundaria"
          fill
          className="px-4 p-1.5"
          sizes="50px"
        />
      </button>

      {/* Menú Móvil con AnimatePresence para despliegue suave */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="sm:hidden absolute top-20 right-3 mt-5"
          >
            <ul className="text-[13px] flex flex-col gap-1 uppercase font-bold">
              <li className="hover:text-flame-500 hover:border-b hover:border-b-flame-500">
                <Link href="#about_me" onClick={() => setIsOpen(false)}>
                  About Me
                </Link>
              </li>
              <li className="hover:text-flame-500 hover:border-b hover:border-b-flame-500">
                <Link href="#projects" onClick={() => setIsOpen(false)}>
                  Projects
                </Link>
              </li>
              <li className="hover:text-flame-500 hover:border-b hover:border-b-flame-500">
                <Link href="#technologies" onClick={() => setIsOpen(false)}>
                  Technologies
                </Link>
              </li>
              <li className="hover:text-flame-500 hover:border-b hover:border-b-flame-500">
                <Link href="#studies" onClick={() => setIsOpen(false)}>
                  Studies
                </Link>
              </li>
              <li className="hover:text-flame-500 hover:border-b hover:border-b-flame-500">
                <Link href="#contact" onClick={() => setIsOpen(false)}>
                  Contact
                </Link>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Menú Desktop intacto en estilos */}
      <nav className="hidden sm:flex bg-flame-500 rounded-[100px] w-[1318px] h-[100px] items-center justify-end px-10">
        <ul className="flex gap-5 text-flame-900 font-black uppercase">
          <li>
            <Link href="#about_me">About Me</Link>
          </li>
          <li>
            <Link href="#projects">Projects</Link>
          </li>
          <li>
            <Link href="#technologies">Technologies</Link>
          </li>
          <li>
            <Link href="#studies">Studies</Link>
          </li>
          <li>
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
