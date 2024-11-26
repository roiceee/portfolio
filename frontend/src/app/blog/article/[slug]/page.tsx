import BackButton from "@/components/back-button";
import { ArticleResponse } from "@/types/articletypes";
import { formatDate } from "@/util/date";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const slug = (await params).slug;

  const res: Response | undefined = await fetch(
    `${process.env.STRAPI_URL}/api/portfolio-blogs?filters[slug][$eq]=${slug}&populate=*`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_READONLY_TOKEN}`,
        "Content-Type": "application/json",
      },
    }
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
    keywords: data.data[0].attributes.portfolio_blog_tags.data.map(
      (tag) => tag.attributes.tag
    ),
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

export async function generateStaticParams() {
  try {
    const res = await fetch(
      `${process.env.STRAPI_URL}/api/portfolio-blogs?fields[0]=slug`,
      {
        headers: {
          Authorization: `Bearer ${process.env.STRAPI_READONLY_TOKEN}`,
        },
      }
    );

    const data = await res.json();

    return data.data.map((article: any) => ({
      slug: article.attributes.slug,
    }));
  } catch {
    return [];
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  let res: Response | undefined;
  let data: ArticleResponse | undefined;

  if (!slug) {
    return (
      <section className="prose max-w-2xl mx-auto my-12">
        <BackButton />
        <h2>Content Not Found</h2>
      </section>
    );
  }

  try {
    res = await fetch(
      `${process.env.STRAPI_URL}/api/portfolio-blogs?filters[slug][$eq]=${slug}&populate=*`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.STRAPI_READONLY_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );

    data = await res.json();
  } catch {
    data = undefined;
  }

  if (!data || data.data.length === 0) {
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
