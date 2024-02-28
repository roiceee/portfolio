import _ from "lodash";
import Link from "next/link";

interface Props {
  title: string;
  date: Date;
  previewContent: string;
  tags: string[];
  url: string;
}

export default function BlogCard({
  title,
  date,
  previewContent,
  tags,
  url,
}: Props) {
  return (
    <section className="prose">
      <h1 className="text-secondary mb-2 font-medium">{title}</h1>
      <span>
        <i>Published on {date.toLocaleDateString()}</i>
      </span>
      <p>
        {_.truncate(previewContent, {
          length: 150,
          omission: "...",
        })}
      </p>
      <div>
        <div className=" ">
          <span>Tags: </span>
          {tags.map((tag) => (
            <span key={tag} className="mx-1 badge badge-ghost">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="text-right mt-3">
        <Link href={url} className="text-secondary">
          Read More
        </Link>
      </div>
    </section>
  );
}
