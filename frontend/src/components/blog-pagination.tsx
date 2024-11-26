import { ChevronLeftIcon, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function BlogPagination({
  page,
  tagId,
  pageCount,
  minimal,
}: {
  page: string;
  tagId: string;
  pageCount: number;
  minimal?: boolean;
}) {
  const currentPage = Number(page);

  return (
    <div>
      <div
        className={`flex w-full ${
          minimal ? "justify-start space-x-4" : "justify-between"
        } text-primary text-2xl font-bold mb-8 items-center`}
      >
        {/* Previous Button */}
        {currentPage > 1 ? (
          <div>
            <Link href={`/blog/page/${currentPage - 1}/${tagId ?? ""}`}>
              <span className="hover:underline">
                {minimal ? (
                  <ChevronLeftIcon className="text-xl" size={30} />
                ) : (
                  "Previous"
                )}
              </span>
            </Link>
          </div>
        ) : (
          <div></div>
        )}

        <p className="font-normal text-md">
          Page {currentPage} of {pageCount}
        </p>

        {/* Next Button */}
        {currentPage < pageCount ? (
          <div>
            <Link href={`/blog/page/${currentPage + 1}/${tagId ?? ""}`}>
              <span className="hover:underline">
                {minimal ? (
                  <ChevronRight className="text-xl" size={30} />
                ) : (
                  "Next"
                )}
              </span>
            </Link>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
