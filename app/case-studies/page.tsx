import type { Metadata } from "next";
import { Suspense } from "react";
import CaseStudiesClient from "./case-studies-client";

export const metadata: Metadata = {
  title: "Veeva Consulting Case Studies & Results | Wolvio",
  description:
    "Explore Wolvio's Veeva consulting case studies across pharma, biotech, and regulated industries. Real outcomes, delivered by specialist consultants.",
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
