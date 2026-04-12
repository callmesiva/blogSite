import Link from "next/link";
import Image from "next/image"

export default function SiteFooter() {
  return (
    <footer className="w-full bg-[#082b4a] text-[#a7bad0]">
      <div className="mx-auto grid w-full max-w-[1660px] gap-12 px-5 py-14 sm:px-8 lg:grid-cols-[1.2fr_0.7fr_1fr] lg:px-24 lg:py-16">
        <div>
          <Link
            href="/"
            className="flex items-center"
            aria-label="Wolvio home"
          >
            <Image
              src="/wolvio-logo-white.png"
              alt="Wolvio"
              width={500}
              height={500}
              priority
              className="h-[40px] w-auto"
            />
          </Link>
          <p className="mt-5 max-w-[600px] text-[17px] leading-[1.6]">
            Excellence Delivered. We help organizations transform through
            technology-led strategy and human creativity.
          </p>
          <div className="mt-8 space-y-3 text-[17px] text-[#bfd0df]">
            <p>contact@wolviosolutions.com</p>
            <p>+91 98765 43210</p>
          </div>
        </div>
        <div className="space-y-4 text-[18px] text-[#c4d5e5]">
          <p>Digital Cloud - Veeva</p>
          <p>Digital Transformation</p>
          <p>Blockchain</p>
          <p>Blogs</p>
          <p>Careers</p>
          <p>About Us</p>
        </div>
        <div className="space-y-8">
          <div>
            <span className="inline-flex rounded-full bg-[#0d4566] px-4 py-1 text-[13px] font-semibold uppercase tracking-[0.12em] text-[#2e92a2]">
              Headquarters
            </span>
            <p className="mt-4 text-[17px] leading-[1.6] text-[#bfd0df]">
              M69, Cactus Corporate Coworking, #173, 7th Floor, Block B, Tecci
              Park, OMR, Sholinganallur, Chennai 600119, Tamil Nadu, India.
            </p>
          </div>
          <div>
            <span className="inline-flex rounded-full bg-[#0d4566] px-4 py-1 text-[13px] font-semibold uppercase tracking-[0.12em] text-[#2e92a2]">
              Branch
            </span>
            <p className="mt-4 text-[17px] leading-[1.6] text-[#bfd0df]">
              GRG Gen Nxt Foundation Incubator: Chandra Textile Mills Compound,
              1708, Avinashi Rd, opp. Govt Polytechnic, Civil Aerodrome Post,
              Coimbatore 641014, Tamil Nadu, India.
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-[#1d4967]">
        <div className="mx-auto flex w-full max-w-[1660px] flex-wrap items-center justify-between gap-3 px-5 py-6 text-[16px] sm:px-8 lg:px-24">
          <p>(c) 2026 Wolvio solutions. All rights reserved.</p>
          <a
            href="#"
            className="text-[#8ea6bf] transition hover:text-white"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  )
}
