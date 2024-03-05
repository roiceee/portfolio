import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const searchParams = request.nextUrl.searchParams;

    const archive = searchParams.get("archive");

    const pageNum = params.slug ? params.slug : 1;

    const url = new URL(
      `${process.env.STRAPI_URL}/api/portfolio-blogs?pagination[page]=${pageNum}&fields[0]=title&fields[1]=date_published&fields[2]=excerpt&populate=*`
    );

    if (archive) {
      url.searchParams.append(
        "filters[portfolio_blog_archive][id][$eq]",
        archive
      );
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
