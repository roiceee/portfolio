"use client";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import BlogTagsResponseData from "@/types/blogtagTypes";
import _ from "lodash";
import { X } from "lucide-react";

export default function BlogTagDiv({
  content,
  className,
  activeTagId
}: {
  content: BlogTagsResponseData;
  className?: string;
  activeTagId: string | undefined;
}) {
  const router = useRouter();
  const searchParams = useSearchParams(); // Get the current query parameters
  const [activeTag, setActiveTag] = useState<number | null>(activeTagId ? Number(activeTagId) : null); // Track a single active tag

  const handleTagClick = (tagId: number) => {
    const newActiveTag = activeTag === tagId ? null : tagId; // Toggle or set single active tag
    setActiveTag(newActiveTag);
    // Navigate to the new URL with the active tag

    if (newActiveTag) {
      router.push(`/blog/page/1/${newActiveTag.toString()}`);
    } else {
      router.push("/blog/page/1"); // Reset to the base URL without query parameters
    }
  };

  const clearTag = () => {
    setActiveTag(null);
    router.push("/blog/page/1"); // Reset to the base URL without query parameters
  };

  // Sort content with active tag at the top
  const sortedData = [...content.data].sort((a, b) =>
    activeTag === a.id ? -1 : activeTag === b.id ? 1 : 0
  );

  useEffect(() => {
    // Update active tag based on the tag query parameter
    const tagParam = searchParams.get("tag");
    if (tagParam) {
      setActiveTag(parseInt(tagParam));
    }
  }, [searchParams]);

  return (
    <div className={className}>
      <div className="flex flex-wrap md:flex-col items-start gap-2">
        {sortedData.map((value) => (
          <span
            className={`p-3 badge ${
              activeTag === value.id
                ? ""
                : "badge-outline hover:badge-ghost whitespace-nowrap"
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
