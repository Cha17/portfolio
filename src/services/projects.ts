import { db } from "@/db/kysely";
import type { Projects, ProjectImages, ProjectFiles } from "@/db/types.generated";

export async function getAllProjects(skillFilter?: string) {
  const projects = await db
    .selectFrom("projects")
    .selectAll()
    .execute();

  const projectsWithDetails = await Promise.all(
    projects.map(async (project) => {
      const technologies = project.technologies ?? [];

      return {
        ...project,
        technologies,
      };
    })
  );

  const projectsWithImages = await Promise.all(
    projectsWithDetails.map(async (project) => {
      const images = await db
        .selectFrom("project_images")
        .selectAll()
        .where("project_id", "=", project.id)
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

  const images = await db
    .selectFrom("project_images")
    .selectAll()
    .where("project_id", "=", id)
    .execute();

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