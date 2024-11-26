import { NextResponse } from "next/server";

export const dynamic = "force-dynamic"

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  //get blog article data

  
  try {
    const res = await fetch(
      `${process.env.STRAPI_URL}/api/portfolio-blogs?filters[slug][$eq]=${params.slug}&populate=*`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.STRAPI_READONLY_TOKEN}`,
          "Content-Type": "application/json",
        }
      }
    );

    const data = await res.json();

    return NextResponse.json(data);
  } catch {
    return NextResponse.json(undefined);
  }
}
