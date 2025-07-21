import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectContent from "@/components/ProjectContent";
import { getProjectById } from "@/services/projects";

interface ProjectPageProps {
  params: Promise<{
    id: string;
  }>;
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  // Await the params since it's now a Promise
  const { id } = await params;

  const project = await getProjectById(id);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="min-h-screen py-24 mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProjectContent
            title={project.title}
            description={project.description}
            fullDescription={project.full_description || ""}
            imageUrl={project.image_url || ""}
            images={project.images}
            technologies={project.technologies || []}
            features={project.features || []}
            liveUrl={project.live_url || ""}
            githubUrl={project.github_url || ""}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
