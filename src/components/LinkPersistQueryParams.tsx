"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function LinkPersistQueryParams({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  const searchParams = useSearchParams();

  return (
    <Link
      href={{
        pathname: href,
        search: searchParams.toString(),
      }}
      className={className}
    >
      {children}
    </Link>
  );
}
