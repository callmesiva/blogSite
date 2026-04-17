"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

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

export interface TabItem {
  id: string;
  title: string;
  desc: string;
}

// 2. Define all the props the component can accept
interface VerticalTabsSectionProps {
  kicker: string; 
  title: string;
  description?: string;
  items: TabItem[];
  ctaText?: string;
  ctaLink?: string;
}

export default function VerticalTabsSection({
  kicker,
  title,
  description = "",
  items,
  ctaText = "Talk to Us About Managed Services",
  ctaLink = "/service-veeva",
}: VerticalTabsSectionProps) {
  // 3. Initialize state with the first item's ID safely
  const [activeTabId, setActiveTabId] = useState(items[0]?.id);

  // If items change (e.g., loaded from an API), reset the active tab
  useEffect(() => {
    if (items.length > 0) setActiveTabId(items[0].id);
  }, [items]);

  // Find the currently selected data
  const activeModel = items.find((model) => model.id === activeTabId);

  // Fallback if no items are passed
  if (!items || items.length === 0) return null;

  return (
    <section className="site-section bg-[#f2f8f5]">
      <ScrollReveal className="site-container mx-auto max-w-[1100px]">
        {/* ── DYNAMIC HEADER ── */}
          <div className="mb-10 lg:mb-14 text-center lg:text-left">
            <p className="site-kicker mb-4 inline-flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[2.2px] text-[#2f6f73]">
              {kicker}
            </p>
            <h2>{title}</h2>
            {description && (
              <p className="site-body mt-5 max-w-[980px]">{description}</p>
            )}
          </div>

        <div className="flex flex-col overflow-hidden rounded-[24px] border border-[#d7dde4] bg-white shadow-[0_12px_32px_rgba(7,30,61,0.05)] lg:flex-row lg:rounded-[32px]">
          {/* ── LEFT: DYNAMIC TABS ── */}
          <div className="flex shrink-0 flex-row overflow-x-auto border-b border-[#d7dde4] bg-[#f8fafc] lg:w-[360px] lg:flex-col lg:border-b-0 lg:border-r [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {items.map((model) => {
              const isActive = activeTabId === model.id;

              return (
                <button
                  key={model.id}
                  onClick={() => setActiveTabId(model.id)}
                  className={`group relative flex w-[240px] shrink-0 flex-col items-start p-6 text-left transition-colors duration-300 lg:w-full lg:p-7 lg:border-b lg:border-[#d7dde4]/50 lg:last:border-none ${
                    isActive ? "bg-[#2f6f73]" : "hover:bg-[#eef2f6]"
                  }`}
                >
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-1 transition-transform duration-300 origin-left lg:bottom-0 lg:left-0 lg:right-auto lg:top-0 lg:h-auto lg:w-1 lg:origin-top ${
                      isActive ? "scale-100" : "scale-0"
                    }`}
                  ></div>
                  <h3
                    className={`text-[16px] font-bold leading-[1.35] transition-colors duration-300 lg:text-[18px] ${
                      isActive ? "text-white" : "text-[#2f6f73]"
                    }`}
                  >
                    {model.title}
                  </h3>
                </button>
              );
            })}
          </div>

          {/* ── RIGHT: DYNAMIC CONTENT ── */}
          <div className="relative flex flex-1 flex-col justify-center bg-white p-8 lg:min-h-[360px] lg:p-14">
            <div key={activeModel?.id} className="animate-tab flex flex-col">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-[16px] bg-[#e0f5ed]">
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6 fill-none stroke-[#2f6f73] stroke-[1.8] strokeLinecap-round strokeLinejoin-round"
                >
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
              </div>

              <h3 className="mb-4  text-[24px] font-bold leading-[1.2] text-[#071e3d] lg:text-[30px]">
                {activeModel?.title}
              </h3>

              <p className="max-w-[650px] text-[15.5px] font-light leading-[1.85] text-[#4a6070] lg:text-[16.5px]">
                {activeModel?.desc}
              </p>
            </div>
          </div>
        </div>

        {/* ── DYNAMIC CTA BUTTON ── */}
        {ctaLink && ctaText && (
          <div className="mt-10 flex justify-center lg:mt-12 lg:justify-start">
            <Link
              href={ctaLink}
              className="group inline-flex items-center gap-2.5 rounded-full border border-[#d7dde4] bg-white px-8 py-3.5 text-[15px] font-semibold text-[#2f6f73] shadow-sm transition-all duration-300 hover:gap-3.5 hover:border-[#1D9E75] hover:bg-[#4f8f92] hover:text-white"
            >
              {ctaText}
              <ArrowRightIcon />
            </Link>
          </div>
        )}
      </ScrollReveal>
    </section>
  );
}
