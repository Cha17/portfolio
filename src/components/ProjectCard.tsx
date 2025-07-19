import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { getSkillIcon } from "@/utils/skillIcons";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  projectUrl: string;
}

export default function ProjectCard({
  id,
  title,
  description,
  imageUrl,
  technologies,
  projectUrl,
}: ProjectCardProps) {
  return (
    <div className="group relative rounded-xl border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all bg-white dark:bg-gray-900">
      <div className="aspect-video relative overflow-hidden rounded-t-xl">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies?.map((tech) => (
            <div
              key={tech}
              className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-full transition-all duration-200 hover:pr-3"
            >
              <div className="peer p-2">
                <Icon
                  icon={getSkillIcon(tech)}
                  className="w-5 h-5 text-gray-800 dark:text-gray-200"
                />
              </div>
              <div className="overflow-hidden w-0 peer-hover:w-auto transition-all duration-200">
                <span className="text-sm text-gray-800 dark:text-gray-200 whitespace-nowrap px-1">
                  {tech}
                </span>
              </div>
            </div>
          ))}
        </div>
        <Link
          href={projectUrl}
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
        >
          View Project
          <svg
            className="ml-2 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
