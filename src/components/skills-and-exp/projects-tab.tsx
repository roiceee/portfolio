export default function ProjectsTab() {
    const projectsData = [
      {
        title: "DEVCON Mindanao Summit Platform",
        description:
          "Event platform which allows users to access event-related resources and participate in activities through the app.",
        role: "Contributor",
        techStack: ["Pocketbase", "TypeScript", "React", "Node.js"],
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
        role: "Fullstack Developer",
        techStack: ["MongoDB", "React", "Node.js"],
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
        role: "Fullstack Developer",
        techStack: ["MongoDB", "Express", "Node.js"],
        achievements: [
          "Implemented secure user authentication and authorization.",
          "Designed and implemented database schema for efficient data storage.",
          "Created documentation for end users to navigate and use the application effectively.",
        ],
        link: "https://github.com/roiceee/phrase-api-server",
        liveLink: "https://phraseapi.vercel.app",
      },
    ];
  
    return (
      <div>
        <h2>Projects</h2>
  
        {projectsData.map((project, index) => (
          <div key={index} className="mb-8">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="mb-1">{project.description}</p>
            <p className="font-semibold">Role: {project.role}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="bg-gray-200 text-gray-800 px-2 py-1 rounded text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            <ul className="list-disc list-inside mt-2">
              {project.achievements.map((achievement, i) => (
                <li key={i}>{achievement}</li>
              ))}
            </ul>
            <div className="mt-4">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <button className="btn btn-primary">View Code</button>
              </a>
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2"
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
  