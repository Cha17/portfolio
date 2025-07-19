"use client";

import Link from "next/link";
import Image from "next/image";
import AnimatedElement from "./AnimatedElement";
import ImageSlideshow from "./ImageSlideshow";

interface ProjectImage {
  url: string;
  name: string;
}

interface ProjectContentProps {
  title: string;
  description: string;
  fullDescription: string;
  imageUrl: string;
  images: ProjectImage[];
  technologies: string[];
  features: string[];
  liveUrl: string;
  githubUrl: string;
}

export default function ProjectContent({
  title,
  description,
  fullDescription,
  imageUrl,
  images,
  technologies,
  features,
  liveUrl,
  githubUrl,
}: ProjectContentProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <AnimatedElement>
        <div className="mb-8">
          <Link
            href="/projects"
            className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 flex items-center mb-8"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Projects
          </Link>

          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            {title}
          </h1>
          {/* <div className="flex flex-wrap gap-2 mb-6">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div> */}
        </div>
      </AnimatedElement>

      <AnimatedElement delay={100}>
        {images && images.length > 0 ? (
          <ImageSlideshow images={images} title={title} />
        ) : (
          <div className="relative rounded-xl overflow-hidden mb-8 bg-gray-100 dark:bg-gray-800 flex justify-center">
            <Image
              src={imageUrl}
              alt={title}
              width={450}
              height={900}
              className="max-h-[80vh] w-auto object-contain"
              priority
            />
          </div>
        )}
      </AnimatedElement>

      <AnimatedElement delay={200}>
        <div className="prose dark:prose-invert max-w-none my-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            Project Overview
          </h2>
          <p className="whitespace-pre-line text-gray-600 dark:text-gray-400">
            {fullDescription}
          </p>
        </div>

        {features && features.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Key Features
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
              {features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            Technologies Used
          </h2>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-lg text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-4">
          {liveUrl && (
            <Link
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-lg transition-colors"
            >
              View Live Site
            </Link>
          )}
          {githubUrl && (
            <Link
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600 rounded-lg transition-colors dark:text-gray-300"
            >
              View Source
            </Link>
          )}
        </div>
      </AnimatedElement>
    </div>
  );
}
