import Link from "next/link";
import type { ReactNode } from "react";

type OrbitCard = {
  label: string;
  shortLabel?: string;
  x: number;
  y: number;
  accent: string;
  border: string;
  glow: string;
  icon: ReactNode;
};

type SimpleCard = {
  title: string;
  description: string;
  accent: string;
  icon: ReactNode;
};

const orbitCards: OrbitCard[] = [
  {
    label: "Blockchain",
    x: 50,
    y: 14,
    accent: "#6366f1",
    border: "rgba(99, 102, 241, 0.14)",
    glow: "rgba(99, 102, 241, 0.08)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 17H7A5 5 0 0 1 7 7h2" />
        <path d="M15 7h2a5 5 0 1 1 0 10h-2" />
        <path d="M8 12h8" />
      </svg>
    ),
  },
  {
    label: "Cloud",
    x: 81.1769,
    y: 32,
    accent: "#0ea5e9",
    border: "rgba(14, 165, 233, 0.14)",
    glow: "rgba(14, 165, 233, 0.08)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
      </svg>
    ),
  },
  {
    label: "AI",
    x: 81.1769,
    y: 68,
    accent: "#8b5cf6",
    border: "rgba(139, 92, 246, 0.14)",
    glow: "rgba(139, 92, 246, 0.08)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 5a3 3 0 1 0-6 .1 4 4 0 0 0-2.5 5.8A4 4 0 0 0 4 17.5 4 4 0 1 0 12 18" />
        <path d="M12 5a3 3 0 1 1 6 .1 4 4 0 0 1 2.5 5.8 4 4 0 0 1-.6 6.6A4 4 0 1 1 12 18" />
        <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
      </svg>
    ),
  },
  {
    label: "Veeva",
    x: 50,
    y: 86,
    accent: "#2f6f73",
    border: "rgba(47, 111, 115, 0.14)",
    glow: "rgba(47, 111, 115, 0.08)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M10 2v6a2 2 0 0 1-.24.96L4.25 19.04A2 2 0 0 0 6 22h12a2 2 0 0 0 1.75-2.96l-5.5-10.08A2 2 0 0 1 14 8V2" />
        <path d="M8.5 2h7" />
        <path d="M6.45 15h11.1" />
      </svg>
    ),
  },
  {
    label: "Web3",
    x: 18.8231,
    y: 68,
    accent: "#f59e0b",
    border: "rgba(245, 158, 11, 0.14)",
    glow: "rgba(245, 158, 11, 0.08)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M21.54 15H17a2 2 0 0 0-2 2v4.54" />
        <path d="M7 3.34V5a3 3 0 0 0 3 3 2 2 0 0 1 2 2 2 2 0 0 0 2 2 2 2 0 0 0 2-2 2 2 0 0 1 2-2h3.17" />
        <path d="M11 21.95V18a2 2 0 0 0-2-2 2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" />
      </svg>
    ),
  },
  {
    label: "Analytics",
    x: 18.8231,
    y: 32,
    accent: "#10b981",
    border: "rgba(16, 185, 129, 0.14)",
    glow: "rgba(16, 185, 129, 0.08)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 3v16a2 2 0 0 0 2 2h16" />
        <path d="M8 17v-3" />
        <path d="M13 17V5" />
        <path d="M18 17V9" />
      </svg>
    ),
  },
];

const stars = [
  { left: "18%", top: "15%", scale: 0.95 },
  { left: "35%", top: "40%", scale: 0.9 },
  { left: "52%", top: "65%", scale: 1 },
  { left: "70%", top: "28%", scale: 0.5 },
  { left: "25%", top: "75%", scale: 0.87 },
  { left: "60%", top: "50%", scale: 0.98 },
  { left: "42%", top: "85%", scale: 0.94 },
  { left: "78%", top: "35%", scale: 0.69 },
];

const outerLinks = [
  [50, 14, 81.1769, 32],
  [81.1769, 32, 81.1769, 68],
  [81.1769, 68, 50, 86],
  [50, 86, 18.8231, 68],
  [18.8231, 68, 18.8231, 32],
  [18.8231, 32, 50, 14],
  [50, 14, 81.1769, 68],
  [81.1769, 32, 50, 86],
  [81.1769, 68, 18.8231, 68],
  [50, 86, 18.8231, 32],
  [18.8231, 68, 50, 14],
  [18.8231, 32, 81.1769, 32],
];

