export default function ProjectsTab() {
  const projectsData = [
    {
      title: "DEVCON Mindanao Summit Platform",
      description:
        "Event platform which allows users to access event-related resources and participate in activities through the app.",
      achievements: [
        "Designed and implemented a comprehensive database schema using Pocketbase, ensuring robust data management.",
        "Optimized frontend queries in TypeScript for efficient data retrieval, enhancing user experience.",
        "Collaborated with a multidisciplinary team to integrate diverse features seamlessly.",
      ],
      link: "https://github.com/nedpals/summit-platform",
    },
    {
      title: "Riffrant",
      description: "Social media application to express your opinions.",
      achievements: [
        "Implemented rate-limiting API to prevent spam and enhance security.",
        "Integrated MongoDB for scalable and efficient data storage.",
        "Developed responsive user interfaces using React.",
      ],
      link: "https://github.com/roiceee/riffrant",
      liveLink: "https://riffrant.vercel.app",
    },
    {
      title: "Phrase API",
      description:
        "Platform to share and look up text-related data, with REST API endpoints for easy integration.",
      achievements: [
        "Implemented secure user authentication and authorization.",
        "Designed and implemented database schema for efficient data storage.",
        "Created documentation for end users to navigate and use the application effectively.",
      ],
      link: "https://github.com/roiceee/phrase-api-server",
      liveLink: "https://phraseapi.vercel.app", // Optional live view link
    },
  ];

  return (
    <div>
      <h2>Projects</h2>

      {projectsData.map((project, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <ul>
            {project.achievements.map((achievement, i) => (
              <li key={i}>{achievement}</li>
            ))}
          </ul>
          <div>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <button className="btn btn-primary">View Code</button>
            </a>
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginLeft: "10px" }}
              >
                <button className="btn btn-secondary">Live View</button>
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
