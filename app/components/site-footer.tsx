import Image from "next/image";
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="w-full bg-[#082b4a] text-[#a7bad0]">
      <div className="site-container grid w-full gap-10 py-14 sm:py-16 lg:grid-cols-[1.2fr_0.7fr_1fr]">
        <div>
          <Link href="/" className="flex items-center" aria-label="Wolvio home">
            <Image
              src="/wolvio-logo-white.png"
              alt="Wolvio"
              width={500}
              height={500}
              priority
              className="h-[40px] w-auto"
            />
          </Link>
          <p className="mt-5 pl-3 max-w-[560px] text-[15px] leading-[1.7] text-[#b5c5d6]">
            Excellence Delivered. We help organizations transform through
            technology-led strategy and human creativity.
          </p>
          <div className="mt-7 pl-3 space-y-2 text-[14px] text-[#d2deea]">
            <p>contact@wolviosolutions.com</p>
            <p>+91 9894372568</p>
          </div>
        </div>
        <div className="space-y-3 text-[14px] text-[#c4d5e5]">
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
            <p className="mt-4 text-[14px] leading-[1.7] text-[#bfd0df]">
              M69, Cactus Corporate Coworking, #173, 7th Floor, Block B, Tecci
              Park, OMR, Sholinganallur, Chennai 600119, Tamil Nadu, India.
            </p>
          </div>
          <div>
            <span className="inline-flex rounded-full bg-[#0d4566] px-4 py-1 text-[13px] font-semibold uppercase tracking-[0.12em] text-[#2e92a2]">
              Branch
            </span>
            <p className="mt-4 text-[14px] leading-[1.7] text-[#bfd0df]">
              GRG Gen Nxt Foundation Incubator: Chandra Textile Mills Compound,
              1708, Avinashi Rd, opp. Govt Polytechnic, Civil Aerodrome Post,
              Coimbatore 641014, Tamil Nadu, India.
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-[#1d4967]">
        <div className="site-container flex w-full flex-wrap items-center justify-between gap-3 py-6 text-[13px]">
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
  );
}
