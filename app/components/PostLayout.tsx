import Image from "next/image";
import Link from "next/link";

interface PostLayoutProps {
  data: {
    title: string;
    content: string;
    date: string;
    image: string | null;
    type: string;
    authorName: string;
    authorLink: string;
  };
  backLink?: string;
  backLabel?: string;
}

export default function PostLayout({
  data,
  backLink,
  backLabel,
}: PostLayoutProps) {
  const formatDate = (dateString: string) => {
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }).format(new Date(dateString));
  };

  return (
    <main className="min-h-screen bg-[#f8fafc] text-[#0f172a]">
      <div className="mx-auto w-full max-w-[1400px] lg:px-8 lg:py-20">
        <article className="mx-auto w-full overflow-hidden bg-white p-8 shadow-[0_12px_32px_rgba(7,30,61,0.04)] sm:p-12 lg:rounded-[24px] lg:p-16">
          {/* Header Section */}
          <div className="mb-10 text-center">
            {backLink && backLabel && (
              <Link
                href={backLink}
                className="mb-8 inline-flex items-center text-sm font-medium text-[#2f6f73] hover:underline"
              >
                ← {backLabel}
              </Link>
            )}

            <p className="mb-4 text-[14px] font-bold uppercase tracking-widest text-[#2f6f73]">
              {data.type}
            </p>

            <h1
              className="mb-6 text-[32px] font-bold leading-[1.2] text-[#0a2540] sm:text-[40px] break-words"
              dangerouslySetInnerHTML={{ __html: data.title }}
            />

            <p className="text-[14px] text-[#64748b]">
              {formatDate(data.date)}
            </p>
          </div>

          {/* Featured Image */}
          {data.image && (
            <div className="relative mb-12 aspect-[16/9] w-full overflow-hidden rounded-[16px] bg-[#eaf2f5]">
              <Image
                src={data.image}
                alt="Featured image"
                fill
                priority
                className="object-cover"
              />
            </div>
          )}

          {/* Main Content Body */}
          <div
            className="wp-content mx-auto w-full max-w-[1000px] text-[17px] leading-[1.8] text-[#475569] break-words"
            dangerouslySetInnerHTML={{ __html: data.content }}
          />

          {/* Author Footer */}
          <div className="mx-auto mt-12 w-full max-w-[1000px] border-t border-slate-100 pt-8 text-[14px] text-[#64748b]">
            <p className="leading-relaxed">
              Published by <br />
              <a
                href={data.authorLink}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[#2f6f73] transition-colors hover:text-[#0a2540] hover:underline"
              >
                {data.authorName}
              </a>
            </p>
          </div>
        </article>
      </div>
    </main>
  );
}
