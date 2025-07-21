"use client";

import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AnimatedElement from "../../components/AnimatedElement";
import { getAllSkills } from "../actions/skills";
import { type SkillStatus } from "@/db/schema";
import { getSkillIcon } from "@/utils/skillIcons";
import type { Skills } from "@/db/types.generated";
import type { Selectable } from "kysely";

const categoryIcons = {
  "Frontend Development": "💻",
  "Backend Development": "⚙️",
  "Mobile Development": "📱",
  Design: "🎨",
  "DevOps & Cloud": "☁️",
  "Testing & QA": "🧪",
  "Version Control": "🔄",
  Others: "🛠️",
} as const;

const statusColors: Record<SkillStatus, string> = {
  Beginner: "text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30",
  Intermediate:
    "text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30",
  Competent:
    "text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30",
  Experienced:
    "text-orange-600 dark:text-orange-400 bg-orange-100 dark:bg-orange-900/30",
};

const statusDescriptions: Record<SkillStatus, string> = {
  Beginner: "Building foundational knowledge and working on basic projects",
  Intermediate: "Comfortable with core concepts and creating standard features",
  Competent: "Reliable understanding with consistent practical application",
  Experienced: "Strong practical knowledge with proven project implementations",
};

// Keep the StatusLegend and LegendToggle components as they are
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
                  statusColors[status as SkillStatus]
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
  status: SkillStatus;
  description: string;
}) {
  const iconName = getSkillIcon(name);

  return (
    <div className="group relative bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 flex items-center justify-center">
            <Icon icon={iconName} className="w-8 h-8" />
          </div>
          <Link
            href={`/projects?skill=${encodeURIComponent(name)}`}
            className="font-semibold text-xl text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            {name}
          </Link>
        </div>
        <span
          className={`px-3 py-1 rounded-full text-sm font-medium ${statusColors[status]}`}
        >
          {status}
        </span>
      </div>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
}

export default function SkillsPage() {
  const [skills, setSkills] = useState<Selectable<Skills>[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("");
  const [isLegendVisible, setIsLegendVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadSkills() {
      try {
        const allSkills = await getAllSkills();
        setSkills(allSkills);

        // Extract unique categories and sort them
        const uniqueCategories = Array.from(
          new Set(allSkills.map((skill) => skill.category))
        ).sort();
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Failed to load skills:", error);
      } finally {
        setIsLoading(false);
      }
    }

    loadSkills();
  }, []);

  if (isLoading) {
    return (
      <>
        <Header />
        <div className="min-h-screen py-24 mt-10 flex items-center justify-center">
          <div className="text-gray-600 dark:text-gray-400">
            Loading skills...
          </div>
        </div>
        <Footer />
      </>
    );
  }

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
            <button
              onClick={() => setActiveCategory("")}
              className={`px-5 py-2 rounded-full text-base font-medium transition-all duration-300 flex items-center gap-2
                ${
                  activeCategory === ""
                    ? "bg-[#457B9D] text-white shadow-lg scale-105"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
            >
              <span>🔍</span>
              All Skills
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-base font-medium transition-all duration-300 flex items-center gap-2
                  ${
                    activeCategory === category
                      ? "bg-[#457B9D] text-white shadow-lg scale-105"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
                  }`}
              >
                <span>
                  {categoryIcons[category as keyof typeof categoryIcons] ||
                    "🔧"}
                </span>
                {category}
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

          <div className="space-y-12">
            {activeCategory === "" ? (
              // Show all categories
              categories.map((category) => (
                <div key={category} className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                    <span>
                      {categoryIcons[category as keyof typeof categoryIcons] ||
                        "🔧"}
                    </span>
                    {category}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills
                      .filter((skill) => skill.category === category)
                      .sort((a, b) => a.name.localeCompare(b.name))
                      .map((skill, index) => (
                        <AnimatedElement key={skill.id} delay={index * 100}>
                          <SkillCard
                            name={skill.name}
                            status={skill.status as SkillStatus}
                            description={skill.description}
                          />
                        </AnimatedElement>
                      ))}
                  </div>
                </div>
              ))
            ) : (
              // Show filtered category
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills
                  .filter((skill) => skill.category === activeCategory)
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((skill, index) => (
                    <AnimatedElement key={skill.id} delay={index * 100}>
                      <SkillCard
                        name={skill.name}
                        status={skill.status as SkillStatus}
                        description={skill.description}
                      />
                    </AnimatedElement>
                  ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
