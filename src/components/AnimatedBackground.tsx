"use client";

import { motion } from "framer-motion";

export default function AnimatedBackground({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      className="bg-flame-950 bg-zigzag-pattern mx-auto min-h-screen max-w-[1728px] px-4 sm:px-6 md:px-10 lg:px-30 py-6 overflow-x-hidden 2xl:[mask-image:linear-gradient(to_right,transparent_0px,black_50px,black_calc(100%-50px),transparent_100%)]"
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
