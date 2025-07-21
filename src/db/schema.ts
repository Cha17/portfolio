// Import necessary types from Drizzle ORM for PostgreSQL
import { pgTable, serial, text, integer, timestamp, varchar, boolean } from "drizzle-orm/pg-core";

// Define the skills table
export const skills = pgTable("skills", {
  // Primary key: Automatically increments for each new skill
  id: serial("id").primaryKey(),
  // Name of the skill (e.g., "React & Next.js")
  name: varchar("name", { length: 100 }).notNull(),
  // Category of the skill (e.g., "Frontend Development", "Backend Development")
  category: varchar("category", { length: 100 }).notNull(),
  // Skill proficiency level from 0-100
  status: text("status").notNull(),
  // Detailed description of the skill
  description: text("description").notNull(),
  // Automatically set to current timestamp when record is created
  created_at: timestamp("created_at").defaultNow().notNull(),
  // Automatically set to current timestamp when record is updated
  updated_at: timestamp("updated_at").defaultNow().notNull(),
});


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
	displayPdf: boolean("display_pdf").notNull().default(false),
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


// Type for reading a skill from the database
export type Skill = typeof skills.$inferSelect;

// Type for inserting a new skill into the database
export type NewSkill = typeof skills.$inferInsert;

export type SkillStatus = 'Beginner' | 'Intermediate' | 'Competent' | 'Experienced';
