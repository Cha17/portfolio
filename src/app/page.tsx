import Link from "next/link";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import AnimatedElement from "../components/AnimatedElement";
import { getAllProjects } from "@/services/projects";

export default async function HomePage() {
  const projects = await getAllProjects();

  return (
    <>
      <Header />
      <div className="min-h-screen pt-24">
        {/* Hero Section */}
        <section className="py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-50 items-center mx-45">
            <AnimatedElement>
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                  Hi, I&apos;m{" "}
                  <span className="text-[#457B9D] dark:text-[#457EAF]">
                    Charl
                  </span>
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                  A student with a passion for technology, aspiring to be a
                  software engineer to create innovative solutions for the
                  people.
                </p>
                <div className="flex gap-4">
                  <Link
                    href="/projects"
                    className="px-6 py-3 bg-[#1D3557] hover:bg-[#457B9D] dark:bg-[#1D3557] dark:hover:bg-[#457EAF] text-white rounded-lg transition-colors"
                  >
                    My Projects
                  </Link>
                  <Link
                    href="/about"
                    className="px-6 py-3 border border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600 rounded-lg transition-colors"
                  >
                    About Me
                  </Link>
                </div>
              </div>
            </AnimatedElement>
            <AnimatedElement delay={200}>
              <div className="relative h-[400px] w-full flex justify-center items-center">
                <div className="relative w-[350px] h-[350px] rounded-full overflow-hidden border-4 border-[#457B9D] dark:border-[#457EAF] shadow-lg">
                  <Image
                    src="/sample.webp"
                    alt="Charl Cortez"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                {/* Decorative circle in the background */}
                <div className="absolute w-[380px] h-[380px] rounded-full border-2 border-dashed border-[#457B9D] dark:border-[#457EAF] opacity-50 animate-spin-slow"></div>
              </div>
            </AnimatedElement>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
          <AnimatedElement>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
              <p className="text-gray-600 dark:text-gray-400">
                Here are some of my recent works
              </p>
            </div>
          </AnimatedElement>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.slice(0, 3).map((project, index) => (
                <AnimatedElement key={project.id} delay={index * 100}>
                  <ProjectCard
                    id={project.id}
                    title={project.title}
                    description={project.description}
                    imageUrl={project.image_url || ""}
                    technologies={project.technologies || []}
                    projectUrl={`/projects/${project.id}`}
                  />
                </AnimatedElement>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                href="/projects"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
              >
                View All Projects
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
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
