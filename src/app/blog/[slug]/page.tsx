import BackButton from "@/components/back-button";
import BlogTagDiv from "@/components/blog-tag-div";
import ArchiveCard from "@/components/card/archive-card";
import BlogCard from "@/components/card/blog-card";
import LinkPersistQueryParams from "@/components/LinkPersistQueryParams";
import { ArchivePreviewPage } from "@/types/archivetypes";
import BlogTagsResponseData from "@/types/blogtagTypes";
import { BlogPreviewPage } from "@/types/blogtypes";
import { Metadata } from "next";

interface Props {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export const metadata: Metadata = {
  title: "Blog",
  description: "A collection of my blog posts.",
  openGraph: {
    title: "Blog",
    description: "A collection of my blog posts.",
    type: "article",
  },
};

export default async function Page({ params, searchParams }: Props) {
  const generateURL = () => {
    const url = new URL(
      `${process.env.NEXT_PUBLIC_URL}/api/blog/${params.slug}`
    );

    if (searchParams.archive) {
      const archive = Array.isArray(searchParams.archive)
        ? searchParams.archive[0]
        : searchParams.archive;
      url.searchParams.append("archive", archive);
    }

    if (searchParams.tag) {
      //this can be multiple tags, or one tag

      const tag = searchParams.tag;

      if (Array.isArray(tag)) {
        tag.forEach((tag) => {
          url.searchParams.append("tag", tag);
        });
      } else {
        url.searchParams.append("tag", tag);
      }
    }

    return url;
  };

  const res: Response | undefined = await fetch(generateURL().toString(), {
    cache: "no-store",
  });

  const data: BlogPreviewPage | undefined = await res.json();

  const archiveRes: Response | undefined = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/blog/archives`,
    { cache: "no-store" }
  );

  const archiveData: ArchivePreviewPage | undefined = await archiveRes.json();

  const tagRes: Response | undefined = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/blog/tags`
  );

  const tagData: BlogTagsResponseData | undefined = await tagRes.json();

  if (!data || !archiveData || !data.data) {
    return <div>Not found</div>;
  }

  return (
    <main>
      {tagData && <BlogTagDiv className="mb-10" content={tagData} />}
      {searchParams.archive && (
        <div className="mb-6 flex items-center gap-2 text-xl">
          <div>Archive:</div>
          {archiveData.data
            .filter((data) => {
              return data.id === Number(searchParams.archive);
            })
            .map((data) => {
              return (
                <h3 className="font-semibold" key={data.id}>
                  {data.attributes.archive}
                </h3>
              );
            })}
        </div>
      )}
      {data.data.length === 0 && (
        <section className=" md:flex gap-12">
          <section className="prose">
            <h2>No blog posts found.</h2>
            <BackButton text="Go Back" className="btn btn-sm" />
          </section>
          <ArchiveCard data={archiveData} />
        </section>
      )}
      {data.data.length > 0 && (
        <section className=" md:flex gap-12">
          <section>
            <section>
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
            <div>
              <div className="flex w-full text-primary text-2xl font-bold mb-8">
                {Number(params.slug) > 1 && (
                  <div className="mr-auto">
                    <LinkPersistQueryParams
                      href={`/blog/${Number(params.slug) - 1}`}
                    >
                      <span className="hover:underline">Previous</span>
                    </LinkPersistQueryParams>
                  </div>
                )}
                {Number(params.slug) < data.meta.pagination.pageCount && (
                  <div className="ml-auto">
                    <LinkPersistQueryParams
                      href={`/blog/${Number(params.slug) + 1}`}
                    >
                      <span className="hover:underline">Next</span>
                    </LinkPersistQueryParams>
                  </div>
                )}
              </div>
            </div>
          </section>

          <ArchiveCard data={archiveData} />
        </section>
      )}
    </main>
  );
}
