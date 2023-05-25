import Image from "next/image";

interface CardProps {
  imageSrc: any;
  className?: string;
  label: string;
}

function Card({ imageSrc, className, label}: CardProps) {
  return (
    <div className={`flex-col items-center ` + className}>
      <div className="flex justify-center" style={{height: "160px"}}>
          <Image
            src={imageSrc}
            style={{width: "70px", height: "auto"}}
            alt={"techstack-card"}
            className="my-0"
          />
      </div>
      <div className="text-sm">{label}</div>
    </div>
  );
}

export default Card;
