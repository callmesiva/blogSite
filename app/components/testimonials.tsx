"use client";
import { useState, useEffect, useRef, useCallback } from "react";

const testimonials = [
  {
    quote:
      "Wolvio has consistently stood out as a flexible and reliable delivery partner. Their ability to support different roles, work across domains, adapt to varying team structures, and mobilise quickly has made collaboration smooth and effective. That responsiveness, combined with their willingness to step in where needed, is what makes Wolvio a trusted partner for us.",
    name: "CEO",
    role: "Veeva Certified Migration Partner",
    accent: "#0b3a63",
    stars: 5,
  },
  {
    quote:
      "Wolvio brought a level of flexibility, ownership, and delivery discipline that was critical to the success of this programme. From implementation through migration, validation support, and go-live readiness, they consistently adapted to the engagement's needs and worked effectively across teams. Their ability to step into different roles, align quickly, and keep delivery moving made them a valuable part of the programme.",
    name: "Veeva Quality One Program Lead",
    role: "Global Consumer Goods Leader",
    accent: "#2f8b92",
    stars: 5,
  },
  {
    quote:
      "Wolvio supported this migration with a strong understanding of both Veeva Regulatory Vault and the realities of complex regulatory data transition. Their approach to planning, validation, and execution helped us manage critical object relationships, reduce migration risk, and move into production with greater confidence.",
    name: "RIM Program Lead",
    role: "Global Pharmaceutical Company ",
    accent: "#534ab7",
    stars: 5,
  },
  {
    quote:
      "Wolvio quickly understood where our clinical operations team would experience friction if the setup wasn’t right. They were practical in workshops, thoughtful in configuration decisions, and very steady during UAT and cutover. It felt like working with a team that understood both the system and the day-to-day pressure on our clinical users.",
    name: "Associate Director",
    role: "Clinical Operations, MNC Pharma",
    accent: "#0b3a63",
    stars: 4,
  },
];

const DURATION = 5000;

export default function TestimonialsSection() {
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
    <section>
      
        
        {/* Local Keyframes for unified animations */}
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes slideInRight { from { opacity: 0; transform: translateX(30px); } to { opacity: 1; transform: translateX(0); } }
          @keyframes slideInLeft { from { opacity: 0; transform: translateX(-30px); } to { opacity: 1; transform: translateX(0); } }
        `}} />

  
        {/* ── UNIFIED WRAPPER ── */}
        <div className="mx-auto mt-10 max-w-[960px]">
          
          <div
            className="relative overflow-hidden rounded-[24px] bg-white shadow-[0_12px_32px_rgba(7,30,61,0.06)]"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Top accent border */}
            <div
              className="absolute left-0 top-0 h-[4px] w-full transition-colors duration-500"
              style={{ background: t.accent }}
            />

            {/* Content Container (Animated) */}
            <div
              key={current}
              className="p-8 pb-10 sm:p-12 sm:pb-14 md:p-14 md:pb-16"
              style={{
                animation: animDir
                  ? `slideIn${animDir === "left" ? "Right" : "Left"} 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards`
                  : undefined,
              }}
            >
              {/* Stars */}
              <div className="flex gap-1.5 mt-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="w-[18px] h-[18px]" viewBox="0 0 14 14">
                    <polygon
                      points="7,1 8.8,5.4 13.5,5.9 10.1,9 11.1,13.6 7,11.2 2.9,13.6 3.9,9 0.5,5.9 5.2,5.4"
                      fill={i < t.stars ? "#f0a500" : "#dce6ef"}
                    />
                  </svg>
                ))}
              </div>

              {/* Quote mark */}
              <div className="mt-4 text-[64px] leading-none text-[#eef3f8]">"</div>

              {/* Quote */}
              <p className="mt-2 text-[18px] sm:text-[20px] italic leading-[1.75] text-[#4a6478]">
                {t.quote}
              </p>

              {/* Divider + Attribution */}
              <div className="mt-8 border-t border-[#eef3f8] pt-6">
                <p className="text-[16px] font-bold text-[#173652]">{t.name}</p>
                <p className="mt-1 text-[14px] text-[#63798d]">{t.role}</p>
              </div>
            </div>

            {/* ── PROGRESS BAR (As Bottom Border) ── */}
            <div className="absolute bottom-0 left-0 h-1.5 w-full bg-[#f0f4f8]">
              <div
                className="h-full transition-none"
                style={{ 
                  width: `${progress}%`,
                  background: t.accent // Color matches the card accent!
                }}
              />
            </div>
          </div>

          {/* ── UNIFIED CONTROLS ── */}
          <div className="mt-6 flex items-center justify-between px-2 sm:px-4">
            {/* Dots */}
            <div className="flex gap-2.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i, i > current ? "left" : "right")}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    i === current
                      ? "w-8"
                      : "w-2.5 bg-[#cbd5e1] hover:bg-[#94a3b8]"
                  }`}
                  style={{ backgroundColor: i === current ? t.accent : undefined }}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-3">
              <button
                onClick={goPrev}
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-[#dce6ef] bg-white text-[#63798d] transition-all hover:border-[#173652] hover:text-[#173652]"
              >
                <svg className="w-5 h-5 transition-transform group-hover:-translate-x-0.5" viewBox="0 0 16 16" fill="none">
                  <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                onClick={goNext}
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-[#dce6ef] bg-white text-[#63798d] transition-all hover:border-[#173652] hover:text-[#173652]"
              >
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-0.5" viewBox="0 0 16 16" fill="none">
                  <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>

        </div>
      
    </section>
  );
}