"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function LinkPersistQueryParams({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const searchParams = useSearchParams();

  return (
    <Link
      href={{
        pathname: href,
        search: searchParams.toString(),
      }}
    >
      {children}
    </Link>
  );
}
