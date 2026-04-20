import Link from "next/link";
import type { ReactNode } from "react";
import ScrollFadeGrid from "./components/ScrollFadeGrid";
import WhyWolvioSection from "./components/WhyWolvioSection";
import CaseStudyCarousel from "./components/CaseStudyCarousel";
import ScrollReveal from "./components/ScrollReveal";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "Wolvio | Specialist Veeva Consulting & Managed Services for Life Sciences",
  description:
    "Wolvio delivers specialist Veeva Vault Consulting & managed services for pharma, biotech and medtech - GxP-compliant vault implementation support, migration, validation and post-go-live support for regulated life sciences.",
};

type SimpleCard = {
  title: string;
  description: string;
  accent: string;
  icon: ReactNode;
};


const serviceCards: SimpleCard[] = [
  {
    title: "Veeva Consulting & Implementation",
    description:
      "Getting Vault right from the start saves years of technical debt, rework, and compliance risk down the line. We support implementations that are built to last not just built to launch.",
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
      "Clinical | Regulatory | Quality | Safety | Commercial | CRM we have hands-on configuration experience across every major Vault suite. Whichever domain your challenge falls into, we've worked in it before.",
    accent: "bg-[linear-gradient(90deg,#0b3a63_0%,#2f8b92_100%)]",
    icon: (
      <svg viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
  },
];

const insightCards = [
  {
    tag: "Veeva Vault 26R1 Feature",
    title:
      "Intelligent Change Control Workflow Design in Vault Quality – Moving...",
    description:
      "Change control is a foundational process in Vault Quality that ensures modifications -whether to documents, procedures, systems, or products &#8211; are introduced in a controlled,...",
    minutes: "6 min read",
    bg: "bg-[#0c2a4a] bg-gradient-to-br from-white/5 to-transparent hover:from-white/10",
    image : "/InsightImages/insight1.jpeg"
  },
  {
    tag: "Veeva Vault AI Agents",
    title: "From eTMF Completeness to eTMF Quality Excellence",
    description:
      "The Completeness Mindset: Where It All Began For years, the primary benchmark for a healthy Trial Master File was straightforward: Is everything there? Regulators asked for it. Ins...",
    minutes: "7 min read",
    bg: "bg-[#0c2a4a] bg-gradient-to-br from-white/5 to-transparent hover:from-white/10",
    image : "/InsightImages/insight2.jpeg"
  },
  {
    tag: "Veeva Vault AI Integration",
    title: "Veeva Vault 26R1: Why Doctype Triggers Could Be a Game-Changer",
    description:
      "A powerful new step in making Vault documents smarter, more connected, and more business-driven When people first look at Doctype Triggers in Veeva Vault 26R1, it may seem like jus...",
    minutes: "7 min read",
    bg: "bg-[#0c2a4a] bg-gradient-to-br from-white/5 to-transparent hover:from-white/10",
    image : "/InsightImages/insight3.jpeg"
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

let buttons = [
  {
    label: "Talk to a Veeva Specialist",
    href: "contact-us",
    variant: "primary",
  },
  {
    label: "Explore Our Veeva Services",
    href: "service-veeva",
    variant: "secondary",
  },
];

export default function Home() {

  const defaultStats = [
    { value: "10+", label: "Specialist Delivery Partnerships" },
    { value: "25+", label: "Veeva Vault Engagements" },
    { value: "50+", label: "Years of Combined Life Sciences Expertise" },
    { value: "3", label: "Continents Served - Asia, Europe & North America" },
  ];

  const loopingStats = [...defaultStats, ...defaultStats];

  return (
    <main
      id="home"
      className="polish-layout min-h-screen overflow-x-hidden bg-[#f8fafc] text-[#0f172a]"
    >
      <section className="hero-grid relative flex flex-col min-h-[90vh] pt-3 md:pt-10 items-center justify-center overflow-hidden ">
        {/* home content */}
        <ScrollReveal className="site-container flex flex-col items-center justify-center text-center lg:mb-24">
          <h4 className="site-kicker"></h4>

          <h1 className="">
            Specialist Veeva Consulting <br /> & Managed Services for
            <br />
            <span className="text-[#2f6f73]">Life Sciences</span>
          </h1>

          <p className="site-subheading mt-5 max-w-[700px]">
            Expert-led Veeva consulting for pharma, biotech and medtech -
            spanning Vault assessment, implementation, migration, integration,
            validation, and post-go-live managed services. Built for
            organisations that can't afford to get compliance wrong
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
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
          </div>
        </ScrollReveal>

        {/* Stats Strip */}
        <div className="stats-strip absolute bottom-0 left-0 z-10 w-full bg-[#082b4a] py-5">
          <div className="stats-marquee group flex overflow-hidden whitespace-nowrap">
            <div className="stats-track flex min-w-full shrink-0 animate-marquee items-center gap-8 pr-8">
              {loopingStats.map((stat, i) => (
                <div
                  key={`stat-1-${i}`}
                  className="flex min-w-max items-center gap-3 text-white"
                >
                  <span className="text-[28px] font-bold leading-none">
                    {stat.value}
                  </span>
                  <span className="text-[14px] font-medium text-white/80">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            <div
              aria-hidden="true"
              className="stats-track flex min-w-full shrink-0 animate-marquee items-center gap-8 pr-8"
            >
              {loopingStats.map((stat, i) => (
                <div
                  key={`stat-2-${i}`}
                  className="flex min-w-max items-center gap-3 text-white"
                >
                  <span className="text-[28px] font-bold leading-none">
                    {stat.value}
                  </span>
                  <span className="text-[14px] font-medium text-white/80">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
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
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#eaf2f5]">
                  {card.image ? (
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover transition duration-300 group-hover:scale-[1.03]"
                      sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-[linear-gradient(130deg,#e8f0f3,#f7fafc)] text-[14px] text-[#607283]">
                      No image available
                    </div>
                  )}
                </div>

                <div className="flex flex-col p-6">
                  {/* Category Tag */}
                  <span className="inline-flex w-fit self-start rounded-full border border-[#cde0e2] bg-[#f4f9fa] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#2f6f73]">
                    {card.tag}
                  </span>

                  <h3 className="mt-4 line-clamp-2 min-h-[56px] text-[22px] font-bold leading-[1.25] tracking-[-0.02em] text-[#0a2540]">
                    {card.title}
                  </h3>

                  <p className="mb-6 mt-3 line-clamp-3 min-h-[74px] text-[15px] leading-[1.65] text-[#475569]">
                    {card.description}
                  </p>

                  <div className="mt-auto flex flex-col">
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
                Get Started
              </span>
              <h2 className="mx-auto mt-7 max-w-[900px]">
                Every Engagement starts with One Honest Conversation
              </h2>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <a
                  href="contact-us"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-[#3a8f90] px-10 py-4 text-sm font-semibold text-white transition hover:bg-[#347f80]"
                >
                  Talk to a Veeva Specialist
                  <ArrowRightIcon />
                </a>
                <a
                  href="contact-us"
                  className="inline-flex items-center justify-center rounded-full border border-white/30 px-10 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Send us a message
                </a>
              </div>
              <p className="mt-7 ">
                No commitment required. We typically respond within 1 business
                day.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
