"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

const leaders = [
  {
    image: "/founder1.jpg",
    name: "Arjun Mehta",
    designation: "Chief Executive Officer",
    tag: "Founder",
  },
  {
    image: "/founder2.jpg",
    name: "Priya Nair",
    designation: "Chief Technology Officer",
    tag: "Co-Founder",
  },
  {
    image: "/founder3.jpg",
    name: "Daniel Osei",
    designation: "Chief Strategy Officer",
    tag: "Co-Founder",
  },
  {
    image: "/founder4.jpg",
    name: "Sophie Laurent",
    designation: "Head of AI & Innovation",
    tag: "Co-Founder",
  },
]

function LeaderCard({ leader }: { leader: (typeof leaders)[number] }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const cursorRef = useRef<HTMLDivElement>(null)
  const [hovered, setHovered] = useState(false)

  // Magnetic + cursor tracking
  useEffect(() => {
    const card = cardRef.current
    const cursor = cursorRef.current
    if (!card || !cursor) return

    let raf: number

    const onMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      const cx = rect.width / 2
      const cy = rect.height / 2

      const tiltX = ((y - cy) / cy) * 6
      const tiltY = ((x - cx) / cx) * -6

      cancelAnimationFrame(raf)

      raf = requestAnimationFrame(() => {
        // smooth cursor
        cursor.style.transform = `translate3d(${x - 24}px, ${y - 24}px, 0)`

        // smooth tilt
        card.style.setProperty("--tilt-x", `${tiltX}deg`)
        card.style.setProperty("--tilt-y", `${tiltY}deg`)
      })

      let currentX = 0
      let currentY = 0

      raf = requestAnimationFrame(() => {
        currentX += (x - currentX) * 0.2
        currentY += (y - currentY) * 0.2

        cursor.style.transform = `translate3d(${currentX - 24}px, ${currentY - 24}px, 0)`
      })
    }

    const onLeave = () => {
      card.style.setProperty("--tilt-x", "0deg")
      card.style.setProperty("--tilt-y", "0deg")
    }

    card.addEventListener("mousemove", onMove)
    card.addEventListener("mouseleave", onLeave)
    return () => {
      card.removeEventListener("mousemove", onMove)
      card.removeEventListener("mouseleave", onLeave)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div
      ref={cardRef}
      className={`group relative ${hovered ? "cursor-none" : "cursor-pointer"}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ perspective: "800px" }}
    >
      {/* Custom emoji cursor */}
      {/* <div
        ref={cursorRef}
        className={`pointer-events-none absolute z-50 flex h-12 w-12 items-center justify-center will-change-transform will-change-opacity ${
          hovered
            ? "opacity-100 scale-100 rotate-0"
            : "opacity-0 scale-75 rotate-[-8deg]"
        }`}
        style={{
          transform: "translate3d(0,0,0)",
          transition:
            "opacity 220ms ease, transform 180ms cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        <span className="select-none text-[1.6rem]">👋</span>
      </div> */}

      {/* Image card with tilt */}
      <div
        className="relative overflow-hidden rounded-[28px] will-change-transform transform-gpu transition-transform duration-300 ease-out"
        style={{
          transform:
            "rotateX(var(--tilt-x, 0deg)) rotateY(var(--tilt-y, 0deg))",
        }}
      >
        {/* Aspect container */}
        <div className="relative aspect-[3/4] w-full bg-[#dce8ee]">
          <Image
            src={leader.image}
            alt={leader.name}
            fill
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 639px) 80vw, (max-width: 1023px) 45vw, 25vw"
          />

          {/* Bottom gradient scrim — slides up on hover */}
          <div className="absolute inset-x-0 bottom-0 h-[55%] translate-y-4 bg-gradient-to-t from-[#081e33]/80 via-[#081e33]/30 to-transparent opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100" />

          {/* Hover overlay content */}
          <div className="absolute inset-x-0 bottom-0 translate-y-3 p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#5cc8cc]">
              {leader.tag}
            </p>
            <p className="mt-1 text-[18px] font-semibold leading-tight text-white">
              {leader.name}
            </p>
            <p className="mt-0.5 text-[13px] leading-snug text-white/70">
              {leader.designation}
            </p>
          </div>
        </div>

        {/* Shimmer sweep on hover */}
        <div className="pointer-events-none absolute inset-0 -translate-x-full skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-none group-hover:animate-[shimmer_700ms_ease_forwards]" />
      </div>

      {/* Below-image text — visible when NOT hovered */}
      <div className="mt-4 px-1 transition-all duration-300 group-hover:opacity-40 group-hover:blur-[1px]">
        <p className="text-[16px] font-semibold text-[#0a2540]">
          {leader.name}
        </p>
        <p className="mt-0.5 text-[13px] text-[#5d748b]">
          {leader.designation}
        </p>
      </div>
    </div>
  )
}

export default function LeadershipSection() {
  return (
    <section className="mt-10">
      <style>{`
        @keyframes shimmer {
          0%   { transform: translateX(-100%) skewX(-20deg); }
          100% { transform: translateX(300%) skewX(-20deg); }
        }
      `}</style>

      {/* Grid */}
      <div className=" grid grid-cols-2 gap-x-5 gap-y-5 sm:grid-cols-2 lg:grid-cols-4">
        {leaders.map(leader => (
          <LeaderCard
            key={leader.name}
            leader={leader}
          />
        ))}
      </div>
    </section>
  )
}
