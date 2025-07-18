"use client";

import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AnimatedElement from "../../components/AnimatedElement";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: "💻",
    skills: [
      {
        name: "React & Next.js",
        status: "Practicing",
        description:
          "Building modern, responsive web applications with React and Next.js",
      },
      {
        name: "TypeScript",
        status: "Learning",
        description:
          "Writing type-safe JavaScript code for better maintainability",
      },
      {
        name: "CSS & TailwindCSS",
        status: "Growing",
        description:
          "Creating beautiful, responsive layouts with modern CSS frameworks",
      },
    ],
  },
  {
    title: "Backend Development",
    icon: "⚙️",
    skills: [
      {
        name: "Node.js",
        status: "Familiar",
        description: "Building scalable server-side applications and APIs",
      },
      {
        name: "Python",
        status: "Learning",
        description: "Data processing and backend development with Python",
      },
      {
        name: "Databases",
        status: "Familiar",
        description: "Working with SQL and NoSQL databases",
      },
    ],
  },
  {
    title: "Design",
    icon: "🎨",
    skills: [
      {
        name: "UI/UX Design",
        status: "Practicing",
        description: "Creating user-centered designs and interfaces",
      },
      {
        name: "Figma",
        status: "Growing",
        description: "Prototyping and design system creation",
      },
      {
        name: "Adobe Creative Suite",
        status: "Familiar",
        description: "Graphics and visual design",
      },
    ],
  },
  {
    title: "Other Skills",
    icon: "🔧",
    skills: [
      {
        name: "DevOps",
        status: "Learning",
        description: "CI/CD, Docker, and cloud services",
      },
      {
        name: "Testing",
        status: "Familiar",
        description: "Unit testing, integration testing, and E2E testing",
      },
      {
        name: "Agile Methodologies",
        status: "Practicing",
        description: "Scrum and Kanban practices",
      },
    ],
  },
];

const statusColors = {
  Learning:
    "text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30",
  Familiar: "text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30",
  Practicing:
    "text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30",
  Growing:
    "text-orange-600 dark:text-orange-400 bg-orange-100 dark:bg-orange-900/30",
};

const statusDescriptions = {
  Learning: "Currently learning and building basic projects",
  Familiar: "Comfortable with fundamentals and can build simple features",
  Practicing: "Actively using in projects and expanding knowledge",
  Growing: "Regularly using and continuously improving",
};

function StatusLegend({ isVisible }: { isVisible: boolean }) {
  return (
    <div
      className={`
        max-w-3xl mx-auto overflow-hidden transition-all duration-300 ease-in-out
        ${isVisible ? "max-h-96 opacity-100 mb-12" : "max-h-0 opacity-0 mb-0"}
      `}
    >
      <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-4 border border-gray-200 dark:border-gray-700 shadow-sm">
        <h3 className="text-center text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">
          Skill Level Guide
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {Object.entries(statusDescriptions).map(([status, description]) => (
            <div
              key={status}
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
            >
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  statusColors[status as keyof typeof statusColors]
                }`}
              >
                {status}
              </span>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {description}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function LegendToggle({
  isVisible,
  onToggle,
}: {
  isVisible: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      onClick={onToggle}
      className="flex items-center gap-2 mx-auto px-4 py-2 rounded-full text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
    >
      <span>{isVisible ? "Hide Legend" : "View Legend"}</span>
      <svg
        className={`w-4 h-4 transition-transform duration-300 ${
          isVisible ? "rotate-180" : ""
        }`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </button>
  );
}

function SkillCard({
  name,
  status,
  description,
}: {
  name: string;
  status: string;
  description: string;
}) {
  return (
    <div className="group relative bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-xl text-gray-900 dark:text-white">
          {name}
        </h3>
        <span
          className={`px-3 py-1 rounded-full text-sm font-medium ${
            statusColors[status as keyof typeof statusColors]
          }`}
        >
          {status}
        </span>
      </div>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
}

export default function SkillsPage() {
  const [activeCategory, setActiveCategory] = useState(
    skillCategories[0].title
  );
  const [isLegendVisible, setIsLegendVisible] = useState(false);

  return (
    <>
      <Header />
      <div className="min-h-screen py-24 mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement>
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                Skills & Expertise
              </h1>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                A showcase of my technical journey and current learning path.
                Each skill represents my ongoing growth and practical experience
                in different areas of development.
              </p>
            </div>
          </AnimatedElement>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {skillCategories.map((category) => (
              <button
                key={category.title}
                onClick={() => setActiveCategory(category.title)}
                className={`px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 flex items-center gap-2
                  ${
                    activeCategory === category.title
                      ? "bg-[#457B9D] text-white shadow-lg scale-105"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
                  }`}
              >
                <span>{category.icon}</span>
                {category.title}
              </button>
            ))}
          </div>

          <div className="mb-8">
            <LegendToggle
              isVisible={isLegendVisible}
              onToggle={() => setIsLegendVisible(!isLegendVisible)}
            />
            <StatusLegend isVisible={isLegendVisible} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories
              .find((category) => category.title === activeCategory)
              ?.skills.map((skill, index) => (
                <AnimatedElement key={skill.name} delay={index * 100}>
                  <SkillCard {...skill} />
                </AnimatedElement>
              ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
