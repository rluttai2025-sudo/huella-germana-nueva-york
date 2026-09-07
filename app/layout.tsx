import type { Metadata } from "next";
import "./globals.css";

const siteBasePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const metadata: Metadata = {
  title: "Huella germana en Nueva York",
  description: "Mapa interactivo de personalidades alemanas, suizas y danesas en Nueva York.",
  icons: {
    icon: `${siteBasePath}/favicon.svg`,
    shortcut: `${siteBasePath}/favicon.svg`,
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
