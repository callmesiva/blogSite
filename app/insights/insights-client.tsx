"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

type InsightPost = {
  id: number;
  link: string;
  date: string;
  title: string;
  content: string;
  excerpt: string;
  image: string | null;
  type: "White Space" | "Blog" | "Uncategorized";
};

type PostsResponse = {
  posts: InsightPost[];
  hasMore: boolean;
  page: number;
  totalPages: number;
  message?: string;
};

const FILTER_OPTIONS = [
  { label: "All Types", value: "all" },
  { label: "White Space", value: "white-space" },
  { label: "Blog", value: "blog" },
  { label: "Uncategorized", value: "uncategorized" },
];

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

export default function InsightsClient() {
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

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setSearchTerm(query.trim());
    }, 350);

    return () => {
      window.clearTimeout(timer);
    };
  }, [query]);

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
        const response = await fetch(`/api/insights/posts?${params.toString()}`);
        const data = (await response.json()) as PostsResponse;

        if (!response.ok) {
          throw new Error(data.message ?? "Unable to load posts.");
        }

        setHasMore(data.hasMore);
        setPosts(current => {
          if (nextPage === 1) {
            return data.posts;
          }
          const ids = new Set(current.map(post => post.id));
          const incoming = data.posts.filter(post => !ids.has(post.id));
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

  useEffect(() => {
    setPage(1);
    setPosts([]);
    setHasMore(true);
  }, [searchTerm, type]);

  useEffect(() => {
    void loadPosts(page);
  }, [loadPosts, page]);

  useEffect(() => {
    const node = loaderRef.current;
    if (!node || !hasMore || isLoading || isLoadingMore) {
      return;
    }

    const observer = new IntersectionObserver(
      entries => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setPage(currentPage => currentPage + 1);
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
      <section className="mx-auto w-full max-w-[1360px] px-5 pb-20 pt-10 sm:px-8">
        <div className="mb-9 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[14px] font-medium uppercase tracking-[0.22em] text-[#2f6f73]">
              Insights
            </p>
            <h1 className="mt-2 text-[48px] font-bold leading-[1.02] tracking-[-0.03em] text-[#0a2540]">
              Knowledge Center
            </h1>
            <p className="mt-3 text-[16px] text-[#475569]">{headingNote}</p>
          </div>

          <div className="grid w-full grid-cols-1 gap-3 md:w-auto md:grid-cols-[minmax(340px,1fr)_200px]">
            <input
              type="search"
              value={query}
              onChange={event => setQuery(event.target.value)}
              placeholder="Search by post title or content..."
              className="h-12 rounded-2xl border border-[#d1e0e5] bg-white px-4 text-[15px] text-[#0f172a] outline-none ring-[#2f6f73]/25 transition focus:ring-4"
              aria-label="Search insights by title and content"
            />
            <select
              value={type}
              onChange={event => setType(event.target.value)}
              className="h-12 rounded-2xl border border-[#d1e0e5] bg-white px-4 text-[15px] text-[#0f172a] outline-none ring-[#2f6f73]/25 transition focus:ring-4"
              aria-label="Filter insights by type"
            >
              {FILTER_OPTIONS.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {error ? (
          <div className="rounded-2xl border border-rose-200 bg-rose-50 px-5 py-4 text-[15px] text-rose-700">
            {error}
          </div>
        ) : null}

        {isLoading && !hasPosts ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={`skeleton-${index}`}
                className="overflow-hidden rounded-[24px] border border-[#dce7ec] bg-white"
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
          <div className="rounded-[24px] border border-[#dce7ec] bg-white px-8 py-12 text-center">
            <h2 className="text-[28px] font-semibold text-[#0a2540]">No insights found</h2>
            <p className="mt-2 text-[16px] text-[#475569]">
              Try changing your keyword or switching the type filter.
            </p>
          </div>
        ) : null}

        {hasPosts ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {posts.map(post => (
              <article
                key={post.id}
                className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-[#dce7ec] bg-white shadow-[0_10px_28px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(15,23,42,0.1)]"
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
                      No image available
                    </div>
                  )}
                </div>
                <div className="flex h-full flex-col p-5">
                  <p className="text-[13px] text-[#64748b]">{formatDate(post.date)}</p>
                  <h2
                    className="mt-3 line-clamp-2 text-[22px] font-semibold leading-[1.25] text-[#0a2540]"
                    dangerouslySetInnerHTML={{ __html: post.title }}
                  />
                  <p className="mt-3 line-clamp-4 text-[16px] leading-[1.65] text-[#475569]">
                    {getSummary(post)}
                  </p>
                  <div className="mt-5 flex items-center justify-between gap-3">
                    <span className="rounded-full border border-[#cde0e2] bg-[#f4f9fa] px-3 py-1 text-[13px] font-medium text-[#2f6f73]">
                      {post.type}
                    </span>
                    <a
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[14px] font-medium text-[#0a2540] transition hover:text-[#2f6f73]"
                    >
                      Read more
                      <ArrowIcon />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : null}

        <div ref={loaderRef} className="flex min-h-16 items-center justify-center pt-6">
          {isLoadingMore ? (
            <p className="text-[14px] text-[#617387]">Loading more posts...</p>
          ) : null}
          {!hasMore && hasPosts ? (
            <p className="text-[14px] text-[#617387]">You have reached the end.</p>
          ) : null}
        </div>
      </section>
    </main>
  );
}
