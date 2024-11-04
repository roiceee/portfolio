"use client";

import { useState } from "react";
import ExperienceTab from "./experience-tab";
import ProjectsTab from "./projects-tab";
import TechstackTab from "./techstack-tab";
import CertificationsTab from "./certifications-tab";
import CommunityTab from "./community-tab";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    "Experience",
    "Projects",
    "Certifications",
    "Tech Stack",
    "Community",
  ];

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

  return (
    <div className="tabs-container">
      {/* Tab List */}
      <div role="tablist" className="tab-list mb-6">
        {tabs.map((tab, index) => (
          <button
            key={index}
            role="tab"
            className={`tab-item ${activeTab === index ? "active" : ""}`}
            onClick={() => setActiveTab(index)}
          >
            {tab}
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
