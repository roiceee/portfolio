import Image from "next/image";

interface SocialLinkProps {
  link: string;
  imageSrc: any;
  altText: string;
}

function SocialLink({ link, imageSrc, altText }: SocialLinkProps) {
  return (
    <a className="hover:scale-110" href={link} target="_blank">
      <Image src={imageSrc} alt={altText} height={30} width={30} />
    </a>
  );
}

export default SocialLink;
