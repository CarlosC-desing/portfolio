import type { Metadata } from "next";
import "./globals.css";
import AnimatedBackground from "@/components/animatedBackground";
import Navbar from "@/components/layout/navbar";

export const metadata: Metadata = {
  title: "Portafolio",
  description: "Portafolio profesional",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-black min-h-screen text-flame-white">
        <AnimatedBackground>
          <Navbar />
          {children}
        </AnimatedBackground>
      </body>
    </html>
  );
}
