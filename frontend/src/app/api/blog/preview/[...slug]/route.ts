import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string[] } }
) {
  try {

    console.log(params);
    const pageNum = params.slug[0] ?? "1";

    const tagId = params.slug[1] ?? undefined;

    const url = new URL(`${process.env.STRAPI_URL}/api/portfolio-blogs`);

    url.searchParams.append("pagination[page]", pageNum);
    url.searchParams.append("pagination[pageSize]", "3");
    url.searchParams.append("fields[0]", "title");
    url.searchParams.append("fields[1]", "date_published");
    url.searchParams.append("fields[2]", "excerpt");
    url.searchParams.append("fields[3]", "slug");
    url.searchParams.append("sort", "date_published:desc");
    url.searchParams.append("populate", "*");

    if (tagId) {
          url.searchParams.append("filters[portfolio_blog_tags][id][$eq]", tagId);
    }

    //get blogs data
    const res = await fetch(url.toString(), {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_READONLY_TOKEN}`,
      },
    });

    const data = await res.json();

    return NextResponse.json(data);
  } catch {
    NextResponse.json(undefined);
  }
}
