"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type RefObject,
} from "react";
import {
  AnimatePresence,
  MotionConfig,
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";
import { CASE_STUDY_DETAILS, HERO_CASE_STUDIES, type CaseDetail } from "./case-study-data";

/* ------------------------------------------------------------------ */
/*  Shared bits                                                        */
/* ------------------------------------------------------------------ */

function ArrowRightIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" />
      <path d="m13 5 7 7-7 7" />
    </svg>
  );
}

const THEMES = [
  { tagColor: "#0b3a63", imgBg: "#dbe8f4" },
  { tagColor: "#0f6e56", imgBg: "#d8eee7" },
  { tagColor: "#534ab7", imgBg: "#e4dff5" },
];

type InsightPost = {
  id: number;
  link: string;
  date: string;
  title: string;
  content: string;
  excerpt: string;
  image: string | null;
  type: string;
  slug: string;
};

type PostsResponse = {
  posts: InsightPost[];
  hasMore: boolean;
  page: number;
  totalPages: number;
  message?: string;
};

function stripHtml(html: string) {
  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#8217;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-US", { month: "short", day: "2-digit", year: "numeric" }).format(new Date(date));
}

/* ------------------------------------------------------------------ */
/*  Animation helpers                                                  */
/* ------------------------------------------------------------------ */

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const VIEW = { once: true, amount: 0.2 } as const;

const stagger = (s = 0.1, d = 0): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: s, delayChildren: d } },
});
const rise: Variants = {
  hidden: { opacity: 0, y: 34 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } },
};
const fromLeft: Variants = {
  hidden: { opacity: 0, x: -36 },
  show: { opacity: 1, x: 0, transition: { duration: 0.75, ease: EASE } },
};
const pop: Variants = {
  hidden: { opacity: 0, scale: 0.85, y: 16 },
  show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 220, damping: 16 } },
};
const drawX: Variants = {
  hidden: { scaleX: 0 },
  show: { scaleX: 1, transition: { duration: 0.9, ease: EASE } },
};
const drawY: Variants = {
  hidden: { scaleY: 0 },
  show: { scaleY: 1, transition: { duration: 0.7, ease: EASE } },
};

/** Word-by-word masked headline reveal. */
function AnimatedHeading({
  as = "h2",
  text,
  className,
  onMount = false,
  delay = 0,
}: {
  as?: "h1" | "h2";
  text: string;
  className?: string;
  onMount?: boolean;
  delay?: number;
}) {
  const wordV: Variants = {
    hidden: { y: "115%", rotate: 4 },
    show: { y: "0%", rotate: 0, transition: { duration: 0.85, ease: EASE } },
  };
  const props = {
    className,
    variants: stagger(0.045, delay),
    ...(onMount ? {} : { initial: "hidden", whileInView: "show", viewport: VIEW }),
  };
  const words = text.split(" ").map((w, i) => (
    <span key={i}>
      <span className="inline-block overflow-hidden align-top pb-[0.14em] -mb-[0.14em]">
        <motion.span variants={wordV} className="inline-block will-change-transform">
          {w}
        </motion.span>
      </span>{" "}
    </span>
  ));
  return as === "h1" ? <motion.h1 {...props}>{words}</motion.h1> : <motion.h2 {...props}>{words}</motion.h2>;
}

/** Counts up the first number found in a string ("~2 months", "100%"). Other text is shown as-is. */
function CountUp({ value }: { value: string }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const m = value.match(/^(\D*)(\d+)(.*)$/);
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!m || !inView || reduce) return;
    const target = Number(m[2]);
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / 1500);
      setN(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, value, reduce]);

  if (!m) return <span ref={ref}>{value}</span>;
  return (
    <span ref={ref}>
      {m[1]}
      {reduce ? m[2] : inView ? n : 0}
      {m[3]}
    </span>
  );
}

/** Cycles an index while the element is on screen; hover can take over. */
function useAutoCycle(length: number, ref: RefObject<Element | null>, ms = 2200) {
  const reduce = useReducedMotion();
  const inView = useInView(ref as RefObject<Element>, { amount: 0.3 });
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (!inView || paused || reduce || length < 2) return;
    const id = setInterval(() => setI((v) => (v + 1) % length), ms);
    return () => clearInterval(id);
  }, [inView, paused, reduce, length, ms]);
  useEffect(() => setI(0), [length]);
  return { i, setI, setPaused };
}

/** Soft drifting colour orbs (existing palette) + optional dotted texture for dark sections. */
function Orbs({ dark = false }: { dark?: boolean }) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className={`absolute -left-24 top-8 h-[380px] w-[380px] rounded-full blur-2xl ${dark ? "bg-[radial-gradient(circle,rgba(47,143,146,0.30),transparent_70%)]" : "bg-[radial-gradient(circle,rgba(47,143,146,0.18),transparent_70%)]"}`}
        animate={{ x: [0, 70, 0], y: [0, 36, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className={`absolute -right-28 bottom-0 h-[440px] w-[440px] rounded-full blur-2xl ${dark ? "bg-[radial-gradient(circle,rgba(126,196,199,0.16),transparent_70%)]" : "bg-[radial-gradient(circle,rgba(22,63,125,0.14),transparent_70%)]"}`}
        animate={{ x: [0, -60, 0], y: [0, -30, 0] }}
        transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }}
      />
      {dark ? (
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_30px_30px,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:34px_34px]"
          animate={{ backgroundPosition: ["0px 0px", "34px 34px"] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
      ) : null}
    </div>
  );
}

