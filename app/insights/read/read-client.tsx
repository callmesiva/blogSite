"use client";

import Link from "next/link";
import { useMemo } from "react";
import { useSearchParams } from "next/navigation";

function ArrowRightIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m13 5 7 7-7 7" />
    </svg>
  );
}

function isValidHttpUrl(value: string) {
  try {
    const parsed = new URL(value);
    return parsed.protocol === "http:" || parsed.protocol === "https:";
  } catch {
    return false;
  }
}

export default function InsightsReadClient() {
  const searchParams = useSearchParams();
  const urlParam = searchParams.get("url") ?? "";

  const safeUrl = useMemo(() => {
    if (!isValidHttpUrl(urlParam)) {
      return null;
    }
    return urlParam;
  }, [urlParam]);

  return (
    <main className="polish-layout min-h-screen overflow-x-hidden bg-[#f2f4f7] text-[#0f172a]">
      <section className="hero-grid">
        <div className="mx-auto w-full max-w-[1660px] px-5 pb-12 pt-10 sm:px-8 lg:px-24 lg:pb-16 lg:pt-14">
          <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-[#2d7a83]">Insight Reader</p>
          <h1 className="mt-3 text-[clamp(1.75rem,2.6vw,2.8rem)] font-semibold leading-[1.14] tracking-[-0.03em] text-[#0c2d4d]">
            Reading insight inside Wolvio
          </h1>
        </div>
      </section>

      <section className="w-full bg-[#eef3f7] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-[1660px] px-5 sm:px-8 lg:px-24">
          {!safeUrl ? (
            <div className="rounded-[24px] border border-rose-200 bg-rose-50 p-6">
              <p className="text-[16px] font-semibold text-rose-700">Invalid insight link.</p>
              <Link href="/insights" className="mt-4 inline-flex items-center gap-2 text-[15px] font-semibold text-[#2f7f88]">
                Back to Insights
                <ArrowRightIcon />
              </Link>
            </div>
          ) : (
            <div className="overflow-hidden rounded-[24px] border border-[#d7dde4] bg-white">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#e0e7ed] px-5 py-4">
                <p className="text-[14px] text-[#60758d]">
                  If the site blocks embedding, use open in new tab.
                </p>
                <div className="flex items-center gap-3">
                  <Link href="/insights" className="text-[14px] font-semibold text-[#2f7f88]">
                    Back
                  </Link>
                  <a
                    href={safeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-[#c9dbe3] bg-[#f4f9fa] px-4 py-2 text-[14px] font-semibold text-[#2f7f88]"
                  >
                    Open in new tab
                    <ArrowRightIcon />
                  </a>
                </div>
              </div>
              <iframe
                title="Insight content"
                src={safeUrl}
                className="h-[75vh] min-h-[640px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
