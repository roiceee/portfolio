import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch(`${process.env.STRAPI_URL}/api/portfolio-blog-tags`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_READONLY_TOKEN}`,
    },
    cache: "no-store",
  });

  const data = await res.json();

  return NextResponse.json(data);
}
