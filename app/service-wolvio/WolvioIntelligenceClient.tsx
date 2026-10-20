"use client";

import "./wolvio-intelligence.css";

import AnimatedUnderline from "../components/AnimatedUnderline";

import Link from "next/link";
import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type HTMLAttributes,
  type MouseEvent as ReactMouseEvent,
  type ReactNode,
} from "react";
import {
  MotionConfig,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";

/* ------------------------------------------------------------------ */
/*  Content                                                            */
/* ------------------------------------------------------------------ */

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const STAGES = [
  { n: "01", k: "DISCOVER", t: "Where AI creates measurable value in your business." },
  { n: "02", k: "BUILD", t: "Trusted enterprise intelligence on your data and knowledge." },
  { n: "03", k: "ACT", t: "Agents and automation that execute inside your workflows." },
  { n: "04", k: "SCALE", t: "Governed, observable AI operating at enterprise scale." },
];

const MARQUEE = [
  "AI readiness", "Opportunity discovery", "Use-case prioritization", "AI roadmap", "Business case & ROI",
  "Enterprise RAG", "Knowledge intelligence", "AI copilots", "Machine learning", "Document intelligence",
  "AI agents", "Multi-agent systems", "Intelligent workflows", "Enterprise automation", "Human-in-the-loop",
  "LLMOps", "MLOps", "Evaluation", "Observability", "Security", "Responsible AI",
];

const GAPS = [
  { lost: "Pilots that never leave the demo environment", close: "Production engineering — integration, evaluation, monitoring", gain: "Systems that run in daily operations" },
  { lost: "Answers scattered across documents, systems and teams", close: "Enterprise RAG grounded in your own knowledge", gain: "Cited answers people can act on" },
  { lost: "AI that sits beside the workflow instead of inside it", close: "Agentic automation wired into real processes", gain: "Work that completes end to end" },
  { lost: "No owner, no guardrails, no way to prove it worked", close: "Governance, logging and performance tracking from day one", gain: "AI you can scale with confidence" },
];

const SERVICES = [
  { k: "DISCOVER", title: "AI Strategy & Advisory", sub: "Find where AI creates value.", items: ["AI readiness", "Opportunity discovery", "Use-case prioritization", "AI roadmap", "Business case & ROI"] },
  { k: "BUILD", title: "Generative AI & Engineering", sub: "Build trusted enterprise intelligence.", items: ["Enterprise RAG", "Knowledge intelligence", "AI copilots", "Machine learning", "Document intelligence"] },
  { k: "ACT", title: "Agentic AI & Automation", sub: "Turn intelligence into action.", items: ["AI agents", "Multi-agent systems", "Intelligent workflows", "Enterprise automation", "Human-in-the-loop processes"] },
  { k: "SCALE", title: "AI Operations & Governance", sub: "Operate AI securely at enterprise scale.", items: ["LLMOps", "MLOps", "Evaluation", "Observability", "Security", "Responsible AI"] },
];

const CONTEXT = ["Data", "Documents", "Enterprise knowledge", "Applications", "Business workflows"];
const THREAD = ["UNDERSTAND", "REASON", "DECIDE", "ACT"];
const OUTCOMES = ["Answer", "Automate", "Predict", "Recommend", "Execute"];

const CONSOLE = [
  { k: "input", t: "document received from the business workflow" },
  { k: "understand", t: "fields extracted and read in context" },
  { k: "reason", t: "checked against policy and enterprise knowledge" },
  { k: "decide", t: "within limits — routed for human approval" },
  { k: "act", t: "action posted to the system, audit entry written" },
  { k: "outcome", t: "answered, automated, logged" },
];

const SUITES = [
  { t: "Knowledge Intelligence", d: "Find answers across complex enterprise information." },
  { t: "Enterprise Copilots", d: "Bring contextual intelligence into everyday work." },
  { t: "Intelligent Documents", d: "Understand, extract and act on enterprise documents." },
  { t: "Agentic Workflows", d: "Enable AI agents to execute controlled business processes." },
  { t: "Predictive Intelligence", d: "Turn enterprise data into forward-looking decisions." },
];

const EQUATION = [
  { t: "AI ENGINEERING", items: ["Models", "Agents", "AI applications", "Modern architectures"] },
  { t: "ENTERPRISE ENGINEERING", items: ["Systems", "Data", "Applications", "Workflows"] },
  { t: "DOMAIN INTELLIGENCE", items: ["Industry context", "Business processes", "Regulated environments", "Engineering knowledge"] },
];

const TRUST = ["Secure by design", "Human governed", "Model flexible", "Enterprise integrated", "Built to scale"];

const WORKSHOP = [
  { k: "DISCOVER", t: "High-value opportunities" },
  { k: "PRIORITIZE", t: "The right use cases" },
  { k: "DEFINE", t: "Business value" },
  { k: "SHAPE", t: "A practical AI roadmap" },
];

const buttons = [
  { label: "Start Your AI Transformation", href: "/contact-us", variant: "primary" },
  { label: "Explore Our Capabilities", href: "#capabilities", variant: "outline" },
];


/* ------------------------------------------------------------------ */
/*  Animation helpers                                                  */
/* ------------------------------------------------------------------ */

const stagger = (s = 0.12, d = 0): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: s, delayChildren: d } },
});

