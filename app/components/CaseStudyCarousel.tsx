"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

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

interface CaseCard {
  tag: string;
  tagColor: string;
  imgBg: string;
  company: string;
  title: string;
  description: string;
  stats: { value: string; label: string }[];
  image: string;
  link: string;
}

const caseCards: CaseCard[] = [
  {
    tag: "Challenge",
    tagColor: "#0b3a63",
    imgBg: "#dbe8f4",
    company: "Global Pharma Co.",
    title: "Fragmented Systems, Compounding Risk",
    description:
      "A UK-based global pharma company was running a rigid, non-integrable legacy CTMS with no real-time visibility, an eTMF that failed inspection-readiness standards, and business teams dependent on spreadsheets and emails — creating siloed data, duplicated effort, and systemic compliance risk across clinical operations.",
    stats: [
      { value: "40%", label: "Faster submission cycles" },
      { value: "12", label: "Markets integrated" },
    ],
    image: "/images/case-studies/pharma.jpg",
    link: "#",
  },
  {
    tag: "Solution",
    tagColor: "#0f6e56",
    imgBg: "#d8eee7",
    company: "MedTech Manufacturer",
    title: "Three-Phase Vault Transformation",
    description:
      "Wolvio delivered a three-phase Veeva Vault transformation replacing and decommissioning legacy eTMF and CTMS, then building Study Startup all within a single unified vault. Delivery included complex data migrations, multi-directional integrations, AI-powered TMF classification, Japan CTMS, Risk-Based Study Management, custom SDK development, and mobile enablement.",
    stats: [
      { value: "60%", label: "CAPA closure rate improvement" },
      { value: "6", label: "Sites unified" },
    ],
    image: "/images/case-studies/medtech.jpg",
    link: "#",
  },
  {
    tag: "Outcome",
    tagColor: "#534ab7",
    imgBg: "#e4dff5",
    company: "Multi-site Ops Group",
    title: "One Vault. Zero Legacy. Audit Confident.",
    description:
      "Three systems unified into one vault. All legacy platforms fully decommissioned. Spreadsheet-driven workflows eliminated entirely. Teams gained real-time visibility across all studies, faster site activation, stronger inspection readiness, and reduced compliance risk positioning the client for scalable, audit-confident clinical trial management globally.",
    stats: [
      { value: "3x", label: "Faster lot traceability" },
      { value: "100%", label: "Audit trail coverage" },
    ],
    image: "/images/case-studies/operations.jpg",
    link: "#",
  },
];

export default function CaseStudyCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % caseCards.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + caseCards.length) % caseCards.length,
    );
  };

  const cs = caseCards[currentIndex];

  if (!cs) return null;

  return (
    <div className="mx-auto mt-10 max-w-[960px]">
      {/* Local scoped style for GPU-accelerated progress bar and fade animation */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes gpuProgress {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        @keyframes carouselFade {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `,
        }}
      />

      {/* ── THE SINGLE CARD (With embedded controls & progress) ── */}
      <div
        className="group relative overflow-hidden rounded-[24px] bg-white shadow-[0_12px_32px_rgba(7,30,61,0.06)]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Animated Content Wrapper */}
        <div
          key={currentIndex}
          className="animate-[carouselFade_0.6s_cubic-bezier(0.22,1,0.36,1)_forwards]"
        >
          <article className="flex flex-col md:flex-row">
            {/* Left: Image Area */}
            <div
              className="relative h-[200px] w-full shrink-0 overflow-hidden md:h-auto md:w-[340px]"
              style={{ background: cs.imgBg }}
            >
              <span
                className="absolute left-6 top-6 rounded-[6px] px-3 py-1.5 text-[11px] font-bold tracking-wide uppercase shadow-sm"
                style={{ background: cs.tagColor, color: "#e6f1fb" }}
              >
                {cs.tag}
              </span>
            </div>

            {/* Right: Content Area */}
            <div className="flex flex-1 flex-col p-6 pb-10 sm:p-10 sm:pb-14">
              <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#2f7f88]">
                {cs.company}
              </p>
              <h3 className="mt-2 font-serif text-[24px] font-bold leading-[1.3] text-[#173652] sm:text-[28px]">
                {cs.title}
              </h3>
              <p className="mt-3 text-[15.5px] font-light leading-[1.7] text-[#63798d]">
                {cs.description}
              </p>

              {/* Stats Grid */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                {cs.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-[12px] border border-[#e6f1fb] bg-[#f5f8fb] px-5 py-4"
                  >
                    <p className="text-[26px] font-bold leading-none text-[#0b3a63]">
                      {stat.value}
                    </p>
                    <p className="mt-1.5 text-[12px] leading-[1.4] text-[#63798d]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </article>
        </div>

        {/* ── EMBEDDED CONTROLS ── */}

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#173652] opacity-0 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-[#2f7f88] hover:text-white group-hover:opacity-100 sm:left-6"
          aria-label="Previous case study"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#173652] opacity-0 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-[#2f7f88] hover:text-white group-hover:opacity-100 sm:right-6"
          aria-label="Next case study"
        >
          <ArrowRight className="h-5 w-5" />
        </button>

        {/* ── BOTTOM PROGRESS BAR BORDER ── */}
        {/* <div className="absolute bottom-1 left-0 h-1.5 w-full bg-black">
          <div
            key={currentIndex} // Forces animation restart on slide change
            className="h-full w-full origin-left bg-white scale-x-0"
            style={{
              animation: `gpuProgress 5s linear forwards`,
              animationPlayState: isHovered ? "paused" : "running",
            }}
            onAnimationEnd={nextSlide} // Flawlessly triggers the next slide when animation completes!
          />
        </div> */}

        
      </div>

      {/* ── BOTTOM CTA BLOCK ── */}
      <div className="mt-8 flex flex-col justify-between gap-6 rounded-[24px] bg-[#071e3d] p-7 sm:p-10 md:flex-row md:items-center">
        <div className="!text-white">
          <h4 className="tone-lock !text-white">
            See the full transformation story
          </h4>
          <p className="mt-2 max-w-[480px] text-[15px] font-light leading-[1.6] text-[#8aa4b8]">
            Deep-dive into the data migration challenges, AI classification
            approach, and go-live strategy.
          </p>
        </div>

        <div className="flex w-full shrink-0 flex-col gap-3 sm:flex-row md:w-auto">
          {/* Dynamically linked to the active card */}
          <a
            href={cs.link}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2f7f88] px-7 py-3.5 text-[14px] font-semibold text-white transition-all duration-200 hover:bg-[#256a72]"
          >
            Read full case study <ArrowRightIcon />
          </a>
          <a
            href="/case-studies"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[#8aa4b8]/30 px-7 py-3.5 text-[14px] font-semibold text-white transition-all duration-200 hover:bg-white/5"
          >
            View all case studies <ArrowRightIcon />
          </a>
        </div>
      </div>
    </div>
  );
}
