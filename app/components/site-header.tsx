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
  { label: "About", href: "/#about" },
  {
    label: "Services",
    href: "/#services",
    children: [
      { label: "Veeva Vault", href: "/#veeva-vault" },
      { label: "Wolvio Intelligent", href: "/#wolvio-intelligent" },
    ],
  },
  { label: "Industries", href: "/#industries" },
  { label: "Case Studies", href: "/#case-studies" },
  { label: "Why Wolvio", href: "/#why-wolvio" },
  { label: "Insights", href: "/insights" },
  { label: "Careers", href: "/#careers" },
  { label: "Contact", href: "/#contact" },
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
      <div className="mx-auto flex w-full max-w-[1660px] items-center justify-between gap-6 px-5 py-4 sm:px-8 lg:px-16">
        <Link href="/" className="flex items-center" aria-label="Wolvio home">
          <Image
            src="/wolvio-logo-black.png"
            alt="Wolvio"
            width={500}
            height={500}
            priority
            className="h-[50px] w-auto"
          />
        </Link>

        <div className="flex items-center gap-3">
          <nav
            aria-label="Primary"
            className="hidden justify-items-start gap-7 pr-5 text-[18px] font-medium text-[#0f172a] xl:flex"
          >
            {navItems.map(item => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
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
                  ) : null}
                </div>
              );
            })}
          </nav>
          <Link
            href="/#contact"
            className="hidden items-center gap-3 rounded-full bg-[#2f6f73] px-6 py-3 text-[16px] font-medium text-white shadow-[0_10px_26px_rgba(47,111,115,0.2)] transition hover:bg-[#285f62] md:inline-flex"
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
                  href="/#contact"
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