const riseV: Variants = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

const VIEW = { once: true, amount: 0.2 } as const;

function useNarrow(bp = 940) {
  const [narrow, setNarrow] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia(`(max-width:${bp - 1}px)`);
    const on = () => setNarrow(mq.matches);
    on();
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, [bp]);
  return narrow;
}

/** Headline that reveals word by word from behind a mask. */
function SplitText({
  lines,
  as = "h2",
  className,
  id,
  delay = 0,
  onMount = false,
  mark,
  renderMark,
}: {
  lines: string[];
  as?: "h1" | "h2";
  className?: string;
  id?: string;
  delay?: number;
  onMount?: boolean;
  /** Phrase inside `lines` to wrap with `renderMark` (e.g. an underline component). */
  mark?: string;
  renderMark?: (children: ReactNode) => ReactNode;
}) {
  const wordV: Variants = {
    hidden: { y: "115%", rotate: 5 },
    show: { y: "0%", rotate: 0, transition: { duration: 0.9, ease: EASE } },
  };
  const props = {
    id,
    className,
    variants: stagger(0.07, delay),
    initial: "hidden",
    ...(onMount ? { animate: "show" } : { whileInView: "show", viewport: VIEW }),
  };
  const renderWord = (w: string, key: string, space = true) => (
    <span key={key}>
      <span className="wi-word">
        <motion.span variants={wordV} className="wi-word-in">
          {w}
        </motion.span>
      </span>
      {space ? " " : null}
    </span>
  );
  const markWords = mark ? mark.split(" ") : [];
  const strip = (w: string) => w.replace(/[.,;:!?]+$/, "");
  const body = lines.map((line, li) => {
    const words = line.split(" ");
    const at = markWords.length ? words.findIndex((_, i) => markWords.every((m, k) => strip(words[i + k] ?? "") === m)) : -1;
    const out: ReactNode[] = [];
    for (let i = 0; i < words.length; i++) {
      if (i === at) {
        const last = words[i + markWords.length - 1];
        const tail = last.slice(strip(last).length); // trailing punctuation stays outside the mark
        const inner = markWords.map((w, k) => renderWord(w, `${i}-${k}`, k < markWords.length - 1));
        out.push(<span key={`mark-${i}`}>{renderMark ? renderMark(inner) : inner}</span>);
        out.push(tail ? renderWord(tail, `tail-${i}`) : " ");
        i += markWords.length - 1;
      } else {
        out.push(renderWord(words[i], String(i)));
      }
    }
    return (
      <span key={li} style={{ display: "block" }}>
        {out}
      </span>
    );
  });
  return as === "h1" ? <motion.h1 {...props}>{body}</motion.h1> : <motion.h2 {...props}>{body}</motion.h2>;
}

/** Pulls its child toward the cursor. */
function Magnetic({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLSpanElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 230, damping: 15, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 230, damping: 15, mass: 0.4 });
  const move = (e: ReactMouseEvent<HTMLSpanElement>) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    x.set((e.clientX - (r.left + r.width / 2)) * 0.32);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.45);
  };
  const leave = () => {
    x.set(0);
    y.set(0);
  };
  return (
    <motion.span ref={ref} style={{ x: sx, y: sy, display: "inline-block" }} onMouseMove={move} onMouseLeave={leave}>
      {children}
    </motion.span>
  );
}

