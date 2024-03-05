import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  //get blog article data

  try {
    const res = await fetch(
      `http://localhost:1337/api/portfolio-blogs/${params.slug}?populate=*`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.STRAPI_READONLY_TOKEN}`,
          "Content-Type": "application/json",
        },
        next: { revalidate: 1200 },
      }
    );

    const data = await res.json();

    return NextResponse.json(data);
  } catch {
    return NextResponse.json(undefined);
  }
}
