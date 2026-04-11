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
        {orbitCards.map((card) => (
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
        <circle cx="39" cy="61" r="0.9" fill="#62b4b9" opacity="0.9" />
        <circle cx="61.5" cy="38" r="0.32" fill="#94c7cb" opacity="0.9" />
        <circle cx="50" cy="79" r="0.8" fill="#8fcbcc" opacity="0.9" />
      </svg>

      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center">
        <div className="absolute h-[110px] w-[110px] rounded-full border border-[rgba(47,111,115,0.15)]" />
        <div className="absolute h-[88px] w-[88px] rounded-full border border-[rgba(47,111,115,0.12)]" />
        <div className="relative flex h-[74px] w-[74px] flex-col items-center justify-center rounded-full border border-[rgba(47,111,115,0.2)] bg-[linear-gradient(135deg,rgba(47,111,115,0.12),rgba(10,37,64,0.06))] text-center backdrop-blur-md">
          <span className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-[#2f6f73]">
            Digital
          </span>
          <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#17314c]">
            Solutions
          </span>
        </div>
      </div>

      {orbitCards.map((card) => (
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

export default function Home() {
  return (
    <main
      id="home"
      className="min-h-screen overflow-x-hidden bg-[#f8fafc] text-[#0f172a]"
    >
      <div className="hero-grid">
        <section className="mx-auto grid w-full max-w-[1660px] items-center gap-14 px-5 pb-18 pt-10 sm:px-8 lg:grid-cols-[minmax(0,1.02fr)_minmax(540px,0.98fr)] lg:px-16 lg:pb-28 lg:pt-14">
          <div className="max-w-[760px]">
          
            <h1 className="max-w-[15ch] text-[48px] font-bold leading-[0.94] tracking-[-0.07em] text-[#0a2540] sm:text-[54px] lg:text-[70px]">
              Specialist Veeva Consulting Services for Pharma, Biotech{" "}
              <span className="text-[#2f6f73]">&amp; Med Tech</span>
            </h1>
            <p className="mt-8 max-w-[680px] text-[18px] leading-[1.7] text-[#475569]">
              Wolvio provides specialist Veeva Vault consulting for pharma,
              biotech, and med tech; from implementation to post go-live
              support. Our senior consultants bring deep{" "}
              <strong className="font-semibold text-[#0f172a]">
                GxP expertise
              </strong>{" "}
              and hands-on platform experience, delivering the{" "}
              <strong className="font-semibold text-[#0f172a]">
                regulatory precision
              </strong>{" "}
              that regulated environments actually demand.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#0a2540] px-8 py-4 text-[16px] font-medium text-white shadow-[0_18px_44px_rgba(10,37,64,0.18)] transition hover:bg-[#081d30]"
              >
                Schedule a Consultation
                <ArrowRightIcon />
              </a>
              <a
                href="#veeva-vault"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-[#c7d7df] bg-white px-8 py-4 text-[16px] font-medium text-[#2f6f73] shadow-[0_18px_44px_rgba(47,111,115,0.07)] transition hover:bg-[#f4f9fa]"
              >
                Explore Our Veeva Services
                <ArrowRightIcon />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-x-[10%] top-[10%] h-[78%] rounded-full bg-[radial-gradient(circle,rgba(47,111,115,0.12)_0%,rgba(255,255,255,0)_68%)] blur-3xl" />
            <SolutionDiagram />
          </div>
        </section>
      </div>
    </main>
  )
}
