import { notFound } from "next/navigation";
import PostLayout from "@/app/components/PostLayout";

type InsightPost = {
  id: number;
  slug: string;
  link: string;
  date: string;
  title: string;
  content: string;
  image: string | null;
  type: string;
  authorName: string;
  authorLink: string;
};

export default async function InsightSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const res = await fetch(
    `https://wolviosolution.wpcomstaging.com/wp-json/wp/v2/posts?slug=${slug}&_embed`,
    { next: { revalidate: 3600 } },
  );
  if (!res.ok) return notFound();
  const posts = await res.json();
  const post = posts[0];
  if (!post) return notFound();

  const author = post._embedded?.author?.[0];

  const formattedPost: InsightPost = {
    id: post.id,
    slug: post.slug,
    link: post.link,
    date: post.date,
    title: post.title.rendered,
    content: post.content.rendered,
    image: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null,
    type: post._embedded?.["wp:term"]?.[0]?.[0]?.name || "Insight",
    authorName: author?.name || "Team Wolvio",
    authorLink: author?.link || "#",
  };

  return (
    <PostLayout
      data={formattedPost}
      backLink=""
      backLabel=""
    />
  );
}
