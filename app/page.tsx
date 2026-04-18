import Link from "next/link";
import type { ReactNode } from "react";
import CountUp from "react-countup";
import ScrollFadeGrid from "./components/ScrollFadeGrid";
import StatsCounter from "./components/StatsCounter";
import WhyWolvioSection from "./components/WhyWolvioSection";
import CaseStudyCarousel from "./components/CaseStudyCarousel";
import SolutionDiagram from "./components/SolutionDiagram";
import ScrollReveal from "./components/ScrollReveal";
import HeroSection from "./components/HeroSection";

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

type SimpleCard1 = {
  title: string;
  heading: string;
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
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
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
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
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
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
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
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
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
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
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
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
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

const serviceCards: SimpleCard[] = [
  {
    title: "Veeva Consulting & Implementation",
    description:
      "Getting Vault right from the start saves years of technical debt, rework, and compliance risk down the line. We support  implementation that are built to last not just built to launch.",
    accent: "bg-[#0b3a63]",
    icon: (
      <svg viewBox="0 0 24 24">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    title: "Veeva Managed Services & Post Go-Live Support",
    description:
      "Most implementation partners disappear after go-live. We don't. Your Vault environment needs to evolve as your business grows, your regulatory obligations change, and new releases land. We stay and make sure it does.",
    accent: "bg-[#2f8b92]",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Vault Domain Expertise ",
    description:
      "Clinical · Regulatory · Quality · Safety · Commercial · CRM we have hands-on configuration experience across every major Vault suite. Whichever domain your challenge sits in, we've worked there before.",
    accent: "bg-[linear-gradient(90deg,#0b3a63_0%,#2f8b92_100%)]",
    icon: (
      <svg viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
  },
];

const caseCards = [
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
    link: "",
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
    link: "",
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
    link: "",
  },
];

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
        <circle cx="12" cy="12" r="9" />
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
        <circle cx="9" cy="8" r="3" />
        <path d="M4 20a5 5 0 0 1 10 0" />
        <circle cx="17" cy="9" r="2.5" />
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
        <rect x="8" y="8" width="8" height="8" rx="1.5" />
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
];

const insightCards = [
  {
    tag: "Veeva Vault 26R1 Feature",
    title: "Wolvio Insights: Why Doctype Triggers Could Be a Game-Changer...",
    description: "A deep dive into one of the most meaningful extensibility...",
    minutes: "6 min read",
    // Soft slate-navy gradient. On hover, the top-left just gets a bit lighter.
    bg: "bg-[#0c2a4a] bg-gradient-to-br from-white/5 to-transparent hover:from-white/10",
  },
  {
    tag: "Veeva Vault AI Agents",
    title: "Navigating Veeva Vault AI Agents: Wolvio Insights",
    description: "A practical guide to understanding and leveraging...",
    minutes: "7 min read",
    bg: "bg-[#0c2a4a] bg-gradient-to-br from-white/5 to-transparent hover:from-white/10",
  },
  {
    tag: "Veeva Vault AI Integration",
    title: "Navigating Veeva Vault AI Agents",
    description: "A practical guide to understanding and leveraging...",
    minutes: "7 min read",
    bg: "bg-[#0c2a4a] bg-gradient-to-br from-white/5 to-transparent hover:from-white/10",
  },  
];

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

function PillCard1() {
  return (
    // Added "cards-grid" here if you want them to stagger one by one
    <ScrollFadeGrid className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-3 cards-grid">
      {caseCards.map((cs) => (
        <article
          key={cs.title}
          // ADDED "fade-up" RIGHT HERE 👇
          className="fade-up site-card group relative overflow-hidden bg-white flex flex-col transition-shadow duration-500 hover:shadow-xl"
        >
          {/* Image area */}
          <div
            className="relative h-[160px] w-full overflow-hidden flex-shrink-0"
            style={{ background: cs.imgBg }}
          >
            {/* Tag badge */}
            <span
              className="absolute left-3 top-3 rounded-[6px] px-[10px] py-1 text-[11px] font-medium tracking-wide"
              style={{ background: cs.tagColor, color: "#e6f1fb" }}
            >
              {cs.tag}
            </span>
          </div>

          {/* Body */}
          <div className="flex flex-1 flex-col p-5">
            <p className="text-[12px] font-medium uppercase tracking-[0.05em] text-[#2f7f88]">
              {cs.company}
            </p>
            <h3 className="mt-1.5 text-[16px] font-semibold leading-[1.35] text-[#173652]">
              {cs.title}
            </h3>
            <p className="mt-2 flex-1 text-[14px] leading-[1.65] text-[#63798d]">
              {cs.description}
            </p>

            {/* Stats */}
            <div className="mt-4 grid grid-cols-2 gap-2">
              {cs.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[10px] bg-[#f5f8fb] px-3 py-2.5"
                >
                  <p className="text-[20px] font-bold leading-none text-[#0b3a63]">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[11px] leading-[1.4] text-[#63798d]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Hover Overlay & Button */}
          <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center bg-white/0 opacity-0 backdrop-blur-none transition-all duration-500 group-hover:pointer-events-auto group-hover:bg-white/40 group-hover:opacity-100 group-hover:backdrop-blur-[6px]">
            {/* The Link Button */}
            <a
              href={cs.link}
              className="translate-y-10 rounded-full bg-[#2f7f88] px-7 py-3 text-[14px] font-semibold text-white opacity-0 shadow-[0_8px_20px_rgba(47,127,136,0.3)] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:scale-105 hover:bg-[#256a72] group-hover:translate-y-0 group-hover:opacity-100"
            >
              Read full case study
            </a>
          </div>
        </article>
      ))}
    </ScrollFadeGrid>
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
      <HeroSection
        kicker=""
        title={
          <>
            Specialist Veeva Consulting & Managed Services for{" "}
            <span className="text-[#2f6f73]">Life Sciences</span>
          </>
        }
        description={
          <>
            Expert-led Veeva consulting services spanning Vault assessment,
            implementation, migration, integration, validation, and post-go-live
            support for{" "}
            <strong className="font-semibold text-[#0f172a]">
              pharma, biotech{" "}
            </strong>
            and{" "}
            <strong className="font-semibold text-[#0f172a]">medtech </strong>
            organisations that require compliant, dependable delivery.
          </>
        }
        buttons={[
          {
            label: "Schedule a Consultation",
            href: "contact-us",
            variant: "primary",
          },
          {
            label: "Explore Our Veeva Services",
            href: "service-veeva",
            variant: "secondary",
          },
        ]}
        svgGraphic={<SolutionDiagram />}
      />

      <section className="tone-lock relative w-full overflow-hidden bg-[#082b4a] py-16 sm:py-20 lg:py-28">
        {/* 1. The Background Image (Now filling the whole section) */}
        <div className="absolute inset-0 z-0">
          <img
            src="/banner1.jpg"
            alt="Wolvio implementation experience"
            className="h-full w-full object-cover object-center"
          />
        </div>

        {/* 2. The Blue Fade Overlay (Also filling the whole section) */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#082b4a]/90 via-[#082b4a]/80 to-[#082b4a]" />

        {/* 3. The Content (Z-index 20 keeps it above the background) */}
        <div className="relative z-20">
          <ScrollReveal className="site-container">
            <div className="flex flex-col items-center">
              <p className="site-kicker text-center !text-[#2c9aa5]">
                Why do clients trust us?
              </p>

              <h2 className="mt-3 text-center text-white">
                We've Been Here Before
              </h2>

              <p className="mx-auto mt-5 max-w-[760px] text-center text-[#b6c9da] leading-[1.65]">
                When your regulatory operations run on Veeva Vault,
                implementation experience isn't a nice-to-have, it's the only
                thing that matters. Every number below reflects real
                engagements, real certifications, and real delivery across
                regulated environments.
              </p>

              {/* Stats Counter Wrapper */}
              <div className="mt-16 w-full">
                <StatsCounter />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section id="services" className="site-section">
        <ScrollReveal className="site-container">
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
          <ScrollFadeGrid className="mt-9 grid gap-6 lg:grid-cols-3 cards-grid">
            {serviceCards.map((card, index) => (
              <article key={card.title} className="card fade-up flex flex-col">
                <span className="card-number">0{index + 1}</span>
                <div className="card-icon">{card.icon}</div>
                <h3 className="card-title">{card.title}</h3>
                <p className="card-body">{card.description}</p>
              </article>
            ))}
          </ScrollFadeGrid>
        </ScrollReveal>
      </section>

      <section id="case-studies" className="site-section-alt">
        <ScrollReveal className="site-container">
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

          <CaseStudyCarousel />
        </ScrollReveal>
      </section>

      <WhyWolvioSection />

      <section id="about" className="site-section-alt">
        <ScrollReveal className="site-container">
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

          <ScrollFadeGrid className="mt-10 grid gap-6 lg:grid-cols-3">
            {insightCards.map((card) => (
              <article
                key={card.title}
                className="fade-up group relative flex h-full flex-col overflow-hidden rounded-[30px] border border-[#e2e8f0] bg-white shadow-[0_10px_28px_rgba(15,23,42,0.04)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(15,23,42,0.08)]"
              >
                {/* ── IMAGE SECTION ── 
          HOW TO REDUCE HEIGHT FURTHER: 
          Change `aspect-[16/9]` to `aspect-[2/1]` or `aspect-[21/9]` to make the image banner thinner. 
      */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#eaf2f5]">
                  <div className="flex h-full items-center justify-center bg-[linear-gradient(130deg,#e8f0f3,#f7fafc)] text-[14px] text-[#607283]">
                    No image available
                  </div>
                </div>

                {/* ── CONTENT SECTION ── 
          HOW TO REDUCE HEIGHT FURTHER: 
          Change `p-6` to `p-5` or `p-4` to shrink the white space inside the card.
      */}
                <div className="flex h-full flex-col p-6">
                  {/* Category Tag */}
                  <span className="inline-flex w-fit self-start rounded-full border border-[#cde0e2] bg-[#f4f9fa] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#2f6f73]">
                    {card.tag}
                  </span>

                  {/* Title 
            Locked to exactly 2 lines of space. If it exceeds 2 lines, it adds ...
        */}
                  <h3 className="mt-4 line-clamp-2 min-h-[56px] text-[22px] font-bold leading-[1.25] tracking-[-0.02em] text-[#0a2540]">
                    {card.title}
                  </h3>

                  {/* Summary 
            Locked to exactly 3 lines of space. If it exceeds 3 lines, it adds ... 
            HOW TO REDUCE HEIGHT FURTHER: 
            Change `line-clamp-3` to `line-clamp-2` and change `min-h-[74px]` to `min-h-[50px]`.
        */}
                  <p className="mb-6 mt-3 line-clamp-3 min-h-[74px] text-[15px] leading-[1.65] text-[#475569]">
                    {card.description}
                  </p>

                  {/* ── AUTHOR & FOOTER SECTION (Pushed to bottom) ── */}
                  <div className="mt-auto flex flex-col">
                    {/* Author Info */}
                    <div className="mb-[16px] flex items-center gap-[10px]">
                      <div className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full border-2 border-[#dce6ef] bg-[#f0f5fa] text-[13px] font-bold text-[#173652]">
                        TC
                      </div>

                      <div>
                        <div className="text-[12.5px] font-semibold leading-[1.2] text-[#0a2540]">
                          Tom Carr
                        </div>
                        <div className="text-[11px] leading-[1.3] text-[#64748b]">
                          QMS Lead · Compliance Practice
                        </div>
                      </div>
                    </div>

                    {/* Footer Meta & Link */}
                    <div className="flex items-center justify-between border-t border-[#f1f5f9] pt-[16px]">
                      <div className="flex items-center gap-[8px]">
                        <span className="text-[12px] font-medium text-[#64748b]">
                          Mar 28, 2026
                        </span>
                        <span className="flex items-center text-[12px] font-medium text-[#2f6f73] before:text-[19px] before:text-[#cbd5e1] before:content-['·']">
                          {card.minutes}
                        </span>
                      </div>

                      <Link
                        href="/insights"
                        className="inline-flex items-center gap-[5px] text-[12.5px] font-semibold text-[#0a2540] transition-all duration-200 group-hover:gap-[9px] group-hover:text-[#2f6f73]"
                      >
                        Read insight
                        <ArrowRightIcon />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </ScrollFadeGrid>
        </ScrollReveal>
      </section>

      <section id="contact" className="tone-lock site-section">
        <ScrollReveal className="site-container">
          <div className="relative overflow-hidden rounded-[34px] bg-[linear-gradient(130deg,#072c52,#0a2d55_48%,#0e355f)] p-10 text-white sm:p-14">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(47,143,146,0.24),transparent_30%),radial-gradient(circle_at_70%_80%,rgba(47,143,146,0.22),transparent_38%),radial-gradient(circle_at_30px_30px,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:auto,auto,34px_34px]" />
            <div className="relative text-center">
              <span className="inline-flex rounded-full border border-[#1f6980] bg-[#114866]/55 px-5 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#7ec4c7]">
                Start a Conversation
              </span>
              <h2 className="mx-auto mt-7 max-w-[900px]">
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
        </ScrollReveal>
      </section>
    </main>
  );
}