const deliveryStats = [
  { value: "8+", label: "Certified Veeva Experts" },
  { value: "10+", label: "Specialist Delivery Partnerships" },
  { value: "15+", label: "Veeva Engagements Delivered" },
  { value: "50+", label: "Years of Combined Life Sciences Expertise" },
  { value: "3", label: "Continents Asia, Europe & North America" },
]

const serviceCards: SimpleCard[] = [
  {
    title: "Veeva Consulting & Implementation",
    description:
      "Getting Vault right from the start saves years of technical debt, rework, and compliance risk down the line. We support  implementation that are built to last not just built to launch.",
    accent: "bg-[#0b3a63]",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
      >
        <path d="m13 2-7 11h6l-1 9 7-11h-6l1-9z" />
      </svg>
    ),
  },
  {
    title: "Veeva Managed Services & Post Go-Live Support",
    description:
      "Most implementation partners disappear after go-live. We don't. Your Vault environment needs to evolve as your business grows, your regulatory obligations change, and new releases land. We stay and make sure it does.",
    accent: "bg-[#2f8b92]",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
      >
        <path d="M12 3 6 6v6c0 5.2 3.8 8.7 6 9 2.2-.3 6-3.8 6-9V6l-6-3z" />
      </svg>
    ),
  },
  {
    title: "Vault Domain Expertise ",
    description:
      "Clinical · Regulatory · Quality · Safety · Commercial · CRM we have hands-on configuration experience across every major Vault suite. Whichever domain your challenge sits in, we've worked there before.",
    accent: "bg-[linear-gradient(90deg,#0b3a63_0%,#2f8b92_100%)]",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
      >
        <path d="M9 4.5v3m6-3v3M6.5 10A3.5 3.5 0 1 1 10 6.5M17.5 10A3.5 3.5 0 1 0 14 6.5" />
        <path d="M12 11v2.5m-4.5 4a3.5 3.5 0 1 1 3.5-3.5M16.5 17.5A3.5 3.5 0 1 0 13 14" />
      </svg>
    ),
  },
]

const caseCards: SimpleCard[] = [
  {
    title: "Challenge",
    description:
      "A UK-based global pharma company was running a rigid, non-integrable legacy CTMS with no real-time visibility, an eTMF that failed inspection-readiness standards, and business teams dependent on spreadsheets and emails creating siloed data, duplicated effort, and systemic compliance risk across clinical operations.",
    accent: "bg-[#0b3a63]",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
      >
        <path d="M12 8v4" />
        <path d="M12 16h.01" />
        <path d="M10.3 3.4 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.4a2 2 0 0 0-3.4 0Z" />
      </svg>
    ),
  },
  {
    title: "Solution",
    description:
      "Wolvio delivered a three-phase Veeva Vault transformation replacing and decommissioning legacy eTMF and CTMS, then building Study Startup all within a single unified vault. Delivery included complex data migrations, multi-directional integrations, AI-powered TMF classification, Japan CTMS, Risk-Based Study Management, custom SDK development, and mobile enablement.",
    accent: "bg-[#2f8b92]",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
      >
        <path d="m10 14-2-2a2 2 0 1 1 3-3l1 1 3-3a2 2 0 1 1 3 3l-6 6a2 2 0 0 1-3 0Z" />
      </svg>
    ),
  },
  {
    title: "Outcome",
    description:
      " Three systems unified into one vault. All legacy platforms fully decommissioned. Spreadsheet-driven workflows eliminated entirely. Teams gained real-time visibility across all studies, faster site activation, stronger inspection readiness, and reduced compliance risk positioning the client for scalable, audit-confident clinical trial management globally.",
    accent: "bg-[linear-gradient(90deg,#0b3a63_0%,#2f8b92_100%)]",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
      >
        <path d="M12 3 4.5 7v6c0 5 3.7 7.9 7.5 8.8 3.8-.9 7.5-3.8 7.5-8.8V7L12 3Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
]

