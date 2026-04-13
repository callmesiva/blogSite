"use client"
import { useEffect, useRef, useState } from "react"

export default function SelectDropDown({
  value,
  onChange,
  options,
}: {
  value: string
  onChange: (val: string) => void
  options: { label: string; value: string }[]
}) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const selected = options.find(o => o.value === value) ?? options[0]

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [])

  return (
    <div
      ref={ref}
      className="relative h-12"
    >
      <button
        type="button"
        onClick={() => setOpen(prev => !prev)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Filter insights by type"
        className={`
          flex h-12 w-full items-center justify-between gap-3
          rounded-2xl border bg-white px-4 text-[15px] text-[#0f172a]
          transition-all duration-200
          ${
            open
              ? "border-[#2f6f73] ring-4 ring-[#2f6f73]/20"
              : "border-[#d1e0e5] hover:border-[#2f6f73]/50"
          }
        `}
      >
        <span className="flex items-center gap-2.5">
          <span
            className={`h-2 w-2 rounded-full transition-colors duration-200 ${
              value === "all" ? "bg-[#94a3b8]" : "bg-[#2f6f73]"
            }`}
          />
          <span className="font-medium">{selected.label}</span>
        </span>

        <svg
          viewBox="0 0 24 24"
          className={`h-4 w-4 shrink-0 text-[#64748b] transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      <div
        className={`
          absolute left-0 right-0 top-[calc(100%+6px)] z-50
          overflow-hidden rounded-2xl border border-[#d1e0e5]
          bg-white shadow-[0_12px_32px_rgba(10,37,64,0.12)]
          transition-all duration-200 origin-top
          ${open ? "scale-y-100 opacity-100" : "pointer-events-none scale-y-95 opacity-0"}
        `}
      >
        <div className="border-b border-[#eef3f7] px-4 py-2.5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#94a3b8]">
            Filter by type
          </p>
        </div>

        <ul
          role="listbox"
          className="py-1.5"
        >
          {options.map(option => {
            const isActive = option.value === value
            return (
              <li
                key={option.value}
                role="option"
                aria-selected={isActive}
              >
                <button
                  type="button"
                  onClick={() => {
                    onChange(option.value)
                    setOpen(false)
                  }}
                  className={`
                    flex w-full items-center gap-3 px-4 py-2.5
                    text-[14px] transition-colors duration-150
                    ${
                      isActive
                        ? "bg-[#f0f8f8] text-[#2f6f73]"
                        : "text-[#334155] hover:bg-[#f8fafc]"
                    }
                  `}
                >
                  <span
                    className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border transition-colors ${
                      isActive
                        ? "border-[#2f6f73] bg-[#2f6f73]"
                        : "border-[#cbd5e1] bg-transparent"
                    }`}
                  >
                    {isActive && (
                      <svg
                        viewBox="0 0 24 24"
                        className="h-2.5 w-2.5 text-white"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                      >
                        <path
                          d="M20 6 9 17l-5-5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </span>
                  <span className={isActive ? "font-semibold" : "font-normal"}>
                    {option.label}
                  </span>
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
