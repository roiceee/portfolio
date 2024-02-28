import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  imageSrc: any;
  altText: string;
  title: string;
  description: string;
  repoLink: string;
  demoLink: string;
}

function ProjectCard({
  imageSrc,
  altText,
  title,
  description,
  repoLink,
  demoLink,
}: ProjectCardProps) {
  return (
    <div className="flex flex-col rounded-xl border-2 p-5">
      <div className="flex justify-center items-center gap-4">
        <div>
          <Image
            src={imageSrc}
            alt={altText}
            height={80}
            width={80}
            className="rounded"
          />
        </div>
        <div className="text-xl font-semibold">{title}</div>
      </div>

      <div className="mt-2 text-sm mb-4">{description}</div>

      <div className="flex justify-center gap-4 mt-auto">
        <Link href={demoLink} target="_blank">
          <button className="btn btn-outline btn-secondary btn-sm font-bold border-2">
            View Demo
          </button>
        </Link>
        <Link href={repoLink} target="_blank">
          <button className="btn btn-outline btn-accent btn-sm font-bold border-2">
            View Code
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;
