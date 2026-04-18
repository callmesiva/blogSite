"use client";

import React, { ReactNode } from "react";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

function ArrowRightIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" />
      <path d="m13 5 7 7-7 7" />
    </svg>
  );
}

export interface HeroButton {
  label: string;
  href: string;
  variant: "primary" | "secondary" | "outline";
}

interface HeroSectionProps {
  kicker: string;
  title: ReactNode;
  description: ReactNode;
  buttons?: HeroButton[];
  svgGraphic: ReactNode;
}

export default function HeroSection({ kicker, title, description, buttons, svgGraphic }: HeroSectionProps) {
  return (
    <section className="hero-grid relative overflow-visible  pt-10 lg:pt-0 lg:h-[90vh]">
      <ScrollReveal className="site-container grid items-center gap-12 pb-16 lg:pb-24 lg:grid-cols-[minmax(0,1.02fr)_minmax(480px,0.98fr)] px-6 sm:px-8 lg:px-16">
        
        {/* Left Content */}
        <div className=" relative z-10 flex flex-col text-left">
          <p className="site-kicker">{kicker}</p>
          <h1 className="mt-4 max-w-[960px]">{title}</h1>
          <p className="site-subheading mt-5 max-w-[900px]">
            {description}
          </p>
          
          {/* Buttons */}
          {buttons && buttons.length > 0 && (
            <div className="mt-8 flex flex-col gap-4 sm:flex-row justify-start">
              {buttons.map((btn, i) => (
                <Link
                  key={i}
                  href={btn.href}
                  className={
                    btn.variant === "primary"
                      ? "site-btn-primary whitespace-nowrap"
                      : btn.variant === "secondary"
                      ? "site-btn-secondary whitespace-nowrap"
                      : "inline-flex items-center justify-center whitespace-nowrap gap-3 rounded-full border border-[#c7d7df] bg-white px-6 py-3 text-[15px] font-semibold text-[#2f6f73] transition hover:bg-[#f4f9fa]"
                  }
                >
                  {btn.label}
                  <ArrowRightIcon />
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Right SVG Graphic */}
        <div className="relative z-50 pointer-events-none flex items-center justify-center w-full mx-auto">
          <div className="relative w-full aspect-square flex items-center sm:mx-auto justify-center overflow-visible scale-100 lg:scale-[1]">
            {svgGraphic}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
