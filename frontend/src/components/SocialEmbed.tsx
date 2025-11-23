"use client";

import { useEffect, useRef } from "react";

type Props = {
  embedHtml?: string | null;
  className?: string;
};

export default function SocialEmbed({ embedHtml, className }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current || !embedHtml) return;

    containerRef.current.innerHTML = embedHtml;
  }, [embedHtml]);

  return <div ref={containerRef} className={className} />;
}
