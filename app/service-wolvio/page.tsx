import type { Metadata } from "next";

import WolvioIntelligenceClient from "./WolvioIntelligenceClient"

export const metadata: Metadata = {
  title: "AI Automation Services & Intelligent Agents | Wolvio  ",
  description:
    "Wolvio Intelligence builds AI agents, document processing, voice AI,workflow automation for business operations. Production-proven systems across industries.",
};

export default function ServiceWolvioPage() {
  return (
    <main className="polish-layout min-h-screen overflow-x-hidden bg-[#f8fafc] text-[#0f172a]">
      <WolvioIntelligenceClient />
    </main>
  );
}
