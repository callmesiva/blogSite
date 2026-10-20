import type { Metadata } from "next";

import VeevaServicesClient from "./VeevaServicesClient";

export const metadata: Metadata = {
  title: "Veeva Implementation Partner | Wolvio Vault Specialists",
  description:
    "Wolvio is a specialist Veeva implementation partner delivering compliant Vault design, configuration, integration, validation and deployment for life sciences.",
};

export default function ServiceVeevaPage() {
  return (
    <main className="polish-layout min-h-screen overflow-x-hidden bg-[#f8fafc] text-[#0f172a]">
      <VeevaServicesClient />
    </main>
  );
}
