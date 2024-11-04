import Image from "next/image";
import projCertImg from "/public/certs/project-management/cert.png";

export default function CertificationsTab() {
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

  return (
    <div>
      <h2>Certifications</h2>

      {certificationsData.map((certification, index) => (
        <div
          key={index}
          style={{ marginBottom: "20px" }}
          className="flex flex-col md:flex-row md:gap-4"
        >
          <div>
            <Image
              src={certification.image}
              alt={`Certification ${index + 1}`}
              className="w-full max-w-[500px] h-auto"
            />
          </div>
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
        </div>
      ))}
    </div>
  );
}
