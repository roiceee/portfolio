import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  imageSrc: any;
  altText: string;
  title: string;
  description: string;
  link: string;
}

function ProjectCard({
  imageSrc,
  altText,
  title,
  description,
  link,
}: ProjectCardProps) {
  return (
    <div className="rounded-xl border border-slate-200 hover:border-accent p-6 text-slate-200">
      <Link href={link} target="_blank">
      <div className="flex justify-center items-center gap-4">
        <div>
          <Image src={imageSrc} alt={altText} height={80} width={80} className="rounded" />
        </div>
        <div className="text-xl font-semibold">{title}</div>
      </div>
      <div className="flex flex-col justify-between">
        <div className="mt-2 text-sm">{description}</div>
        <div className="mt-2 justify-self-end">
        </div>
      </div>
      </Link>
    </div>
  );
}

export default ProjectCard;
