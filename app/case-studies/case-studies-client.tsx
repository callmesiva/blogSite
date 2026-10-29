"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import ScrollReveal from "../components/ScrollReveal";

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

const THEMES = [
  { tagColor: "#0b3a63", imgBg: "#dbe8f4" },
  { tagColor: "#0f6e56", imgBg: "#d8eee7" },
  { tagColor: "#534ab7", imgBg: "#e4dff5" },
];


// Hero tabs are based on the three supplied case-study reference screenshots.
const HERO_CASE_STUDIES = [
  {
    id: "life-sciences",
    label: "Life Science",
    eyebrow: "CASE STUDY",
    title: "Transforming regulatory operations through a zero-disruption Veeva Vault RIM migration",
    summary:
      "How Wolvio helped a global pharmaceutical organization move from legacy Documentum D2 to a validated, scalable Veeva Regulatory Vault — preserving complex regulatory data integrity while accelerating the migration programme.",
    meta: [
      { label: "Industry", value: "Global Pharmaceuticals" },
      { label: "Capability", value: "Regulatory Transformation" },
      { label: "Platform", value: "Veeva Vault RIM" },
      { label: "Migrated from", value: "Documentum D2" },
    ],
    currentLabel: "CURRENT STATE",
    currentValue: "Documentum D2",
    wolvioValue: "Enterprise migration, engineered",
    transformedLabel: "TRANSFORMED STATE",
    transformedValue: "Veeva Vault RIM",
    transformedDetail: "Regulatory transformation",
  },
  {
    id: "enterprise-ai",
    label: "Enterprise AI",
    eyebrow: "CASE STUDY",
    title: "Turning fragmented enterprise knowledge into an intelligent decision-support system",
    summary:
      "How Wolvio Intelligence connected scattered documents, systems and expertise into a grounded, governed intelligence layer — so teams get cited answers instead of searching, and AI acts only where it is trusted to.",
    meta: [
      { label: "Client type", value: "Global Enterprise" },
      { label: "Capability", value: "Knowledge Intelligence" },
      { label: "Approach", value: "Enterprise RAG" },
      { label: "Governance", value: "Human-in-the-loop" },
    ],
    currentLabel: "CURRENT STATE",
    currentValue: "Fragmented knowledge",
    wolvioValue: "Grounded intelligence layer",
    transformedLabel: "TRANSFORMED STATE",
    transformedValue: "Connected intelligence",
    transformedDetail: "Decisions supported in the flow of work",
  },
  {
    id: "digital-transformation",
    label: "Digital Transformation",
    eyebrow: "CASE STUDY",
    title: "Bringing governed execution to a fragmented enterprise delivery landscape",
    summary:
      "How Wolvio helped an enterprise replace disconnected delivery, unclear accountability and limited visibility with a governed operating model — without stopping the work already in flight.",
    meta: [
      { label: "Client type", value: "Global Enterprise" },
      { label: "Capability", value: "Transformation Governance" },
      { label: "Scope", value: "Multi-vendor delivery" },
      { label: "Region", value: "Multi-region" },
    ],
    currentLabel: "CURRENT STATE",
    currentValue: "Fragmented delivery",
    wolvioValue: "Operating model, redesigned",
    transformedLabel: "TRANSFORMED STATE",
    transformedValue: "Governed execution",
    transformedDetail: "Predictable enterprise delivery",
  },
] as const;

