import type { Metadata } from "next";
import CareersClient from "./careers-client";

export const metadata: Metadata = {
  title: "Careers | Wolvio",
  description:
    "Build your career at Wolvio across specialist Veeva consulting and AI automation practices.",
};

export default function CareersPage() {
  return <CareersClient />;
}
