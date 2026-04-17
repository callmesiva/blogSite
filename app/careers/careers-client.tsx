"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

import { JobApplyModal } from "../components/jobApplyModal"
import { Toast } from "../components/toast";

type Job = {
  _id: string;
  title: string;
  location: string;
  companyIntroduction?: string;
  responsibilities?: string[];
  candidateProfile?: string[];
  notSuitableFor?: string[];
  beforeYouApply?: string;
  status: string;
  applicantsCount?: number;
  createdAt: string;
};

type JobsResponse = {
  success: boolean;
  data: Job[];
  pagination: {
    total: number;
    page: number;
    limit: number;
    pages: number;
  };
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

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-IN", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  }).format(new Date(date));
}

export default function CareersClient() {
  const [queryInput, setQueryInput] = useState("");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [limit] = useState(6);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [totalJobs, setTotalJobs] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [applyJob, setApplyJob] = useState<Job | null>(null);
  const [toast, setToast] = useState<string | null>(null);

  const [reload, setReload] = useState(0);

  function handleSuccess() {
    setToast("Application submitted! We'll be in touch soon.");
    setReload((prev) => prev + 1);
  }

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setPage(1);
      setQuery(queryInput.trim());
    }, 320);

    return () => {
      window.clearTimeout(timer);
    };
  }, [queryInput]);

  useEffect(() => {
    let ignore = false;
    const controller = new AbortController();

    async function loadJobs() {
      setIsLoading(true);
      setError(null);

      try {
        const params = new URLSearchParams();
        params.set("page", String(page));
        params.set("limit", String(limit));
        if (query) {
          params.set("search", query);
        }

        const response = await fetch(
          `${process.env.NEXT_PUBLIC_CARRER_API}?${params.toString()}`,
          { signal: controller.signal },
        );

        const payload = (await response.json()) as JobsResponse;
        if (!response.ok || !payload.success) {
          throw new Error("Unable to load current openings right now.");
        }

        if (ignore) {
          return;
        }

        setJobs(payload.data ?? []);
        setTotalPages(payload.pagination?.pages || 1);
        setTotalJobs(payload.pagination?.total || 0);
      } catch (requestError) {
        if (controller.signal.aborted || ignore) {
          return;
        }
        const message =
          requestError instanceof Error
            ? requestError.message
            : "Something went wrong while loading open positions.";
        setError(message);
        setJobs([]);
      } finally {
        if (!ignore) {
          setIsLoading(false);
        }
      }
    }

    void loadJobs();

    return () => {
      ignore = true;
      controller.abort();
    };
  }, [page, query, limit, reload]);


  const pageLabel = useMemo(() => {
    if (totalJobs === 0) {
      return "No active openings right now";
    }
    return `${totalJobs} open role${totalJobs > 1 ? "s" : ""}`;
  }, [totalJobs]);

  return (
    <main className="polish-layout min-h-screen overflow-x-hidden bg-[#f8fafc] text-[#0f172a]">
      <section className="hero-grid">
        <div className="site-container pb-14 pt-12 lg:pb-20 lg:pt-16">
          <p className="site-kicker">Careers</p>
          <h1 className="mt-4 max-w-[960px]">
            Build Your Career at the Intersection of Life Sciences and AI.
          </h1>
          <p className="site-subheading mt-5 max-w-[1040px]">
            Two specialist practices. One firm. Work that is meaningful,
            colleagues who have genuinely done it before, and a team small
            enough that your contribution actually shows.
          </p>
        </div>
      </section>

      <section className="site-section-alt">
        <div className="site-container">
          <p className="site-kicker">Why Join Wolvio?</p>
          <p className="site-body mt-4 max-w-[1040px]">
            Wolvio runs two focused practices: Veeva consulting and managed
            services for pharma, biotech, and med tech; and an AI and automation
            unit building knowledge assistants, document intelligence, voice
            agents, and workflow automation.
          </p>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            <article className="site-card group relative overflow-hidden bg-white p-6 sm:p-7">
              <div
                className={`absolute left-0 top-0 h-[5px] w-full bg-[#0b3a63]`}
              />
              <h3 className="text-[19px] font-semibold leading-[1.3] text-[#173652]">
                Culture & Values
              </h3>
              <p className="mt-3 text-[15px] leading-[1.65] text-[#546b82]">
                We are direct, collaborative, and serious about quality. Your
                work is visible here, not buried in a large hierarchy. Your
                voice is heard because the team is small enough to hear it.
              </p>
            </article>
            <article className="site-card group relative overflow-hidden bg-white p-6 sm:p-7">
              <div
                className={`absolute left-0 top-0 h-[5px] w-full bg-[#2f8b92]`}
              />
              <h3 className="text-[19px] font-semibold leading-[1.3] text-[#173652]">
                Expert-Led Environment
              </h3>
              <p className="mt-3 text-[15px] leading-[1.65] text-[#546b82]">
                You work alongside people who have delivered real Vault
                implementations and AI systems in production, not under layers
                of management disconnected from delivery.
              </p>
            </article>
            <article className="site-card group relative overflow-hidden bg-white p-6 sm:p-7">
              <div
                className={`absolute left-0 top-0 h-[5px] w-full bg-[#0b3a63]`}
              />
              <h3 className="text-[19px] font-semibold leading-[1.3] text-[#173652]">
                Growth & Learning
              </h3>
              <p className="mt-3 text-[15px] leading-[1.65] text-[#546b82]">
                We support Veeva certification, AI skill building, and fast
                ownership growth. At Wolvio, meaningful client-facing
                responsibility can happen in months, not years.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container">
          <p className="site-kicker">Open Positions</p>
          <h2 className="mt-4">Explore our current openings</h2>
          <p className="site-body mt-4 max-w-[1040px]">
            All roles are based across our Chennai and Coimbatore offices. We
            are an in-person team and believe the best work happens when people
            are in the room together.
          </p>
          <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-[14px] font-medium text-[#5f7388]">
              {pageLabel}
            </p>
            <div className="flex w-full max-w-[300px] flex-col gap-3 sm:flex-row">
              <input
                type="search"
                value={queryInput}
                onChange={(event) => setQueryInput(event.target.value)}
                placeholder="Search by title or location"
                className="h-11 w-full rounded-2xl border border-[#d1e0e5] bg-white px-4 text-[14px] text-[#0f172a] outline-none ring-[#2f6f73]/20 transition focus:ring-4"
              />
              {/*<Link
                href="mailto:contact@wolviosolutions.com?subject=Career%20Application%20-%20Wolvio"
                className="inline-flex h-11 w-56 items-center justify-center gap-2 rounded-2xl border border-[#c7d7df] bg-white px-5 text-[12px] font-semibold text-[#2f6f73] transition hover:bg-[#f4f9fa]"
              >
                Send Your CV
                <ArrowRightIcon />
              </Link>*/}
            </div>
          </div>

          {error ? (
            <div className="mt-6 rounded-[20px] border border-rose-200 bg-rose-50 px-5 py-4 text-[14px] text-rose-700">
              {error}
            </div>
          ) : null}

          {isLoading ? (
            <div className="mt-7 grid gap-5 md:grid-cols-2  lg:grid-cols-3">
              {Array.from({ length: 3 }).map((_, index) => (
                <div
                  key={`job-skeleton-${index}`}
                  className="site-card bg-white p-6"
                >
                  <div className="h-5 w-2/3 animate-pulse rounded bg-[#eaf2f5]" />
                  <div className="mt-3 h-4 w-1/2 animate-pulse rounded bg-[#eaf2f5]" />
                  <div className="mt-4 h-4 w-full animate-pulse rounded bg-[#eaf2f5]" />
                  <div className="mt-2 h-4 w-5/6 animate-pulse rounded bg-[#eaf2f5]" />
                </div>
              ))}
            </div>
          ) : null}

          {/*  {!isLoading && jobs.length === 0 ? (
            <div className="site-card mt-7 bg-white px-6 py-10 text-center">
              <p className="text-[19px] font-semibold text-[#173652]">
                No matching positions at the moment
              </p>
              <p className="mt-2 text-[15px] text-[#60758d]">
                Share your profile anyway. We will reach out when a relevant
                role opens.
              </p>
              <Link
                href="mailto:contact@wolviosolutions.com?subject=Career%20Application%20-%20Wolvio"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#2f6f73] px-5 py-2.5 text-[14px] font-semibold text-white transition hover:bg-[#285f62]"
              >
                Send Your CV
                <ArrowRightIcon />
              </Link>
            </div>
          ) : null} */}

          {!isLoading && jobs.length > 0 ? (
            <>
              <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {jobs.map((job) => (
                  <article key={job._id} className="site-card bg-white p-6">
                    <p className="text-[12px] font-semibold uppercase tracking-[0.11em] text-[#8ca0b4]">
                      {job.location} | {formatDate(job.createdAt)}
                    </p>
                    <h3 className="mt-2 text-[20px] font-semibold leading-[1.25] text-[#173652]">
                      {job.title}
                    </h3>
                    <p className="mt-3 text-[14px] leading-[1.65] text-[#60758d]">
                      {job.companyIntroduction ||
                        "Join Wolvio to work on meaningful delivery across regulated Veeva programs and production AI systems."}
                    </p>

                    {job.responsibilities?.length ? (
                      <div className="mt-4">
                        <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#7d93a9]">
                          Responsibilities
                        </p>
                        <ul className="mt-2 space-y-1.5 text-[14px] text-[#546b82]">
                          {job.responsibilities.slice(0, 3).map((item) => (
                            <li key={item} className="flex items-start gap-2">
                              <span className="mt-[8px] h-1.5 w-1.5 rounded-full bg-[#2f8b92]" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}

                    <div className="mt-5 flex items-center justify-between">
                      <span className="rounded-full border border-[#c9dbe3] bg-[#f1f7f9] px-3 py-1 text-[12px] font-semibold text-[#2f7f88]">
                        {(job.applicantsCount ?? 0).toString()} applicants
                      </span>

                      <button
                        onClick={() => setApplyJob(job)}
                        className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#2f7f88] hover: cursor-pointer"
                      >
                        Apply now
                        <ArrowRightIcon />
                      </button>
                    </div>
                  </article>
                ))}
              </div>

              <div className="mt-7 flex items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={() => setPage((current) => Math.max(1, current - 1))}
                  disabled={page <= 1}
                  className="rounded-full border border-[#c9dbe3] bg-white px-4 py-2 text-[13px] font-semibold text-[#2f7f88] transition disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Previous
                </button>
                <p className="text-[13px] font-medium text-[#60758d]">
                  Page {page} of {Math.max(totalPages, 1)}
                </p>
                <button
                  type="button"
                  onClick={() =>
                    setPage((current) => Math.min(totalPages, current + 1))
                  }
                  disabled={page >= totalPages}
                  className="rounded-full border border-[#c9dbe3] bg-white px-4 py-2 text-[13px] font-semibold text-[#2f7f88] transition disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            </>
          ) : null}
        </div>
      </section>

      {applyJob && (
        <JobApplyModal
          job={applyJob}
          onClose={() => setApplyJob(null)}
          onSuccess={handleSuccess}
        />
      )}

      {toast && <Toast message={toast} onDismiss={() => setToast(null)} />}
    </main>
  );
}
