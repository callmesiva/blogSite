import type { Metadata } from "next";
import IndustriesClient from "./industries-client";

export const metadata: Metadata = {
  title: "Industries | Wolvio",
  description:
    "Specialist Veeva consulting across regulated industries including life sciences, CPG, food and beverage, and chemical.",
};

export default function IndustriesPage() {
  return <IndustriesClient />;
}
