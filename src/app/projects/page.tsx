import Link from "next/link";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AnimatedElement from "../../components/AnimatedElement";
import ProjectCard from "../../components/ProjectCard";
import { projects } from "@/data/portfolio";

// const projects = [
//   {
//     id: 'project-1',
//     title: 'Project One',
//     description: 'A beautiful web application built with Next.js and TailwindCSS.',
//     imageUrl: '/project1.jpg',
//     tags: ['Next.js', 'React', 'TailwindCSS'],
//     projectUrl: '/projects/project-1',
//   },
//   {
//     id: 'project-2',
//     title: 'Project Two',
//     description: 'Mobile app developed with React Native and Firebase.',
//     imageUrl: '/project2.jpg',
//     tags: ['React Native', 'Firebase', 'Mobile'],
//     projectUrl: '/projects/project-2',
//   },
//   {
//     id: 'project-3',
//     title: 'Project Three',
//     description: 'UI/UX design project for a modern dashboard interface.',
//     imageUrl: '/project3.jpg',
//     tags: ['UI/UX', 'Figma', 'Design'],
//     projectUrl: '/projects/project-3',
//   },
// ]

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen py-24 mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement>
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">My Projects</h1>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                A collection of my work in web development, mobile applications,
                and design. Each project represents a unique challenge and
                solution.
              </p>
            </div>
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.values(projects).map((project, index) => (
              <AnimatedElement key={project.id} delay={index * 100}>
                <ProjectCard
                  {...project}
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
