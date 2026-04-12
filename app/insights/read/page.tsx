import InsightsReadClient from "./read-client"
import { Suspense } from "react"
import type { Metadata } from "next"


export const metadata: Metadata = {
  title: "Read Insight | Wolvio",
}

function ReadPageFallback() {
  return <div className="min-h-screen bg-white" />
}

export default function ReadPage() {
  return (
    <Suspense fallback={<ReadPageFallback />}>
      <InsightsReadClient />
    </Suspense>
  )
}