import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

type InfoCard = {
  title: string;
  description: string;
  accent: string;
  icon: ReactNode;
};

type StatCard = {
  value: string;
  label: string;
};

type ApproachCard = {
  number: string;
  title: string;
  description: string;
  accent: string;
};

const missionCards: InfoCard[] = [
  {
    title: "Drive business success through cutting-edge digital solutions",
    description:
      "To drive business success by delivering cutting-edge digital solutions that inspire growth, efficiency, and lasting innovation, empowering life sciences organisations to achieve more with the right technology at their side.",
    accent: "bg-[#123b77]",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="12" cy="12" r="1.2" />
      </svg>
    ),
  },
  {
    title: "Lead globally in transformative IT services",
    description:
      "To lead globally in transformative IT services, enabling organisations to unlock unparalleled success in an ever-evolving digital landscape, and to become the benchmark for specialist Veeva consulting in life sciences.",
    accent: "bg-[#2f8b92]",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 18h6" />
        <path d="M12 3a6 6 0 0 0-3 11.2V16h6v-1.8A6 6 0 0 0 12 3Z" />
        <path d="M10 21h4" />
      </svg>
    ),
  },
];

const practiceStats: StatCard[] = [
  { value: "2022", label: "Founded" },
  { value: "3", label: "Continents Served" },
  { value: "2", label: "India Offices" },
  { value: "50+", label: "Years Combined Experience" },
];

