import BackButton from "@/components/back-button";
import { ArticleResponse } from "@/types/articletypes";
import { formatDate } from "@/util/date";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const res: Response | undefined = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/blog/article/${params.slug}`,
    { next: { revalidate: 180 } }
  );

  let data: ArticleResponse | undefined = await res.json();

  if (!data || !data.data[0]) {
    return {
      title: "Not found",
      description: "Not found",
    } as Metadata;
  }

  if (!data.data[0]) {
    //return not found

    return {
      title: "Not found",
      description: "Not found",
    } as Metadata;
  }

  return {
    title: data.data[0].attributes.title,
    description: data.data[0].attributes.excerpt,
    date: data.data[0].attributes.date_published,
    openGraph: {
      title: data.data[0].attributes.title,
      description: data.data[0].attributes.excerpt,
      type: "article",
      article: {
        publishedTime: data.data[0].attributes.date_published,
        modifiedTime: data.data[0].attributes.updatedAt,
        tags: data.data[0].attributes.portfolio_blog_tags.data.map(
          (tag) => tag.attributes.tag
        ),
      },
    },
  } as Metadata;
}

export default async function Page({ params }: { params: { slug: string } }) {
  const res: Response | undefined = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/blog/article/${params.slug}`,

    { next: { revalidate: 180 } }
  );

  const data: ArticleResponse | undefined = await res.json();

  if (!data || !data.data[0]) {
    return (
      <section className="prose max-w-2xl mx-auto my-12">
        <BackButton />
        <h2>Content Not Found</h2>
      </section>
    );
  }

  return (
    <main className="prose max-w-2xl mx-auto my-12">
      <section className="mb-8">
        <BackButton />
      </section>

      <h1>{data.data[0].attributes.title}</h1>
      <section>
        <h4>{data.data[0].attributes.author}</h4>
        <p className="mb-2">
          Published on {formatDate(data.data[0].attributes.date_published)}
        </p>
        {data.data[0].attributes.portfolio_blog_tags.data.length !== 0 && (
          <section>
            <span>Tags:</span>
            {data.data[0].attributes.portfolio_blog_tags.data.map((tag, i) => (
              <span key={tag.id} className="mx-1 badge badge-ghost">
                {tag.attributes.tag}
              </span>
            ))}
          </section>
        )}
      </section>

      <section className="mt-12">
        <BlocksRenderer content={data.data[0].attributes.content} />
      </section>
    </main>
  );
}
