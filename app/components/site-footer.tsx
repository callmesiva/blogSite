"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function SiteFooter() {
  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(
              "visible",
              "opacity-100",
              "translate-y-0",
            );
            entry.target.classList.remove("opacity-0", "translate-y-5");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    const fadeElements = document.querySelectorAll(".fade-up");
    fadeElements.forEach((el) => observer.observe(el));

    return () => fadeElements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <footer className="relative  overflow-hidden bg-[#071e3d]">
      {/* ── DOT GRID BACKGROUND ── */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(93,202,165,0.07)_1px,transparent_1px)] bg-[size:28px_28px]"></div>

      {/* ── TOP ACCENT LINE ── */}
      <div className="h-[3px] w-full bg-gradient-to-r from-[#1D9E75] from-0% via-[#5DCAA5] via-40% to-transparent to-100%"></div>

      <div className="relative z-10 mx-auto  site-container px-6 py-12 lg:px-[72px] lg:pb-[56px] lg:pt-[72px]">
        {/* ── FOUR-COLUMN GRID ── */}
        <div className="mb-10 grid grid-cols-1 gap-10 border-b border-white/10 pb-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr] lg:gap-14">
          {/* COL 1: Brand */}
          <div className="fade-up opacity-0 translate-y-5 transition-all duration-700 ease-out delay-[50ms]">
            <Link
              href="/"
              className="mb-6 flex items-center"
              aria-label="Wolvio home"
            >
              <Image
                src="/wolvio-logo-white.png"
                alt="Wolvio"
                width={500}
                height={500}
                priority
                className="h-[36px] w-auto"
              />
            </Link>

            <p className="mb-6 max-w-[280px] text-[15px] italic leading-[1.55] text-white/70">
              The Veeva partner built{" "}
              <em className="font-semibold not-italic text-[#5DCAA5]">
                exclusively
              </em>{" "}
              for regulated industries.
            </p>

            <p className="mb-7 max-w-[290px] text-[13.5px] font-light leading-[1.75] text-white/50">
              Specialist Veeva consulting across pharma, biotech, and medtech —
              delivering compliant, dependable Vault implementations that are
              built to last, not just built to launch.
            </p>

            <div className="flex gap-2.5">
              <a
                href="#"
                className="group flex h-9 w-9 items-center justify-center rounded-[9px] border border-white/10 bg-white/5 transition-all duration-250 hover:-translate-y-1 hover:border-[#1D9E75] hover:bg-[#1D9E75]"
                aria-label="LinkedIn"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-[15px] w-[15px] fill-white/50 transition-colors duration-250 group-hover:fill-white"
                >
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="#"
                className="group flex h-9 w-9 items-center justify-center rounded-[9px] border border-white/10 bg-white/5 transition-all duration-250 hover:-translate-y-1 hover:border-[#1D9E75] hover:bg-[#1D9E75]"
                aria-label="X (Twitter)"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-[15px] w-[15px] fill-white/50 transition-colors duration-250 group-hover:fill-white"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L2.002 2.25H8.08l4.253 5.623L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* COL 2: Services */}
          <div className="fade-up flex flex-col gap-2 opacity-0 translate-y-5 transition-all duration-700 ease-out delay-[120ms]">
            <div>
              <div className="mb-5 border-b border-white/10 pb-3 text-[10.5px] font-bold uppercase tracking-[2px] text-[#5DCAA5]">
                Services
              </div>
              <ul className="flex flex-col">
                {[
                  {
                    label: "Veeva Consulting & Implementation",
                    href: "/service-veeva",
                  },
                ].map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group relative block py-[7px] text-[13.5px] font-light text-white/50 transition-all duration-200 hover:pl-3 hover:text-white"
                    >
                      <span className="absolute left-[-12px] top-1/2 h-1 w-1 -translate-y-1/2 rounded-full bg-[#5DCAA5] opacity-0 transition-opacity duration-200 group-hover:opacity-100"></span>
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/service-wolvio"
                    className="group relative block py-[7px] text-[13.5px] font-light text-white/50 transition-all duration-200 hover:pl-3 hover:text-white"
                  >
                    <span className="absolute left-[-12px] top-1/2 h-1 w-1 -translate-y-1/2 rounded-full bg-[#5DCAA5] opacity-0 transition-opacity duration-200 group-hover:opacity-100"></span>
                    Wolvio Intelligence
                    <span className="ml-2 inline-block rounded-[5px] border border-[rgba(93,202,165,0.2)] bg-[rgba(93,202,165,0.1)] px-[7px] py-[1px] text-[9.5px] font-bold tracking-[0.5px] text-[#5DCAA5]">
                      New
                    </span>
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <div className=" border-b border-white/10 pb-3 text-[10.5px] font-bold uppercase tracking-[2px] text-[#5DCAA5]">
                Resources
              </div>
              <ul className="flex flex-col">
                {[
                  {
                    label: "Case Studies",
                    href: "/case-studies",
                  },
                ].map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group relative block py-[7px] text-[13.5px] font-light text-white/50 transition-all duration-200 hover:pl-3 hover:text-white"
                    >
                      <span className="absolute left-[-12px] top-1/2 h-1 w-1 -translate-y-1/2 rounded-full bg-[#5DCAA5] opacity-0 transition-opacity duration-200 group-hover:opacity-100"></span>
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/insights"
                    className="group relative block py-[7px] text-[13.5px] font-light text-white/50 transition-all duration-200 hover:pl-3 hover:text-white"
                  >
                    <span className="absolute left-[-12px] top-1/2 h-1 w-1 -translate-y-1/2 rounded-full bg-[#5DCAA5] opacity-0 transition-opacity duration-200 group-hover:opacity-100"></span>
                    Insights
                   
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* COL 3: Company */}
          <div className="fade-up opacity-0 translate-y-5 transition-all duration-700 ease-out delay-[190ms]">
            <div className="mb-5 border-b border-white/10 pb-3 text-[10.5px] font-bold uppercase tracking-[2px] text-[#5DCAA5]">
              Company
            </div>
            <ul className="flex flex-col">
              {[
                { label: "About Wolvio", href: "/about" },
                { label: "Why Wolvio", href: "/why-wolvio" },
                { label: "Industries", href: "/industries" },
                { label: "Careers", href: "/careers" },
                { label: "Contact", href: "/contact-us" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group relative block py-[7px] text-[13.5px] font-light text-white/50 transition-all duration-200 hover:pl-3 hover:text-white"
                  >
                    <span className="absolute left-[-12px] top-1/2 h-1 w-1 -translate-y-1/2 rounded-full bg-[#5DCAA5] opacity-0 transition-opacity duration-200 group-hover:opacity-100"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COL 4: Contact + Offices */}
          <div className="fade-up opacity-0 translate-y-5 transition-all duration-700 ease-out delay-[260ms]">
            <div className="mb-5 border-b border-white/10 pb-3 text-[10.5px] font-bold uppercase tracking-[2px] text-[#5DCAA5]">
              Get in Touch
            </div>

            {/* Email */}
            <div className="mb-4 flex items-start gap-[11px]">
              <div className="mt-[1px] flex h-8 w-8 shrink-0 items-center justify-center rounded-[9px] border border-[rgba(93,202,165,0.2)] bg-[rgba(93,202,165,0.1)]">
                <svg
                  viewBox="0 0 24 24"
                  className="h-3.5 w-3.5 fill-none stroke-[#5DCAA5] stroke-[1.8] strokeLinecap-round strokeLinejoin-round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <div className="mb-[2px] text-[10px] font-bold uppercase tracking-[1.2px] text-white/25">
                  Email
                </div>
                <a
                  href="mailto:contact@wolviosolutions.com"
                  className="text-[13.5px] text-white/50 transition-colors duration-200 hover:text-[#5DCAA5]"
                >
                  contact@wolviosolutions.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="mb-6 flex items-start gap-[11px]">
              <div className="mt-[1px] flex h-8 w-8 shrink-0 items-center justify-center rounded-[9px] border border-[rgba(93,202,165,0.2)] bg-[rgba(93,202,165,0.1)]">
                <svg
                  viewBox="0 0 24 24"
                  className="h-3.5 w-3.5 fill-none stroke-[#5DCAA5] stroke-[1.8] strokeLinecap-round strokeLinejoin-round"
                >
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.63A2 2 0 012.18 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.15a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
              </div>
              <div>
                <div className="mb-[2px] text-[10px] font-bold uppercase tracking-[1.2px] text-white/25">
                  Phone
                </div>
                <a
                  href="tel:+919894372568"
                  className="text-[13.5px] text-white/50 transition-colors duration-200 hover:text-[#5DCAA5]"
                >
                  +91 98943 72568
                </a>
              </div>
            </div>

            {/* Offices */}
            <div className="mb-2.5 rounded-xl border border-white/10 bg-[#0c2a4a] p-4 transition-colors duration-250 hover:border-[rgba(93,202,165,0.2)]">
              <span className="mb-2 inline-block rounded-[5px] border border-[rgba(93,202,165,0.2)] bg-[rgba(93,202,165,0.1)] px-2 py-[2px] text-[9.5px] font-bold uppercase tracking-[1.5px] text-[#5DCAA5]">
                Headquarters
              </span>
              <p className="text-[12.5px] font-light leading-[1.6] text-white/50">
                M69, Cactus Corporate Coworking, #173, 7th Floor, Block B, Tecci
                Park, OMR, Sholinganallur, Chennai 600119, Tamil Nadu, India.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-[#0c2a4a] p-4 transition-colors duration-250 hover:border-[rgba(93,202,165,0.2)]">
              <span className="mb-2 inline-block rounded-[5px] border border-[rgba(93,202,165,0.2)] bg-[rgba(93,202,165,0.1)] px-2 py-[2px] text-[9.5px] font-bold uppercase tracking-[1.5px] text-[#5DCAA5]">
                Branch
              </span>
              <p className="text-[12.5px] font-light leading-[1.6] text-white/50">
                GRG Gen Nxt Foundation Incubator, Chandra Textile Mills
                Compound, 1708, Avinashi Rd, Coimbatore 641014, Tamil Nadu,
                India.
              </p>
            </div>
          </div>
        </div>

        {/* ── BOTTOM BAR ── */}
        <div className="fade-up flex flex-col items-start justify-between gap-4 opacity-0 translate-y-5 transition-all duration-700 ease-out sm:flex-row sm:items-center">
          <div className="text-[12.5px] text-white/25">
            © 2026{" "}
            <strong className="font-medium text-white/50">
              Wolvio Solutions.
            </strong>{" "}
            All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-1.5 text-[12.5px] text-white/25">
            <Link
              href="#"
              className="transition-colors duration-200 hover:text-[#5DCAA5]"
            >
              Privacy Policy
            </Link>
            <span className="text-white/10">·</span>
            <Link
              href="#"
              className="transition-colors duration-200 hover:text-[#5DCAA5]"
            >
              Cookie Policy
            </Link>
            <span className="text-white/10">·</span>
            <Link
              href="#"
              className="transition-colors duration-200 hover:text-[#5DCAA5]"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
