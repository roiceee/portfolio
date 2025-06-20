import Link from "next/link";

export default function ExperienceTab({
  isPreview = false,
}: {
  isPreview?: boolean;
}) {
  const experienceData = [
    {
      title: "Fullstack Developer Intern",
      company: "Symph",
      duration: "March 2025 - June 2025",
      description: [
        "Improved the codebase to follow a more maintainable structure and best practices.",
        "Created new features for an AI-powered project.",
        "Optimized network payload to enhance performance and reduce latency.",
      ],
    },
    {
      title: "Software Developer",
      company: "Imperate Realty",
      duration: "August 2024 - February 2025",
      description: [
        "Deployed applications using AWS, utilizing services like EC2, RDS, S3, and other AWS solutions.",
        "Developed the website using Next.js for efficient, server-side rendering and performance.",
        "Set up services on EC2 instances to manage content effectively.",
      ],
    },
    {
      title: "Freelance Fullstack Web Developer",
      duration: "June 2023 - Present",
      description: [
        "Created web applications to interface with Arduino devices for remote monitoring and control.",
        "Developed an e-commerce website for a business, including payment integration and inventory management.",
        "Worked closely with clients to gather requirements and deliver customized solutions.",
      ],
    },
    // Add more experiences here if needed
  ];

  const displayedExperiences = isPreview
    ? experienceData.slice(0, 3)
    : experienceData;

  return (
    <div>
      <h1>Experience</h1>
      {displayedExperiences.map((experience, index) => (
        <div key={index}>
          <h3 className="mb-0">{experience.title}</h3>
          {experience.company && <p className="my-0">{experience.company}</p>}
          <p className="my-0 font-semibold">{experience.duration}</p>
          <p>{experience.description[0]}</p>
          <ul>
            {experience.description.slice(1).map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          {index < displayedExperiences.length - 1 && <hr />}
        </div>
      ))}
      {isPreview && (
        <div className="text-center">
          <Link
            href="/skills-and-experience#experience"
            className="underline font-bold"
          >
            See more
          </Link>
        </div>
      )}
    </div>
  );
}