/** A connector line with a pulse that travels along it. */
function FlowLine({ vertical = false, light = false }: { vertical?: boolean; light?: boolean }) {
  return (
    <div className={`relative ${vertical ? "h-[26px] w-px" : "h-px w-full"} ${light ? "bg-white/25" : "bg-[#c9dbe0]"}`} aria-hidden="true">
      <motion.span
        className={`absolute origin-${vertical ? "top" : "left"} inset-0 bg-[#2f7f88]`}
        initial={vertical ? { scaleY: 0 } : { scaleX: 0 }}
        whileInView={vertical ? { scaleY: 1 } : { scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: EASE }}
        style={{ transformOrigin: vertical ? "top" : "left" }}
      />
      <motion.span
        className="absolute h-[7px] w-[7px] rounded-full bg-[#2f7f88] shadow-[0_0_10px_rgba(47,127,136,0.8)]"
        style={vertical ? { left: -3 } : { top: -3 }}
        animate={vertical ? { top: ["0%", "100%"], opacity: [0, 1, 1, 0] } : { left: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}

function Kicker({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <motion.p
      className={`site-kicker ${dark ? "!text-[#7ec4c7]" : ""}`}
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={VIEW}
      transition={{ duration: 0.7, ease: EASE }}
    >
      {children}
    </motion.p>
  );
}

/* ------------------------------------------------------------------ */
/*  Hero                                                               */
/* ------------------------------------------------------------------ */

function Hero({ activeId, onChange }: { activeId: string; onChange: (id: string) => void }) {
  const study = HERO_CASE_STUDIES.find((s) => s.id === activeId) ?? HERO_CASE_STUDIES[0];
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const orbY = useTransform(scrollYProgress, [0, 1], [0, 90]);

  const panelV: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.09 } },
    exit: { opacity: 0, y: -14, transition: { duration: 0.22 } },
  };

  return (
    <section ref={ref} className="hero-grid relative overflow-hidden">
      <motion.div style={{ y: orbY }} className="absolute inset-0"><Orbs /></motion.div>

      <div className="site-container relative pb-14 pt-10 sm:pt-12 lg:pb-20 lg:pt-16">
        <motion.div
          className="relative mx-auto mb-8 grid w-full max-w-[860px] grid-cols-1 gap-2 rounded-2xl border border-[#dce7ee] bg-white/80 p-2 shadow-[0_8px_28px_rgba(7,30,61,0.06)] backdrop-blur sm:grid-cols-3"
          role="tablist"
          aria-label="Explore case studies by capability"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          {HERO_CASE_STUDIES.map((s) => {
            const isActive = s.id === activeId;
            return (
              <button
                key={s.id}
                id={`case-study-tab-${s.id}`}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls="case-study-hero-panel"
                onClick={() => onChange(s.id)}
                className={`relative min-h-12 rounded-xl px-4 py-3 text-[12px] font-semibold uppercase tracking-[0.09em] transition-colors duration-300 sm:text-[13px] ${isActive ? "text-white" : "text-[#526b80] hover:text-[#0a2540]"}`}
              >
                {isActive ? (
                  <motion.span
                    layoutId="hero-tab-pill"
                    className="absolute inset-0 rounded-xl bg-[#0a2540] shadow-[0_6px_16px_rgba(10,37,64,0.22)]"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                ) : null}
                <span className="relative z-10">{s.label}</span>
              </button>
            );
          })}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            id="case-study-hero-panel"
            role="tabpanel"
            aria-labelledby={`case-study-tab-${study.id}`}
            key={study.id}
            variants={panelV}
            initial="hidden"
            animate="show"
            exit="exit"
            className="relative mx-auto max-w-[1400px]"
          >
            <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(220px,0.42fr)] lg:items-end">
              <div>
                <motion.p variants={fromLeft} className="site-kicker">{study.eyebrow}</motion.p>
                <AnimatedHeading
                  as="h1"
                  onMount
                  text={study.title}
                  className="mt-4 max-w-[1160px] text-[32px] font-bold leading-[1.12] tracking-[-0.035em] text-[#0a2540] sm:text-[42px] lg:text-[54px]"
                />
              </div>
              <motion.p variants={rise} className="max-w-[620px] text-[15px] leading-[1.8] text-[#4a6075] lg:justify-self-end">
                {study.summary}
              </motion.p>
            </div>

            <motion.div variants={stagger(0.08)} className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-[#dce7ee] bg-[#dce7ee] shadow-[0_12px_30px_-18px_rgba(7,30,61,0.25)] sm:grid-cols-2 xl:grid-cols-4">
              {study.meta.map((item) => (
                <motion.div
                  key={item.label}
                  variants={rise}
                  whileHover={{ backgroundColor: "#f4f9fa" }}
                  className="group relative min-h-[88px] bg-white px-5 py-4 sm:px-6 sm:py-5"
                >
                  <span className="absolute left-0 top-0 h-[3px] w-0 bg-[#2f8b92] transition-all duration-500 group-hover:w-full" />
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#5f7589]">{item.label}</p>
                  <p className="mt-2 text-[14px] font-medium leading-[1.5] text-[#173652] sm:text-[15px]">{item.value}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={rise}
              className="mt-5 grid items-center gap-3 rounded-2xl border border-[#dce7ee] bg-white/80 p-4 backdrop-blur sm:p-5 md:grid-cols-[minmax(0,1fr)_minmax(28px,0.55fr)_minmax(210px,1.1fr)_minmax(28px,0.55fr)_minmax(0,1fr)] md:gap-4"
            >
              <div className="min-w-0 py-1 md:py-2">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#5f7589]">{study.currentLabel}</p>
                <p className="mt-2 break-words text-[16px] font-medium leading-[1.45] text-[#4a6075] sm:text-[17px]">{study.currentValue}</p>
              </div>

              <div className="flex items-center gap-1 text-[#2f6f73] max-md:mx-auto max-md:w-16 max-md:rotate-90">
                <FlowLine />
                <ArrowRightIcon />
              </div>

              <motion.div
                className="rounded-xl border border-[#2f7f88] bg-[#edf8f7] px-5 py-4 sm:px-6"
                animate={{ boxShadow: ["0 0 0 0 rgba(47,127,136,0)", "0 0 26px 2px rgba(47,127,136,0.28)", "0 0 0 0 rgba(47,127,136,0)"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#2f6f73]">WOLVIO</p>
                <p className="mt-2 text-[15px] font-semibold leading-[1.45] text-[#173652] sm:text-[16px]">{study.wolvioValue}</p>
              </motion.div>

              <div className="flex items-center gap-1 text-[#2f6f73] max-md:mx-auto max-md:w-16 max-md:rotate-90">
                <FlowLine />
                <ArrowRightIcon />
              </div>

              <div className="min-w-0 py-1 md:py-2 md:text-right">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#2f6f73]">{study.transformedLabel}</p>
                <p className="mt-2 break-words text-[16px] font-semibold leading-[1.45] text-[#173652] sm:text-[17px]">{study.transformedValue}</p>
                <p className="mt-1 text-[13px] leading-[1.5] text-[#4a6075]">{study.transformedDetail}</p>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Detail sections                                                    */
/* ------------------------------------------------------------------ */

function Evidence({ d }: { d: CaseDetail }) {
  return (
    <section className="site-section border-b border-[#dce7ee] bg-white">
      <div className="site-container">
        <motion.div
          key={d.id}
          className={`grid gap-0 ${d.evidence.length === 3 ? "md:grid-cols-3" : "md:grid-cols-4"}`}
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={VIEW}
        >
          {d.evidence.map((item, index) => (
            <motion.div
              key={item.label}
              variants={rise}
              whileHover={{ y: -6 }}
              className={`group relative border-l border-[#dce7ee] px-6 py-8 sm:px-7 sm:py-10 ${index === 0 ? "md:border-l-0" : ""}`}
            >
              <motion.span variants={drawX} className="mb-5 block h-[3px] w-12 origin-left bg-[#2f8b92] transition-all duration-500 group-hover:w-24" />
              <p className="text-[24px] font-bold leading-[1.08] tracking-[-0.035em] text-[#0a2540] transition-colors duration-300 group-hover:text-[#2f6f73] sm:text-[28px]">
                <CountUp value={item.value} />
              </p>
              <p className="mt-3 max-w-[260px] text-[14px] leading-[1.6] text-[#4a6075]">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function CaseList(props: {
  posts: InsightPost[];
  hasPosts: boolean;
  isLoading: boolean;
  isLoadingMore: boolean;
  error: string | null;
  loaderRef: RefObject<HTMLDivElement | null>;
}) {
  const { posts, hasPosts, isLoading, isLoadingMore, error, loaderRef } = props;
  return (
    <section className="site-section-alt relative overflow-hidden">
      <div className="site-container relative">
        <Kicker>Relevant Case Studies</Kicker>
        <AnimatedHeading text="Real results across regulated industries" className="mt-4" />

        {error ? (
          <div className="site-card mt-7 rounded-2xl border-rose-200 bg-rose-50 px-5 py-4 text-[15px] text-rose-700">{error}</div>
        ) : null}

        {isLoading && !hasPosts ? (
          <div className="mt-7 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={`skeleton-${index}`} className="site-card overflow-hidden bg-white">
                <div className="h-[160px] animate-pulse bg-[#eaf2f5]" />
                <div className="space-y-3 p-5">
                  <div className="h-3 w-24 animate-pulse rounded bg-[#eaf2f5]" />
                  <div className="h-5 w-full animate-pulse rounded bg-[#eaf2f5]" />
                  <div className="h-4 w-5/6 animate-pulse rounded bg-[#eaf2f5]" />
                </div>
              </div>
            ))}
          </div>
        ) : null}

        {!isLoading && !hasPosts ? (
          <div className="site-card mt-7 bg-white px-8 py-12 text-center">
            <h2 className="text-[28px] font-semibold text-[#0a2540]">No case studies found</h2>
          </div>
        ) : null}

        {hasPosts ? (
          <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, index) => {
              const theme = THEMES[index % THEMES.length];
              return (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 40, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.7, delay: (index % 3) * 0.1, ease: EASE }}
                  whileHover={{ y: -8 }}
                  className="site-card group flex flex-col overflow-hidden bg-white transition-shadow duration-300 hover:shadow-[0_24px_44px_-22px_rgba(7,30,61,0.35)]"
                >
                  <div className="relative h-[160px] w-full shrink-0 overflow-hidden" style={{ background: theme.imgBg }}>
                    {post.image && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={post.image}
                        alt={stripHtml(post.title)}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      />
                    )}
                    <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <span
                      className="absolute left-3 top-3 rounded-[6px] px-[10px] py-1 text-[11px] font-medium tracking-wide"
                      style={{ background: theme.tagColor, color: "#e6f1fb" }}
                    >
                      Case Study
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <p className="text-[12px] font-medium uppercase tracking-[0.05em] text-[#2f6f73]">Client Success</p>
                    <h3
                      className="mt-1.5 line-clamp-3 break-words text-[16px] font-semibold leading-[1.35] text-[#173652]"
                      dangerouslySetInnerHTML={{ __html: post.title }}
                    />
                    <p className="mt-2 line-clamp-4 flex-1 text-[14px] leading-[1.65] text-[#4a6075]">
                      {stripHtml(post.excerpt || post.content)}
                    </p>

                    <div className="mt-6 flex items-center border-t border-[#f0f4f8] pt-2">
                      <Link
                        href={`/case-studies/${post.slug}`}
                        className="inline-flex items-center gap-2 text-[14px] font-medium text-[#0a2540] transition-colors hover:text-[#2f6f73]"
                      >
                        Read full case study
                        <span className="inline-flex transition-transform duration-300 group-hover:translate-x-1.5">
                          <ArrowRightIcon />
                        </span>
                      </Link>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        ) : null}

        <div ref={loaderRef as RefObject<HTMLDivElement>} className={`flex items-center justify-center ${isLoadingMore ? "pt-8" : "h-px"}`}>
            {isLoadingMore ? <p className="text-[14px] text-[#4a6075]">Loading more...</p> : null}
        </div>
      </div>
    </section>
  );
}

function Challenge({ d }: { d: CaseDetail }) {
  const c = d.challenge;
  return (
    <section className="site-section-alt relative overflow-hidden border-b border-[#dce7ee] bg-[#f8fafc]">
      <Orbs />
      <div className="site-container relative">
        <Kicker>The Challenge</Kicker>
        <div className="mb-12 mt-4 grid gap-7 md:grid-cols-2 md:items-end lg:mb-14">
          <AnimatedHeading key={d.id} text={c.title} className="max-w-[650px] text-[28px] font-bold leading-[1.12] tracking-[-0.03em] text-[#0a2540] sm:text-[36px]" />
          <motion.p key={`${d.id}-s`} variants={rise} initial="hidden" whileInView="show" viewport={VIEW} className="max-w-[600px] text-[15px] leading-[1.8] text-[#4a6075] md:justify-self-end">
            {c.summary}
          </motion.p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
          <motion.ul
            key={`${d.id}-list`}
            className="m-0 list-none overflow-hidden rounded-2xl border border-[#dce7ee] bg-[#dce7ee] p-0 shadow-[0_14px_34px_-20px_rgba(7,30,61,0.25)]"
            variants={stagger(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={VIEW}
          >
            {c.items.map((item, i) => (
              <motion.li
                key={item.title}
                variants={fromLeft}
                whileHover={{ x: 8, backgroundColor: "#f4f9fa" }}
                className="mb-px flex items-baseline gap-3 bg-white px-5 py-4 last:mb-0 sm:px-6"
              >
                <span className="relative mt-1.5 h-[8px] w-[8px] shrink-0">
                  <span className="absolute inset-0 bg-[#2f6f73]" />
                  <motion.span
                    className="absolute inset-0 bg-[#2f6f73]"
                    animate={{ scale: [1, 2.4], opacity: [0.5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.3, ease: "easeOut" }}
                  />
                </span>
                <div>
                  <h3 className="text-[15px] font-semibold text-[#173652]">{item.title}</h3>
                  <p className="mt-1 text-[14px] leading-[1.55] text-[#4a6075]">{item.detail}</p>
                </div>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div key={`${d.id}-chain`} className="flex flex-col items-stretch" variants={stagger(0.28)} initial="hidden" whileInView="show" viewport={VIEW}>
            <motion.div variants={pop} className="rounded-2xl border border-[#0a2540] bg-[#0a2540] px-5 py-5 text-white shadow-[0_18px_36px_-18px_rgba(10,37,64,0.6)] sm:px-6">
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#b2c3d2]">Enterprise constraint</p>
              <p className="mt-2 text-[17px] leading-[1.4] text-white">{c.constraint}</p>
            </motion.div>
            <div className="ml-[26px]"><FlowLine vertical /></div>
            <motion.div variants={pop} className="rounded-2xl border border-[#8494a6] bg-white px-5 py-4 sm:px-6">
              <p className="text-[15px] leading-[1.55] text-[#38556d]">{c.consequence}</p>
            </motion.div>
            <div className="ml-[26px]"><FlowLine vertical /></div>
            <motion.div
              variants={pop}
              className="rounded-2xl border border-[#2f7f88] bg-[#eaf5f5] px-5 py-4 sm:px-6"
            >
              <p className="text-[12px] font-semibold tracking-[0.14em] text-[#2f6f73]">{c.need}</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Approach({ d }: { d: CaseDetail }) {
  const a = d.approach;
  const ref = useRef<HTMLDivElement>(null);
  const { i: hot, setI, setPaused } = useAutoCycle(a.stages.length, ref, 2200);
  return (
    <section className="tone-lock relative overflow-hidden bg-[#0a2540] py-16 text-white sm:py-20 lg:py-24">
      <Orbs dark />
      <div className="site-container relative">
        <Kicker dark>The Approach</Kicker>
        <div className="mb-12 mt-4 grid gap-7 md:grid-cols-2 md:items-end lg:mb-14">
          <AnimatedHeading key={d.id} text={a.title} className="max-w-[650px] text-[28px] font-bold leading-[1.12] tracking-[-0.03em] !text-white sm:text-[36px]" />
          <motion.p key={`${d.id}-s`} variants={rise} initial="hidden" whileInView="show" viewport={VIEW} className="max-w-[600px] text-[15px] leading-[1.8] !text-[#c9d7e4] md:justify-self-end">
            {a.summary}
          </motion.p>
        </div>

        <motion.div
          key={`${d.id}-stages`}
          ref={ref}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={VIEW}
          className={`grid gap-px overflow-hidden rounded-2xl border border-[#23415d] bg-[#23415d] ${a.stages.length === 6 ? "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6" : "sm:grid-cols-2 lg:grid-cols-5"}`}
          role="list"
          aria-label="Execution stages"
        >
          {a.stages.map((stage, idx) => (
            <motion.article
              key={stage.number}
              role="listitem"
              variants={rise}
              onMouseEnter={() => setI(idx)}
              className={`relative px-5 pb-7 transition-colors duration-500 ${hot === idx ? "bg-[#0e355f]" : "bg-[#0a2540]"}`}
            >
              <div className="h-[3px] bg-[#23415d]">
                <motion.div variants={drawX} className="h-full origin-left bg-[#3a8f90]" />
              </div>
              <motion.div
                className="absolute left-0 top-0 h-[3px] bg-[#7ec4c7] shadow-[0_0_14px_rgba(126,196,199,0.9)]"
                animate={{ width: hot === idx ? "100%" : "0%" }}
                transition={{ duration: hot === idx ? 2 : 0.3, ease: "linear" }}
              />
              <p className={`mt-5 text-[12px] font-semibold tracking-[0.14em] transition-colors duration-300 ${hot === idx ? "text-[#7ec4c7]" : "text-[#9ab0c3]"}`}>{stage.number}</p>
              <h3 className="mt-2 text-[17px] font-semibold !text-white">{stage.title}</h3>
              <p className="mt-2 text-[14px] leading-[1.55] !text-[#c9d7e4]">{stage.detail}</p>
            </motion.article>
          ))}
        </motion.div>

        <div className="mt-10">
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.18em] text-[#b2c3d2]">{a.layersLabel}</p>
          <motion.ul key={`${d.id}-layers`} className="m-0 flex list-none flex-wrap gap-2.5 p-0" variants={stagger(0.07)} initial="hidden" whileInView="show" viewport={VIEW}>
            {a.layers.map((layer) => (
              <motion.li
                key={layer}
                variants={pop}
                whileHover={{ y: -4, borderColor: "#7ec4c7" }}
                className="cursor-default rounded-full border border-[#31536f] px-4 py-2 text-[13px] text-[#dbe6ef] transition-colors hover:bg-white/5"
              >
                {layer}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}

function Spotlight({ d }: { d: CaseDetail }) {
  const s = d.spotlight;
  const ref = useRef<HTMLOListElement>(null);
  const { i: hot, setI, setPaused } = useAutoCycle(s.chain.length, ref, 1700);
  return (
    <section className="tone-lock relative overflow-hidden border-y border-[#163e5b] bg-[linear-gradient(130deg,#072c52,#0a2d55_48%,#0e355f)] py-16 text-white sm:py-20 lg:py-24">
      <Orbs dark />
      <div className="site-container relative">
        <Kicker dark>{s.eyebrow}</Kicker>
        <AnimatedHeading key={d.id} text={s.title} className="mb-12 mt-4 max-w-[900px] text-[30px] font-bold leading-[1.08] tracking-[-0.03em] !text-white sm:text-[40px]" />

        {s.comparison ? (
          <motion.div key={`${d.id}-cmp`} className="grid gap-5 lg:grid-cols-2" variants={stagger(0.2)} initial="hidden" whileInView="show" viewport={VIEW}>
            {[s.comparison.first, s.comparison.second].map((option, index) => (
              <motion.article
                key={option.label}
                variants={{
                  hidden: { opacity: 0, x: index === 0 ? -50 : 50 },
                  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: EASE } },
                }}
                whileHover={{ y: -6 }}
                className={`rounded-2xl border p-6 sm:p-7 ${index === 1 ? "border-[#3a8f90] bg-[#114866]/45" : "border-[#244661] bg-[#082747]/55"}`}
              >
                {index === 1 ? (
                  <motion.span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 rounded-2xl"
                    animate={{ boxShadow: ["0 0 0 0 rgba(126,196,199,0)", "0 0 30px 0 rgba(126,196,199,0.35)", "0 0 0 0 rgba(126,196,199,0)"] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                ) : null}
                <p className={`text-[11px] font-semibold tracking-[0.18em] ${index === 1 ? "text-[#7ec4c7]" : "text-[#b2c3d2]"}`}>{option.label}</p>
                <h3 className="mt-3 text-[19px] font-semibold !text-white">{option.title}</h3>
                <motion.ul className="m-0 mt-4 list-none p-0" variants={stagger(0.08, 0.3)}>
                  {option.items.map((item) => (
                    <motion.li key={item} variants={fromLeft} className="flex items-center gap-3 border-t border-[#31516a] py-3 text-[14px] leading-[1.5] !text-[#dbe6ef]">
                      {index === 1 ? (
                        <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 text-[#7ec4c7]" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <motion.path d="m5 12 5 5 9-10" variants={{ hidden: { pathLength: 0 }, show: { pathLength: 1, transition: { duration: 0.6, delay: 0.4 } } }} />
                        </svg>
                      ) : (
                        <span aria-hidden="true" className="h-px w-3 shrink-0 bg-[#6f8aa1]" />
                      )}
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.article>
            ))}
          </motion.div>
        ) : null}

        <div className={`${s.comparison ? "mt-10" : "mt-2"} border-t border-[#244661] pt-8`}>
          <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.18em] text-[#b2c3d2]">{s.chainLabel}</p>
          <motion.ol
            key={`${d.id}-chain`}
            ref={ref}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            variants={stagger(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={VIEW}
            className={`m-0 grid list-none gap-px overflow-hidden rounded-2xl border border-[#244661] bg-[#244661] p-0 ${s.chain.length === 7 ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7" : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5"}`}
          >
            {s.chain.map((item, idx) => (
              <motion.li
                key={item.number}
                variants={rise}
                onMouseEnter={() => setI(idx)}
                className={`relative px-4 pb-5 transition-colors duration-500 ${hot === idx ? "bg-[#114866]" : idx < hot ? "bg-[#0c3a63]" : "bg-[#0a2d55]"}`}
              >
                <div className="h-[3px] bg-[#244661]">
                  <motion.div
                    className="h-full origin-left bg-[#7ec4c7]"
                    animate={{ scaleX: idx <= hot ? 1 : 0 }}
                    transition={{ duration: 0.6, ease: EASE }}
                  />
                </div>
                <p className={`mt-4 text-[12px] font-semibold tracking-[0.12em] transition-colors ${hot === idx ? "text-[#7ec4c7]" : "text-[#9ab0c3]"}`}>{item.number}</p>
                <p className="mt-2 text-[14px] leading-[1.4] !text-white">{item.title}</p>
              </motion.li>
            ))}
          </motion.ol>

          <div className="mt-8 grid gap-7 border-t border-[#244661] pt-7 md:grid-cols-2 md:items-center">
            <motion.p key={`${d.id}-close`} variants={rise} initial="hidden" whileInView="show" viewport={VIEW} className="max-w-[620px] text-[17px] leading-[1.6] !text-[#dbe6ef]">
              {s.close}
            </motion.p>
            <motion.p
              key={`${d.id}-metric`}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={VIEW}
              transition={{ type: "spring", stiffness: 140, damping: 14, delay: 0.2 }}
              className="text-[30px] font-bold leading-[1.05] tracking-[-0.035em] !text-[#7ec4c7] sm:text-[40px] md:justify-self-end"
            >
              <CountUp value={s.metric} />
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Transformation({ d }: { d: CaseDetail }) {
  const t = d.transformation;
  return (
    <section className="site-section relative overflow-hidden border-b border-[#dce7ee] bg-white">
      <div className="site-container relative">
        <Kicker>The Transformation</Kicker>
        <AnimatedHeading key={d.id} text={t.title} className="mb-10 mt-4 max-w-[900px] text-[28px] font-bold leading-[1.12] tracking-[-0.03em] text-[#0a2540] sm:mb-12 sm:text-[36px]" />

        <motion.div key={`${d.id}-rows`} role="table" aria-label="State change from before to after" variants={stagger(0.12)} initial="hidden" whileInView="show" viewport={VIEW}>
          <div role="row" className="grid grid-cols-2 border-b border-[#0a2540] pb-3 md:grid-cols-[minmax(0,1fr)_minmax(64px,0.5fr)_minmax(0,1fr)]">
            <p role="columnheader" className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#5f7589]">Before</p>
            <span aria-hidden="true" className="hidden md:block" />
            <p role="columnheader" className="col-start-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#2f6f73] md:col-start-3">After</p>
          </div>
          {t.pairs.map((pair) => (
            <motion.div
              key={pair.before}
              role="row"
              variants={rise}
              className="group relative grid grid-cols-2 items-center border-b border-[#dce7ee] py-4 md:grid-cols-[minmax(0,1fr)_minmax(64px,0.5fr)_minmax(0,1fr)] md:py-5"
            >
              <span aria-hidden="true" className="pointer-events-none absolute inset-0 origin-left scale-x-0 bg-gradient-to-r from-[#2f8b92]/10 to-transparent transition-transform duration-700 group-hover:scale-x-100" />
              <p className="relative text-[14px] leading-[1.55] text-[#5f7589] transition-transform duration-300 group-hover:-translate-x-1 sm:text-[16px]">{pair.before}</p>
              <span aria-hidden="true" className="relative mx-3 hidden items-center text-[#2f6f73] md:flex">
                <FlowLine />
                <ArrowRightIcon />
              </span>
              <p className="relative col-start-2 text-[14px] font-medium leading-[1.55] text-[#173652] transition-transform duration-300 group-hover:translate-x-2 sm:text-[16px] md:col-start-3">{pair.after}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Impact({ d }: { d: CaseDetail }) {
  const im = d.impact;
  return (
    <section className="site-section-alt relative overflow-hidden border-b border-[#dce7ee] bg-[#f8fafc]">
      <Orbs />
      <div className="site-container relative">
        <Kicker>Business Impact</Kicker>
        <AnimatedHeading key={d.id} text={im.title} className="mb-10 mt-4 max-w-[800px] text-[28px] font-bold leading-[1.12] tracking-[-0.03em] text-[#0a2540] sm:mb-14 sm:text-[36px]" />

        <motion.div key={`${d.id}-primary`} className="grid grid-cols-1 gap-5 sm:grid-cols-2" variants={stagger(0.12)} initial="hidden" whileInView="show" viewport={VIEW}>
          {im.primary.map((item) => (
            <motion.article
              key={item.label}
              variants={rise}
              whileHover={{ y: -8 }}
              className="site-card group relative overflow-hidden bg-white px-6 py-7 transition-shadow duration-300 hover:shadow-[0_26px_46px_-24px_rgba(47,139,146,0.5)] sm:px-8 sm:py-8"
            >
              <motion.span variants={drawX} className="absolute left-0 top-0 h-[4px] w-full origin-left bg-[linear-gradient(90deg,#163f7d,#2f8b92)]" />
              <h3 className="text-[26px] font-bold leading-[1.05] tracking-[-0.035em] text-[#0a2540] transition-colors duration-300 group-hover:text-[#2f6f73] sm:text-[32px]">
                <CountUp value={item.title} />
              </h3>
              <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#2f6f73]">{item.label}</p>
              <p className="mt-3 max-w-[460px] text-[14px] leading-[1.7] text-[#4a6075]">{item.detail}</p>
            </motion.article>
          ))}
        </motion.div>

        <motion.div key={`${d.id}-secondary`} className="mt-12 grid gap-6 border-t border-[#dce7ee] pt-8 sm:grid-cols-3" variants={stagger(0.12)} initial="hidden" whileInView="show" viewport={VIEW}>
          {im.secondary.map((item) => (
            <motion.article key={item.title} variants={rise} whileHover={{ x: 6 }} className="border-l-2 border-[#2f8b92] pl-5">
              <h3 className="text-[16px] font-semibold text-[#173652]">{item.title}</h3>
              <p className="mt-2 text-[14px] leading-[1.65] text-[#4a6075]">{item.detail}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Principles({ d }: { d: CaseDetail }) {
  const p = d.principles;
  return (
    <section className="site-section relative overflow-hidden border-b border-[#dce7ee] bg-white">
      <div className="site-container relative">
        <Kicker>Why It Worked</Kicker>
        <AnimatedHeading key={d.id} text={p.title} className="mb-10 mt-4 max-w-[780px] text-[28px] font-bold leading-[1.12] tracking-[-0.03em] text-[#0a2540] sm:mb-14 sm:text-[36px]" />

        <motion.div key={`${d.id}-items`} className="grid gap-7 sm:grid-cols-2 lg:grid-cols-5" variants={stagger(0.12)} initial="hidden" whileInView="show" viewport={VIEW}>
          {p.items.map((item, i) => (
            <motion.article key={item.title} variants={rise} whileHover={{ y: -6 }} className="group">
              <motion.div variants={drawX} className="mb-5 h-[2px] origin-left bg-[#2f8b92]" />
              <p className="text-[12px] font-semibold tracking-[0.14em] text-[#2f6f73]">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-2 text-[16px] font-semibold text-[#173652] transition-colors duration-300 group-hover:text-[#2f6f73]">{item.title}</h3>
              <p className="mt-2 text-[14px] leading-[1.7] text-[#4a6075]">{item.detail}</p>
            </motion.article>
          ))}
        </motion.div>

        <div className="mt-12 flex items-center gap-4">
          <motion.div className="h-px flex-1 origin-left bg-[#2f8b92]" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1.2, ease: EASE }} />
          <p className="flex items-center gap-2.5 whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.18em] text-[#2f6f73]">
            <span className="relative flex h-2 w-2">
              <motion.span className="absolute inset-0 rounded-full bg-[#2f8b92]" animate={{ scale: [1, 2.6], opacity: [0.6, 0] }} transition={{ duration: 1.8, repeat: Infinity }} />
              <span className="relative h-2 w-2 rounded-full bg-[#2f8b92]" />
            </span>
            Client impact delivered
          </p>
        </div>
      </div>
    </section>
  );
}

function ContextCta({ d }: { d: CaseDetail }) {
  return (
    <section className="tone-lock relative overflow-hidden bg-[linear-gradient(130deg,#072c52,#0a2d55_48%,#0e355f)] py-16 text-white sm:py-20 lg:py-24">
      <Orbs dark />
      <div className="site-container relative">
        <Kicker dark>Facing a similar challenge?</Kicker>
        <div className="mt-4 grid gap-8 md:grid-cols-2 md:items-end">
          <div>
            <AnimatedHeading key={d.id} text={d.cta.title} className="max-w-[560px] text-[30px] font-bold leading-[1.08] tracking-[-0.03em] !text-white sm:text-[40px]" />
            <motion.div className="mt-8 flex flex-wrap gap-3" variants={stagger(0.12, 0.2)} initial="hidden" whileInView="show" viewport={VIEW}>
              <motion.div variants={pop}>
                <Link
                  href="/contact-us"
                  className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[#3a8f90] px-7 py-4 text-[14px] font-semibold text-white transition hover:bg-[#347f80]"
                >
                  <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                  <span className="relative">Discuss Your Challenge</span>
                  <span className="relative transition-transform duration-300 group-hover:translate-x-1.5"><ArrowRightIcon /></span>
                </Link>
              </motion.div>
              <motion.div variants={pop}>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center rounded-full border border-white/30 px-6 py-4 text-[14px] font-medium text-white transition hover:border-[#7ec4c7] hover:bg-white/10"
                >
                  {d.cta.secondary}
                </Link>
              </motion.div>
            </motion.div>
          </div>
          <motion.p
            key={`${d.id}-sum`}
            variants={rise}
            initial="hidden"
            whileInView="show"
            viewport={VIEW}
            className="max-w-[620px] text-[15px] leading-[1.8] !text-[#c9d7e4] md:justify-self-end"
          >
            {d.cta.summary}
          </motion.p>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function CaseStudiesClient() {
  const searchParams = useSearchParams();
  const postIdParam = searchParams.get("postId");
  const type = "case-study";

  const [posts, setPosts] = useState<InsightPost[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const loaderRef = useRef<HTMLDivElement | null>(null);
  const [activePost, setActivePost] = useState<InsightPost | null>(null);
  const [activeHeroTabId, setActiveHeroTabId] = useState<string>(HERO_CASE_STUDIES[0].id);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 28, restDelta: 0.001 });

  // Active Post Logic
  useEffect(() => {
    if (!postIdParam) {
      setActivePost(null);
      return;
    }
    const postInState = posts.find((p) => p.id.toString() === postIdParam);
    if (postInState) {
      setActivePost(postInState);
    } else {
      fetch(`/api/insights/posts?type=case-study&search=${postIdParam}`)
        .then((res) => res.json())
        .then((data) => {
          const p = data.posts?.find((x: any) => x.id.toString() === postIdParam);
          if (p) setActivePost(p);
        });
    }
  }, [postIdParam, posts]);

  // Load Posts Logic
  const loadPosts = useCallback(
    async (nextPage: number) => {
      if (nextPage > 1) {
        setIsLoadingMore(true);
      } else {
        setIsLoading(true);
      }
      setError(null);

      const params = new URLSearchParams();
      params.set("page", String(nextPage));
      params.set("per_page", "9");
      params.set("type", type);

      try {
        const response = await fetch(`/api/insights/posts?${params.toString()}`);
        const data = (await response.json()) as PostsResponse;

        if (!response.ok) {
          throw new Error(data.message ?? "Unable to load case studies.");
        }

        setHasMore(data.hasMore);
        setPosts((current) => {
          if (nextPage === 1) return data.posts;
          const ids = new Set(current.map((post) => post.id));
          const incoming = data.posts.filter((post) => !ids.has(post.id));
          return [...current, ...incoming];
        });
      } catch (requestError) {
        const message =
          requestError instanceof Error ? requestError.message : "Something went wrong while loading case studies.";
        setError(message);
      } finally {
        setIsLoading(false);
        setIsLoadingMore(false);
      }
    },
    [type]
  );

  // Trigger loads
  useEffect(() => {
    setPage(1);
    setPosts([]);
    setHasMore(true);
    void loadPosts(1);
  }, [loadPosts]);

  // Infinite Scroll Observer
  useEffect(() => {
    const node = loaderRef.current;
    if (!node || !hasMore || isLoading || isLoadingMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setPage((currentPage) => {
            const next = currentPage + 1;
            void loadPosts(next);
            return next;
          });
        }
      },
      { rootMargin: "250px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [hasMore, isLoading, isLoadingMore, loadPosts]);

  const hasPosts = posts.length > 0;
  const details = CASE_STUDY_DETAILS.find((s) => s.id === activeHeroTabId) ?? CASE_STUDY_DETAILS[0];

  // NATIVE DETAIL VIEW
  if (postIdParam) {
    return (
      <main className="min-h-screen bg-[#f8fafc] text-[#0f172a]">
        <div className="mx-auto w-full max-w-[1400px]  lg:px-8 lg:py-20">
          {activePost ? (
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE }}
              className="w-full overflow-hidden rounded-[24px] bg-white p-8 shadow-[0_12px_32px_rgba(7,30,61,0.04)] sm:p-12 lg:p-16"
            >
              <div className="mb-10 !text-center">
                <Link href="/case-studies" className="mb-8 inline-flex text-[14px] text-[#64748b] hover:text-[#2f6f73]">
                  ← Back to Case Studies
                </Link>
                <p className="mb-4 text-[14px] font-bold uppercase tracking-widest text-[#2f6f73]">{activePost.type}</p>

                <h1
                  className="mb-6 break-words text-center text-[32px] font-bold leading-[1.2] text-[#0a2540] sm:text-[40px]"
                  dangerouslySetInnerHTML={{ __html: activePost.title }}
                />

                <p className="text-[14px] text-[#64748b]">{formatDate(activePost.date)}</p>
              </div>

              {activePost.image && (
                <div className="relative mb-12 aspect-[16/9] w-full overflow-hidden rounded-[16px] bg-[#eaf2f5]">
                  <Image src={activePost.image} alt="Featured image" fill className="object-cover" />
                </div>
              )}

              <div
                className="mx-auto w-full max-w-[760px] text-[17px] leading-[1.8] text-[#475569] break-words 
                            [&_img]:max-w-full [&_img]:h-auto [&_img]:rounded-lg [&_img]:my-6
                            [&_iframe]:max-w-full [&_iframe]:rounded-lg
                            [&_pre]:max-w-full [&_pre]:overflow-x-auto
                            [&_table]:block [&_table]:overflow-x-auto [&_table]:max-w-full
                            [&>h2]:mb-4 [&>h2]:mt-10 [&>h2]:text-[24px] [&>h2]:font-bold [&>h2]:text-[#0a2540] 
                            [&>h3]:mb-3 [&>h3]:mt-8 [&>h3]:text-[20px] [&>h3]:font-bold [&>h3]:text-[#0a2540]
                            [&>p]:mb-6 
                            [&>ul]:mb-6 [&>ul]:list-disc [&>ul]:pl-6
                            [&>ol]:mb-6 [&>ol]:list-decimal [&>ol]:pl-6"
                dangerouslySetInnerHTML={{ __html: activePost.content }}
              />
            </motion.article>
          ) : (
            <div className="flex h-[400px] items-center justify-center">
              <p className="text-[#64748b]">Loading case study...</p>
            </div>
          )}
        </div>
      </main>
    );
  }

  // MAIN LIST VIEW
  return (
    <MotionConfig reducedMotion="user">
      <main className="polish-layout min-h-screen overflow-x-hidden bg-[#f8fafc] text-[#0f172a]">
        <motion.div
          className="fixed left-0 right-0 top-0 z-[100] h-[3px] origin-left bg-[linear-gradient(90deg,#163f7d,#2f8b92,#7ec4c7)]"
          style={{ scaleX: progress }}
          aria-hidden="true"
        />

        <Hero activeId={activeHeroTabId} onChange={setActiveHeroTabId} />
        <Evidence d={details} />
        <Challenge d={details} />
        <Approach d={details} />
        <Spotlight d={details} />
        <Transformation d={details} />
        <Impact d={details} />
        <Principles d={details} />
        <ContextCta d={details} />
        <CaseList posts={posts} hasPosts={hasPosts} isLoading={isLoading} isLoadingMore={isLoadingMore} error={error} loaderRef={loaderRef} />
      </main>
    </MotionConfig>
  );
}
