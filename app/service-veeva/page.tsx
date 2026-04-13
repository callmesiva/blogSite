import type { Metadata } from "next";
import Link from "next/link";

type DeliveryCard = {
  title: string;
  description: string;
};

type DomainCard = {
  domain: string;
  coverage: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

const deliveryCards: DeliveryCard[] = [
  {
    title: "Implementation Support & Execution",
    description:
      "Before we touch a single configuration, we understand your SOPs, regulatory obligations, compliance history, and operational reality, then design for your environment, not a borrowed template.",
  },
  {
    title: "Vault Configuration & Customisation",
    description:
      "Workflows, lifecycles, and security models your teams actually use and that hold up when auditors arrive, not generic defaults with your name on top.",
  },
  {
    title: "System Integration & Vault Connections",
    description:
      "Vault integrated with ERP, LIMS, safety systems, and your wider landscape, including Vault Connections to avoid unnecessary custom code between Vault applications.",
  },
  {
    title: "Data Migration",
    description:
      "Validated migration of legacy records, metadata, and history with complete documentation, so cutover is predictable and audit-ready.",
  },
  {
    title: "Validation & Testing",
    description:
      "IQ/OQ/PQ delivered by the same consultants who configured your system, with deviations handled early and documentation inspection-ready before go-live.",
  },
  {
    title: "Go-Live & Hypercare",
    description:
      "Structured cutover, practical training, and immediate support from the same people who built your Vault when real-world questions start.",
  },
];

const managedCards: DeliveryCard[] = [
  {
    title: "General Release Management & Impact Assessment",
    description:
      "Each Veeva release is assessed against your validated setup; updates are applied, validated, and documented so compliance stays intact without creating a side project.",
  },
  {
    title: "System Administration",
    description:
      "User management, security configuration, object maintenance, and workflow changes managed by consultants who know your environment in depth.",
  },
  {
    title: "Platform Optimisation",
    description:
      "Proactive identification of workflow friction and manual workarounds, replaced with controlled platform improvements aligned to your business.",
  },
  {
    title: "Helpdesk & Issue Resolution",
    description:
      "Support from specialists who already understand your Vault configuration, not a generic queue reading your system from tickets.",
  },
  {
    title: "User Training & Enablement",
    description:
      "Role-specific training delivered by the build team, so your users learn your actual process design, not a generic product walkthrough.",
  },
  {
    title: "Regulatory Update Management",
    description:
      "Ongoing review of regulatory updates that impact configuration, with controlled implementation and minimal disruption to live operations.",
  },
];

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
      "We have an internal IT team that manages Vault day to day. Where does Wolvio fit?",
    answer:
      "Your team knows your business. We add cross-client implementation depth, validation rigor, release assessment expertise, and specialist support during audits and high-risk change windows.",
  },
  {
    question:
      "How do we know your consultants actually know Veeva and not just know about it?",
    answer:
      "Our consultants have delivered real regulated implementations, executed IQ/OQ/PQ, and built complex integrations. A 30-minute technical discussion usually makes that depth obvious immediately.",
  },
  {
    question:
      "How do you handle regulatory changes that affect our Vault configuration?",
    answer:
      "For managed clients, we run proactive impact assessments and plan controlled updates. For projects, regulatory change handling is included in scope design from the start.",
  },
  {
    question: "We are a small biotech. Can you work at our scale?",
    answer:
      "Yes. We support early-stage biotech through Veeva Basics and scale through enterprise programs. Engagement size is matched to your current stage and risk profile.",
  },
  {
    question:
      "How can we evaluate if our current Veeva environment is healthy before committing?",
    answer:
      "We offer a standalone platform assessment reviewing configuration, validation evidence, release history, and compliance posture, with a clear written risk and improvement view.",
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
  title: "Veeva Consulting | Wolvio",
  description:
    "Specialist Veeva consulting across implementation, migration, validation, and managed services for regulated life sciences organizations.",
};

