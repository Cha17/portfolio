import { relations } from "drizzle-orm/relations";
import { projects, projectFiles, projectImages } from "./schema";

export const projectFilesRelations = relations(projectFiles, ({one}) => ({
	project: one(projects, {
		fields: [projectFiles.projectId],
		references: [projects.id]
	}),
}));

export const projectsRelations = relations(projects, ({many}) => ({
	projectFiles: many(projectFiles),
	projectImages: many(projectImages),
}));

export const projectImagesRelations = relations(projectImages, ({one}) => ({
	project: one(projects, {
		fields: [projectImages.projectId],
		references: [projects.id]
	}),
}));