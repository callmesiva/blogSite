
export const runtime = "edge"  // ← add this one line

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const base = process.env.NEXT_PUBLIC_CARRER_API!

  const url = new URL(base)
  searchParams.forEach((v, k) => url.searchParams.set(k, v))

  try {
    const res = await fetch(url.toString(), { cache: "no-store" })
    const data = await res.json()
    return Response.json(data, { status: res.status })
  } catch (err) {
    return Response.json(
      { message: "Proxy fetch failed", detail: String(err) },
      { status: 500 }
    )
  }
}