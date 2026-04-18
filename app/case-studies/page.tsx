import type { Metadata } from "next";
import { Suspense } from "react";
import CaseStudiesClient from "./case-studies-client";

export const metadata: Metadata = {
  title: "Case Studies | Wolvio",
  description:
    "Explore how we've helped clients navigate complexity, reduce risk, and achieve compliant, dependable outcomes across their Veeva Vault environments.",
};

function CaseStudiesFallback() {
  return <div className="min-h-screen bg-[#f8fafc]" />;
}

export default function CaseStudiesPage() {
  return (
    <Suspense fallback={<CaseStudiesFallback />}>
      <CaseStudiesClient />
    </Suspense>
  );
}
