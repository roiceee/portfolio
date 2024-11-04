/* eslint-disable @next/next/no-img-element */
import StackIcon from "tech-stack-icons";
import maven from "/public/maven.png";
import express from "/public/express.png";
import Image from "next/image";

export default function TechstackTab() {
  const techstackData = [
    {
      category: "Languages",
      items: [
        { name: "TypeScript", icon: <StackIcon name={"typescript"} /> },
        { name: "JavaScript", icon: <StackIcon name={"js"} /> },
        { name: "Java", icon: <StackIcon name={"java"} /> },
        { name: "Golang", icon: <StackIcon name={"go"} /> },
        { name: "PHP", icon: <StackIcon name={"php"} /> },
        { name: "HTML", icon: <StackIcon name={"html5"} /> },
        { name: "CSS", icon: <StackIcon name={"css3"} /> },
      ],
    },
    {
      category: "Frontend Frameworks & Libraries",
      items: [
        { name: "React", icon: <StackIcon name={"reactjs"} /> },
        { name: "Next.js", icon: <StackIcon name={"nextjs"} /> },
        { name: "Vite", icon: <StackIcon name={"vitejs"} /> },
        { name: "Tailwind CSS", icon: <StackIcon name={"tailwindcss"} /> },
      ],
    },
    {
      category: "Backend Frameworks & Libraries",
      items: [
        { name: "Express", icon: <img src={express.src} alt="expressjs" /> },
        { name: "Node.js", icon: <StackIcon name={"nodejs"} /> },
        { name: "Spring", icon: <StackIcon name={"spring"} /> },
      ],
    },
    {
      category: "DevOps & Cloud Services",
      items: [
        { name: "Amazon Web Services", icon: <StackIcon name={"aws"} /> },
        { name: "Docker", icon: <StackIcon name={"docker"} /> },
        {
          name: "VPS Deployments",
          icon: <StackIcon name={"digitalocean"} />,
        },
      ],
    },
    {
      category: "Database Management Systems (DBMS)",
      items: [
        { name: "MySQL", icon: <StackIcon name={"mysql"} /> },
        { name: "PostgreSQL", icon: <StackIcon name={"postgresql"} /> },
        { name: "MongoDB", icon: <StackIcon name={"mongodb"} /> },
      ],
    },
    {
      category: "Tools & Utilities",
      items: [
        { name: "Git", icon: <StackIcon name={"git"} /> },
        { name: "Maven", icon: <img src={maven.src} alt="Maven" /> },
        { name: "NPM", icon: <StackIcon name={"npm"} /> },
        { name: "Postman", icon: <StackIcon name={"postman"} /> },
        { name: "Linux", icon: <StackIcon name={"linux"} /> },
      ],
    },
  ];

  return (
    <div>
      <h2>Technical Skills</h2>
      <div className="mb-6 grid lg:grid-cols-2 gap-10">
          {techstackData.map((section, index) => (
            <TechstackSection
              key={index}
              category={section.category}
              items={section.items}
            />
          ))}
      </div>
    </div>
  );
}

function TechstackSection({
  category,
  items,
}: {
  category: string;
  items: { name: string; icon?: JSX.Element }[];
}) {
  return (
    <div >
      <h4 className="text-xl">{category}:</h4>
      <div className="flex flex-wrap gap-6 mt-4 not-prose max-w-[400px]">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-center gap-4 text-lg">
            {item.icon && <div className="h-[50px] aspect-square">{item.icon}</div>}
            <div>{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
