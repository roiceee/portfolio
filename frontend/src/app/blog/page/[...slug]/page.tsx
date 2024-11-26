import BackButton from "@/components/back-button";
import BlogPagination from "@/components/blog-pagination";
import BlogTagDiv from "@/components/blog-tag-div";
import BlogCard from "@/components/card/blog-card";
import BlogTagsResponseData from "@/types/blogtagTypes";
import { BlogPreviewPage } from "@/types/blogtypes";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Blog",
  description: "A collection of my blog posts.",
  openGraph: {
    title: "Blog",
    description: "A collection of my blog posts.",
    type: "article",
  },
};

function Fallback() {
  return <div>Loading...</div>;
}

export async function generateStaticParams() {
  const blogData: BlogPreviewPage = await getBlogPreview("1");

  const tagData: BlogTagsResponseData | undefined = await getTags();

  const paramsArray: { slug: string[] }[] = [];

  const pageCount = blogData?.meta?.pagination?.pageCount || 1;

  for (let page = 1; page <= pageCount; page++) {
    paramsArray.push({ slug: [page.toString()] });
    if (tagData?.data?.length) {
      tagData.data.forEach((tag) => {
        paramsArray.push({
          slug: [page.toString(), tag.id.toString()],
        });
      });
    }
  }

  return paramsArray;
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const page = (await params).slug[0];
  const tagId = (await params).slug[1];

  let data: BlogPreviewPage | undefined;
  let tagRes: Response | undefined;
  let tagData: BlogTagsResponseData | undefined;
  try {
    data = await getBlogPreview(page, tagId);

    tagData = await getTags();
  } catch {}

  if (!data || !tagData || !data.data) {
    return <div>Not found</div>;
  }

  return (
    <main>
      {data.data.length === 0 && (
        <section className=" md:flex gap-12">
          <section className="prose">
            <h2>No blog posts found.</h2>
            <Suspense fallback={<Fallback />}>
              <BackButton text="Go Back" className="btn btn-sm" />
            </Suspense>
          </section>
        </section>
      )}

      {data.data.length > 0 && (
        <section className="md:flex gap-12">
          <section>
            <BlogPagination
              page={page}
              tagId={tagId}
              pageCount={data.meta.pagination.pageCount}
              minimal
            />
            <section className="mt-12">
              {data.data.map((post) => (
                <div key={`blog-${post.id}`}>
                  <BlogCard
                    title={post.attributes.title}
                    date={new Date(post.attributes.date_published)}
                    excerpt={post.attributes.excerpt}
                    tags={post.attributes.portfolio_blog_tags.data.map(
                      (tag) => tag.attributes.tag
                    )}
                    url={`/blog/article/${post.attributes.slug}`}
                  />
                  <hr className="my-8" />
                </div>
              ))}
            </section>
            <BlogPagination
              page={page}
              tagId={tagId}
              pageCount={data.meta.pagination.pageCount}
            />
          </section>
          {tagData && (
            <Suspense fallback={<Fallback />}>
              <BlogTagDiv
                className="mb-10 max-w-[300px]"
                content={tagData}
                activeTagId={tagId}
              />
            </Suspense>
          )}
        </section>
      )}
    </main>
  );
}

async function getBlogPreview(pageNum: string, tagId?: string) {
  try {
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

    return data;
  } catch {
    return undefined;
  }
}

async function getTags() {
  const res = await fetch(`${process.env.STRAPI_URL}/api/portfolio-blog-tags`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_READONLY_TOKEN}`,
    },
  });
  const data = await res.json();
  return data;
}
