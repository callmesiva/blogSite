"use client";
import { useState, useEffect, useRef, useCallback } from "react";

const testimonials = [
  {
    quote:
      "Their team understood our regulatory landscape from day one. The Vault RIM rollout was delivered on time across three regions — something we'd struggled to achieve with two previous vendors.",
    name: "VP Regulatory Affairs",
    role: "Global Pharma, Switzerland",
    accent: "#0b3a63",
    stars: 5,
  },
  {
    quote:
      "We moved our entire quality management to Veeva QualityOne in under four months. The managed services model means we never worry about upgrades, validations, or support gaps — it just works.",
    name: "Head of Quality Systems",
    role: "MedTech Manufacturer, India",
    accent: "#2f8b92",
    stars: 5,
  },
  {
    quote:
      "The AI automation layer they built on top of our existing stack cut our document processing time by 70%. Our ops team went from drowning in manual work to focusing on actual decisions.",
    name: "Chief Operating Officer",
    role: "Life Sciences Group, Bangalore",
    accent: "#534ab7",
    stars: 5,
  },
  {
    quote:
      "What impressed us most was how quickly they got up to speed on our processes. Within two weeks they were running our support queue, and within six they had redesigned the escalation flow entirely.",
    name: "Director of Customer Operations",
    role: "Diagnostics Company, Mumbai",
    accent: "#0b3a63",
    stars: 4,
  },
  {
    quote:
      "Partnering with them on our recall readiness programme was the right call. We went from a 4-day average traceability exercise to same-day. That's not an optimisation — that's a transformation.",
    name: "SVP Supply Chain",
    role: "FMCG Conglomerate, Chennai",
    accent: "#2f8b92",
    stars: 5,
  },
];

const DURATION = 5000;

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [animDir, setAnimDir] = useState<"left" | "right" | null>(null);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number>(Date.now());
  const pausedRef = useRef(false);
  const remainingRef = useRef(DURATION);

  const goTo = useCallback((next: number, dir: "left" | "right") => {
    setPrevIndex(current);
    setAnimDir(dir);
    setCurrent(next);
    setProgress(0);
    startRef.current = Date.now();
    remainingRef.current = DURATION;
  }, [current]);

  const goNext = useCallback(() => {
    goTo((current + 1) % testimonials.length, "left");
  }, [current, goTo]);

  const goPrev = useCallback(() => {
    goTo((current - 1 + testimonials.length) % testimonials.length, "right");
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
    remainingRef.current = Math.max(DURATION - (Date.now() - startRef.current), 0);
    if (timerRef.current) clearTimeout(timerRef.current);
  };

  const handleMouseLeave = () => {
    pausedRef.current = false;
    startRef.current = Date.now() - (DURATION - remainingRef.current);
    timerRef.current = setTimeout(goNext, remainingRef.current);
  };

  const t = testimonials[current];

  return (
    <section className="site-section-alt">
      <div className="site-container">
        <p className="site-kicker">Testimonials</p>
        <h2 className="mt-4">What clients say about working with us</h2>

        <div
          className="mt-8 relative overflow-hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Card */}
          <div
            key={current}
            className="site-card relative overflow-hidden p-7 transition-all"
            style={{
              animation: animDir
                ? `slideIn${animDir === "left" ? "Right" : "Left"} 0.55s cubic-bezier(.4,0,.2,1) forwards`
                : undefined,
            }}
          >
            {/* Top accent */}
            <div
              className="absolute left-0 top-0 h-[4px] w-full"
              style={{ background: t.accent }}
            />

            {/* Stars */}
            <div className="flex gap-1 mt-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} className="w-[14px] h-[14px]" viewBox="0 0 14 14">
                  <polygon
                    points="7,1 8.8,5.4 13.5,5.9 10.1,9 11.1,13.6 7,11.2 2.9,13.6 3.9,9 0.5,5.9 5.2,5.4"
                    fill={i < t.stars ? "#f0a500" : "#dce6ef"}
                  />
                </svg>
              ))}
            </div>

            {/* Quote mark */}
            <div className="mt-3 text-[52px] leading-none font-serif text-[#dce6ef]">"</div>

            {/* Quote */}
            <p className="mt-1 text-[16px] italic leading-[1.75] text-[#4a6478]">
              {t.quote}
            </p>

            {/* Divider + Attribution */}
            <div className="mt-6 border-t border-[#dce6ef] pt-5">
              <p className="text-[14px] font-semibold text-[#173652]">{t.name}</p>
              <p className="mt-0.5 text-[13px] text-[#63798d]">{t.role}</p>
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-4 h-[2px] w-full overflow-hidden rounded-full bg-[#eef3f8]">
            <div
              className="h-full rounded-full bg-[#0b3a63] transition-none"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Controls */}
          <div className="mt-4 flex items-center justify-between">
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i, i > current ? "left" : "right")}
                  className={`h-2 w-2 rounded-full border-none transition-all duration-300 ${
                    i === current
                      ? "scale-125 bg-[#0b3a63]"
                      : "bg-[#dce6ef] hover:bg-[#b0c4d8]"
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2.5">
              <button
                onClick={goPrev}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#dce6ef] bg-white transition hover:bg-[#f0f5fa]"
              >
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                  <path d="M10 12L6 8l4-4" stroke="#173652" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                onClick={goNext}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#dce6ef] bg-white transition hover:bg-[#f0f5fa]"
              >
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                  <path d="M6 4l4 4-4 4" stroke="#173652" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

    
    </section>
  );
}