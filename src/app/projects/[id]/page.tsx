import { notFound } from "next/navigation";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import ProjectContent from "../../../components/ProjectContent";
import { projects } from "@/data/portfolio";

interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  imageUrl: string;
  images?: string[];
  tags: string[];
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects[params.id as keyof typeof projects] as Project;

  if (!project) {
    notFound();
  }

  return (
    <>
      <Header />
      <div className="min-h-screen py-24 mt-10">
        <ProjectContent project={project} />
      </div>
      <Footer />
    </>
  );
}
