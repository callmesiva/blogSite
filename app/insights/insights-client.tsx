"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import SelectDropDown from "../components/selectDropDown";
import ScrollReveal from "../components/ScrollReveal";
import AnimatedUnderline from "../components/AnimatedUnderline";

type InsightPost = {
  id: number;
  link: string;
  date: string;
  title: string;
  content: string;
  excerpt: string;
  image: string | null;
  slug: string;
  type: "White Space" | "Blog" | "Uncategorized";
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

function getSummary(post: InsightPost) {
  const source = stripHtml(post.excerpt || post.content);
  if (source.length <= 180) {
    return source;
  }
  return `${source.slice(0, 180).trim()}...`;
}

function ArrowIcon() {
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

function getInternalReadUrl(post: any) {
  return `/insights/${post.slug}`;
}

function isValidHttpUrl(value: string) {
  try {
    const parsed = new URL(value);
    return parsed.protocol === "http:" || parsed.protocol === "https:";
  } catch {
    return false;
  }
}

export default function InsightsClient({ post }: { post?: InsightPost }) {

  const searchParams = useSearchParams();
  const postIdParam = searchParams.get("postId");
  const readUrlParam = searchParams.get("url") ?? "";

  const safeReadUrl = useMemo(() => {
    if (!readUrlParam || !isValidHttpUrl(readUrlParam)) {
      return null;
    }
    return readUrlParam;
  }, [readUrlParam]);

  const [query, setQuery] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [type, setType] = useState("all");
  const [posts, setPosts] = useState<InsightPost[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const loaderRef = useRef<HTMLDivElement | null>(null);

  const [filterOptions, setFilterOptions] = useState([
    { label: "All Types", value: "all" },
  ]);

  const [activePost, setActivePost] = useState<InsightPost | null>(
    post || null,
  );

  // Active Post Logic
  useEffect(() => {
    if (!postIdParam) {
      setActivePost(null);
      return;
    }
    const postInState = posts.find((p) => p.id.toString() === postIdParam);
    if (postInState) {
      setActivePost(postInState);
    }
  }, [postIdParam, posts]);

  // Categories Fetch
  useEffect(() => {
    fetch("/api/insights/categories")
      .then((r) => r.json())
      .then((data) => {
        const dynamic = (
          data.categories as Array<{ slug: string; name: string }>
        ).map((cat) => ({
          label: cat.name,
          value: cat.slug,
        }));
        setFilterOptions([{ label: "All Types", value: "all" }, ...dynamic]);
      })
      .catch(() => {});
  }, []);

  // Debounce Search
  useEffect(() => {
    const timer = window.setTimeout(() => {
      setSearchTerm(query.trim());
    }, 350);
    return () => window.clearTimeout(timer);
  }, [query]);

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
      if (searchTerm) {
        params.set("search", searchTerm);
      }

      try {
        const response = await fetch(
          `/api/insights/posts?${params.toString()}`,
        );
        const data = (await response.json()) as PostsResponse;

        if (!response.ok) {
          throw new Error(data.message ?? "Unable to load posts.");
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
            : "Something went wrong while loading posts.";
        setError(message);
      } finally {
        setIsLoading(false);
        setIsLoadingMore(false);
      }
    },
    [searchTerm, type],
  );

  // Trigger loads
  useEffect(() => {
    setPage(1);
    setPosts([]);
    setHasMore(true);
  }, [searchTerm, type]);

  useEffect(() => {
    void loadPosts(page);
  }, [loadPosts, page]);

  // Infinite Scroll Observer
  useEffect(() => {
    const node = loaderRef.current;
    if (!node || !hasMore || isLoading || isLoadingMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setPage((currentPage) => currentPage + 1);
        }
      },
      { rootMargin: "250px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [hasMore, isLoading, isLoadingMore, posts.length]);

  const hasPosts = posts.length > 0;
  const headingNote = useMemo(() => {
    if (!hasPosts && !isLoading) {
      return "No posts found for your current search.";
    }
    return `Showing ${posts.length} insight${posts.length === 1 ? "" : "s"}`;
  }, [hasPosts, isLoading, posts.length]);

  return (
    <main className="polish-layout min-h-screen bg-[#f8fafc] text-[#0f172a]">
      <section className="hero-grid">
        <ScrollReveal className="site-container pb-14 pt-12 lg:pb-20 lg:pt-16 flex flex-col items-center text-center">
          <p className="site-kicker">Insights</p>
          <h1 className="mt-4 max-w-[860px]">
            <AnimatedUnderline>Knowledge</AnimatedUnderline> Center
          </h1>
          <p className="site-subheading mt-5 max-w-[940px]">
            Practitioner-led perspectives on Veeva platform delivery, regulated
            operations, and AI-enabled transformation.
          </p>
        </ScrollReveal>
      </section>

      <section className="site-section-alt">
        <div className="site-container">
          <div className="mb-9 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <p className="text-[15px] text-[#5f7388]">{headingNote}</p>
            <div className="grid w-full grid-cols-1 gap-3 md:w-auto md:grid-cols-[minmax(340px,1fr)_200px]">
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search by post title or content..."
                className="h-12 rounded-2xl border border-[#d1e0e5] bg-white px-4 text-[15px] text-[#0f172a] outline-none ring-[#2f6f73]/25 transition focus:ring-4"
                aria-label="Search insights by title and content"
              />
              <SelectDropDown
                value={type}
                onChange={setType}
                options={filterOptions}
              />
            </div>
          </div>

          {error ? (
            <div className="site-card rounded-2xl border-rose-200 bg-rose-50 px-5 py-4 text-[15px] text-rose-700">
              {error}
            </div>
          ) : null}

          {isLoading && !hasPosts ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={`skeleton-${index}`}
                  className="site-card overflow-hidden bg-white"
                >
                  <div className="aspect-[16/9] animate-pulse bg-[#eaf2f5]" />
                  <div className="space-y-3 p-5">
                    <div className="h-3 w-24 animate-pulse rounded bg-[#eaf2f5]" />
                    <div className="h-5 w-full animate-pulse rounded bg-[#eaf2f5]" />
                    <div className="h-4 w-5/6 animate-pulse rounded bg-[#eaf2f5]" />
                    <div className="h-4 w-4/6 animate-pulse rounded bg-[#eaf2f5]" />
                  </div>
                </div>
              ))}
            </div>
          ) : null}

          {!isLoading && !hasPosts ? (
            <div className="site-card bg-white px-8 py-12 text-center">
              <h2 className="text-[28px] font-semibold text-[#0a2540]">
                No insights found
              </h2>
              <p className="mt-2 text-[16px] text-[#475569]">
                Try changing your keyword or switching the type filter.
              </p>
            </div>
          ) : null}

          {hasPosts ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="site-card group flex h-full flex-col overflow-hidden bg-white shadow-[0_10px_28px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(15,23,42,0.1)]"
                >
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#eaf2f5]">
                    {post.image ? (
                      <Image
                        src={post.image}
                        alt={stripHtml(post.title)}
                        fill
                        className="object-cover transition duration-300 group-hover:scale-[1.03]"
                        sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center bg-[linear-gradient(130deg,#e8f0f3,#f7fafc)] text-[14px] text-[#607283]">
                        No image available.
                      </div>
                    )}
                  </div>
                  <div className="flex h-full flex-col p-5">
                    <p className="text-[13px] text-[#64748b]">
                      {formatDate(post.date)}
                    </p>
                    <h2
                      className="mt-3 line-clamp-2 text-[22px] font-semibold leading-[1.25] text-[#0a2540]"
                      dangerouslySetInnerHTML={{ __html: post.title }}
                    />
                    <p className="mt-3 line-clamp-4 text-[16px] leading-[1.65] text-[#475569]">
                      {getSummary(post)}
                    </p>
                    <div className="mt-auto flex items-center justify-between gap-3 pt-5">
                      <span className="rounded-full border border-[#cde0e2] bg-[#f4f9fa] px-3 py-1 text-[13px] font-medium text-[#2f6f73]">
                        {post.type}
                      </span>
                      <Link
                        href={getInternalReadUrl(post)}
                        className="inline-flex items-center gap-2 text-[14px] font-medium text-[#0a2540] transition hover:text-[#2f6f73]"
                      >
                        Read more
                        <ArrowIcon />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : null}

          <div
            ref={loaderRef}
            className="flex min-h-16 items-center justify-center pt-6"
          >
            {isLoadingMore ? (
              <p className="text-[14px] text-[#617387]">
                Loading more posts...
              </p>
            ) : null}
            {!hasMore && hasPosts ? (
              <p className="text-[14px] text-[#617387]">
                You have reached the end.
              </p>
            ) : null}
          </div>
        </div>
      </section>

      <section className="tone-lock site-section">
        <ScrollReveal className="site-container">
          <div className="relative overflow-hidden rounded-[34px] bg-[linear-gradient(130deg,#072c52,#0a2d55_48%,#0e355f)] p-10 text-white sm:p-14">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(47,143,146,0.24),transparent_30%),radial-gradient(circle_at_70%_80%,rgba(47,143,146,0.22),transparent_38%),radial-gradient(circle_at_30px_30px,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:auto,auto,34px_34px]" />
            <div className="relative text-center">
              <span className="inline-flex rounded-full border border-[#1f6980] bg-[#114866]/55 px-5 py-2 text-[13px] font-semibold uppercase tracking-[0.12em] text-[#7ec4c7]">
                Continue Reading
              </span>
              <h2 className="mx-auto mt-7 max-w-[860px] text-[clamp(1.75rem,2.2vw,2.7rem)] font-semibold leading-[1.2] tracking-[-0.03em] text-white">
                Need deeper guidance on Veeva or AI strategy?
              </h2>
              <p className="mx-auto mt-4 max-w-[760px] text-[16px] leading-[1.65] text-[#b6c9da]">
                Speak with our team for practical recommendations grounded in
                real delivery experience.
              </p>
              <div className="mt-8 flex justify-center">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-3 rounded-full bg-[#3a8f90] px-10 py-4 text-[15px] font-semibold text-white transition hover:bg-[#347f80]"
                >
                  Talk to a Specialist
                  <ArrowIcon />
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}