import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { LenisProvider } from "@/components/LenisProvider";
import { GridBackground } from "@/components/GridBackground";

// ===== Atyp Display =====
const atypDisplay = localFont({
  src: [
    {
      path: "./fonts/AtypDisplayTRIAL-Regular-BF65727125d566e.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/AtypDisplayTRIAL-Italic-BF65727125bac9a.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/AtypDisplayTRIAL-Light-BF65727125c722b.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/AtypDisplayTRIAL-Bold-BF65727125c8d1d.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/AtypDisplayTRIAL-Semibold-BF65727125c6fc9.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/AtypTextTRIAL-SemiboldItalic-BF65727125bc15d.otf",
      weight: "800",
      style: "italic",
    },
  ],
  variable: "--font-atyp-display",
  display: "swap",
});

// ===== Atyp Test (Variable Font) =====
const atypTest = localFont({
  src: [
    {
      path: "./fonts/AtypTEST-VariableVF-BF6572712448914.ttf",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "./fonts/AtypTEST-VariableVF-BF6572712448914.ttf",
      weight: "100 900",
      style: "italic",
    },
  ],
  variable: "--font-atyp-test",
  display: "swap",
});
// ===== Atyp Test (Variable Font) =====
const atypText = localFont({
  src: [
    {
      path: "./fonts/AtypTextTRIAL-LightItalic-BF65727125becd9.otf",
      weight: "100 900",
      style: "",
    },
  ],
  variable: "--font-atyp-text",
  display: "swap",
});

// ===== Heimat Mono =====
const heimatMono = localFont({
  src: [
    { path: "./fonts/Heimat-Mono.ttf", weight: "400", style: "normal" },
    { path: "./fonts/Heimat-Mono-Italic.ttf", weight: "400", style: "italic" },
    { path: "./fonts/Heimat-Mono-Bold.ttf", weight: "700", style: "normal" },
    { path: "./fonts/Heimat-Mono-Light.ttf", weight: "300", style: "normal" },
    {
      path: "./fonts/Heimat-Mono-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-heimat-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pjr - Portfólio",
  description:
    "Portfólio de Paulo Junior - Desenvolvedor Frontend e web designer em Vila Velha, Vitória, Serra e Espírito Santo.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${atypDisplay.variable} ${atypTest.variable} ${atypText.variable} ${heimatMono.variable} antialiased`}
      >
        <LenisProvider />
        {children}
      </body>
    </html>
  );
}
