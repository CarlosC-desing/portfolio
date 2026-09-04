"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="flex">
      <div className="relative w-48 h-48 md:w-96 md:h-96">
        <Image
          src="/mi-imagen.jpg"
          alt="Imagen con diferentes tamaños"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 192px, 384px"
        />
      </div>

      <div className="sm:hidden"></div>

      <nav className="hidden sm:flex">
        <ul>
          <li>
            <Link href="">About Me</Link>
          </li>
          <li>
            <Link href="">Projects</Link>
          </li>
          <li>
            <Link href="">Technologies</Link>
          </li>
          <li>
            <Link href="">Studies</Link>
          </li>
          <li>
            <Link href="">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}