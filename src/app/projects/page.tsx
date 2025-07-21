import Link from "next/link";
// import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AnimatedElement from "../../components/AnimatedElement";
import ProjectCard from "../../components/ProjectCard";
import { getAllProjects } from "@/services/projects";

type Props = {
  searchParams: { skill?: string };
};

export default async function ProjectsPage({ searchParams }: Props) {
  const { skill } = searchParams;
  const projects = await getAllProjects(skill);

  return (
    <>
      <Header />
      <div className="min-h-screen py-24 mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement>
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">
                {skill ? `Projects using ${skill}` : "My Projects"}
              </h1>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                {skill
                  ? `Showcasing projects that utilize ${skill} technology.`
                  : "A collection of my work in web development, mobile applications, and design. Each project represents a unique challenge and solution."}
              </p>
              {skill && (
                <Link
                  href="/projects"
                  className="inline-block mt-4 text-blue-600 dark:text-blue-400 hover:underline"
                >
                  View all projects
                </Link>
              )}
            </div>
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
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
        </div>
      </div>
      <Footer />
    </>
  );
}
