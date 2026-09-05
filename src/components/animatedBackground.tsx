"use client";

import { motion } from "framer-motion";

export default function AnimatedBackground({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      className="bg-flame-950 bg-zigzag-pattern mx-auto min-h-screen max-w-[1728px] px-5 md:px-[120px]"
      initial={{ backgroundPositionX: "0px" }}
      whileHover={{
        backgroundPositionX: ["0px", "-120px"],
        transition: {
          repeat: Infinity,
          ease: "linear",
          duration: 2.5,
        },
      }}
    >
      {children}
    </motion.div>
  );
}
