import { formatDate } from "@/util/date";
import _ from "lodash";
import Link from "next/link";
import LinkPersistQueryParams from "../LinkPersistQueryParams";
import { Suspense } from "react";

interface Props {
  title: string;
  date: Date;
  excerpt: string;
  tags: string[];
  url: string;
}

export default function BlogCard({ title, date, excerpt, tags, url }: Props) {
  return (
    <section className="prose">
      <Suspense fallback={<></>}>
        <LinkPersistQueryParams
          href={url}
          className="no-underline hover:underline decoration-secondary"
        >
          <h1 className="text-secondary mb-2 font-medium">{title}</h1>
        </LinkPersistQueryParams>
      </Suspense>
      <span>
        <i>{formatDate(date)}</i>
      </span>
      <p>{excerpt}</p>
      <div>
        {tags.length !== 0 && (
          <div>
            <span>Tags: </span>
            {tags.map((tag) => (
              <span key={tag} className="mx-1 badge badge-ghost">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
      <div className="text-right mt-3">
        <Suspense fallback={<></>}>
          <LinkPersistQueryParams href={url} className="text-secondary">
            Read More
          </LinkPersistQueryParams>
        </Suspense>
      </div>
    </section>
  );
}