const approachCards: ApproachCard[] = [
  {
    number: "01",
    title: "Depth over breadth",
    description:
      "Every consultant brings genuine Veeva and life sciences expertise, not broad platform knowledge stretched across industries. We hire for depth and keep it that way.",
    accent: "bg-[#163f7d]",
  },
  {
    number: "02",
    title: "Compliance first",
    description:
      "Every configuration decision and workflow is reviewed with GxP, 21 CFR Part 11, and IDMP compliance at the forefront, not as an afterthought once build is complete.",
    accent: "bg-[#2f8b92]",
  },
  {
    number: "03",
    title: "Senior accountability",
    description:
      "Senior consultants lead every engagement from discovery through hypercare. You will not be handed to junior resources once the contract is signed.",
    accent: "bg-[#163f7d]",
  },
  {
    number: "04",
    title: "Knowledge transfer",
    description:
      "We build your team's capability throughout every engagement. Our measure of success is client self-sufficiency, not perpetual dependency on our support.",
    accent: "bg-[#2f8b92]",
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

export const metadata: Metadata = {
  title: "About | Wolvio",
  description:
    "Learn about Wolvio Solutions, our mission, practice model, leadership, and specialist approach to Veeva consulting in life sciences.",
};

export default function AboutPage() {
  return (
    <main className="polish-layout min-h-screen overflow-x-hidden bg-[#f2f4f7] text-[#0f172a]">
      <section className="about-hero relative overflow-hidden">
        <div className="mx-auto w-full max-w-[1660px] px-5 py-16 text-center sm:px-8 sm:py-20 lg:px-24 lg:py-28">
          <p className="text-[clamp(14px,0.95vw,18px)] font-semibold uppercase tracking-[0.14em] text-[#2e7d83]">
            About Wolvio Solutions
          </p>
          <h1 className="mx-auto mt-6 max-w-[980px] text-[clamp(2rem,4vw,4rem)] font-bold leading-[1.08] tracking-[-0.03em] text-[#07264a]">
            A specialist <span className="underline decoration-[#3d7f8e]">Veeva consulting</span>{" "}
            firm built exclusively for <span className="text-[#2f7f88]">life sciences.</span>
          </h1>
        </div>
      </section>

      <section className="w-full bg-[#f2f4f7] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto grid w-full max-w-[1660px] gap-8 px-5 sm:px-8 lg:grid-cols-[1fr_0.95fr] lg:gap-12 lg:px-24">
          <div>
            <p className="text-[clamp(14px,0.95vw,18px)] font-semibold uppercase tracking-[0.14em] text-[#2e7d83]">
              Who We Are
            </p>
            <h2 className="mt-4 max-w-[840px] text-[clamp(1.8rem,2.9vw,3rem)] font-bold leading-[1.14] tracking-[-0.03em] text-[#07264a]">
              Built for life sciences. <span className="text-[#2f7f88]">Fluent in Veeva.</span>
            </h2>
            <div className="mt-7 space-y-7 text-[clamp(1rem,1vw,1.22rem)] leading-[1.7] text-[#5d7188]">
              <p>
                Wolvio Solutions is a specialist consulting firm dedicated to Veeva technology and digital
                transformation within the life sciences industry. Unlike generalist firms that treat Veeva as one
                capability among many, we have structured our entire practice around the unique demands of
                pharmaceutical, biotech, and medical technology companies.
              </p>
              <p>
                Backed by over <strong className="font-semibold text-[#082b4a]">50 years of combined experience</strong>{" "}
                and ISO 9001:2015 certification, we bring niche expertise in Veeva Vault, CRM, OpenText Documentum,
                RPA, and AI-infused workflows to clients who cannot afford implementations that fall short in a
                regulated environment.
              </p>
              <p>
                At Wolvio, technology is more than tools. It is a catalyst for transformation. Our solutions free
                clients from IT complexity so they can focus on what matters most: innovation, compliance, and growth.
              </p>
            </div>
            <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-[#bfd2d8] bg-[#edf5f6] px-5 py-2.5 text-[clamp(0.95rem,0.9vw,1.05rem)] font-semibold text-[#082b4a]">
              <span className="text-[#2f7f88]">*</span>
              ISO 9001:2015 Certified
            </div>
          </div>

          <div className="space-y-7">
            {missionCards.map((card, index) => (
              <article
                key={card.title}
                className="relative overflow-hidden rounded-[28px] border border-[#d7dde4] bg-[#f7f9fb] p-6 sm:p-7"
              >
                <div className={`absolute left-0 top-0 h-[6px] w-full ${card.accent}`} />
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#dfe5e8] text-[#2f7f88]">
                    <div className="h-7 w-7">{card.icon}</div>
                  </div>
                  <p className="text-[clamp(14px,0.95vw,18px)] font-semibold uppercase tracking-[0.14em] text-[#2e7d83]">
                    {index === 0 ? "Our Mission" : "Our Vision"}
                  </p>
                </div>
                <h3 className="mt-6 text-[clamp(1.45rem,1.7vw,2rem)] font-semibold leading-[1.28] tracking-[-0.02em] text-[#173652]">
                  {card.title}
                </h3>
                <p className="mt-4 text-[clamp(0.98rem,0.95vw,1.1rem)] leading-[1.7] text-[#63798d]">
                  {card.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-[#f2f4f7] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto grid w-full max-w-[1660px] gap-8 px-5 sm:px-8 lg:grid-cols-[1fr_0.95fr] lg:gap-12 lg:px-24">
          <div>
            <p className="text-[clamp(14px,0.95vw,18px)] font-semibold uppercase tracking-[0.14em] text-[#2e7d83]">
              Our Practice
            </p>
            <h2 className="mt-4 max-w-[860px] text-[clamp(1.8rem,2.9vw,3rem)] font-bold leading-[1.14] tracking-[-0.03em] text-[#07264a]">
              Why we built a <span className="text-[#2f7f88]">specialist firm</span>
            </h2>
            <div className="mt-7 space-y-7 text-[clamp(1rem,1vw,1.22rem)] leading-[1.7] text-[#5d7188]">
              <p>
                We founded Wolvio Solutions in <strong className="font-semibold text-[#082b4a]">September 2022</strong>{" "}
                with a clear conviction: organisations operating in regulated environments deserve a technology partner
                that genuinely understands the territory, not one that learns it on their engagement.
              </p>
              <p>
                That meant building a firm where every consultant carries real depth in Veeva and life sciences
                processes. Not certified generalists rotating between platforms, but practitioners who have spent their
                careers inside the GxP world, working on regulatory submissions, quality management, commercial
                operations, and clinical data.
              </p>
              <p>
                It also meant staying focused. We have deliberately not expanded into unrelated industries or
                platforms. Our specialist focus on{" "}
                <strong className="font-semibold text-[#082b4a]">pharma, biotech, and med tech</strong> is not a
                constraint, it is the reason clients trust us with their most critical implementations.
              </p>
              <p>
                Since founding, we have grown into a firm serving clients across three continents, with two India
                offices, ISO 9001:2015 certification, and over 50 years of combined experience, holding to the same
                standards we started with.
              </p>
            </div>
          </div>

          <div className="grid h-fit grid-cols-1 gap-6 sm:grid-cols-2">
            {practiceStats.map(stat => (
              <article
                key={stat.label}
                className="rounded-[28px] border border-[#d7dde4] bg-[#f7f9fb] p-6 sm:p-7"
              >
                <p className="text-[clamp(2.25rem,3.1vw,3.6rem)] font-bold leading-none tracking-[-0.03em] text-[#2f7f88]">
                  {stat.value}
                </p>
                <p className="mt-3 text-[clamp(1rem,0.95vw,1.18rem)] font-medium text-[#5d7188]">
                  {stat.label}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="tone-lock w-full bg-[#f2f4f7] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-[1660px] px-5 sm:px-8 lg:px-24">
          <p className="text-[clamp(14px,0.95vw,18px)] font-semibold uppercase tracking-[0.14em] text-[#2e7d83]">
            Our Approach
          </p>
          <h2 className="mt-4 max-w-[800px] text-[clamp(1.8rem,2.9vw,3rem)] font-bold leading-[1.14] tracking-[-0.03em] text-[#07264a]">
            How we engage <span className="text-[#2f7f88]">and deliver</span>
          </h2>
          <p className="mt-6 max-w-[980px] text-[clamp(1rem,1vw,1.22rem)] leading-[1.7] text-[#5d7188]">
            We engage as embedded partners, not external vendors. Our delivery model aligns our incentives entirely
            with your outcomes, and we measure success long after go-live.
          </p>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {approachCards.map(card => (
              <article
                key={card.number}
                className="relative overflow-hidden rounded-[28px] border border-[#d7dde4] bg-[#f7f9fb] p-6 sm:p-7"
              >
                <div className={`absolute left-0 top-0 h-[6px] w-full ${card.accent}`} />
                <p className="text-[clamp(2.4rem,3vw,3.7rem)] font-semibold leading-none text-[#dbe3e8]">{card.number}</p>
                <h3 className="mt-4 text-[clamp(1.45rem,1.65vw,1.95rem)] font-semibold leading-[1.28] tracking-[-0.02em] text-[#173652]">
                  {card.title}
                </h3>
                <p className="mt-3 text-[clamp(0.98rem,0.95vw,1.1rem)] leading-[1.7] text-[#63798d]">
                  {card.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-[#f2f4f7] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-[1660px] px-5 sm:px-8 lg:px-24">
          <p className="text-[clamp(14px,0.95vw,18px)] font-semibold uppercase tracking-[0.14em] text-[#2e7d83]">
            Leadership
          </p>
          <h2 className="mt-4 max-w-[700px] text-[clamp(1.8rem,2.9vw,3rem)] font-bold leading-[1.14] tracking-[-0.03em] text-[#07264a]">
            The team behind <span className="text-[#2f7f88]">Wolvio</span>
          </h2>
          <article className="relative mt-10 max-w-[460px] overflow-hidden rounded-[28px] border border-[#d7dde4] bg-[#f7f9fb] p-6 sm:p-7">
            <div className="absolute left-0 top-0 h-[6px] w-full bg-[linear-gradient(90deg,#163f7d,#2f8b92)]" />
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[linear-gradient(135deg,#1d5b86,#2f7f88)] text-[30px] font-semibold text-white">
              N
            </div>
            <h3 className="mt-6 text-[clamp(1.45rem,1.7vw,1.95rem)] font-semibold leading-[1.25] text-[#173652]">
              Name
            </h3>
            <p className="mt-1 text-[clamp(14px,0.95vw,18px)] font-semibold uppercase tracking-[0.14em] text-[#2e7d83]">
              Designation
            </p>
            <p className="mt-5 text-[clamp(0.98rem,0.95vw,1.1rem)] leading-[1.7] text-[#63798d]">
              2-3 sentence bio covering background, Veeva and life sciences expertise, and what this person leads at
              Wolvio.
            </p>
          </article>
        </div>
      </section>

      <section className="w-full bg-[#f2f4f7] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-[1660px] px-5 sm:px-8 lg:px-24">
          <div className="relative overflow-hidden rounded-[34px] bg-[linear-gradient(130deg,#072c52,#0a2d55_48%,#0e355f)] p-10 text-white sm:p-14">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(47,143,146,0.24),transparent_30%),radial-gradient(circle_at_70%_80%,rgba(47,143,146,0.22),transparent_38%),radial-gradient(circle_at_30px_30px,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:auto,auto,34px_34px]" />
            <div className="relative text-center">
              <span className="inline-flex rounded-full border border-[#1f6980] bg-[#114866]/55 px-5 py-2 text-[14px] font-semibold uppercase tracking-[0.12em] text-[#7ec4c7]">
                Get Started
              </span>
              <h2 className="mx-auto mt-7 max-w-[900px] text-[clamp(1.75rem,2.2vw,2.7rem)] font-semibold leading-[1.22] tracking-[-0.03em] text-white">
                Schedule a time to discuss your requirements and learn how our expertise can drive meaningful outcomes
                for your business.
              </h2>
              <div className="mt-8 flex justify-center">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-[#3a8f90] px-10 py-4 text-[16px] font-semibold text-white transition hover:bg-[#347f80]"
                >
                  Get in touch
                  <ArrowRightIcon />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
