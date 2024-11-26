import Link from "next/link";

export default function ExperienceTab(
  { isPreview = false }: { isPreview?: boolean }
) {
  const experienceData = [
    {
      title: "Software Developer",
      company: "Imperate Realty",
      duration: "August 2024 - Present",
      description: [
        "Deployed applications using AWS, utilizing services like EC2, RDS, S3, and other AWS solutions.",
        "Developed the website using Next.js for efficient, server-side rendering and performance.",
        "Translated Figma designs into responsive and interactive web interfaces.",
        "Set up a headless CMS on EC2 instances to manage content effectively.",
      ],
    },
    {
      title: "Freelance Developer",
      duration: "June 2023 - July 2024",
      description: [
        "Created web applications to interface with Arduino devices for remote monitoring and control.",
        "Developed an e-commerce website for a business, including payment integration and inventory management.",
        "Worked closely with clients to gather requirements and deliver customized solutions.",
      ],
    },
    // Add more experiences here if needed
  ];

  const displayedExperiences = isPreview ? experienceData.slice(0, 3) : experienceData;

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
          <Link href="/skills-and-experience#experience" className="underline font-bold">
            See more
          </Link>
        </div>
      )}
    </div>
  );
}