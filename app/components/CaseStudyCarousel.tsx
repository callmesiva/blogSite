"use client";
import { useState, useEffect, useRef, useCallback } from "react";

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

const DURATION = 5000;

export default function CaseStudyCarousel() {
  const [current, setCurrent] = useState(0);
  const [animDir, setAnimDir] = useState<"left" | "right" | null>(null);
  const [progress, setProgress] = useState(0);

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number>(Date.now());
  const pausedRef = useRef(false);
  const remainingRef = useRef(DURATION);

  const goTo = useCallback((next: number, dir: "left" | "right") => {
    setAnimDir(dir);
    setCurrent(next);
    setProgress(0);
    startRef.current = Date.now();
    remainingRef.current = DURATION;
  }, []);

  const goNext = useCallback(() => {
    goTo((current + 1) % caseCards.length, "left");
  }, [current, goTo]);

  const goPrev = useCallback(() => {
    goTo((current - 1 + caseCards.length) % caseCards.length, "right");
  }, [current, goTo]);

  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(goNext, remainingRef.current);

    const tick = () => {
      if (!pausedRef.current) {
        const elapsed = Date.now() - startRef.current;
        setProgress(Math.min((elapsed / DURATION) * 100, 100));
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [current, goNext]);

  const handleMouseEnter = () => {
    pausedRef.current = true;
    remainingRef.current = Math.max(
      DURATION - (Date.now() - startRef.current),
      0,
    );
    if (timerRef.current) clearTimeout(timerRef.current);
  };

  const handleMouseLeave = () => {
    pausedRef.current = false;
    startRef.current = Date.now() - (DURATION - remainingRef.current);
    timerRef.current = setTimeout(goNext, remainingRef.current);
  };

  const cs = caseCards[current];
  if (!cs) return null;

  return (
    <section className="py-16">
      <div className="mx-auto max-w-[960px] px-6 lg:px-8">
        {/* Local Keyframes for unified animations */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
          @keyframes slideInRight { from { opacity: 0; transform: translateX(30px); } to { opacity: 1; transform: translateX(0); } }
          @keyframes slideInLeft { from { opacity: 0; transform: translateX(-30px); } to { opacity: 1; transform: translateX(0); } }
        `,
          }}
        />

        {/* ── THE SINGLE CARD ── */}
        <div
          className="relative overflow-hidden rounded-[24px] bg-white shadow-[0_12px_32px_rgba(7,30,61,0.06)]"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Animated Content Wrapper */}
          <div
            key={current}
            style={{
              animation: animDir
                ? `slideIn${animDir === "left" ? "Right" : "Left"} 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards`
                : undefined,
            }}
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
                <p
                  className="text-[12px] font-bold uppercase tracking-[0.08em]"
                  style={{ color: cs.tagColor }}
                >
                  {cs.company}
                </p>
                <h3 className="mt-2 text-[24px] font-bold leading-[1.3] text-[#173652] sm:text-[28px]">
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

          {/* ── PROGRESS BAR (As Bottom Border) ── */}
          <div className="absolute bottom-0 left-0 h-1.5 w-full bg-[#f0f4f8]">
            <div
              className="h-full transition-none"
              style={{
                width: `${progress}%`,
                background: cs.tagColor, // Adapts to the card's active color!
              }}
            />
          </div>
        </div>

        {/* ── UNIFIED CONTROLS ── */}
        <div className="mt-6 flex items-center justify-between px-2 sm:px-4">
          {/* Dots */}
          <div className="flex gap-2.5">
            {caseCards.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i, i > current ? "left" : "right")}
                aria-label={`Go to case study ${i + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  i === current
                    ? "w-8"
                    : "w-2.5 bg-[#cbd5e1] hover:bg-[#94a3b8]"
                }`}
                style={{
                  backgroundColor: i === current ? cs.tagColor : undefined,
                }}
              />
            ))}
          </div>

          {/* Arrows */}
          <div className="flex gap-3">
            <button
              onClick={goPrev}
              className="group flex h-11 w-11 items-center justify-center rounded-full border border-[#dce6ef] bg-white text-[#63798d] transition-all hover:border-[#173652] hover:text-[#173652]"
            >
              <svg
                className="w-5 h-5 transition-transform group-hover:-translate-x-0.5"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M10 12L6 8l4-4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              onClick={goNext}
              className="group flex h-11 w-11 items-center justify-center rounded-full border border-[#dce6ef] bg-white text-[#63798d] transition-all hover:border-[#173652] hover:text-[#173652]"
            >
              <svg
                className="w-5 h-5 transition-transform group-hover:translate-x-0.5"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M6 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* ── BOTTOM CTA BLOCK ── */}
        <div className="mt-10 flex flex-col justify-between gap-6 rounded-[24px] bg-[#071e3d] p-7 sm:p-10 md:flex-row md:items-center">
          <div className="text-white">
            <h4 className="text-[20px] font-bold leading-[1.2] text-white">
              See the full transformation story
            </h4>
            <p className="mt-2 max-w-[480px] text-[15px] font-light leading-[1.6] text-[#8aa4b8]">
              Deep-dive into the data migration challenges, AI classification
              approach, and go-live strategy.
            </p>
          </div>

          <div className="flex w-full shrink-0 flex-col gap-3 sm:flex-row md:w-auto">
            <a
              href={cs.link}
              className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-[14px] font-semibold text-white transition-all duration-200 hover:brightness-110"
              style={{ backgroundColor: cs.tagColor }}
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
    </section>
  );
}
