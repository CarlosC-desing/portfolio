import type { Metadata } from "next";
import "./globals.css";

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
      <body className="bg-flame-950 bg-zigzag-pattern min-h-screen text-flame-white">
        {children}
      </body>
    </html>
  );
}