"use client";

import { useEffect, useRef, useState } from "react";



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

const whyPillars = [
  {
    num: "01",
    title: "Life Sciences Focus",
    desc: "We work exclusively within pharma, biotech, and medtech — bringing deep regulatory understanding to every Veeva engagement, from initial scoping to final delivery.",
    tags: ["Pharma", "Biotech", "MedTech", "GxP Native", "FDA Compliant"],
    link: "/why-wolvio",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-[18px] w-[18px] fill-none stroke-[#1D9E75] stroke-[1.7] strokeLinecap-round strokeLinejoin-round transition-colors duration-300 group-hover:stroke-[#5DCAA5]"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Veeva Platform Depth",
    desc: "Our team carries hands-on experience across different Veeva Vault suites and applications ensuring the right expertise is applied every time.",
    tags: ["Vault RIM", "QMS", "eTMF", "CDMS", "Safety", "PromoMats"],
    link: "/why-wolvio",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-[18px] w-[18px] fill-none stroke-[#1D9E75] stroke-[1.7] strokeLinecap-round strokeLinejoin-round transition-colors duration-300 group-hover:stroke-[#5DCAA5]"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Compliance-First Execution",
    desc: "Validation, GxP discipline, and audit-readiness are built into our delivery methodology not added as an afterthought when go-live approaches.",
    tags: ["IQ / OQ / PQ", "21 CFR Part 11", "Annex 11", "Audit Trail"],
    link: "/why-wolvio",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-[18px] w-[18px] fill-none stroke-[#1D9E75] stroke-[1.7] strokeLinecap-round strokeLinejoin-round transition-colors duration-300 group-hover:stroke-[#5DCAA5]"
      >
        <polyline points="9 11 12 14 22 4" />
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Cross-Functional Delivery Strength",
    desc: "We bring together configuration, integration & data governance, user support, and change management covering every dimension of a successful Veeva Vault deployment.",
    tags: ["Configuration", "Integration", "Data Migration", "Change Mgmt"],
    link: "/why-wolvio",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-[18px] w-[18px] fill-none stroke-[#1D9E75] stroke-[1.7] strokeLinecap-round strokeLinejoin-round transition-colors duration-300 group-hover:stroke-[#5DCAA5]"
      >
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    num: "05",
    title: "Post Go-Live Continuity",
    desc: "Our involvement doesn't end with implementation support. We provide managed services,  responsive support, release & delivery management and platform maturity to keep your Vault environment performing reliably.",
    tags: [
      "Managed Services",
      "Release Mgmt",
      "Platform Maturity",
      "SLA-backed",
    ],
    link: "/why-wolvio",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-[18px] w-[18px] fill-none stroke-[#1D9E75] stroke-[1.7] strokeLinecap-round strokeLinejoin-round transition-colors duration-300 group-hover:stroke-[#5DCAA5]"
      >
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
];

export default function WhyWolvioSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Add this ref to your scrollable div:
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = listRef.current;
    const section = sectionRef.current;
    if (!el || !section) return;

    const handleWheel = (e: WheelEvent) => {
      // Only intercept when the sticky section is actually pinned (in viewport)
      const rect = section.getBoundingClientRect();
      const isStickyActive = rect.top <= 0 && rect.bottom >= window.innerHeight;
      if (!isStickyActive) return;

      const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 2;
      const atTop = el.scrollTop <= 2;
      const goingDown = e.deltaY > 0;
      const goingUp = e.deltaY < 0;

      if ((goingDown && !atBottom) || (goingUp && !atTop)) {
        e.preventDefault();
        el.scrollTop += e.deltaY;
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    const fadeElements = sectionRef.current?.querySelectorAll(".fade-up");
    fadeElements?.forEach((el) => observer.observe(el));

    return () => fadeElements?.forEach((el) => observer.unobserve(el));
  }, []);

const mousePos = useRef({ x: 0, y: 0 });

useEffect(() => {
  const handleMouseMove = (e: MouseEvent) => {
    mousePos.current = { x: e.clientX, y: e.clientY };
  };
  window.addEventListener("mousemove", handleMouseMove);
  return () => window.removeEventListener("mousemove", handleMouseMove);
}, []);

useEffect(() => {
  const el = listRef.current;
  const section = sectionRef.current;
  if (!el || !section) return;

  const handleWheel = (e: WheelEvent) => {
    const rect = section.getBoundingClientRect();
    const isStickyActive = rect.top <= 0 && rect.bottom >= window.innerHeight;
    if (!isStickyActive) return;

    const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 2;
    const atTop = el.scrollTop <= 2;
    const goingDown = e.deltaY > 0;
    const goingUp = e.deltaY < 0;

    if ((goingDown && !atBottom) || (goingUp && !atTop)) {
      e.preventDefault();
      el.scrollTop += e.deltaY;

      // Force highlight whichever pillar is under the cursor after scroll
      requestAnimationFrame(() => {
        const target = document.elementFromPoint(
          mousePos.current.x,
          mousePos.current.y,
        );
        const pillarEl = target?.closest(
          "[data-pillar-index]",
        ) as HTMLElement | null;
        setHoveredIndex(pillarEl ? Number(pillarEl.dataset.pillarIndex) : null);
      });
    }
  };

  window.addEventListener("wheel", handleWheel, { passive: false });
  return () => window.removeEventListener("wheel", handleWheel);
}, []);

  return (
    <section
      ref={sectionRef}
      id="why-wolvio"
      className="bg-[#f2f8f5] py-[56px] px-6 lg:py-[100px] lg:px-[72px] min-h-[60vh]"
    >
      <div className="mx-auto max-w-[1300px]">
        <div className="grid items-start gap-12 lg:grid-cols-[380px_1fr] lg:gap-[80px]">
          {/* ── LEFT: STICKY HEADER ── */}
          
          <div className="fade-up lg:sticky lg:top-12">
            <div className="mb-5 inline-flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[2.2px] text-[#2f6f73]">
              <p className="site-kicker text-center"> why Wolvio </p>
            </div>

            <h2 className="mb-6 text-[34px] font-bold leading-[1.1] tracking-[-0.5px] text-[#071e3d] lg:text-[42px]">
              Built on Specialist Depth. No Compromises in{" "}
              <em className="text-[#2f6f73] not-italic lg:italic">
                Regulated Environments.
              </em>
            </h2>

            <p className="mb-9 text-[15px] font-light leading-[1.8] text-[#4a6070]">
              Pharma, biotech, and med tech organisations don't choose a Veeva
              partner lightly. The platform sits at the centre of their
              regulatory, clinical, and quality operations — and a poorly
              configured implementation has consequences that outlast the
              project. Wolvio was built specifically for this environment.
              Here's what that means in practice.
            </p>

            <a
              href="#"
              className="group inline-flex items-center gap-2 rounded-[28px] bg-[#071e3d] px-6 py-3 text-[13.5px] font-semibold text-white transition-all duration-300 hover:gap-[13px] hover:bg-[#2f6f73]"
            >
              Learn more about our approach <ArrowRightIcon />
            </a>
          </div>

          {/* ── RIGHT: PILLARS LIST ── */}
          {/* THE FIX: Added max-h, overflow-y-auto, overscroll-y-auto, and hid scrollbar UI */}
          <div
            ref={listRef}
            className="flex flex-col lg:max-h-[60vh] lg:overflow-y-auto lg:overscroll-y-auto lg:pr-6 pl-8 -ml-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {whyPillars.map((pillar, index) => {
              const isHovered = hoveredIndex === index;

              return (
                <div
                  key={pillar.num}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="fade-up group relative grid cursor-default grid-cols-[44px_1fr] border-b border-[rgba(11,39,68,0.08)] py-8 transition-colors duration-250 first:border-t hover:bg-[rgba(29,158,117,0.03)] md:grid-cols-[56px_1fr] md:gap-x-7 lg:last:border-b-0"
                  style={{ transitionDelay: `${index * 0.08}s` }}
                >
                  {/* Animated Left Accent Bar */}
                  <div className="absolute bottom-0 left-[-16px] top-0 w-[3px] origin-top scale-y-0 rounded-[3px] bg-[#2f6f73] transition-transform duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-y-100 md:left-[-24px]"></div>

                  {/* Number & Icon Column */}
                  <div className="flex flex-col items-start pt-[2px]">
                    <div className="mb-3 font-serif text-[28px] font-bold leading-none text-[rgba(29,158,117,0.25)] transition-colors duration-300 group-hover:text-[#2f6f73]">
                      {pillar.num}
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-[11px] border border-[rgba(11,39,68,0.14)] bg-white transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:rotate-[-4deg] group-hover:scale-105 group-hover:border-[#071e3d] group-hover:bg-[#071e3d]">
                      {pillar.icon}
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className="pt-1">
                    <h3 className="mb-2.5  font-bold leading-[1.25] text-[#071e3d] transition-colors duration-[250ms] group-hover:text-[#2f6f73]">
                      {pillar.title}
                    </h3>
                    <p className="max-w-[540px] text-[14.5px] font-light leading-[1.78] text-[#4a6070]">
                      {pillar.desc}
                    </p>

                    {/* Expandable Detail Box */}
                    <div
                      className={`overflow-hidden transition-all duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        isHovered
                          ? "max-h-[120px] opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      {/* <div className="mt-[14px] flex flex-wrap gap-[6px]">
                        {pillar.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-[6px] bg-[#e0f5ed] px-2.5 py-1 text-[11px] font-semibold text-[#2f6f73]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div> */}
                    </div>

                    <a
                      href={pillar.link}
                      className="mt-[14px] inline-flex items-center gap-[5px] text-[12.5px] font-semibold text-[#8aa4b8] transition-all duration-200 group-hover:gap-[9px] group-hover:text-[#2f6f73]"
                    >
                      How we work <ArrowRightIcon />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
