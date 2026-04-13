import type { Metadata } from "next";
import Link from "next/link";

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

export const metadata: Metadata = {
  title: "Contact Us | Wolvio",
  description:
    "Get in touch with Wolvio for Veeva consulting and AI automation services. Book a call, find office locations, and reach us directly.",
};

export default function ContactUsPage() {
  return (
    <main className="polish-layout min-h-screen overflow-x-hidden bg-[#f8fafc] text-[#0f172a]">
      <section className="hero-grid">
        <div className="site-container pb-14 pt-12 lg:pb-20 lg:pt-16">
          <p className="site-kicker">Contact Us</p>
          <h1 className="mt-4 max-w-[920px]">
            Good work starts with an honest conversation
          </h1>
          <p className="site-subheading mt-5 max-w-[980px]">
            Whether you are here about our Veeva practice or our AI and automation services, a direct conversation is
            where every engagement starts.
          </p>
        </div>
      </section>

      <section className="tone-lock site-section pb-10 pt-8 sm:pb-12">
        <div className="site-container">
          <div className="relative overflow-hidden rounded-[34px] bg-[linear-gradient(130deg,#072c52,#0a2d55_48%,#0e355f)] p-10 text-white sm:p-14">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(47,143,146,0.24),transparent_30%),radial-gradient(circle_at_70%_80%,rgba(47,143,146,0.22),transparent_38%),radial-gradient(circle_at_30px_30px,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:auto,auto,34px_34px]" />
            <div className="relative">
              <span className="inline-flex rounded-full border border-[#1f6980] bg-[#114866]/55 px-5 py-2 text-[13px] font-semibold uppercase tracking-[0.12em] text-[#7ec4c7]">
                Prefer a Direct Conversation?
              </span>
              <h2 className="mt-6 max-w-[920px] text-[clamp(1.75rem,2.2vw,2.7rem)] font-semibold leading-[1.2] tracking-[-0.03em] text-white">
                Book a 30-minute call with our founding consultant with no obligation.
              </h2>
              <p className="mt-4 max-w-[1000px] text-[16px] leading-[1.65] text-[#b6c9da]">
                We will talk through your challenges and give you a straight answer on whether we are the right fit.
              </p>
              <div className="mt-7 grid gap-3 text-[15px] leading-[1.65] text-[#d4e4ee]">
                {[
                  "A focused conversation about your specific challenge or requirement",
                  "A clear view of how Wolvio approaches engagements like yours",
                  "An honest steer on whether we are the right fit and what working together would look like",
                ].map(item => (
                  <p key={item} className="flex items-start gap-2">
                    <span className="mt-[9px] h-1.5 w-1.5 rounded-full bg-[#7ec4c7]" />
                    <span>{item}</span>
                  </p>
                ))}
              </div>
              <div className="mt-8">
                <Link
                  href="https://calendar.zoho.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-full bg-[#3a8f90] px-10 py-4 text-[15px] font-semibold text-white transition hover:bg-[#347f80]"
                >
                  Book 30-minute Call
                  <ArrowRightIcon />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="site-section-alt">
        <div className="site-container grid gap-6 lg:grid-cols-[1fr_0.95fr]">
          <article className="site-card bg-white p-6 sm:p-7">
            <p className="site-kicker">Zoho Booking Form</p>
            <h2 className="mt-4 text-[clamp(1.65rem,2.25vw,2.35rem)] font-semibold leading-[1.2] tracking-[-0.02em] text-[#173652]">
              Schedule your consultation
            </h2>
            <p className="mt-3 text-[15px] leading-[1.65] text-[#546b82]">
              Use the embedded calendar below to choose a suitable time.
            </p>
            <div className="mt-5 overflow-hidden rounded-[18px] border border-[#d6e0e8] bg-[#f8fafc]">
              <iframe
                title="Zoho booking form"
                src="https://calendar.zoho.com/"
                className="h-[520px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </article>

          <article className="site-card bg-white p-6 sm:p-7">
            <p className="site-kicker">Office Locations</p>
            <h2 className="mt-4 text-[clamp(1.65rem,2.25vw,2.35rem)] font-semibold leading-[1.2] tracking-[-0.02em] text-[#173652]">
              Where to Find Us
            </h2>

            <div className="mt-5 rounded-[22px] border border-[#d7dde4] bg-[#f8fafc] p-5">
              <p className="text-[14px] font-semibold uppercase tracking-[0.12em] text-[#2f7f88]">Chennai Office</p>
              <p className="mt-2 text-[15px] leading-[1.65] text-[#546b82]">
                M69, Cactus Corporate Coworking, #173, 7th Floor, Block B, Tecci Park, OMR, Sholinganallur, Chennai
                600119, Tamil Nadu, India.
              </p>
            </div>

            <div className="mt-4 rounded-[22px] border border-[#d7dde4] bg-[#f8fafc] p-5">
              <p className="text-[14px] font-semibold uppercase tracking-[0.12em] text-[#2f7f88]">Coimbatore Office</p>
              <p className="mt-2 text-[15px] leading-[1.65] text-[#546b82]">
                GRG Gen Nxt Foundation Incubator, Chandra Textile Mills Compound, 1708, Avinashi Rd, Civil Aerodrome
                Post, Coimbatore 641014, Tamil Nadu, India.
              </p>
            </div>

            <div className="mt-5 overflow-hidden rounded-[18px] border border-[#d6e0e8] bg-[#f8fafc]">
              <iframe
                title="Wolvio registered office map"
                src="https://www.google.com/maps?q=M69,+Cactus+Corporate+Coworking,+Tecci+Park,+OMR,+Sholinganallur,+Chennai+600119&output=embed"
                className="h-[260px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </article>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container">
          <div className="site-card bg-white p-6 sm:p-7">
            <p className="site-kicker">
              Direct Contact Details
            </p>
            <h2 className="mt-4 text-[clamp(1.65rem,2.25vw,2.35rem)] font-semibold leading-[1.2] tracking-[-0.02em] text-[#173652]">
              Reach Us Directly
            </h2>
            <p className="mt-3 max-w-[920px] text-[15px] leading-[1.65] text-[#546b82]">
              We respond to all enquiries within 48 business hours. For urgent requirements, call us directly.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <a
                href="mailto:contact@wolviosolutions.com"
                className="rounded-[20px] border border-[#d7dde4] bg-[#f8fafc] p-4 transition hover:border-[#c7d7df]"
              >
                <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#7d93a9]">Email</p>
                <p className="mt-2 text-[15px] font-semibold text-[#173652]">contact@wolviosolutions.com</p>
              </a>
              <a
                href="tel:+919894372568"
                className="rounded-[20px] border border-[#d7dde4] bg-[#f8fafc] p-4 transition hover:border-[#c7d7df]"
              >
                <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#7d93a9]">Phone</p>
                <p className="mt-2 text-[15px] font-semibold text-[#173652]">+91 9894372568</p>
              </a>
              <a
                href="https://www.linkedin.com/company/wolvio-solutions/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-[20px] border border-[#d7dde4] bg-[#f8fafc] p-4 transition hover:border-[#c7d7df]"
              >
                <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#7d93a9]">LinkedIn</p>
                <p className="mt-2 text-[15px] font-semibold text-[#173652]">Wolvio Solutions</p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
