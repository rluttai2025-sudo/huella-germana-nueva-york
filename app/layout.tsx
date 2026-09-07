import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Huella germana en Nueva York",
  description: "Mapa interactivo de personalidades alemanas, suizas y danesas en Nueva York.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head><meta name="codex-preview" content="development" /></head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
