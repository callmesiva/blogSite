"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import ScrollReveal from "../components/ScrollReveal";
import AnimatedUnderline from "../components/AnimatedUnderline";    

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
      <section className="hero-grid">
        <ScrollReveal className="site-container pb-14 pt-12 lg:pb-20 lg:pt-16 flex flex-col items-center text-center">
          <p className="site-kicker">Case Studies Wolvio</p>
          <h1 className="mt-4 max-w-[960px]">
            <AnimatedUnderline>Real Results </AnimatedUnderline> Delivered
            Through Expert Veeva Consulting
          </h1>
          <p className="site-subheading mt-5 max-w-[1040px]">
            Measurable outcomes across implementations, regulatory programs, and
            managed services
          </p>
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
