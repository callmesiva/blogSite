import { NextResponse } from "next/server";

const WORDPRESS_BASE_URL =
  "https://public-api.wordpress.com/wp/v2/sites/contactab062e1ea9-lcymt.wordpress.com";

const TYPE_SLUGS = ["white-space", "blog", "uncategorized"] as const;

type SupportedType = (typeof TYPE_SLUGS)[number] | "all";

type WordPressPost = {
  id: number;
  link: string;
  date: string;
  title?: { rendered?: string };
  content?: { rendered?: string };
  excerpt?: { rendered?: string };
  _embedded?: {
    "wp:featuredmedia"?: Array<{ source_url?: string }>;
    "wp:term"?: Array<Array<{ taxonomy?: string; slug?: string; name?: string }>>;
  };
};



function resolvePostType(post: WordPressPost): string {
  const termGroups = post._embedded?.["wp:term"] ?? []
  const categories = termGroups
    .flat()
    .filter(
      term =>
        term.taxonomy === "category" &&
        term.slug &&
        term.slug !== "uncategorized",
    )

  // Return the first real category name, or fallback
  return categories[0]?.name ?? "Uncategorized"
}

function sanitizeType(input: string | null): string {
  if (!input || input.trim() === "") return "all"
  return input.toLowerCase().trim()
}

async function fetchCategoryIdBySlug(slug: string) {
  const params = new URLSearchParams();
  params.set("slug", slug);
  params.set("per_page", "1");

  const response = await fetch(`${WORDPRESS_BASE_URL}/categories?${params.toString()}`, {
    next: { revalidate: 300 },
  });

  if (!response.ok) {
    return null;
  }

  const categories = (await response.json()) as Array<{ id?: number }>;
  return categories[0]?.id ?? null;
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = Number(searchParams.get("page") ?? "1");
    const perPage = Number(searchParams.get("per_page") ?? "9");
    const search = (searchParams.get("search") ?? "").trim();
    const type = sanitizeType(searchParams.get("type"));

    const wpParams = new URLSearchParams();
    wpParams.set("page", String(Number.isFinite(page) && page > 0 ? page : 1));
    wpParams.set("per_page", String(Number.isFinite(perPage) && perPage > 0 ? perPage : 9));
    wpParams.set("_embed", "1");
    wpParams.set("orderby", "date");
    wpParams.set("order", "desc");

    if (search) {
      wpParams.set("search", search);
    }

    if (type !== "all") {
      const categoryId = await fetchCategoryIdBySlug(type);
      if (categoryId) {
        wpParams.set("categories", String(categoryId));
      } else {
        return NextResponse.json({
          posts: [],
          page,
          totalPages: 0,
          hasMore: false,
        });
      }
    } else {
      // Exclude "case-study" category for Insights view
      const excludedCategoryId = await fetchCategoryIdBySlug("case-study");
      if (excludedCategoryId) {
        wpParams.set("categories_exclude", String(excludedCategoryId));
      }
    }

    const response = await fetch(`${WORDPRESS_BASE_URL}/posts?${wpParams.toString()}`, {
      next: { revalidate: 120 },
    });

    if (!response.ok) {
      return NextResponse.json(
        { message: "Failed to fetch posts from WordPress." },
        { status: response.status },
      );
    }

    const posts = (await response.json()) as WordPressPost[];
    const totalPagesHeader = response.headers.get("x-wp-totalpages");
    const totalPages = totalPagesHeader ? Number(totalPagesHeader) : 1;
    const currentPage = Number.isFinite(page) && page > 0 ? page : 1;

    return NextResponse.json({
      page: currentPage,
      totalPages,
      hasMore: currentPage < totalPages,
      posts: posts.map(post => ({
        id: post.id,
        link: post.link,
        date: post.date,
        title: post.title?.rendered ?? "",
        content: post.content?.rendered ?? "",
        excerpt: post.excerpt?.rendered ?? "",
        image: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ?? null,
        type: resolvePostType(post),
      })),
    });
  } catch {
    return NextResponse.json(
      { message: "Unexpected error while loading insights posts." },
      { status: 500 },
    );
  }
}