const whyCards: SimpleCard[] = [
  {
    title: " Life Sciences Focus",
    description:
      "We work exclusively within pharma, biotech, and medtech bringing deep regulatory understanding to every Veeva engagement, from initial scoping to final delivery.",
    accent: "bg-[#2f8b92]",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
      >
        <path d="m9 12 2 2 4-4" />
        <circle
          cx="12"
          cy="12"
          r="9"
        />
      </svg>
    ),
  },
  {
    title: "Veeva Platform Depth",
    description:
      "Our team carries hands-on experience across different Veeva Vault suites and applications ensuring the right expertise is applied every time",
    accent: "bg-[#0b3a63]",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
      >
        <circle
          cx="9"
          cy="8"
          r="3"
        />
        <path d="M4 20a5 5 0 0 1 10 0" />
        <circle
          cx="17"
          cy="9"
          r="2.5"
        />
        <path d="M15 20h6a4 4 0 0 0-4-4" />
      </svg>
    ),
  },
  {
    title: "Compliance-First Execution",
    description:
      "Validation, GxP discipline, and audit-readiness are built into our delivery methodology not added as an afterthought when go-live approaches",
    accent: "bg-[#2f8b92]",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
      >
        <path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8" />
        <rect
          x="8"
          y="8"
          width="8"
          height="8"
          rx="1.5"
        />
      </svg>
    ),
  },
  {
    title: "Cross-Functional Delivery Strength",
    description:
      "We bring together configuration, integration & data governance, user support, and change management covering every dimension of a successful Veeva Vault deployment.",
    accent: "bg-[linear-gradient(90deg,#0b3a63_0%,#2f8b92_100%)]",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
      >
        <path d="m12 3 1.4 3.3L17 7.7l-3.1 2.4 1 3.7-2.9-2-2.9 2 1-3.7L7 7.7l3.6-1.4L12 3Z" />
      </svg>
    ),
  },
  {
    title: "Post-Go-Live Continuity",
    description:
      "Our involvement doesn't end with implementation support. We provide managed services,  responsive support, release & delivery management and platform maturity to keep your Vault environment performing reliably.",
    accent: "bg-[#2f8b92]",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
      >
        <path d="M12 3l7 3v5c0 4.5-2.8 8.2-7 10-4.2-1.8-7-5.5-7-10V6l7-3Z" />
        <path d="m9.5 12 1.8 1.8 3.7-3.8" />
        <path d="M16.5 8.5a4.5 4.5 0 0 1 0 7" />
      </svg>
    ),
  },
]

const insightCards = [
  {
    tag: "Veeva Vault 26R1 Feature",
    title:
      "Wolvio Insights: Why Doctype Triggers Could Be a Game-Changer for Document-Centric Processes",
    description:
      "A deep dive into one of the most meaningful extensibility enhancements in Veeva Vault 26R1 and what it means for Clinical, Quality, Regulatory, and Medical content operations in Life Sciences.",
    minutes: "6 min read",
    bg: "bg-gradient-to-br from-[#26767c] to-[#08233a] hover:from-[#08233a] hover:to-[#26767c]",
  },
  {
    tag: "Veeva Vault AI Agents",
    title: "Navigating Veeva Vault AI Agents:  Wolvio Insights",
    description:
      "A practical guide to understanding and leveraging Veeva Vault AI agents, showing how embedded, context-aware automation is transforming workflows, compliance, and productivity across Life Sciences.",
    minutes: "7 min read",
    bg: "bg-gradient-to-br from-[#26767c] to-[#08233a] hover:from-[#08233a] hover:to-[#26767c]",
  },
]

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

function ServiceBadge({ card }: { card: OrbitCard }) {
  return (
    <div
      className="absolute -translate-x-1/2 -translate-y-1/2"
      style={{ left: `${card.x}%`, top: `${card.y}%` }}
    >
      <div className="rounded-full border border-white/70 bg-white/90 px-2 py-2 shadow-[0_10px_36px_rgba(28,40,55,0.08)] backdrop-blur-xl md:px-5 md:py-2">
        <div className="flex items-center gap-3">
          <div
            className="flex h-11 w-11 items-center justify-center rounded-2xl border"
            style={{
              color: card.accent,
              background: card.glow,
              borderColor: card.border,
            }}
          >
            <div className="h-4 w-4">{card.icon}</div>
          </div>
          <span className="text-base font-semibold tracking-[-0.02em] text-[#17314c]">
            {card.shortLabel ?? card.label}
          </span>
        </div>
      </div>
    </div>
  );
}

