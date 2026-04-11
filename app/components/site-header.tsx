"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/service-veeva",
    children: [
      { label: "Digital Cloud - Veeva", href: "/service-veeva" },
      { label: "Digital Transformation and AI", href: "/service-wolvio" },
    ],
  },
  { label: "Industries", href: "/industries" },
  { label: "Case Studies", href: "/#case-studies" },
  { label: "Why Wolvio", href: "/why-wolvio" },
  { label: "Insights", href: "/insights" },
  { label: "Careers", href: "/#careers" },
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

function ChevronDownIcon() {
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
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </svg>
  );
}

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-[#dce7ec] bg-white/96 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-[1660px] items-center justify-between gap-6 px-5 py-4 sm:px-8 lg:px-20">
        <Link href="/" className="flex items-center" aria-label="Wolvio home">
          <Image
            src="/wolvio-logo-black.png"
            alt="Wolvio"
            width={500}
            height={500}
            priority
            className="h-[40px] w-auto"
          />
        </Link>

        <div className="flex items-center gap-3">
          <nav
            aria-label="Primary"
            className="hidden justify-items-start gap-5 pr-5 text-[14px] font-medium text-[#0f172a] xl:flex"
          >
            {navItems.map(item => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : item.label === "Services"
                    ? pathname === "/service-veeva" || pathname === "/service-wolvio"
                  : item.href === "/industries"
                    ? pathname === "/industries"
                  : item.href === "/why-wolvio"
                    ? pathname === "/why-wolvio"
                  : item.href === "/about"
                    ? pathname === "/about"
                  : item.href === "/insights"
                    ? pathname === "/insights"
                    : false;

              return (
                <div key={item.label} className="group relative">
                  <Link
                    href={item.href}
                    className={`flex items-center gap-2 transition hover:text-[#2f6f73] ${
                      isActive ? "text-[#2f6f73]" : ""
                    }`}
                  >
                    <span>{item.label}</span>
                    {item.children ? <ChevronDownIcon /> : null}
                  </Link>
                  {item.children ? (
                    item.label === "Services" ? (
                      <div className="invisible absolute left-1/2 top-full z-20 mt-4 w-[500px] -translate-x-1/2 rounded-[34px] border border-[#dce7ec] bg-white p-4 opacity-0 shadow-[0_24px_60px_rgba(10,37,64,0.12)] transition-all duration-200 group-hover:visible group-hover:opacity-100">
                        <p className="px-4 pb-4 pt-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#92a2b8]">
                          What We Do
                        </p>
                        <div className="space-y-3">
                          <Link
                            href="/service-veeva"
                            className="group/item flex items-center justify-between rounded-[28px] bg-[#eef3f7] px-4 py-4 transition hover:bg-[#e8f0f6]"
                          >
                            <div className="flex items-center gap-4">
                              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#dde6ed] text-[#2f6f73]">
                                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                                  <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
                                </svg>
                              </div>
                              <div>
                                <p className="text-[15px] font-semibold text-[#2f7f88]">
                                  Digital Cloud - Veeva{" "}
                                  <span className="ml-2 rounded-full bg-[#e7f6ee] px-2 py-1 text-[12px] font-semibold text-[#197663]">
                                    Life Sciences
                                  </span>
                                </p>
                                <p className="mt-1 text-[12px] text-[#60758d]">
                                  End-to-end Veeva platform implementation for life sciences.
                                </p>
                              </div>
                            </div>
                            <svg
                              aria-hidden="true"
                              viewBox="0 0 24 24"
                              className="h-5 w-5 text-[#2f7f88] transition group-hover/item:translate-x-0.5"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <path d="M5 12h14" />
                              <path d="m13 5 7 7-7 7" />
                            </svg>
                          </Link>
                          <Link
                            href="/service-wolvio"
                            className="group/item flex items-center justify-between rounded-[28px] px-4 py-4 transition hover:bg-[#eef3f7]"
                          >
                            <div className="flex items-center gap-4">
                              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e8edf2] text-[#17314c]">
                                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                                  <rect x="4.5" y="4.5" width="15" height="15" rx="2.5" />
                                  <path d="M9 1.5v3M15 1.5v3M9 19.5v3M15 19.5v3M1.5 9h3M1.5 15h3M19.5 9h3M19.5 15h3" />
                                  <rect x="9" y="9" width="6" height="6" rx="1.2" />
                                </svg>
                              </div>
                              <div>
                                <p className="text-[15px] font-semibold text-[#17314c]">
                                  Digital Transformation and AI{" "}
                                  <span className="ml-2 rounded-full bg-[#e8eeff] px-2 py-1 text-[12px] font-semibold text-[#3158c9]">
                                    Strategy
                                  </span>
                                </p>
                                <p className="mt-1 text-[12px] text-[#60758d]">
                                  Technology-led transformation strategy for modern enterprises.
                                </p>
                              </div>
                            </div>
                            <svg
                              aria-hidden="true"
                              viewBox="0 0 24 24"
                              className="h-5 w-5 text-[#2f7f88] transition group-hover/item:translate-x-0.5"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <path d="M5 12h14" />
                              <path d="m13 5 7 7-7 7" />
                            </svg>
                          </Link>
                        </div>
                        <div className="mt-3 flex items-center justify-between border-t border-[#d6e0e8] px-4 pb-2 pt-4">
                          <p className="text-[14px] font-medium text-[#95a7ba]">Not sure where to start?</p>
                          <Link href="/contact-us" className="inline-flex items-center gap-2 text-[15px] font-semibold text-[#2f7f88]">
                            Talk to us
                            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M7 17 17 7" />
                              <path d="M9 7h8v8" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    ) : (
                      <div className="invisible absolute left-0 top-full z-20 mt-4 w-56 rounded-3xl border border-[#dce7ec] bg-white p-3 opacity-0 shadow-[0_24px_60px_rgba(10,37,64,0.12)] transition-all duration-200 group-hover:visible group-hover:opacity-100">
                        {item.children.map(child => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block rounded-2xl px-4 py-3 text-sm font-medium text-[#0f172a] transition hover:bg-[#f4f9fa] hover:text-[#2f6f73]"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )
                  ) : null}
                </div>
              );
            })}
          </nav>
          <Link
            href="/contact-us"
            className="hidden items-center gap-3 rounded-full bg-[#2f6f73] px-3 py-2 text-[14px] font-medium text-white shadow-[0_10px_26px_rgba(47,111,115,0.2)] transition hover:bg-[#285f62] md:inline-flex"
          >
            Contact us
            <ArrowRightIcon />
          </Link>

          <details className="group relative xl:hidden">
            <summary className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-full border border-[#dce7ec] bg-white text-[#0a2540] marker:hidden transition hover:border-[#2f6f73] hover:text-[#2f6f73]">
              <MenuIcon />
            </summary>
            <div className="absolute right-0 top-full mt-3 w-[min(22rem,calc(100vw-2.5rem))] rounded-[28px] border border-[#dce7ec] bg-white p-4 shadow-[0_24px_60px_rgba(10,37,64,0.14)]">
              <div className="flex flex-col gap-1">
                {navItems.map(item => (
                  <div key={item.label} className="rounded-2xl">
                    <Link
                      href={item.href}
                      className="flex items-center justify-between rounded-2xl px-4 py-3 text-[15px] font-medium text-[#0f172a] transition hover:bg-[#f4f9fa] hover:text-[#2f6f73]"
                    >
                      <span>{item.label}</span>
                      {item.children ? <ChevronDownIcon /> : null}
                    </Link>
                    {item.children ? (
                      <div className="mt-1 flex flex-col gap-1 px-3 pb-2">
                        {item.children.map(child => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="rounded-2xl px-4 py-2 text-sm text-[#486173] transition hover:bg-[#f4f9fa] hover:text-[#2f6f73]"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    ) : null}
                  </div>
                ))}
                <Link
                  href="/contact-us"
                  className="mt-3 inline-flex items-center justify-center gap-3 rounded-full bg-[#2f6f73] px-6 py-3 text-[15px] font-medium text-white"
                >
                  Contact us
                  <ArrowRightIcon />
                </Link>
              </div>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
