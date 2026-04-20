import type { Metadata } from "next";
import CareersClient from "./careers-client";

export const metadata: Metadata = {
  title: "Careers at Wolvio | Veeva & AI Automation Jobs India",
  description:
    "Join Wolvio's specialist teams in Chennai and Coimbatore. Build expertise in Veeva life sciences consulting or AI automation. Roles where your work actually matters.",
};

export default function CareersPage() {
  return <CareersClient />;
}