// Featured Veeva migration content adapted from the supplied Wolvio case-study reference.
// Keep the existing listing API-driven; this is a separate editorial feature section.
const FEATURED_VEEVA_STORY = {
  eyebrow: "CASE STUDY",
  title: "Transforming regulatory operations through a zero-disruption Veeva Vault RIM migration",
  summary:
    "How Wolvio helped a global pharmaceutical organization move from legacy Documentum D2 to a validated, scalable Veeva Regulatory Vault — preserving complex regulatory data integrity while accelerating the migration programme.",
  meta: [
    { label: "Industry", value: "Global Pharmaceuticals" },
    { label: "Capability", value: "Regulatory Transformation" },
    { label: "Platform", value: "Veeva Vault RIM" },
    { label: "Migrated from", value: "Documentum D2" },
  ],
  outcomes: [
    {
      value: "~2 months",
      label: "Programme timeline reduction",
      detail: "Automation shortened the projected migration timeline.",
    },
    {
      value: "100%",
      label: "Data reconciliation accuracy",
      detail: "Complete reconciliation across migrated regulatory information.",
    },
    {
      value: "ZERO",
      label: "Business disruption",
      detail: "Regulatory operations continued through migration and go-live.",
    },
    {
      value: "ZERO",
      label: "Critical post-migration defects",
      detail: "The migrated environment performed as expected after go-live.",
    },
  ],
  challenges: [
    { title: "Content plans", detail: "Preserving structured regulatory relationships." },
    { title: "Documents", detail: "Maintaining versions, renditions and lifecycle states." },
    { title: "Relationships", detail: "Protecting object-to-document integrity." },
    { title: "Audit trails", detail: "Keeping historical traceability intact." },
    { title: "Business continuity", detail: "Avoiding interruptions to live operations." },
  ],
  stages: [
    { number: "01", title: "Extract", detail: "Pull legacy content and metadata with full lineage." },
    { number: "02", title: "Transform", detail: "Map information to the target model without losing regulatory meaning." },
    { number: "03", title: "Validate", detail: "Use checkpoints and dry runs before production commitment." },
    { number: "04", title: "Load", detail: "Execute migration through a repeatable, configuration-driven process." },
    { number: "05", title: "Reconcile", detail: "Account for every migrated object and preserve evidence." },
  ],
  protectedLayers: [
    "Master data",
    "Reference data",
    "Documents",
    "Versions",
    "Renditions",
    "Relationships",
    "Audit trails",
  ],
  spotlight: {
    eyebrow: "The pivotal decision",
    title: "Automate the complexity — or migrate it manually?",
    manual: {
      label: "Option A",
      title: "Manual-heavy approach",
      items: [
        "High manual intervention",
        "Higher validation complexity",
        "Greater execution variability",
        "Longer projected timeline",
      ],
    },
    automated: {
      label: "Option B · Wolvio recommendation",
      title: "Configuration-driven automation",
      items: [
        "Reduced manual intervention",
        "Lower validation burden",
        "Systematic, repeatable execution",
        "Dry-run validated performance",
      ],
    },
    decisionSteps: [
      "Performance testing",
      "Dry runs",
      "Evidence and analysis",
      "Architecture decision",
      "Configuration-driven automation",
    ],
    takeaway:
      "Wolvio did not simply execute the migration. The team made an evidence-backed engineering decision that materially improved the programme.",
  },
  changes: [
    { before: "Rigid workflows", after: "Structured workflows" },
    { before: "Manual workarounds", after: "Scalable regulatory processes" },
    { before: "Complex migration dependencies", after: "Reconciled data foundation" },
    { before: "Legacy limitations", after: "Future-ready platform" },
    { before: "Operational risk", after: "Audit-ready environment" },
  ],
  principles: [
    { title: "Domain expertise", detail: "Understand regulatory information, not just the data being moved." },
    { title: "Proven framework", detail: "Address migration complexity systematically." },
    { title: "Early validation", detail: "Test performance and accuracy before production commitment." },
    { title: "Evidence-backed decisions", detail: "Use test results and analysis to guide architecture choices." },
    { title: "Automation first", detail: "Reduce manual intervention, validation burden and delivery risk." },
  ],
};

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
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  }).format(new Date(date));
}

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
         .then(res => res.json())
         .then(data => {
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
          requestError instanceof Error
            ? requestError.message
            : "Something went wrong while loading case studies.";
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

  // NATIVE DETAIL VIEW
  if (postIdParam) {
    return (
      <main className="min-h-screen bg-[#f8fafc] text-[#0f172a]">
        <div className="mx-auto w-full max-w-[1400px]  lg:px-8 lg:py-20">
          {activePost ? (
            <article className="rounded-[24px] p-8 shadow-[0_12px_32px_rgba(7,30,61,0.04)] sm:p-12 lg:p-16 bg-white w-full overflow-hidden">
              <div className="mb-10 !text-center">
                <Link href="/case-studies" className="inline-flex mb-8 text-[14px] text-[#64748b] hover:text-[#2f6f73]">
                   ← Back to Case Studies
                </Link>
                <p className="mb-4 text-[14px] font-bold uppercase tracking-widest text-[#2f6f73]">
                  {activePost.type}
                </p>

                <h1
                  className="mb-6 text-center text-[32px] font-bold leading-[1.2] text-[#0a2540] sm:text-[40px] break-words"
                  dangerouslySetInnerHTML={{ __html: activePost.title }}
                />

                <p className="text-[14px] text-[#64748b]">
                  {formatDate(activePost.date)}
                </p>
              </div>

              {activePost.image && (
                <div className="relative mb-12 w-full overflow-hidden rounded-[16px] bg-[#eaf2f5] aspect-[16/9]">
                  <Image
                    src={activePost.image}
                    alt="Featured image"
                    fill
                    className="object-cover"
                  />
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
            </article>
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
    <main className="polish-layout min-h-screen overflow-x-hidden bg-[#f8fafc] text-[#0f172a]">
      <section className="hero-grid overflow-hidden">
        <ScrollReveal className="site-container pb-14 pt-10 sm:pt-12 lg:pb-20 lg:pt-16">
          {(() => {
            const activeStudy =
              HERO_CASE_STUDIES.find((study) => study.id === activeHeroTabId) ??
              HERO_CASE_STUDIES[0];

            return (
              <>
                <div
                  className="mx-auto mb-8 grid w-full max-w-[860px] grid-cols-1 gap-2 rounded-2xl border border-[#dce7ee] bg-white/80 p-2 shadow-[0_8px_28px_rgba(7,30,61,0.04)] sm:grid-cols-3"
                  role="tablist"
                  aria-label="Explore case studies by capability"
                >
                  {HERO_CASE_STUDIES.map((study) => {
                    const isActive = study.id === activeHeroTabId;
                    return (
                      <button
                        key={study.id}
                        id={`case-study-tab-${study.id}`}
                        type="button"
                        role="tab"
                        aria-selected={isActive}
                        aria-controls="case-study-hero-panel"
                        onClick={() => setActiveHeroTabId(study.id)}
                        className={`min-h-12 rounded-xl px-4 py-3 text-[12px] font-semibold uppercase tracking-[0.09em] transition duration-200 sm:text-[13px] ${
                          isActive
                            ? "bg-[#0a2540] text-white shadow-[0_4px_12px_rgba(10,37,64,0.16)]"
                            : "text-[#526b80] hover:bg-[#eaf2f5] hover:text-[#0a2540]"
                        }`}
                      >
                        {study.label}
                      </button>
                    );
                  })}
                </div>

                <div
                  id="case-study-hero-panel"
                  role="tabpanel"
                  aria-labelledby={`case-study-tab-${activeStudy.id}`}
                  key={activeStudy.id}
                  className="mx-auto max-w-[1400px]"
                >
                  <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(220px,0.42fr)] lg:items-end">
                    <div>
                      <p className="site-kicker">{activeStudy.eyebrow}</p>
                      <h1 className="mt-4 max-w-[1160px] text-[32px] font-bold leading-[1.12] tracking-[-0.035em] text-[#0a2540] sm:text-[42px] lg:text-[54px]">
                        {activeStudy.title}
                      </h1>
                    </div>
                    <p className="max-w-[620px] text-[15px] leading-[1.8] text-[#63798d] lg:justify-self-end">
                      {activeStudy.summary}
                    </p>
                  </div>

                  <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-[#dce7ee] bg-[#dce7ee] sm:grid-cols-2 xl:grid-cols-4">
                    {activeStudy.meta.map((item) => (
                      <div key={item.label} className="min-h-[88px] bg-white px-5 py-4 sm:px-6 sm:py-5">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#7a91a5]">
                          {item.label}
                        </p>
                        <p className="mt-2 text-[14px] font-medium leading-[1.5] text-[#173652] sm:text-[15px]">
                          {item.value}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 grid items-center gap-3 rounded-2xl border border-[#dce7ee] bg-white/70 p-4 sm:p-5 md:grid-cols-[minmax(0,1fr)_minmax(28px,0.55fr)_minmax(210px,1.1fr)_minmax(28px,0.55fr)_minmax(0,1fr)] md:gap-4">
                    <div className="min-w-0 py-1 md:py-2">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#7a91a5]">
                        {activeStudy.currentLabel}
                      </p>
                      <p className="mt-2 break-words text-[16px] font-medium leading-[1.45] text-[#536d82] sm:text-[17px]">
                        {activeStudy.currentValue}
                      </p>
                    </div>
                    <span aria-hidden="true" className="mx-auto flex h-7 w-full items-center justify-center text-[#2f7f88] rotate-90 md:rotate-0">
                      <span className="hidden h-px flex-1 bg-[#2f7f88] md:block" />
                      <ArrowRightIcon />
                    </span>
                    <div className="rounded-xl border border-[#2f7f88] bg-[#edf8f7] px-5 py-4 sm:px-6">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#2f7f88]">
                        WOLVIO
                      </p>
                      <p className="mt-2 text-[15px] font-semibold leading-[1.45] text-[#173652] sm:text-[16px]">
                        {activeStudy.wolvioValue}
                      </p>
                    </div>
                    <span aria-hidden="true" className="mx-auto flex h-7 w-full items-center justify-center text-[#2f7f88] rotate-90 md:rotate-0">
                      <span className="hidden h-px flex-1 bg-[#2f7f88] md:block" />
                      <ArrowRightIcon />
                    </span>
                    <div className="min-w-0 py-1 md:py-2 md:text-right">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#2f7f88]">
                        {activeStudy.transformedLabel}
                      </p>
                      <p className="mt-2 break-words text-[16px] font-semibold leading-[1.45] text-[#173652] sm:text-[17px]">
                        {activeStudy.transformedValue}
                      </p>
                      <p className="mt-1 text-[13px] leading-[1.5] text-[#63798d]">
                        {activeStudy.transformedDetail}
                      </p>
                    </div>
                  </div>
                </div>
              </>
            );
          })()}
        </ScrollReveal>
      </section>

      <section className="site-section-alt">
        <div className="site-container">
          <p className="site-kicker">Relevant Case Studies</p>
          <h2 className="mt-4">Real results across regulated industries</h2>

          {error ? (
            <div className="site-card mt-7 rounded-2xl border-rose-200 bg-rose-50 px-5 py-4 text-[15px] text-rose-700">
              {error}
            </div>
          ) : null}

          {isLoading && !hasPosts ? (
            <div className="mt-7 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={`skeleton-${index}`}
                  className="site-card overflow-hidden bg-white"
                >
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
              <h2 className="text-[28px] font-semibold text-[#0a2540]">
                No case studies found
              </h2>
            </div>
          ) : null}

          {hasPosts ? (
            <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post, index) => {
                const theme = THEMES[index % THEMES.length];
                return (
                  <article
                    key={post.id}
                    className="site-card flex flex-col overflow-hidden bg-white transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    {/* Image area */}
                    <div
                      className="relative h-[160px] shrink-0 w-full overflow-hidden"
                      style={{ background: theme.imgBg }}
                    >
                      {post.image && (
                        <img
                          src={post.image}
                          alt={stripHtml(post.title)}
                          className="absolute inset-0 h-full w-full object-cover"
                        />
                      )}
                      <span
                        className="absolute left-3 top-3 rounded-[6px] px-[10px] py-1 text-[11px] font-medium tracking-wide"
                        style={{ background: theme.tagColor, color: "#e6f1fb" }}
                      >
                        Case Study
                      </span>
                    </div>

                    {/* Body */}
                    <div className="flex flex-1 flex-col p-5">
                      <p className="text-[12px] font-medium uppercase tracking-[0.05em] text-[#2f7f88]">
                        Client Success
                      </p>
                      <h3
                        className="mt-1.5 text-[16px] font-semibold leading-[1.35] text-[#173652] line-clamp-3 break-words"
                        dangerouslySetInnerHTML={{ __html: post.title }}
                      />
                      <p className="mt-2 flex-1 text-[14px] leading-[1.65] text-[#63798d] line-clamp-4">
                        {stripHtml(post.excerpt || post.content)}
                      </p>

                      <div className="mt-6 flex items-center pt-2 border-t border-[#f0f4f8]">
                        <Link
                          href={`/case-studies/${post.slug}`}
                          className="inline-flex items-center gap-2 text-[14px] font-medium text-[#0a2540] transition hover:text-[#2f6f73]"
                        >
                          Read full case study
                          <ArrowRightIcon />
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : null}

          <div
            ref={loaderRef}
            className="flex min-h-16 items-center justify-center pt-6"
          >
            {isLoadingMore ? (
              <p className="text-[14px] text-[#617387]">Loading more...</p>
            ) : null}
          </div>
        </div>
      </section>

      {/* Featured case-study detail, following the supplied HTML's content structure
          while retaining the existing page's light, navy and teal visual language. */}
      <section className="site-section bg-white">
        <ScrollReveal className="site-container">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.25fr)_minmax(280px,0.75fr)] lg:items-end">
            <div>
              <p className="site-kicker">{FEATURED_VEEVA_STORY.eyebrow}</p>
              <h2 className="mt-4 max-w-[900px] text-[30px] font-bold leading-[1.15] text-[#0a2540] sm:text-[38px]">
                {FEATURED_VEEVA_STORY.title}
              </h2>
            </div>
            <p className="text-[15px] leading-[1.8] text-[#63798d]">
              {FEATURED_VEEVA_STORY.summary}
            </p>
          </div>

          <div className="mt-9 grid gap-px overflow-hidden rounded-2xl border border-[#e2eaf0] bg-[#e2eaf0] sm:grid-cols-2 xl:grid-cols-4">
            {FEATURED_VEEVA_STORY.meta.map((item) => (
              <div key={item.label} className="bg-[#f8fafc] px-5 py-5 sm:px-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#2f7f88]">
                  {item.label}
                </p>
                <p className="mt-2 text-[15px] font-semibold text-[#173652]">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 grid items-stretch gap-3 rounded-2xl border border-[#dce7ee] bg-[#f8fafc] p-4 sm:p-5 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1.15fr)_auto_minmax(0,1fr)] md:items-center">
            <div className="rounded-xl border border-[#e2eaf0] bg-white p-4 sm:p-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.13em] text-[#7a91a5]">CURRENT STATE</p>
              <p className="mt-2 text-[16px] font-semibold text-[#173652]">Documentum D2</p>
            </div>
            <span aria-hidden="true" className="mx-auto flex h-8 w-8 items-center justify-center text-[#2f7f88] rotate-90 md:rotate-0">
              <ArrowRightIcon />
            </span>
            <div className="rounded-xl bg-[#0a2540] p-4 text-white sm:p-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.13em] text-[#7ec4c7]">WOLVIO</p>
              <p className="mt-2 text-[16px] font-semibold text-white">Enterprise migration, engineered</p>
            </div>
            <span aria-hidden="true" className="mx-auto flex h-8 w-8 items-center justify-center text-[#2f7f88] rotate-90 md:rotate-0">
              <ArrowRightIcon />
            </span>
            <div className="rounded-xl border border-[#b8dcda] bg-[#f2fbf9] p-4 sm:p-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.13em] text-[#2f7f88]">TRANSFORMED STATE</p>
              <p className="mt-2 text-[16px] font-semibold text-[#173652]">Veeva Vault RIM</p>
              <p className="mt-1 text-[13px] leading-[1.5] text-[#63798d]">Regulatory transformation</p>
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {FEATURED_VEEVA_STORY.outcomes.map((outcome) => (
              <article
                key={outcome.label}
                className="rounded-2xl border border-[#e5edf2] bg-white p-6 shadow-[0_8px_24px_rgba(7,30,61,0.035)]"
              >
                <p className="text-[28px] font-bold leading-tight text-[#0a2540] sm:text-[32px]">
                  {outcome.value}
                </p>
                <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#2f7f88]">
                  {outcome.label}
                </p>
                <p className="mt-3 text-[14px] leading-[1.65] text-[#63798d]">{outcome.detail}</p>
              </article>
            ))}
          </div>
        </ScrollReveal>
      </section>

      <section className="site-section-alt">
        <ScrollReveal className="site-container">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start">
            <div>
              <p className="site-kicker">The Challenge</p>
              <h2 className="mt-4 max-w-[560px] text-[28px] font-bold leading-[1.2] text-[#0a2540] sm:text-[36px]">
                A regulatory platform becoming a constraint on the business.
              </h2>
              <p className="mt-5 max-w-[560px] text-[15px] leading-[1.8] text-[#63798d]">
                Regulatory information had accumulated in a legacy environment over many years —
                deeply interconnected, heavily governed, and impossible to pause while the business
                kept filing.
              </p>
              <div className="mt-7 rounded-2xl border border-[#dce7ee] bg-white p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#2f7f88]">
                  Transformation need
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-2 text-[14px] font-semibold text-[#173652]">
                  <span className="rounded-lg bg-[#eaf2f5] px-3 py-2">Documentum D2</span>
                  <ArrowRightIcon />
                  <span className="rounded-lg bg-[#d8eee7] px-3 py-2">Veeva Vault RIM</span>
                </div>
                <p className="mt-3 text-[13px] leading-[1.65] text-[#63798d]">
                  Move to a scalable, validated platform without compromising live regulatory operations.
                </p>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {FEATURED_VEEVA_STORY.challenges.map((challenge, index) => (
                <article
                  key={challenge.title}
                  className="rounded-2xl border border-[#e2eaf0] bg-white p-5 sm:p-6"
                >
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#eaf2f5] text-[12px] font-bold text-[#2f7f88]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-[16px] font-semibold text-[#173652]">{challenge.title}</h3>
                  <p className="mt-2 text-[14px] leading-[1.65] text-[#63798d]">{challenge.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section className="site-section">
        <ScrollReveal className="site-container">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-end">
            <div>
              <p className="site-kicker">The Approach</p>
              <h2 className="mt-4 max-w-[620px] text-[28px] font-bold leading-[1.2] text-[#0a2540] sm:text-[36px]">
                A transformation engineered around integrity, validation and continuity.
              </h2>
            </div>
            <p className="max-w-[680px] text-[15px] leading-[1.8] text-[#63798d]">
              Every stage was designed to prove correctness before the next one began — so nothing
              reached production unvalidated.
            </p>
          </div>

          <div className="mt-9 grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
            {FEATURED_VEEVA_STORY.stages.map((stage) => (
              <article
                key={stage.number}
                className="overflow-hidden rounded-2xl border border-[#e2eaf0] bg-white"
              >
                <div className="h-1 bg-[#2f7f88]" />
                <div className="p-5">
                  <p className="text-[12px] font-semibold tracking-[0.14em] text-[#7a91a5]">{stage.number}</p>
                  <h3 className="mt-3 text-[18px] font-semibold text-[#173652]">{stage.title}</h3>
                  <p className="mt-2 text-[14px] leading-[1.65] text-[#63798d]">{stage.detail}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-2xl bg-[#f8fafc] p-6 sm:p-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#2f7f88]">
              What was protected throughout
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {FEATURED_VEEVA_STORY.protectedLayers.map((layer) => (
                <span
                  key={layer}
                  className="rounded-full border border-[#dce7ee] bg-white px-4 py-2 text-[13px] font-medium text-[#38556d]"
                >
                  {layer}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section className="site-section">
        <ScrollReveal className="site-container">
          <div className="relative overflow-hidden rounded-[34px] bg-[linear-gradient(130deg,#072c52,#0a2d55_48%,#0e355f)] p-6 text-white sm:p-10 lg:p-14">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(47,143,146,0.24),transparent_30%),radial-gradient(circle_at_70%_80%,rgba(47,143,146,0.22),transparent_38%),radial-gradient(circle_at_30px_30px,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:auto,auto,34px_34px]" />
            <div className="relative">
          <p className="site-kicker !text-[#7ec4c7]">{FEATURED_VEEVA_STORY.spotlight.eyebrow}</p>
          <h2 className="mt-4 max-w-[850px] text-[28px] font-bold leading-[1.2] text-white sm:text-[36px]">
            {FEATURED_VEEVA_STORY.spotlight.title}
          </h2>
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {[FEATURED_VEEVA_STORY.spotlight.manual, FEATURED_VEEVA_STORY.spotlight.automated].map((option, index) => (
              <article
                key={option.label}
                className={`rounded-2xl border p-6 sm:p-8 ${
                  index === 1
                    ? "border-[#b8dcda] bg-[#f2fbf9]"
                    : "border-[#e2eaf0] bg-white"
                }`}
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#2f7f88]">
                  {option.label}
                </p>
                <h3 className="mt-3 text-[20px] font-semibold text-[#173652]">{option.title}</h3>
                <div className="mt-5 space-y-0">
                  {option.items.map((item) => (
                    <p key={item} className="border-t border-[#e2eaf0] py-3 text-[14px] leading-[1.6] text-[#63798d]">
                      {item}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-[#e2eaf0] bg-white p-6 sm:p-8">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#2f7f88]">
                  How the decision was made
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  {FEATURED_VEEVA_STORY.spotlight.decisionSteps.map((step, index) => (
                    <div key={step} className="flex items-center gap-2">
                      <span className="rounded-lg bg-[#f1f6f8] px-3 py-2 text-[13px] font-medium text-[#38556d]">
                        <span className="mr-2 text-[#2f7f88]">{String(index + 1).padStart(2, "0")}</span>
                        {step}
                      </span>
                      {index < FEATURED_VEEVA_STORY.spotlight.decisionSteps.length - 1 ? (
                        <span aria-hidden="true" className="hidden text-[#9bb0bf] sm:inline">→</span>
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>
              <div className="shrink-0 rounded-xl bg-[#0a2540] px-6 py-5 text-white">
                <p className="text-[26px] font-bold leading-none">~2 months</p>
                <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-[#a9dedd]">
                  Saved in the programme timeline
                </p>
              </div>
            </div>
            <p className="mt-6 max-w-[900px] text-[14px] leading-[1.8] text-[#63798d]">
              {FEATURED_VEEVA_STORY.spotlight.takeaway}
            </p>
            </div>
          </div>
          </div>
        </ScrollReveal>
      </section>

      <section className="site-section-alt">
        <ScrollReveal className="site-container">
          <p className="site-kicker">The Transformation</p>
          <h2 className="mt-4 max-w-[850px] text-[28px] font-bold leading-[1.2] text-[#0a2540] sm:text-[36px]">
            The migration was the mechanism. Regulatory transformation was the outcome.
          </h2>

          <div className="mt-8 overflow-hidden rounded-2xl border border-[#dce7ee] bg-white">
            <div className="grid grid-cols-2 gap-4 border-b border-[#dce7ee] bg-[#f8fafc] px-5 py-4 sm:px-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#7a91a5]">Before</p>
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#2f7f88]">After</p>
            </div>
            {FEATURED_VEEVA_STORY.changes.map((change) => (
              <div key={change.before} className="grid grid-cols-2 gap-4 border-b border-[#edf2f6] px-5 py-5 last:border-b-0 sm:px-7">
                <p className="text-[14px] leading-[1.6] text-[#7a8da0] sm:text-[16px]">{change.before}</p>
                <div className="flex items-start gap-2 text-[14px] font-semibold leading-[1.6] text-[#173652] sm:text-[16px]">
                  <span aria-hidden="true" className="mt-[2px] text-[#2f7f88]">→</span>
                  <span>{change.after}</span>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      <section className="site-section bg-white">
        <ScrollReveal className="site-container">
          <p className="site-kicker">Why It Worked</p>
          <h2 className="mt-4 max-w-[780px] text-[28px] font-bold leading-[1.2] text-[#0a2540] sm:text-[36px]">
            What made the transformation successful.
          </h2>
          <div className="mt-9 grid gap-7 sm:grid-cols-2 lg:grid-cols-5">
            {FEATURED_VEEVA_STORY.principles.map((principle) => (
              <article key={principle.title} className="border-t-2 border-[#c6e3e2] pt-5">
                <h3 className="text-[16px] font-semibold text-[#173652]">{principle.title}</h3>
                <p className="mt-2 text-[14px] leading-[1.7] text-[#63798d]">{principle.detail}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 flex items-center gap-4">
            <div className="h-px flex-1 bg-[#c6e3e2]" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#2f7f88]">
              Client impact delivered
            </p>
          </div>
        </ScrollReveal>
      </section>

      <section className="tone-lock site-section">
        <ScrollReveal className="site-container">
          <div className="relative overflow-hidden rounded-[34px] bg-[linear-gradient(130deg,#072c52,#0a2d55_48%,#0e355f)] p-10 text-white sm:p-14">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(47,143,146,0.24),transparent_30%),radial-gradient(circle_at_70%_80%,rgba(47,143,146,0.22),transparent_38%),radial-gradient(circle_at_30px_30px,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:auto,auto,34px_34px]" />
            <div className="relative text-center">
              <span className="inline-flex rounded-full border border-[#1f6980] bg-[#114866]/55 px-5 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#7ec4c7]">
                Get Started
              </span>
              <h2 className="mx-auto mt-7 max-w-[920px]">
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
        </ScrollReveal>
      </section>
    </main>
  );
}
