import Image from "next/image";
import projCertImg from "/public/certs/project-management/cert.png";
import Link from "next/link";

export default function CertificationsTab({
  isPreview = false,
}: {
  isPreview?: boolean;
}) {
  const certificationsData = [
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
      link: "/certs/project-management/cert.pdf",
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
                className="w-full max-w-[500px] h-auto"
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
