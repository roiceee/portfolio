import Image from "next/image";
import Link from "next/link";
import awsCertImg from "/public/certs/aws/aws-certified-cloud-practitioner.png";
import projCertImg from "/public/certs/project-management/cert.png";

export default function CertificationsTab({
  isPreview = false,
}: {
  isPreview?: boolean;
}) {
  const certificationsData = [
    
    {
      title: "AWS Certified Cloud Practitioner",
      image: awsCertImg,
      description: "I learned how to utilize AWS services to create, deploy, and maintain applications.",
      bullets: [
        "Understanding of AWS services",
        "Skills in creating and maintaining applications",
        "Knowledge of AWS pricing and support",
      ],
      link:"https://www.credly.com/badges/2386b9e9-72c1-48ad-88aa-8b11a3890e13/public_url" 
    },
    // Add more certifications here
    {
      title: "Foundations of Project Management",
      image: projCertImg,
      description:
        "I learned the project management life cycle and compared different program management methodologies.",
      bullets: [
        "Understanding the project management life cycle",
        "Comparison of various project management methodologies",
        "Skills in time and resource management",
      ],
      link: "https://coursera.org/share/f6a250e27328dca93ec7e1480fa826d4",
    },
    
    // Add more certifications here
  ];

  const displayedCertificationsData = isPreview
    ? certificationsData.slice(0, 3)
    : certificationsData;

  return (
    <div>
      <h1>Certifications</h1>

      {displayedCertificationsData.map((certification, index) => (
        <div key={index} style={{ marginBottom: "20px" }} className="">
          <div className="flex flex-col md:flex-row md:gap-10">
            <div>
              <h3>{certification.title}</h3>
              <p>{certification.description}</p>
              <ul className="list-disc ml-6">
                {certification.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
              <a
                href={certification.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-primary mt-4">
                  View Certification
                </button>
              </a>
            </div>
            <div>
              <Image
                src={certification.image}
                alt={`Certification ${index + 1}`}
                className="w-full max-w-[200px] h-auto"
              />
            </div>
          </div>
          {index < certificationsData.length - 1 && <hr />}
        </div>
      ))}
      {isPreview && (
        <div className="text-center">
          <Link
            href="/skills-and-experience#certifications"
            className="underline font-bold"
          >
            See more
          </Link>
        </div>
      )}
    </div>
  );
}
