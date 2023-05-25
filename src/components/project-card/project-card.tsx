import Image from "next/image";

interface ProjectCardProps {
    imageSrc: any;
    altText: string;
}

function ProjectCard({imageSrc, altText}: ProjectCardProps) {
    return ( 
    <div className="rounded border-2 border-gray-500 ">
        <Image src={imageSrc} alt={altText}/>
    </div> 
    );
}

export default ProjectCard;