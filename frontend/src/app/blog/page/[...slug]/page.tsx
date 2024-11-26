import BackButton from "@/components/back-button";
import BlogPagination from "@/components/blog-pagination";
import BlogTagDiv from "@/components/blog-tag-div";
import BlogCard from "@/components/card/blog-card";
import BlogTagsResponseData from "@/types/blogtagTypes";
import { BlogPreviewPage } from "@/types/blogtypes";
import { Metadata } from "next";
import Link from "next/link";
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
  // Fetch the blog data to determine the number of pages available
  const blogRes = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/blog/preview/1`
  );
  const blogData: BlogPreviewPage = await blogRes.json();

  // Fetch all tags
  const tagRes = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/blog/tags`);
  const tagData: BlogTagsResponseData = await tagRes.json();

  // Array to hold all static paths
  const paramsArray: { slug: string[] }[] = [];

  // Determine pagination count
  const pageCount = blogData?.meta?.pagination?.pageCount || 1;

  // Iterate over pagination
  for (let page = 1; page <= pageCount; page++) {
    // Always generate the base page without any tags
    paramsArray.push({ slug: [page.toString()] });

    // If tags are available, generate paths without any archive
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

export default async function Page({ params }: { params: { slug: string[] } }) {
  const page = params.slug[0];
  const tagId = params.slug[1];

  console.log(page, tagId);
  let res: Response | undefined;
  let data: BlogPreviewPage | undefined;
  let tagRes: Response | undefined;
  let tagData: BlogTagsResponseData | undefined;
  try {
    res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/blog/preview/${page}/${
        tagId ? tagId : ""
      }`
    );

    data = await res.json();

    tagRes = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/blog/tags`);

    tagData = await tagRes.json();
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
