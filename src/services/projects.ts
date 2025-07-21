import { db } from "@/db/kysely";
import { sql } from "kysely";
import { Projects, ProjectImages, ProjectFiles } from "@/db/types.generated";

export async function getAllProjects(skillFilter?: string) {
  const projects = await db
    .selectFrom("projects")
    .selectAll()
    .execute();

  // Get images for each project and filter by skill if needed
  const projectsWithImages = await Promise.all(
    projects
      .filter(project => {
        if (!skillFilter) return true;
        return project.technologies?.some(tech => 
          tech.toLowerCase() === skillFilter.toLowerCase()
        ) ?? false;
      })
      .map(async (project) => {
        const images = await db
          .selectFrom("project_images")
          .selectAll()
          .where("project_id", "=", project.id)
          .orderBy("id", "asc")
          .execute();

        return {
          ...project,
          images: images.map((img) => ({
            url: img.image_url,
            name: img.image_name,
          })),
        };
      })
  );

  return projectsWithImages;
}

export async function getProjectById(id: string) {
  const project = await db
    .selectFrom("projects")
    .selectAll()
    .where("id", "=", id)
    .executeTakeFirst();

  if (!project) return null;

  // Get images
  const images = await db
    .selectFrom("project_images")
    .selectAll()
    .where("project_id", "=", id)
    .orderBy("id", "asc")
    .execute();

  // Get files
  const files = await db
    .selectFrom("project_files")
    .selectAll()
    .where("project_id", "=", id)
    .execute();

  return {
    ...project,
    images: images.map((img) => ({
      url: img.image_url,
      name: img.image_name,
    })),
    files: files.map((file) => ({
      url: file.file_url,
      name: file.file_name,
    })),
  };
} 