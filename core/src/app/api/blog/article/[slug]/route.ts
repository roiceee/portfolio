import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  //get blog article data
  const res = await fetch(
    `http://localhost:1337/api/portfolio-blogs/${params.slug}?populate=*`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_READONLY_TOKEN}`,
        "Content-Type": "application/json",
      },
      next: { revalidate: 3600 },
    }
  );

  const data = await res.json();

  return NextResponse.json(data);
}
