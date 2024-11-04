export default function TechstackTab() {
  const techstackData = [
    {
      category: "Languages",
      items: [
        "TypeScript",
        "JavaScript",
        "Java",
        "Golang",
        "PHP",
        "SQL",
        "HTML",
        "CSS",
      ],
    },
    {
      category: "Frontend Frameworks & Libraries",
      items: ["React", "Next.js", "Vite", "Tailwind CSS"],
    },
    {
      category: "Backend Frameworks & Libraries",
      items: [
        "Express",
        "NestJS",
        "Node.js",
        "Spring",
        "Hibernate",
        "Mongoose",
      ],
    },
    {
      category: "DevOps & Cloud Services",
      items: [
        "Amazon Web Services (AWS)",
        "Docker",
        "Virtual Private Server (VPS) Management",
      ],
    },
    {
      category: "Database Management Systems (DBMS)",
      items: ["MySQL", "PostgreSQL", "MongoDB"],
    },
    {
      category: "Tools & Utilities",
      items: ["Git", "Maven", "NPM", "Postman", "Linux"],
    },
  ];

  return (
    <div>
      <h2>Technical Skills</h2>
      {techstackData.map((section, index) => (
        <TechstackSection
          key={index}
          category={section.category}
          items={section.items}
        />
      ))}
    </div>
  );
}

function TechstackSection({
  category,
  items,
}: {
  category: string;
  items: string[];
}) {
  return (
    <div className="mb-4">
      <h4 className="text-xl">{category}:</h4>
      <p className=" text-lg">{items.join(", ")}</p>
    </div>
  );
}
