import type { Metadata } from "next";
import Link from "next/link";


export const metadata: Metadata = {
  title: "About | Wolvio",
  description:
    "Learn about Wolvio, our two focused practices, mission, vision, specialist operating model, and leadership.",
};

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

  const caseStudies = [
  {
    tag: "Consulting",
    tagColor: "#0b3a63",
    imgBg: "#dbe8f4",
    company: "Global Pharma Co.",
    title: "Unified Vault RIM architecture for global submissions",
    description:
      "Accelerated regulatory submission timelines by consolidating fragmented regional systems into a single Vault RIM instance with automated dossier assembly.",
    stats: [
      { value: "40%", label: "Faster submission cycles" },
      { value: "12", label: "Markets integrated" },
    ],
    image: "/images/case-studies/pharma.jpg", // replace with your image
  },
  {
    tag: "Life Sciences",
    tagColor: "#0f6e56",
    imgBg: "#d8eee7",
    company: "MedTech Manufacturer",
    title: "QualityOne rollout with CAPA and supplier governance",
    description:
      "Stabilised quality processes across 6 manufacturing sites by deploying QualityOne with standardised CAPA workflows and supplier corrective action portals.",
    stats: [
      { value: "60%", label: "CAPA closure rate improvement" },
      { value: "6", label: "Sites unified" },
    ],
    image: "/images/case-studies/medtech.jpg",
  },
  {
    tag: "Operations",
    tagColor: "#534ab7",
    imgBg: "#e4dff5",
    company: "Multi-site Ops Group",
    title: "Recall readiness and traceability workflow modernisation",
    description:
      "Replaced manual spreadsheet-based recall tracking with end-to-end traceability workflows, enabling rapid lot identification across distributed warehouse operations.",
    stats: [
      { value: "3x", label: "Faster lot traceability" },
      { value: "100%", label: "Audit trail coverage" },
    ],
    image: "/images/case-studies/operations.jpg",
  },
];


export default function AboutPage() {
  return (
    <main className="polish-layout min-h-screen overflow-x-hidden bg-[#f8fafc] text-[#0f172a]">
      <section className="hero-grid">
        <div className="site-container pb-14 pt-12 lg:pb-20 lg:pt-16">
          <p className="site-kicker">Case-studies Wolvio</p>
          <h1 className="mt-4 max-w-[960px]">Proven Outcomes in Complex Environments.</h1>
          <p className="site-subheading mt-5 max-w-[1040px]">
          Explore how we've helped clients navigate complexity, reduce risk, and achieve compliant, dependable outcomes across their Veeva Vault environments.
          </p>
        </div>
      </section>


<section className="site-section-alt">
  <div className="site-container">
    <p className="site-kicker">Relevant Case Studies</p>
    <h2 className="mt-4">Real results across regulated industries</h2>

    <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {caseStudies.map((cs) => (
        <article
          key={cs.title}
          className="site-card overflow-hidden bg-white flex flex-col"
        >
          {/* Image area */}
          <div
            className="relative h-[160px] w-full overflow-hidden flex-shrink-0"
            style={{ background: cs.imgBg }}
          >
            {/*<img
              src={cs.image}
              alt={cs.title}
              className="h-full w-full object-cover"
            /> */}
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
        </article>
      ))}
    </div>

  
  </div>
</section>


      <section className="tone-lock site-section pb-16 pt-10 sm:pb-20">
        <div className="site-container">
          <div className="relative overflow-hidden rounded-[34px] bg-[linear-gradient(130deg,#072c52,#0a2d55_48%,#0e355f)] p-10 text-white sm:p-14">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(47,143,146,0.24),transparent_30%),radial-gradient(circle_at_70%_80%,rgba(47,143,146,0.22),transparent_38%),radial-gradient(circle_at_30px_30px,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:auto,auto,34px_34px]" />
            <div className="relative text-center">
              <span className="inline-flex rounded-full border border-[#1f6980] bg-[#114866]/55 px-5 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#7ec4c7]">
                Get Started
              </span>
              <h2 className="mx-auto mt-7 max-w-[920px] !text-[26px]">
                Schedule a time to discuss your requirements and learn how our
                expertise can drive meaningful outcomes for your business.
              </h2>
              <div className="mt-8 flex justify-center">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-3 rounded-full bg-[#3a8f90] px-10 py-4 text-[14px] font-semibold text-white transition hover:bg-[#347f80]"
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
  )
}

