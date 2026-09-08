import type { Metadata } from "next";
import "./globals.css";
import AnimatedBackground from "@/components/animatedBackground";
import Navbar from "@/components/layout/navbar";
import LenisProvider from "@/providers/LenisProvider";
import { LanguageProvider } from "@/providers/LanguageContext";

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
      <body className="bg-black min-h-screen">
        <LanguageProvider>
          <LenisProvider>
            <AnimatedBackground>
              <Navbar />
              {children}
            </AnimatedBackground>
          </LenisProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}