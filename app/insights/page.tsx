import type { Metadata } from "next";
import InsightsClient from "./insights-client";

export const metadata: Metadata = {
  title: "Insights | Wolvio",
  description:
    "Explore Wolvio insights, white papers, and blog posts from our WordPress knowledge hub.",
};

export default function InsightsPage() {
  return <InsightsClient />;
}