function SolutionDiagram() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[620px]">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#2f6f73" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#2f6f73" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="50" cy="50" r="28" fill="url(#hubGlow)" />
        {outerLinks.map(([x1, y1, x2, y2]) => (
          <line
            key={`${x1}-${y1}-${x2}-${y2}`}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#2f6f73"
            strokeWidth="0.15"
            strokeDasharray="1 1.5"
            opacity="0.25"
          />
        ))}
        {orbitCards.map(card => (
          <line
            key={`hub-${card.label}`}
            x1="50"
            y1="50"
            x2={card.x}
            y2={card.y}
            stroke="#73aeb0"
            strokeWidth="0.2"
            opacity="0.55"
          />
        ))}
      </svg>

      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center">
        <div className="absolute h-[110px] w-[110px] rounded-full border border-[rgba(47,111,115,0.15)]" />
        <div className="absolute h-[88px] w-[88px] rounded-full border border-[rgba(47,111,115,0.12)]" />
        <div className="relative flex h-[74px] w-[74px] flex-col items-center justify-center rounded-full border border-[rgba(47,111,115,0.2)] bg-[linear-gradient(135deg,rgba(47,111,115,0.12),rgba(10,37,64,0.06))] text-center backdrop-blur-md">
          <span className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-[#2f6f73]">Digital</span>
          <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#17314c]">Solutions</span>
        </div>
      </div>

      {orbitCards.map(card => (
        <ServiceBadge key={card.label} card={card} />
      ))}

      {stars.map((star, index) => (
        <div
          key={`${star.left}-${star.top}-${index}`}
          className="absolute h-[3px] w-[3px] rounded-full bg-[#78c7c9]"
          style={{
            left: star.left,
            top: star.top,
            transform: `scale(${star.scale})`,
          }}
        />
      ))}
    </div>
  );
}

function PillCard({ item }: { item: SimpleCard }) {
  return (
    <article className="relative overflow-hidden rounded-[26px] border border-[#d7dde4] bg-[#f8fafc] p-6 shadow-[0_8px_20px_rgba(8,43,74,0.03)]">
      <div className={`absolute left-0 top-0 h-[5px] w-full ${item.accent}`} />
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#dfe4e9] text-[#23415d]">
        <div className="h-6 w-6">{item.icon}</div>
      </div>
      <h3 className="mt-5 ">{item.title}</h3>
      <p className="mt-4 ">{item.description}</p>
    </article>
  );
}

