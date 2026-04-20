import type { Metadata } from "next";
import Link from "next/link";

import VerticalTabsSection from "../components/HowWeWorkSection";
import ScrollReveal from "../components/ScrollReveal";
import FaqAccordion from "../components/FaqAccordion";
import DeliveryCard from "../components/Service-veeva/DeliveryCard";
import ManageCard from "../components/Service-veeva/ManageCard";

type DomainCard = {
  domain: string;
  coverage: string;
};

type FaqItem = {
  question: string;
  answer1: string;
  answer2: string;
};

const domains: DomainCard[] = [
  {
    domain: "Quality",
    coverage:
      "Vault QualityDocs | Vault QMS | 21 CFR Part 11 | EU Annex 11 | CAPA | Deviation Management | Change Control | Training Management | Validation Management",
  },
  {
    domain: "Regulatory",
    coverage:
      "Vault RIM | Vault Registrations | Vault Submissions | Vault Submissions Publishing | Vault Submissions Archive | eCTD v3 & v4 | IDMP | Global Registration Tracking | Health Authority Interactions",
  },
  {
    domain: "Clinical",
    coverage:
      "Vault eTMF | Vault CTMS | Vault Study Startup | Vault Payments | TMF Bot | EDL Management | DIA Reference Model | Risk-Based Monitoring | GCP Compliance",
  },
  {
    domain: "Safety",
    coverage:
      "Vault Safety | Vault Safety Inbox | ICSR Management | MedDRA Coding | Pharmacovigilance | EudraVigilance | FAERS Submissions | Aggregate Reporting",
  },
  {
    domain: "Commercial",
    coverage:
      "Vault PromoMats | Vault MedComms | Vault CRM | Vault Events Management | MLR Review Workflows | Medical Affairs Content Management | HCP Engagement Compliance",
  },
];