/** 3D tilt with a cursor-following spotlight. */
function Tilt({
  children,
  className = "",
  max = 9,
  ...rest
}: HTMLAttributes<HTMLDivElement> & { max?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const move = (e: ReactMouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    el.style.setProperty("--rx", `${((0.5 - py) * max).toFixed(2)}deg`);
    el.style.setProperty("--ry", `${((px - 0.5) * max).toFixed(2)}deg`);
    el.style.setProperty("--mx", `${(px * 100).toFixed(1)}%`);
    el.style.setProperty("--my", `${(py * 100).toFixed(1)}%`);
  };
  const leave = () => {
    ref.current?.style.setProperty("--rx", "0deg");
    ref.current?.style.setProperty("--ry", "0deg");
  };
  return (
    <div {...rest} ref={ref} className={`wi-tilt ${className}`} onMouseMove={move} onMouseLeave={leave}>
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Interactive hero network (canvas)                                  */
/* ------------------------------------------------------------------ */

function NetworkCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const host = canvas?.parentElement;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !host || !ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    type Node = { x: number; y: number; vx: number; vy: number; r: number; hub: boolean };
    type Ring = { x: number; y: number; r: number; a: number };
    let nodes: Node[] = [];
    let rings: Ring[] = [];
    let w = 0;
    let h = 0;
    let raf = 0;
    let visible = true;
    const mouse = { x: -9999, y: -9999 };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const LINK = 150;
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < LINK) {
            ctx.strokeStyle = `rgba(47,139,146,${(1 - d / LINK) * 0.3})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
        const dm = Math.hypot(a.x - mouse.x, a.y - mouse.y);
        if (dm < 210) {
          ctx.strokeStyle = `rgba(22,63,125,${(1 - dm / 210) * 0.55})`;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }
      for (const n of nodes) {
        if (n.hub) {
          ctx.fillStyle = "rgba(47,139,146,0.14)";
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.r * 4.2, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.fillStyle = n.hub ? "#2f8b92" : "rgba(23,54,82,0.38)";
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      }
      for (const r of rings) {
        ctx.strokeStyle = `rgba(47,139,146,${r.a})`;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.r, 0, Math.PI * 2);
        ctx.stroke();
      }
    };

    const step = () => {
      for (const n of nodes) {
        const dx = mouse.x - n.x;
        const dy = mouse.y - n.y;
        const d = Math.hypot(dx, dy);
        if (d < 220 && d > 1) {
          n.vx += (dx / d) * 0.018;
          n.vy += (dy / d) * 0.018;
        }
        n.vx *= 0.992;
        n.vy *= 0.992;
        const sp = Math.hypot(n.vx, n.vy);
        if (sp > 1.4) {
          n.vx = (n.vx / sp) * 1.4;
          n.vy = (n.vy / sp) * 1.4;
        }
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
      }
      rings = rings.map((r) => ({ ...r, r: r.r + 3.2, a: r.a - 0.012 })).filter((r) => r.a > 0);
      draw();
      if (visible) raf = requestAnimationFrame(step);
    };

    const resize = () => {
      const rect = host.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.round(Math.min(95, Math.max(26, (w * h) / 15000)));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 1.5 + 0.8,
        hub: Math.random() < 0.13,
      }));
      if (reduce) draw();
    };

    const move = (e: MouseEvent) => {
      const r = host.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
    };
    const leave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };
    const click = (e: MouseEvent) => {
      const r = host.getBoundingClientRect();
      const cx = e.clientX - r.left;
      const cy = e.clientY - r.top;
      rings.push({ x: cx, y: cy, r: 4, a: 0.7 });
      for (const n of nodes) {
        const d = Math.hypot(n.x - cx, n.y - cy);
        if (d < 260 && d > 1) {
          n.vx += ((n.x - cx) / d) * (1.6 - d / 200);
          n.vy += ((n.y - cy) / d) * (1.6 - d / 200);
        }
      }
    };

    resize();
    window.addEventListener("resize", resize);
    if (!reduce) {
      host.addEventListener("mousemove", move);
      host.addEventListener("mouseleave", leave);
      host.addEventListener("click", click);
      raf = requestAnimationFrame(step);
    }
    const io = new IntersectionObserver(([en]) => {
      const was = visible;
      visible = en.isIntersecting;
      if (visible && !was && !reduce) raf = requestAnimationFrame(step);
    });
    io.observe(host);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("resize", resize);
      host.removeEventListener("mousemove", move);
      host.removeEventListener("mouseleave", leave);
      host.removeEventListener("click", click);
    };
  }, []);

  return <canvas ref={ref} className="wi-canvas" aria-hidden="true" />;
}

function ArrowRightIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" />
      <path d="m13 5 7 7-7 7" />
    </svg>
  );
}

type Variant = "primary" | "outline" | "solid" | "ghostDark";
const BTN: Record<Variant, string> = {
  primary: "site-btn-primary wi-pulse inline-flex items-center justify-center gap-3 whitespace-nowrap",
  outline: "inline-flex items-center justify-center gap-3 whitespace-nowrap rounded-full border border-[#c7d7df] bg-white px-6 py-3 text-[15px] font-semibold text-[#2f6f73] transition hover:bg-[#f4f9fa]",
  solid: "wi-pulse inline-flex items-center justify-center gap-3 whitespace-nowrap rounded-full bg-[#3a8f90] px-10 py-4 text-[16px] font-semibold text-white transition hover:bg-[#347f80]",
  ghostDark: "inline-flex items-center justify-center whitespace-nowrap rounded-full border border-white/30 px-10 py-4 text-[16px] font-semibold text-white transition hover:bg-white/10",
};

function CtaLink({ href, children, variant = "primary" }: { href: string; children: ReactNode; variant?: Variant }) {
  return (
    <Magnetic>
      <Link href={href} className={`wi-btn ${BTN[variant]}`}>
        {children}
        {variant !== "ghostDark" && <span className="wi-arrow"><ArrowRightIcon /></span>}
      </Link>
    </Magnetic>
  );
}

function TextLink({ href, children, dark = false }: { href: string; children: ReactNode; dark?: boolean }) {
  return (
    <Link href={href} className={`wi-tlink inline-flex items-center gap-2 text-[15.5px] font-semibold ${dark ? "is-dark text-[#7ec4c7]" : "text-[#2f6f73]"}`}>
      {children}
      <span className="wi-arrow"><ArrowRightIcon /></span>
    </Link>
  );
}

function Kicker({ children, dark = false, center = false }: { children: ReactNode; dark?: boolean; center?: boolean }) {
  return (
    <motion.p
      className={`site-kicker ${dark ? "text-[#7ec4c7]" : ""} ${center ? "text-center" : ""}`}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={VIEW}
      transition={{ duration: 0.7, ease: EASE }}
    >
      {children}
    </motion.p>
  );
}

function Reveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div className={className} initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={VIEW} transition={{ duration: 0.8, delay, ease: EASE }}>
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Sections                                                           */
/* ------------------------------------------------------------------ */

function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const [stage, setStage] = useState(0);
  const [paused, setPaused] = useState(false);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    if (paused || reduce) return;
    const id = setInterval(() => setStage((s) => (s + 1) % STAGES.length), 2600);
    return () => clearInterval(id);
  }, [paused, reduce]);

  const spot = (e: ReactMouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--sx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--sy", `${e.clientY - r.top}px`);
  };

  return (
    <section ref={ref} className="hero-grid wi-hero relative overflow-hidden" aria-labelledby="hero-h" onMouseMove={spot}>
      {/* <NetworkCanvas />
      <div className="wi-hero-glow" />
      <div className="wi-hero-spot" /> */}
      <motion.div className="wi-hero-in site-container relative z-[1] flex flex-col items-center pb-10 pt-12 text-center lg:pt-16" style={{ y, opacity: fade }}>
        <Kicker>Wolvio Intelligence</Kicker>

        <SplitText as="h1" id="hero-h" className="mt-4 font-bold text-[var(--primary)] leading-[1.12] tracking-[-0.03em] [font-size:clamp(2rem,3vw,3rem)]" lines={["From AI ambition", "to enterprise impact."]} mark="enterprise impact" renderMark={(c) => <AnimatedUnderline>{c}</AnimatedUnderline>} delay={0.3} onMount />

        <motion.p
          className="site-subheading mt-5 max-w-[700px]"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.0, ease: EASE }}
        >
          Wolvio Intelligence helps enterprises discover, build and scale AI — combining strategy, intelligent engineering, agentic automation and enterprise expertise to turn AI into measurable business value.
        </motion.p>



        <motion.div
          className="mt-4 md:mt-8 flex flex-col justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.15, ease: EASE }}
        >
          {buttons.map((btn, i) => (
            <Link
              key={i}
              href={btn.href}
              className={
                btn.variant === "primary"
                  ? "site-btn-primary whitespace-nowrap"
                  : btn.variant === "secondary"
                    ? "site-btn-secondary whitespace-nowrap"
                    : "inline-flex items-center justify-center gap-3 whitespace-nowrap rounded-full border border-[#c7d7df] bg-white px-6 py-3 text-[15px] font-semibold text-[#2f6f73] transition hover:bg-[#f4f9fa]"
              }
            >
              {btn.label}
              <ArrowRightIcon />
            </Link>
          ))}
        </motion.div>

        <div className="wi-stages" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          {STAGES.map((s, i) => (
            <motion.button
              type="button"
              key={s.k}
              className={`wi-stage ${stage === i ? "is-on" : ""}`}
              onMouseEnter={() => setStage(i)}
              onFocus={() => setStage(i)}
              onClick={() => setStage(i)}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.4 + i * 0.12, ease: EASE }}
            >
              <span className="wi-stage-bar">
                <motion.i initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.8, delay: 1.7 + i * 0.35, ease: EASE }} />
              </span>
              <span className="wi-stage-k">{s.n} · {s.k}</span>
              <span className="wi-stage-t">{s.t}</span>
            </motion.button>
          ))}
        </div>
      </motion.div>

      <div className="wi-marquee" aria-hidden="true">
        <div className="wi-marquee-track">
          {[...MARQUEE, ...MARQUEE].map((m, i) => (
            <span key={i} className="wi-marquee-item"><i />{m}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Value() {
  return (
    <section className="site-section" aria-labelledby="s2-h">
      <div className="site-container">
        <Kicker>Enterprise Value</Kicker>
        <SplitText id="s2-h" className="mt-4 max-w-[880px]" lines={["AI is easy to experiment with.", "Harder to make matter."]} />
        <Reveal delay={0.15}>
          <p className="site-body mt-5 max-w-[980px]">
            Wolvio Intelligence bridges the gap between AI possibilities and enterprise value — connecting intelligence with your data, knowledge, systems and workflows.
          </p>
        </Reveal>

        <div className="wi-ledhead wi-desktop-only" aria-hidden="true">
          <p>WHERE AI STALLS</p>
          <p className="is-teal">HOW WOLVIO INTELLIGENCE CLOSES IT</p>
          <p className="is-ink">WHAT THE ENTERPRISE GETS</p>
        </div>

        <motion.div role="table" aria-label="Where AI stalls, how Wolvio Intelligence closes the gap, and what the enterprise gets" className="wi-ledger" variants={stagger(0.2)} initial="hidden" whileInView="show" viewport={VIEW}>
          {GAPS.map((g, i) => (
            <motion.div role="row" key={i} className="wi-row" variants={riseV}>
              <div role="cell" className="wi-cell wi-cell-lost">
                <span className="wi-num">{String(i + 1).padStart(2, "0")}</span>
                <p>{g.lost}</p>
              </div>
              <div role="cell" className="wi-cell wi-cell-close">
                <motion.span className="wi-bar" variants={{ hidden: { scaleY: 0 }, show: { scaleY: 1, transition: { duration: 0.7, delay: 0.25, ease: EASE } } }} />
                <p>{g.close}</p>
              </div>
              <div role="cell" className="wi-cell wi-cell-gain">
                <span className="wi-gain-arrow"><ArrowRightIcon /></span>
                <p>{g.gain}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <Reveal className="mt-8"><TextLink href="/contact-us">Discover Where AI Can Create Value</TextLink></Reveal>
      </div>
    </section>
  );
}

function Capabilities() {
  const [active, setActive] = useState(0);
  const railRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: railRef, offset: ["start 88%", "end 52%"] });
  const rail = useSpring(scrollYProgress, { stiffness: 90, damping: 22 });
  const head = useTransform(rail, (v) => `${v * 100}%`);
  const accents = ["bg-[#163f7d]", "bg-[#2f8b92]", "bg-[#163f7d]", "bg-[#2f8b92]"];

  return (
    <section id="capabilities" className="site-section-alt" aria-labelledby="s3-h">
      <div className="site-container">
        <Kicker>Core Capabilities</Kicker>
        <SplitText id="s3-h" className="mt-4 max-w-[880px]" lines={["One intelligence partner.", "From strategy to scale."]} />
        <Reveal delay={0.15}>
          <p className="site-body mt-4 max-w-[980px]">A single connected lifecycle — each stage builds on the last, from where AI creates value to running it securely at enterprise scale.</p>
        </Reveal>

        <div ref={railRef} className="wi-rail wi-desktop-only" aria-hidden="true">
          <motion.div className="wi-rail-fill" style={{ scaleX: rail }} />
          <motion.span className="wi-rail-head" style={{ left: head }} />
        </div>

        <motion.div className="wi-cards" variants={stagger(0.15)} initial="hidden" whileInView="show" viewport={VIEW}>
          {SERVICES.map((s, i) => (
            <motion.div key={s.k} variants={{ hidden: { opacity: 0, y: 60, scale: 0.94 }, show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 90, damping: 16 } } }}>
              <Tilt className={`wi-svc site-card relative overflow-hidden bg-white p-6 sm:p-7 ${active === i ? "is-on" : ""}`} tabIndex={0} onMouseEnter={() => setActive(i)} onFocus={() => setActive(i)}>
                <div className={`absolute left-0 top-0 h-[5px] w-full ${accents[i % 4]}`} />
                <div className="wi-svc-top">
                  <p className="text-[42px] font-semibold leading-none text-[#dbe3e8]">{String(i + 1).padStart(2, "0")}</p>
                  <span className="wi-svc-k"><span className="wi-dot" />{s.k}</span>
                </div>
                <h3 className="mt-3">{s.title}</h3>
                <p className="mt-3">{s.sub}</p>
                <ul className="wi-list">
                  {s.items.map((it, n) => (
                    <li key={it} style={{ "--i": n } as CSSProperties}>{it}</li>
                  ))}
                </ul>
                <span className="wi-svc-line" />
              </Tilt>
            </motion.div>
          ))}
        </motion.div>

        <Reveal className="mt-8"><TextLink href="/contact-us">Explore AI Capabilities</TextLink></Reveal>
      </div>
    </section>
  );
}

function Flow() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.3 });
  const [phase, setPhase] = useState(0);
  const [hold, setHold] = useState(false);

  useEffect(() => {
    if (reduce) {
      setPhase(7);
      return;
    }
    if (!inView || hold) return;
    const id = setInterval(() => setPhase((p) => (p + 1) % 9), 1050);
    return () => clearInterval(id);
  }, [inView, hold, reduce]);

  const lit = (n: number) => (phase >= n ? "is-lit" : "");
  const jump = (n: number) => {
    setHold(true);
    setPhase(n);
  };

  return (
    <section className="tone-lock wi-dark relative w-full overflow-hidden bg-[#082b4a] py-14 sm:py-16 lg:py-20" aria-labelledby="s4-h">
      <div className="wi-dots" />
      <div className="site-container relative z-[1]">
        <Kicker dark>Intelligence in Action</Kicker>
        <SplitText id="s4-h" className="mt-4 max-w-[900px] text-white" lines={["Intelligence that understands.", "Intelligence that acts."]} />
        <Reveal delay={0.15}>
          <p className="mt-6 max-w-[900px] text-[17px] leading-[1.65] text-[#b6c9da]">Enterprise information enters, is understood in context, reasoned over, decided on — and becomes a controlled action in your systems.</p>
        </Reveal>

        <div
          ref={ref}
          className="wi-flow"
          role="group"
          aria-label="Flow: enterprise inputs are understood, reasoned over, decided on and acted upon, producing outcomes — answer, automate, predict, recommend, execute"
          onMouseEnter={() => setHold(true)}
          onMouseLeave={() => setHold(false)}
        >
          <div className="wi-flow-col">
            <p className="wi-flow-label">INPUT</p>
            <div className="wi-chips">
              {CONTEXT.map((c, i) => (
                <span key={c} className={`wi-chip ${lit(1)}`} style={{ "--d": `${i * 90}ms` } as CSSProperties}>{c}</span>
              ))}
            </div>
          </div>

          <div className="wi-flow-col wi-flow-mid">
            <p className="wi-flow-label is-teal">INTELLIGENCE</p>
            <div className="wi-thread">
              <button type="button" className={`wi-step ${lit(2)}`} onClick={() => jump(2)}>{THREAD[0]}</button>
              <div className="wi-wire"><i className={lit(3)} /></div>
              <button type="button" className={`wi-step ${lit(3)}`} onClick={() => jump(3)}>{THREAD[1]}</button>
              <svg viewBox="0 0 220 60" role="presentation" className="wi-fan">
                <g fill="none" stroke="#2a5877">
                  <path d="M110 0 C 110 30, 40 30, 40 60" />
                  <path d="M110 0 C 110 30, 180 30, 180 60" />
                </g>
                <path d="M110 0 L110 60" fill="none" stroke="#7ec4c7" strokeWidth="1.6" style={{ opacity: phase >= 4 ? 1 : 0.15, transition: "opacity .5s" }} />
                {phase >= 4 && !reduce && (
                  <>
                    <circle r="2.8" fill="#bfe6e8"><animateMotion dur="1.3s" repeatCount="indefinite" path="M110 0 L110 60" /></circle>
                    <circle r="2" fill="#7ec4c7"><animateMotion dur="1.7s" repeatCount="indefinite" path="M110 0 C 110 30, 40 30, 40 60" /></circle>
                    <circle r="2" fill="#7ec4c7"><animateMotion dur="1.7s" begin="0.4s" repeatCount="indefinite" path="M110 0 C 110 30, 180 30, 180 60" /></circle>
                  </>
                )}
              </svg>
              <button type="button" className={`wi-step ${lit(4)}`} onClick={() => jump(4)}>{THREAD[2]}</button>
              <div className="wi-wire"><i className={lit(5)} /></div>
              <button type="button" className={`wi-step wi-step-end ${lit(5)}`} onClick={() => jump(5)}>{THREAD[3]}</button>
            </div>
          </div>

          <div className="wi-flow-col wi-flow-out">
            <p className="wi-flow-label is-teal">OUTCOMES</p>
            <div className="wi-chips">
              {OUTCOMES.map((o, i) => (
                <span key={o} className={`wi-out ${lit(6)}`} style={{ "--d": `${i * 110}ms` } as CSSProperties}><i />{o}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="wi-console" aria-hidden="true">
          <div className="wi-console-bar"><i /><i /><i /><span>AGENT RUN</span></div>
          <div className="wi-console-body">
            {CONSOLE.map((c, i) => (
              <p key={c.k} className={`wi-cline ${phase >= i + 1 ? "is-lit" : ""} ${phase === i + 1 ? "is-now" : ""}`}>
                <b>{c.k}</b>
                <span>{c.t}</span>
              </p>
            ))}
          </div>
        </div>

        <motion.div className="wi-suites" variants={stagger(0.09)} initial="hidden" whileInView="show" viewport={VIEW}>
          {SUITES.map((s) => (
            <motion.div key={s.t} className="wi-suite" variants={riseV}>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
            </motion.div>
          ))}
        </motion.div>

        <Reveal className="mt-10"><TextLink href="/contact-us" dark>Bring Us Your Business Challenge</TextLink></Reveal>
      </div>
    </section>
  );
}

function FragmentPair({ children, showTimes, cardV, timesV }: { children: ReactNode; showTimes: boolean; cardV: Variants; timesV: Variants }) {
  return (
    <>
      <motion.div className="wi-eq-slot" variants={cardV}>{children}</motion.div>
      {showTimes && <motion.div className="wi-times" variants={timesV} aria-hidden="true">×</motion.div>}
    </>
  );
}

function Why() {
  const narrow = useNarrow();
  const cardV: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.94 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 90, damping: 15 } },
  };
  const timesV: Variants = {
    hidden: { opacity: 0, scale: 0, rotate: -120 },
    show: { opacity: 1, scale: 1, rotate: 0, transition: { type: "spring", stiffness: 220, damping: 12 } },
  };
  const draw: Variants = { hidden: { pathLength: 0 }, show: { pathLength: 1, transition: { duration: 1.1, ease: EASE } } };
  const accents = ["bg-[#163f7d]", "bg-[#2f8b92]", "bg-[#163f7d]"];

  return (
    <section className="site-section" aria-labelledby="s5-h">
      <div className="site-container">
        <Kicker>Why Wolvio Intelligence</Kicker>
        <SplitText id="s5-h" className="mt-4 max-w-[880px]" lines={["Built for enterprise.", "Grounded in your business."]} />
        <Reveal delay={0.15}>
          <p className="site-body mt-5 max-w-[980px]">Generic AI understands information. Enterprise AI must understand your organization — its data, processes, terminology, systems and operating context.</p>
        </Reveal>

        <motion.div
          className="wi-eq"
          role="group"
          aria-label="Equation: AI engineering, multiplied by enterprise engineering, multiplied by domain intelligence, equals enterprise AI that works in the real world"
          variants={stagger(0.18)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {EQUATION.map((e, i) => (
            <FragmentPair key={e.t} showTimes={i < EQUATION.length - 1} cardV={cardV} timesV={timesV}>
              <Tilt className="wi-eq-card site-card relative overflow-hidden bg-white p-6 sm:p-7" max={7}>
                <div className={`absolute left-0 top-0 h-[5px] w-full ${accents[i]}`} />
                <p className="wi-eq-t">{e.t}</p>
                <div className="wi-eq-list">
                  {e.items.map((it) => (
                    <span key={it}>{it}</span>
                  ))}
                </div>
              </Tilt>
            </FragmentPair>
          ))}
        </motion.div>

        <motion.div variants={stagger(0.1, 0.1)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }}>
          {!narrow ? (
            <svg viewBox="0 0 1200 90" role="presentation" className="wi-eq-svg">
              <g fill="none" stroke="#2f8b92" strokeWidth="1.4">
                <motion.path variants={draw} d="M200 0 C 200 50, 600 40, 600 88" />
                <motion.path variants={draw} d="M600 0 L 600 88" />
                <motion.path variants={draw} d="M1000 0 C 1000 50, 600 40, 600 88" />
              </g>
            </svg>
          ) : (
            <div className="wi-vline"><motion.i variants={{ hidden: { scaleY: 0 }, show: { scaleY: 1, transition: { duration: 0.8, ease: EASE } } }} /></div>
          )}
          <motion.div className="wi-result" variants={{ hidden: { opacity: 0, scale: 0.9 }, show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 110, damping: 14 } } }}>
            <div className="wi-result-in">
              <p className="wi-eq-sign">=</p>
              <h3 className="mx-auto max-w-[760px] text-white">Enterprise AI that works in the real world</h3>
            </div>
          </motion.div>
        </motion.div>

        <motion.ul className="wi-trust" variants={stagger(0.12)} initial="hidden" whileInView="show" viewport={VIEW}>
          {TRUST.map((t) => (
            <motion.li key={t} variants={{ hidden: { opacity: 0, scale: 0.7, y: 16 }, show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 200, damping: 14 } } }}>
              <i />
              {t}
            </motion.li>
          ))}
        </motion.ul>
        <Reveal><p className="wi-sectors">LIFE SCIENCES · ENGINEERING & RELIABILITY · ENTERPRISE OPERATIONS</p></Reveal>
      </div>
    </section>
  );
}

function Workshop() {
  const narrow = useNarrow();
  const [hot, setHot] = useState<number | null>(null);
  const fill = (delay: number, dur: number) => ({
    initial: narrow ? { scaleY: 0 } : { scaleX: 0 },
    whileInView: narrow ? { scaleY: 1 } : { scaleX: 1 },
    viewport: { once: true, amount: 0.6 },
    transition: { duration: dur, delay, ease: EASE },
    style: { transformOrigin: narrow ? "top" : "left" },
  });
  const pop = (d: number) => ({
    initial: { opacity: 0, y: 24, scale: 0.96 },
    whileInView: { opacity: 1, y: 0, scale: 1 },
    viewport: { once: true, amount: 0.6 },
    transition: { duration: 0.6, delay: d, ease: EASE },
  });

  return (
    <section className="tone-lock site-section" aria-labelledby="s6-h">
      <div className="site-container">
        <motion.div
          className="wi-band relative overflow-hidden rounded-[34px] bg-[linear-gradient(130deg,#072c52,#0a2d55_48%,#0e355f)] p-10 text-white sm:p-14"
          initial={{ opacity: 0, y: 50, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 1, ease: EASE }}
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(47,143,146,0.24),transparent_30%),radial-gradient(circle_at_70%_80%,rgba(47,143,146,0.22),transparent_38%)] wi-band-glow" />
          <div className="wi-dots" />
          <div className="relative text-center">
            <span className="inline-flex rounded-full border border-[#1f6980] bg-[#114866]/55 px-5 py-2 text-[14px] font-semibold uppercase tracking-[0.12em] text-[#7ec4c7]">
              AI Transformation Workshop
            </span>
            <SplitText id="s6-h" className="mx-auto mt-7 max-w-[900px] text-white" lines={["Where can AI create the greatest", "value in your enterprise?"]} />
            <Reveal delay={0.15}>
              <p className="mx-auto mt-5 max-w-[760px] text-[17px] leading-[1.65] text-[#b6c9da]">You don't need another AI experiment. Start with the business opportunity.</p>
            </Reveal>

            <div className="wi-path" role="group" aria-label="Workshop path: your business challenge, through discover, prioritize, define and shape, to an AI transformation roadmap">
              <motion.div className="wi-path-end" {...pop(0)}>
                <p>START</p>
                <p className="wi-path-t">Your business challenge</p>
              </motion.div>

              <div className="wi-conn"><div className="wi-conn-rail"><motion.i {...fill(0.4, 1.2)} /></div></div>

              <div className="wi-path-steps">
                {WORKSHOP.map((w, i) => (
                  <motion.div
                    key={w.k}
                    className={`wi-pstep ${hot === i ? "is-hot" : ""}`}
                    tabIndex={0}
                    onMouseEnter={() => setHot(i)}
                    onMouseLeave={() => setHot(null)}
                    onFocus={() => setHot(i)}
                    onBlur={() => setHot(null)}
                    {...pop(0.7 + i * 0.25)}
                  >
                    <p className="wi-pstep-k">{w.k}</p>
                    <p>{w.t}</p>
                    <span className="wi-pstep-line" />
                  </motion.div>
                ))}
              </div>

              <div className="wi-conn"><div className="wi-conn-rail"><motion.i {...fill(1.9, 1)} /></div></div>

              <motion.div className="wi-path-end is-out" {...pop(2.2)}>
                <p>OUTCOME</p>
                <p className="wi-path-t">AI transformation roadmap</p>
              </motion.div>
            </div>

            <Reveal className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <CtaLink href="/contact-us" variant="solid">Start Your AI Transformation</CtaLink>
              <CtaLink href="/contact-us" variant="ghostDark">Talk to Wolvio Intelligence</CtaLink>
            </Reveal>
            <p className="mt-6 text-[14.5px] text-[#9fb9cc]">From focused AI initiatives to enterprise-wide transformation.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function WolvioIntelligenceClient() {
  const { scrollYProgress } = useScroll();
  const bar = useSpring(scrollYProgress, { stiffness: 120, damping: 28, restDelta: 0.001 });

  return (
    <MotionConfig reducedMotion="user">
      <div className="wi">
        <motion.div className="wi-progress" style={{ scaleX: bar }} aria-hidden="true" />
        <Hero />
        <Value />
        <Capabilities />
        <Flow />
        <Why />
        <Workshop />
      </div>
    </MotionConfig>
  );
}
