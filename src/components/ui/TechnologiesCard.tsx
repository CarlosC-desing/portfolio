"use client";
import React, { useState } from "react";
import { IconType } from "react-icons";
import { PROJECT_COLOR_CLASS, TechnologiesColor, TechnologiesId } from "@/data/technologies";

interface Props {
  color: TechnologiesColor;
  title: TechnologiesId | string;
  icons?: IconType[];
  iconColor?: string;
  iconClassName?: string | string[];
  imageSrc?: string;
}

export default function TechnologiesCard({
  color,
  title,
  icons,
  iconColor,
  iconClassName = "",
  imageSrc,
}: Props) {
  const bgClass = PROJECT_COLOR_CLASS[color] || "bg-flame-500";
  const textColor = iconColor || "text-white";
  const baseSize = "w-[60px] h-[60px] md:w-[100px] md:h-[100px]";

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isFocused, setIsFocused] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <article
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsFocused(true)}
      onMouseLeave={() => setIsFocused(false)}
      className={`relative overflow-hidden w-full h-full ${bgClass} rounded-2xl p-4 flex flex-col items-center justify-between gap-3 shadow-xl transition-all duration-300 hover:scale-[1.02] group`}
    >
      {/* Spotlight más brillante y notorio */}
      {isFocused && (
        <div
          className="absolute pointer-events-none -inset-px rounded-2xl transition duration-300 opacity-100 z-0"
          style={{
            background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.45), transparent 30%)`,
          }}
        />
      )}

      <span className="relative z-10 bg-black text-white font-black text-xs md:text-sm px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
        {title}
      </span>

      <div className="relative z-10 flex items-center justify-center gap-3 flex-wrap my-auto">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={title}
            className={`${baseSize} shrink-0 object-contain ${typeof iconClassName === "string" ? iconClassName : ""
              }`}
          />
        ) : (
          icons?.map((IconComponent, index) => {
            const extraClass = Array.isArray(iconClassName)
              ? iconClassName[index] || ""
              : iconClassName;

            return (
              <IconComponent
                key={`${title}-icon-${index}`}
                className={`${baseSize} shrink-0 ${textColor} ${extraClass} transition-transform duration-300 group-hover:scale-110`}
              />
            );
          })
        )}
      </div>
    </article>
  );
}