const faqs: FaqItem[] = [
  {
    question:
      "We have an internal IT team that manages our Vault day to day. Where does Wolvio fit alongside them?",
    answer1: `Your internal team knows your business. What they typically lack is cross-client implementation depth, regulatory validation expertise, and bandwidth for complex release assessments on top of everything else.`,
    answer2: `We fill that gap release management, validation documentation, complex integrations, configuration remediation, and expert input when audit or regulatory questions need a defensible answer. We work alongside your team, not over them.`,
  },
  {
    question:
      "How do we know your consultants actually know Veeva — and not just know about it?",
    answer1: `Our consultants have delivered real Vault implementations in regulated environments written validation protocols, executed IQ/OQ/PQ, configured complex security models, built integrations. That depth shows up immediately in the questions we ask, the risks we name unprompted, and the decisions we challenge early.`,
    answer2: `Start with a 30-minute technical conversation. You will know within the first ten minutes.`,
  },
  {
    question:
      "How does Wolvio handle regulatory changes that affect our Vault configuration — and how quickly can you respond?",
    answer1:
      "Managed services clients receive proactive regulatory change assessments we track relevant developments, assess the impact on your specific configuration, and flag issues before they become compliance gaps. For project clients, we build regulatory change management into scoping from the start.",
    answer2: `For urgent situations — a health authority deadline or inspection finding we treat it as a priority regardless of the day or time.`,
  },
  {
    question:
      "We are a small biotech. Is Wolvio set up to work with companies at our scale?",
    answer1: `Yes and the stakes at that stage are higher than they look. Wrong initial configuration follows you through every regulatory submission that comes after.`,
    answer2: `We work with early-stage biotechs through Veeva Basics and with larger organisations through full enterprise implementations. The engagement is sized to where you are.`,
  },
  {
    question:
      "How do we evaluate whether our current Veeva environment is healthy before committing to a partner?",
    answer1: `Configuration drift, outdated validation documentation, and informally evolved security models are not visible from inside the system. They require someone who knows what good looks like.`,
    answer2: `We offer a standalone platform assessment — no further commitment required. We review your configuration, validation documentation, release history, and compliance posture, and deliver a clear written picture of what is working, what carries risk, and what needs attention.`,
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

const WORK_MODELS = [
  {
    id: "consulting",
    title: "Veeva Consulting Engagements",
    desc: "Defined projects with clear scope, deliverables, and timelines for implementation, migration, integration, and targeted configuration programs delivered by senior consultants end-to-end.",
  },
  {
    id: "managed",
    title: "Veeva Managed Services",
    desc: "Once live, your platform demands shift to release stability, compliance updates, and operational evolution. We provide structured long-term support models based on your in-house capability.",
  },
  {
    id: "platform-partner",
    title: "Platform Partner",
    desc: "Full operational ownership with proactive release management, compliance monitoring, helpdesk support, and strategic platform evolution.",
  },
  {
    id: "release-cover",
    title: "Release & Compliance Cover",
    desc: "Ideal for teams with internal admins who need specialist support for impact assessments, validation updates, and high-risk escalations.",
  },
  {
    id: "expert-on-call",
    title: "Expert On-Call",
    desc: "Senior specialist input on demand for complex issues, architecture decisions, validation review, or critical integration questions.",
  },
];

export const metadata: Metadata = {
  title:
    "Veeva Consulting & Managed Services | Specialist Vault Partner | Wolvio",
  description:
    "Wolvio delivers specialist Veeva Vault implementation, migration, integration, validation and managed services for pharma, biotech and medtech — with hands-on experience across all six Vault suites in regulated environments",
};

export default function ServiceVeevaPage() {
  let buttons = [
    {
      label: "Talk to a Veeva Specialist",
      href: "/contact",
      variant: "outline",
    },
  ];

  return (
    <main className="polish-layout min-h-screen overflow-x-hidden bg-[#f8fafc] text-[#0f172a]">
      <section className="hero-grid">
        <ScrollReveal className="site-container pb-14 pt-12 lg:pb-20 lg:pt-16 flex flex-col items-center text-center">
          <p className="site-kicker">Veeva Consulting</p>
          <h1 className="mt-4">
            Veeva Vault Specialists who understands
            <br /> Vault Inside Out Not Just as a Platform. <br /> As a
            Practice.
          </h1>

          <p className="site-subheading mt-5  max-w-[700px]">
            From the first implementation conversation to the managed services
            we are the Veeva implementation partner that organisations come back
            to.
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
      </section>

      <section className="site-section">
        <ScrollReveal className="site-container">
          <p className="site-kicker">What We Do</p>
          <h2 className="mt-4 max-w-[860px]">
            Built at the Intersection of{" "}
            <span className="text-[#2f8b92]">Veeva Expertise</span> and Life
            Sciences Operations.
          </h2>
          <div className="site-body mt-6 max-w-[1020px] space-y-5">
            <p>
              Most technology consultancies have a Veeva practice. It sits
              alongside their Salesforce practice, their SAP practice, their
              cloud migration practice. The consultant on your Vault
              implementation today was on a different platform last quarter and
              will be on another one next year.
            </p>
            <p>
              That is not how we work. Wolvio exists entirely within the
              intersection of Veeva Vault and life sciences. Every consultant
              here has chosen this — pharma, biotech, medtech, the regulated
              environment, depth over breadth. When you ask a difficult
              question, the person opposite you has the answer. Not because they
              looked it up. Because they have been here before.
            </p>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-4">
            {[
              "Veeva Certified Consultants pool",
              "6 Vault Suites — Full Platform Coverage",
              "10+ Specialist Delivery Partnerships",
              "25+ Veeva Engagements",
            ].map((stat) => (
              <article key={stat} className="site-card px-5 py-4 text-center">
                <p className="text-[14px] font-semibold text-[#173652]">
                  {stat}
                </p>
              </article>
            ))}
          </div>
        </ScrollReveal>
      </section>

      <DeliveryCard />
      <ManageCard />

      <section className="site-section-alt">
        <ScrollReveal className="site-container">
          <p className="site-kicker">Vault Domain Coverage</p>
          <h2 className="mt-4 max-w-[880px]">
            Every suite. Every domain. Hands-on, not in theory.
          </h2>
          <p className="site-body mt-5 max-w-[980px]">
            The most common question we hear is whether we have delivered the
            exact module in a regulated environment for companies with similar
            complexity. Across every domain below, the answer is yes.
          </p>

          <div className="mt-6 grid sm:grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-6">
            {domains.map((domain, index) => (
              <article
                key={domain.domain}
                className={`site-card p-6 ${
                  index < 3
                    ? "col-span-1 lg:col-span-2"
                    : "col-span-1 lg:col-span-3"
                }`}
              >
                <h4 className="">{domain.domain}</h4>
                <p className="mt-3">{domain.coverage}</p>
              </article>
            ))}
          </div>
        </ScrollReveal>
      </section>

      <VerticalTabsSection
        kicker="How We Work With You"
        title="Partnership Models"
        description=""
        items={WORK_MODELS}
        ctaText="Talk to Us About Managed Services"
        ctaLink="/service-veeva"
      />

      <section className="site-section-alt">
        <ScrollReveal className="site-container">
          <p className="site-kicker text-center">FAQs</p>
          <h2 className="mt-4 text-center">
            Questions we hear before every engagement
          </h2>
          <FaqAccordion items={faqs} />
        </ScrollReveal>
      </section>

      <section className="tone-lock site-section">
        <ScrollReveal className="site-container">
          <div className="relative overflow-hidden rounded-[34px] bg-[linear-gradient(130deg,#072c52,#0a2d55_48%,#0e355f)] p-10 text-white sm:p-14">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(47,143,146,0.24),transparent_30%),radial-gradient(circle_at_70%_80%,rgba(47,143,146,0.22),transparent_38%),radial-gradient(circle_at_30px_30px,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:auto,auto,34px_34px]" />
            <div className="relative text-center">
              <span className="inline-flex rounded-full border border-[#1f6980] bg-[#114866]/55 px-5 py-2 text-[14px] font-semibold uppercase tracking-[0.12em] text-[#7ec4c7]">
                Get Started
              </span>
              <h2 className="mx-auto mt-7 max-w-[900px]">
                Discuss your Veeva platform goals with specialists who deliver
                in regulated environments every day.
              </h2>
              <div className="mt-8 flex justify-center">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-3 rounded-full bg-[#3a8f90] px-10 py-4 text-[16px] font-semibold text-white transition hover:bg-[#347f80]"
                >
                  Talk to a Veeva Specialist
                  <ArrowRightIcon />
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