export default function ServiceVeevaPage() {
  return (
    <main className="polish-layout min-h-screen overflow-x-hidden bg-[#f8fafc] text-[#0f172a]">
      <section className="hero-grid">
        <div className="site-container pb-14 pt-12 lg:pb-20 lg:pt-16">
          <p className="site-kicker">
            Veeva Consulting
          </p>
          <h1 className="mt-4 max-w-[1050px]">
            Veeva Implementation Partner That Knows Vault. Not Just as a Platform. As a Practice.
          </h1>
          <p className="site-subheading mt-5 max-w-[820px]">
            From the first implementation conversation to managed services, we are the Veeva implementation partner
            organisations come back to.
          </p>
          <Link
            href="/#contact"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#2f6f73] px-6 py-3 text-[15px] font-semibold text-white shadow-[0_12px_30px_rgba(47,111,115,0.2)] transition hover:bg-[#285f62]"
          >
            Talk to a Veeva Specialist
            <ArrowRightIcon />
          </Link>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container">
          <p className="site-kicker">What We Do</p>
          <h2 className="mt-4 max-w-[860px]">
            Built at the Intersection of <span className="text-[#2f8b92]">Veeva Expertise</span> and Life Sciences
            Operations.
          </h2>
          <div className="site-body mt-6 max-w-[1020px] space-y-5">
            <p>
              Most technology consultancies place Veeva beside many other practices. The consultant on your Vault
              implementation this quarter may be on a different platform next quarter.
            </p>
            <p>
              That is not how we work. Wolvio operates entirely at the intersection of Veeva Vault and life sciences.
              Every consultant here has chosen regulated delivery, depth over breadth, and practical execution in
              pharma, biotech, and med tech.
            </p>
            <p>
              When you ask a difficult question, the person opposite you has the answer because they have solved it
              before in live regulated environments.
            </p>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {[
              "8+ Certified Veeva Professionals",
              "15+ Veeva Engagements Delivered",
              "6 Vault Suites - Full Platform Coverage",
            ].map(stat => (
              <article key={stat} className="site-card px-5 py-4">
                <p className="text-[16px] font-semibold text-[#173652]">{stat}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="site-section-alt">
        <div className="site-container">
          <p className="site-kicker">Service One</p>
          <h2 className="mt-4 max-w-[900px]">
            Veeva Vault Implementation, Migration & Integration
          </h2>
          <div className="site-body mt-6 max-w-[1020px] space-y-5">
            <p>
              A misconfigured Vault often fails later in workflows, validation evidence, and audit trails, when the
              implementation partner is already gone.
            </p>
            <p>
              We work differently. Every decision is made with your long-term compliance posture in mind because that
              is what regulated delivery requires.
            </p>
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {deliveryCards.map(card => (
              <article
                key={card.title}
                className="site-card relative overflow-hidden p-6"
              >
                <div className="absolute left-0 top-0 h-[5px] w-full bg-[linear-gradient(90deg,#0b3a63_0%,#2f8b92_100%)]" />
                <h3 className="text-[21px] font-semibold leading-[1.25] tracking-[-0.02em] text-[#173652]">{card.title}</h3>
                <p className="mt-3 text-[15px] leading-[1.65] text-[#63798d]">{card.description}</p>
              </article>
            ))}
          </div>
          <p className="mt-8 text-[16px] font-semibold text-[#173652]">
            Vault Suites We Work In: Vault Clinical | Vault Quality | Vault RIM | Vault Commercial | Vault Safety |
            Vault CRM
          </p>
          <Link href="/#contact" className="mt-5 inline-flex items-center gap-2 text-[16px] font-semibold text-[#2f7f88]">
            Tell Us About Your Implementation
            <ArrowRightIcon />
          </Link>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container">
          <p className="site-kicker">Service Two</p>
          <h2 className="mt-4 max-w-[900px]">
            Veeva Managed Services & Post Go-Live Support
          </h2>
          <div className="site-body mt-6 max-w-[1020px] space-y-5">
            <p>
              Three general releases each year, changing regulations, new users, and evolving process demands are
              where most teams underestimate ongoing platform ownership.
            </p>
            <p>
              We provide managed services that keep your Vault current, compliant, and stable whether we implemented
              it or inherited it.
            </p>
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {managedCards.map(card => (
              <article
                key={card.title}
                className="site-card relative overflow-hidden p-6"
              >
                <div className="absolute left-0 top-0 h-[5px] w-full bg-[linear-gradient(90deg,#2f8b92_0%,#0b3a63_100%)]" />
                <h3 className="text-[21px] font-semibold leading-[1.25] tracking-[-0.02em] text-[#173652]">{card.title}</h3>
                <p className="mt-3 text-[15px] leading-[1.65] text-[#63798d]">{card.description}</p>
              </article>
            ))}
          </div>
          <Link href="/#contact" className="mt-6 inline-flex items-center gap-2 text-[16px] font-semibold text-[#2f7f88]">
            Talk to Us About Managed Services
            <ArrowRightIcon />
          </Link>
        </div>
      </section>

      <section className="site-section-alt">
        <div className="site-container">
          <p className="site-kicker">Vault Domain Coverage</p>
          <h2 className="mt-4 max-w-[880px]">
            Every suite. Every domain. Hands-on, not in theory.
          </h2>
          <p className="site-body mt-5 max-w-[980px]">
            The most common question we hear is whether we have delivered the exact module in a regulated environment
            for companies with similar complexity. Across every domain below, the answer is yes.
          </p>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {domains.map((domain, index) => (
              <article key={domain.domain} className={`site-card p-6 ${index % 2 ? "bg-[#f8fafc]" : ""}`}>
                <h3 className="text-[20px] font-semibold text-[#173652]">{domain.domain}</h3>
                <p className="mt-3 text-[15px] leading-[1.65] text-[#63798d]">{domain.coverage}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container">
          <p className="site-kicker">How We Work With You</p>
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <article className="site-card p-6">
              <h3 className="text-[21px] font-semibold text-[#173652]">Veeva Consulting Engagements</h3>
              <p className="mt-3 text-[15px] leading-[1.65] text-[#63798d]">
                Defined projects with clear scope, deliverables, and timelines for implementation, migration,
                integration, and targeted configuration programs delivered by senior consultants end-to-end.
              </p>
            </article>
            <article className="site-card p-6">
              <h3 className="text-[21px] font-semibold text-[#173652]">Veeva Managed Services</h3>
              <p className="mt-3 text-[15px] leading-[1.65] text-[#63798d]">
                Once live, your platform demands shift to release stability, compliance updates, and operational
                evolution. We provide structured long-term support models based on your in-house capability.
              </p>
            </article>
          </div>
          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "Platform Partner",
                desc: "Full operational ownership with proactive release management, compliance monitoring, helpdesk support, and strategic platform evolution.",
              },
              {
                title: "Release & Compliance Cover",
                desc: "Ideal for teams with internal admins who need specialist support for impact assessments, validation updates, and high-risk escalations.",
              },
              {
                title: "Expert On-Call",
                desc: "Senior specialist input on demand for complex issues, architecture decisions, validation review, or critical integration questions.",
              },
            ].map(model => (
              <article key={model.title} className="site-card p-6">
                <h4 className="text-[19px] font-semibold text-[#173652]">{model.title}</h4>
                <p className="mt-3 text-[15px] leading-[1.65] text-[#63798d]">{model.desc}</p>
              </article>
            ))}
          </div>
          <Link href="/#contact" className="mt-6 inline-flex items-center gap-2 text-[16px] font-semibold text-[#2f7f88]">
            Talk to Us About Managed Services
            <ArrowRightIcon />
          </Link>
        </div>
      </section>

      <section className="site-section-alt">
        <div className="site-container">
          <p className="site-kicker">FAQs</p>
          <h2 className="mt-4">
            Questions we hear before every engagement
          </h2>
          <div className="mt-8 space-y-4">
            {faqs.map((item, index) => (
              <details key={item.question} className={`site-card px-5 py-4 ${index % 2 ? "bg-[#f8fafc]" : ""}`}>
                <summary className="cursor-pointer list-none text-[17px] font-semibold text-[#173652]">
                  {item.question}
                </summary>
                <p className="mt-3 text-[15px] leading-[1.65] text-[#63798d]">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="tone-lock site-section pb-16 pt-8 sm:pb-20">
        <div className="site-container">
          <div className="relative overflow-hidden rounded-[34px] bg-[linear-gradient(130deg,#072c52,#0a2d55_48%,#0e355f)] p-10 text-white sm:p-14">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(47,143,146,0.24),transparent_30%),radial-gradient(circle_at_70%_80%,rgba(47,143,146,0.22),transparent_38%),radial-gradient(circle_at_30px_30px,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:auto,auto,34px_34px]" />
            <div className="relative text-center">
              <span className="inline-flex rounded-full border border-[#1f6980] bg-[#114866]/55 px-5 py-2 text-[14px] font-semibold uppercase tracking-[0.12em] text-[#7ec4c7]">
                Get Started
              </span>
              <h2 className="mx-auto mt-7 max-w-[900px] text-[clamp(1.8rem,2.3vw,2.9rem)] font-semibold leading-[1.18] tracking-[-0.03em] text-white">
                Discuss your Veeva platform goals with specialists who deliver in regulated environments every day.
              </h2>
              <div className="mt-8 flex justify-center">
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-3 rounded-full bg-[#3a8f90] px-10 py-4 text-[16px] font-semibold text-white transition hover:bg-[#347f80]"
                >
                  Talk to a Veeva Specialist
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
