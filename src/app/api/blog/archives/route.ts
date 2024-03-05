import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const res = await fetch(
    `${process.env.STRAPI_URL}/api/portfolio-blog-archives`,
    {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_READONLY_TOKEN}`,
      },
    }
  );

  const data = await res.json();
  return NextResponse.json(data);
}
