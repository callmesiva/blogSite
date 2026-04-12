import type { Metadata } from "next"
import { Suspense } from "react"
import InsightsClient from "./insights-client"

export const metadata: Metadata = {
  title: "Insights | Wolvio",
  description:
    "Explore Wolvio insights, white papers, and blog posts from our WordPress knowledge hub.",
}

function InsightsPageFallback() {
  return <div className="min-h-screen bg-[#f8fafc]" />
}

export default function InsightsPage() {
  return (
    <Suspense fallback={<InsightsPageFallback />}>
      <InsightsClient />
    </Suspense>
  )
}
