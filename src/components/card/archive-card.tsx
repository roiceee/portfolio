"use client";

import { ArchivePreviewPage } from "@/types/archivetypes";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

interface Props {
  data: ArchivePreviewPage;
  className?: string;
}

export default function ArchiveCard({ data, className }: Props) {
  const pathname = usePathname(); // Get current path
  const searchParams = useSearchParams(); // Get current query parameters

  const handleArchiveClick = (archiveId: number) => {
    // Create a new URLSearchParams object from the current search params
    const newParams = new URLSearchParams(searchParams.toString());
    
    // Set the 'archive' query parameter
    newParams.set("archive", archiveId.toString());

    // Return the new URL string
    return `${pathname}?${newParams.toString()}`;
  };

  return (
    <aside className={`prose my-12 md:my-0 h-fit md:border-l pl-8 ${className}`}>
      <h2>Archive</h2>
      <div className="grid grid-cols-2 md:grid-cols-1 gap-x-2 md:gap-x-10">
        <Link href={pathname} className="font-bold">All</Link>
        {data.data.reverse().map((archive) => (
          <Link
            key={`archive-${archive.id}`}
            href={handleArchiveClick(archive.id)} // Construct the href dynamically
          >
            {archive.attributes.archive}
          </Link>
        ))}
      </div>
    </aside>
  );
}
