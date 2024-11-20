"use client";

import { useState } from "react";

interface ExperienceCardProps {
  imageNode: React.ReactNode;
  title: string;
  year?: string;
  expand: React.ReactNode;
}

function ExperienceCard({
  imageNode,
  title,
  year,
  expand,
}: ExperienceCardProps) {
  const [isExpand, setIsExpand] = useState(true);

  const toggleExpand = () => {
    setIsExpand(!isExpand);
  };

  return (
    <div
      className="relative rounded-xl border-2 p-5 select-none hover:border-secondary w-full max-w-4xl mx-auto"
      onClick={toggleExpand}
    >
      <div className="flex gap-5 mb-4">
        <div className="min-w-[40px] w-[40px] sm:min-w-[100px] sm:w-[100px]">{imageNode}</div>
        <div className="text-start">
          <h3 className="text-xl font-semibold">{title}</h3>
          <div className="mb-2">{year}</div>
          {isExpand && <div >{expand}</div>}
        </div>
      </div>
      <div className="absolute text-secondary start-1/2 bottom-1 -translate-x-1/2">
        {isExpand ? "See less" : "See more..."}
      </div>
    </div>
  );
}

export default ExperienceCard;
