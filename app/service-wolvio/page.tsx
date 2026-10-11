import type { Metadata } from "next";
import { Archivo, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";

import WolvioIntelligenceClient from "./WolvioIntelligenceClient";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-archivo",
  display: "swap",
});
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});
const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AI Automation Services & Intelligent Agents | Wolvio",
  description:
    "Wolvio Intelligence builds AI agents, document processing, voice AI, workflow automation for business operations. Production-proven systems across industries.",
};

export default function ServiceWolvioPage() {
  return (
    <main
      className={`${archivo.variable} ${plexMono.variable} ${plexSans.variable}`}
    >
      <WolvioIntelligenceClient />
    </main>
  );
}
