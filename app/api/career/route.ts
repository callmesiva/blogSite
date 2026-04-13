import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  let url = process.env.NEXT_PUBLIC_CARRER_API
  const apiUrl = `${url}?${searchParams.toString()}`

  try {
    const res = await fetch(apiUrl, { cache: "no-store" })
    const data = await res.json()
    return NextResponse.json(data, { status: res.status })
  } catch (err) {
    return NextResponse.json({ message: "Proxy fetch failed" }, { status: 500 })
  }
}
