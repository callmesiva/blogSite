import { NextResponse } from "next/server"

const WORDPRESS_BASE_URL =
  "https://wolviosolution.wpcomstaging.com/wp-json/wp/v2";

export async function GET() {
  const response = await fetch(
    `${WORDPRESS_BASE_URL}/categories?per_page=50&hide_empty=true`,
    {
      next: { revalidate: 300 },
    },
  )

  if (!response.ok) {
    return NextResponse.json({ categories: [] })
  }

  const data = (await response.json()) as Array<{
    id: number
    slug: string
    name: string
    count: number
  }>

  return NextResponse.json({
    categories: data
      .filter(cat => cat.slug !== "uncategorized" && cat.slug !== "case-study")
      .map(cat => ({ id: cat.id, slug: cat.slug, name: cat.name })),
  })
}
