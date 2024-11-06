"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import CertificationsTab from "./certifications-tab";
import CommunityTab from "./community-tab";
import ExperienceTab from "./experience-tab";
import ProjectsTab from "./projects-tab";
import TechstackTab from "./techstack-tab";

export default function Tabs() {
  const router = useRouter();
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState(0);
  const tabs = useMemo(() => {
    return [
      { name: "Experience", id: "experience" },
      { name: "Projects", id: "projects" },
      { name: "Certifications", id: "certifications" },
      { name: "Tech Stack", id: "techstack" },
      { name: "Community", id: "community" },
    ];
  }, []);

  // Content for each tab
  const tabContents = [
    <div key="tab-exp">
      <ExperienceTab />
    </div>,
    <div key="tab-projects">
      <ProjectsTab />
    </div>,
    <div key="tab-certifications">
      <CertificationsTab />
    </div>,
    <div key="tab-techstack">
      <TechstackTab />
    </div>,
    <div key="tab-community">
      <CommunityTab />
    </div>,
  ];

  // Function to change URL hash when tab is clicked
  const handleTabClick = (index: number) => {
    setActiveTab(index);
    router.push(`/skills-and-experience#${tabs[index].id}`);
  };

  return (
    <div className="tabs-container">
      {/* Tab List */}
      <div role="tablist" className="tab-list mb-6">
        {tabs.map((tab, index) => (
          <button
            key={index}
            role="tab"
            className={`tab-item ${activeTab === index ? "active" : ""}`}
            onClick={() => handleTabClick(index)}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="tab-content prose xl:prose-lg max-w-none">
        {tabContents[activeTab]}
      </div>

      <style jsx>{`
        .tabs-container {
          width: 100%;
        }
        .tab-list {
          display: flex;
          flex-wrap: wrap;
          border-bottom: 2px solid #ddd;
          width: fit-content;
        }
        .tab-item {
          padding: 0.75rem 1.5rem;
          font-size: 1.1rem;
          cursor: pointer;
          color: #555;
          border-bottom: 2px solid transparent;
          transition: color 0.3s ease, border-bottom-color 0.3s ease;
          margin-bottom: -2px;
        }
        .tab-item:hover {
          color: #000;
        }
        .tab-item.active {
          color: #000;
          font-weight: bold;
          border-bottom-color: #000;
        }
        .tab-content {
          padding: 1rem;
        }
      `}</style>
    </div>
  );
}
