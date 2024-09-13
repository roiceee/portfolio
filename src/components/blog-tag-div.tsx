"use client";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import BlogTagsResponseData from "@/types/blogtagTypes";
import _ from "lodash";
import { X } from "lucide-react";

export default function BlogTagDiv({
  content,
  className,
}: {
  content: BlogTagsResponseData;
  className?: string;
}) {
  const router = useRouter();
  const searchParams = useSearchParams(); // Get the current query parameters
  const [activeTags, setActiveTags] = useState<number[]>([]);

  const handleTagClick = (tagId: number) => {
    const newActiveTags = activeTags.includes(tagId)
      ? activeTags.filter((id) => id !== tagId)
      : [...activeTags, tagId];

    setActiveTags(newActiveTags);

    // Construct the new URL with active tags
    const urlParams = new URLSearchParams(searchParams.toString());
    urlParams.delete("tag"); // Remove existing 'tag' params
    newActiveTags.forEach((id) => {
      urlParams.append("tag", id.toString());
    });

    // Navigate to the new URL with the active tags
    router.push(`/blog/1?${urlParams.toString()}`);
  };

  const clearTags = () => {
    setActiveTags([]);
    router.push("/blog/1"); // Reset to the base URL without query parameters
  };

  // Sort content with active tags at the top
  const sortedData = [...content.data].sort((a, b) =>
    activeTags.includes(a.id) ? -1 : activeTags.includes(b.id) ? 1 : 0
  );

  useEffect(() => {
    //add to active state based on param

    const tagParam = searchParams.getAll("tag");

    if (tagParam) {
      setActiveTags(tagParam.map((tag) => parseInt(tag)));
    }
  }, [searchParams]);

  return (
    <div className={className}>
      <div className="flex flex-wrap items-center gap-2">
        {activeTags.length > 0 && (
          <button
            className="flex gap-1 btn btn-outline btn-sm text-sm"
            onClick={clearTags}
          >
            <X size={16} />
            Clear
          </button>
        )}
        {sortedData.map((value) => (
          <span
            className={`p-3 badge ${
              activeTags.includes(value.id)
                ? ""
                : "badge-outline hover:badge-ghost"
            } cursor-pointer`}
            key={`index-1-${value.id}`}
            onClick={() => handleTagClick(value.id)}
          >
            {_.capitalize(value.attributes.tag)}
          </span>
        ))}
      </div>
    </div>
  );
}