export default function Home() {
  return (
    <main
      id="home"
      className="polish-layout min-h-screen overflow-x-hidden bg-[#f8fafc] text-[#0f172a]"
    >
      <div className="hero-grid">
        <section className="site-container grid items-center gap-12 pt-10 pb-16 px-16 lg:grid-cols-[minmax(0,1.02fr)_minmax(540px,0.98fr)] lg:pb-24">
          <div className="max-w-[760px] mx-auto lg:mx-0 ">
            <h1 className="max-w-[550px] text-center lg:text-left">
              Specialist Veeva Consulting & Managed Services for{" "}
              <span className=" text-[#2f6f73]">&amp; Life Sciences</span>
            </h1>
            <p className="site-subheading mt-7 max-w-[450px] text-center lg:text-left">
              Expert-led Veeva consulting services spanning Vault assessment,
              implementation, migration, integration, validation, and
              post-go-live support for{" "}
              <strong className="font-semibold text-[#0f172a]">
                pharma, biotech{" "}
              </strong>
              and{" "}
              <strong className="font-semibold text-[#0f172a]">medtech </strong>
              organisations that require compliant, dependable delivery.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="contact-us"
                className="site-btn-primary !bg-[#0a2540] !text-[14px] hover:!bg-[#081d30]"
              >
                Schedule a Consultation
                <ArrowRightIcon />
              </a>
              <a
                href="service-veeva"
                className="site-btn-secondary !text-[14px]"
              >
                Explore Our Veeva Services
                <ArrowRightIcon />
              </a>
            </div>
          </div>

          {/* <div className="relative">
            <div className="absolute inset-x-[10%] top-[10%] h-[78%] rounded-full bg-[radial-gradient(circle,rgba(47,111,115,0.12)_0%,rgba(255,255,255,0)_68%)] blur-3xl" />
            <SolutionDiagram />
          </div> */}
        </section>
      </div>

      <section className="tone-lock w-full bg-[#082b4a] py-14 sm:py-16 lg:py-20">
        <div className="site-container">
          <p className="site-kicker text-center !text-[#2c9aa5]">
            Why do clients trust us?
          </p>
          <h2 className="mt-3 text-center">We've Been Here Before</h2>
          <p className="mx-auto mt-5 max-w-[760px] text-center">
            When your regulatory operations run on Veeva Vault, implementation
            experience isn't a nice-to-have, it's the only thing that matters.
            Every number below reflects real engagements, real certifications,
            and real delivery across regulated environments.
          </p>
          <div className="mt-10 grid gap-y-8 sm:grid-cols-2 lg:mt-14 lg:grid-cols-5">
            {deliveryStats.map(stat => (
              <article
                key={stat.label}
                className="text-center"
              >
                <p className="text-[clamp(2rem,3vw,3rem)] font-semibold leading-none tracking-[-0.03em] text-[#f5f9fc]">
                  {stat.value}
                </p>
                <p className="mt-3">{stat.label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="services"
        className="site-section"
      >
        <div className="site-container">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-[900px]">
              <p className="site-kicker">What We Do</p>
              <h2 className="mt-4 max-w-[560px]">
                One Practice. Built Entirely for{" "}
                <span className="text-[#2f8b92]">Life Sciences</span>
              </h2>
              <p className="mt-4 max-w-[650px]">
                Most technology firms treat Veeva as one capability among many.
                At Wolvio, our Veeva consulting services are built around one
                focus because in pharma, biotech, and medtech, the platform at
                the centre of your regulatory and quality operations deserves a
                partner who knows it inside out.
              </p>
            </div>
            <a
              href="service-veeva"
              className="inline-flex items-center gap-3 text-[16px] font-semibold text-[#2f7f88] transition hover:text-[#256a72]"
            >
              View all services
              <ArrowRightIcon />
            </a>
          </div>
          <div className="mt-9 grid gap-6 lg:grid-cols-3">
            {serviceCards.map(card => (
              <article
                key={card.title}
                className="group relative flex flex-col overflow-hidden rounded-[28px] border border-[#d7dde4] bg-[#f8fafc] p-6 pb-5 shadow-[0_8px_20px_rgba(8,43,74,0.03)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_38px_rgba(8,43,74,0.08)]"
              >
                <div
                  className={`absolute left-0 top-0 h-[5px] w-full ${card.accent}`}
                />
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#dfe4e9] text-[#23415d]">
                  <div className="h-6 w-6">{card.icon}</div>
                </div>
                <h3 className="mt-6">{card.title}</h3>
                <p className="mt-4 mb-6 ">{card.description}</p>
                {/* <a
                  href="#services"
                  className="inline-flex mt-auto items-center gap-2 text-[16px] font-semibold text-[#2f7f88] opacity-0 transition duration-300 group-hover:opacity-100"
                >
                  See more
                  <ArrowRightIcon />
                </a> */}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="case-studies"
        className="site-section-alt"
      >
        <div className="site-container">
          <p className="site-kicker text-center">
            How We&apos;ve Helped Our Clients
          </p>
          <h2 className="mt-3 text-center">
            Proven Outcomes in Complex Environments
          </h2>
          <p className="mx-auto mt-5 max-w-[760px] text-center">
            Explore how we've helped clients navigate complexity, reduce risk,
            and achieve compliant, dependable outcomes across their Veeva Vault
            environments.
          </p>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {caseCards.map(card => (
              <PillCard
                key={card.title}
                item={card}
              />
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <a
              href="case-studies"
              className="inline-flex items-center gap-3 rounded-full border border-[#bad0d5] px-8 py-3 text-[16px] font-semibold text-[#2f7f88] transition hover:bg-white"
            >
              Read case study
              <ArrowRightIcon />
            </a>
          </div>
        </div>
      </section>

      <section
        id="why-wolvio"
        className="site-section"
      >
        <div className="site-container">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-[900px]">
              <p className="site-kicker">Why Wolvio</p>
              <h2 className="mt-4 max-w-[560px]">
                Built on Specialist Depth, No Compromises in{" "}
                <span className="text-[#2f8b92]">Regulated environments.</span>
              </h2>
              <p className="mt-4 max-w-[650px]">
                Pharma, biotech, and med tech organisations don't choose a Veeva
                partner lightly. The platform sits at the centre of their
                regulatory, clinical, and quality operations and a poorly
                configured implementation has consequences that outlast the
                project. Wolvio was built specifically for this environment.
                Here's what that means in practice.
              </p>
            </div>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-5">
            {whyCards.map(card => (
              <PillCard
                key={card.title}
                item={card}
              />
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <a
              href="why-wolvio"
              className="inline-flex items-center gap-3 rounded-full border border-[#bad0d5] px-8 py-3 text-[16px] font-semibold text-[#2f7f88] transition hover:bg-white"
            >
              Learn More About Our Approach
              <ArrowRightIcon />
            </a>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="site-section-alt"
      >
        <div className="site-container">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-[980px]">
              <p className="site-kicker">Insights & Perspectives</p>
              <h2 className="mt-4 max-w-[980px]">
                Thinking Across the{" "}
                <span className="text-[#2f8b92]">Veeva Platform</span>
              </h2>
              <p className="mt-4 max-w-[820px]">
                Our Veeva consulting services are backed by insights from
                practitioners. Our consultants publish regularly on Veeva
                platform architecture, regulatory technology, and the practical
                realities of platform management in Life Sciences. Practitioner
                perspectives, not vendor content.
              </p>
            </div>
            <Link
              href="/insights"
              className="inline-flex items-center gap-3 text-[16px] font-semibold text-[#2f7f88] transition hover:text-[#256a72]"
            >
              Browse All Insights
              <ArrowRightIcon />
            </Link>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {insightCards.map(card => (
              <article
                key={card.title}
                className={`relative flex h-full flex-col overflow-hidden rounded-[34px] p-8 text-white transition-all duration-500 ${card.bg}`}
              >
                <span className="inline-flex w-fit self-start rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em]">
                  {card.tag}
                </span>

                <h3 className="mt-6 max-w-[700px] text-white font-semibold leading-[1.2] tracking-[-0.02em]">
                  {card.title}
                </h3>

                <p className="mt-5 mb-5 max-w-[710px]  !text-white/88">
                  {card.description}
                </p>

                {/* PUSHES THIS TO BOTTOM */}
                <div className="mt-auto flex items-center justify-between text-[clamp(0.825rem,0.98vw,0.875rem)]">
                  <span className="text-white/75">{card.minutes}</span>

                  <Link
                    href="/insights"
                    className="inline-flex items-center gap-2 font-semibold text-white"
                  >
                    Read Insight
                    <ArrowRightIcon />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="tone-lock site-section"
      >
        <div className="site-container">
          <div className="relative overflow-hidden rounded-[34px] bg-[linear-gradient(130deg,#072c52,#0a2d55_48%,#0e355f)] p-10 text-white sm:p-14">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(47,143,146,0.24),transparent_30%),radial-gradient(circle_at_70%_80%,rgba(47,143,146,0.22),transparent_38%),radial-gradient(circle_at_30px_30px,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:auto,auto,34px_34px]" />
            <div className="relative text-center">
              <span className="inline-flex rounded-full border border-[#1f6980] bg-[#114866]/55 px-5 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#7ec4c7]">
                Start a Conversation
              </span>
              <h2 className="mx-auto mt-7 max-w-[900px] !text-[26px]">
                A Focused Conversation Is Where Every Veeva Engagement Starts.
              </h2>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <a
                  href=""
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-[#3a8f90] px-10 py-4 text-sm font-semibold text-white transition hover:bg-[#347f80]"
                >
                  Schedule a Consultation
                  <ArrowRightIcon />
                </a>
                <a
                  href="contact-us"
                  className="inline-flex items-center justify-center rounded-full border border-white/30 px-10 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Contact Us
                </a>
              </div>
              <p className="mt-7 ">
                No commitment required. We typically respond within 1 day.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
