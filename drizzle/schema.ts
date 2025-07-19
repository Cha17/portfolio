import { pgTable, serial, varchar, text, timestamp, pgEnum } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"

export const skillLevel = pgEnum("skill_level", ['Beginner', 'Intermediate', 'Competent', 'Experienced'])
export const skillStatus = pgEnum("skill_status", ['Beginner', 'Intermediate', 'Competent', 'Experienced'])

export const projects = pgTable("projects", {
	id: text("id").primaryKey().notNull(), // e.g., 'prj-1'
	title: text("title").notNull(),
	description: text("description").notNull(),
	fullDescription: text("full_description"),
	features: text("features").array(),
	imageUrl: text("image_url"), // main project image from Google Drive
	liveUrl: text("live_url"),
	githubUrl: text("github_url"),
	technologies: text("technologies").array(),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow().notNull(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow().notNull(),
});

export const projectImages = pgTable("project_images", {
	id: text("id").primaryKey().notNull(), // e.g., 'img-1'
	projectId: text("project_id").references(() => projects.id).notNull(),
	imageUrl: text("image_url").notNull(), // Google Drive link
	imageName: text("image_name").notNull(),
});

export const projectFiles = pgTable("project_files", {
	id: text("id").primaryKey().notNull(), // e.g., 'file-1'
	projectId: text("project_id").references(() => projects.id).notNull(),
	fileUrl: text("file_url").notNull(), // Google Drive link
	fileName: text("file_name").notNull(),
});

export const skills = pgTable("skills", {
	id: serial().primaryKey().notNull(),
	name: varchar({ length: 100 }).notNull(),
	category: varchar({ length: 100 }).notNull(),
	description: text().notNull(),
	status: skillStatus().default('Beginner').notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow().notNull(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow().notNull(),
});
