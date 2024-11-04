export default function ExperienceTab() {
  const experienceData = [
    {
      title: "Software Developer",
      company: "Imperate Realty",
      duration: "June 2023 - July 2024",
      description: [
        "Created web applications to interface with Arduino devices for remote monitoring and control.",
        "Developed an e-commerce website for a business, including payment integration and inventory management.",
        "Worked closely with clients to gather requirements and deliver customized solutions.",
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
  ];

  return (
    <div>
      <h2>Experience</h2>
      {experienceData.map((experience, index) => (
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
        </div>
      ))}
    </div>
  );
}
