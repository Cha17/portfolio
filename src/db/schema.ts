// Import necessary types from Drizzle ORM for PostgreSQL
import { pgTable, text, boolean, timestamp, uuid } from "drizzle-orm/pg-core";

// Define the skills table
export const skills = pgTable("skills", {
  // Primary key: Automatically increments for each new skill
  id: uuid("id").primaryKey(),
  // Name of the skill (e.g., "React & Next.js")
  name: text("name").notNull(),
  // Category of the skill (e.g., "Frontend Development", "Backend Development")
  category: text("category").notNull(),
  // Skill proficiency level from 0-100
  status: text("status").notNull(),
  // Description of the skill and experience
  description: text("description").notNull(),
  // Timestamps for record keeping
  created_at: timestamp("created_at").defaultNow(),
  updated_at: timestamp("updated_at").defaultNow(),
});

// Define the projects table
export const projects = pgTable("projects", {
  id: uuid("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  full_description: text("full_description"),
  image_url: text("image_url"),
  technologies: text("technologies").array(),
  features: text("features").array(),
  github_url: text("github_url"),
  live_url: text("live_url"),
  display_pdf: boolean("display_pdf").default(false),
  created_at: timestamp("created_at").defaultNow(),
  updated_at: timestamp("updated_at").defaultNow(),
});

// Define the project images table
export const project_images = pgTable("project_images", {
  id: uuid("id").primaryKey(),
  project_id: uuid("project_id")
    .notNull()
    .references(() => projects.id),
  image_url: text("image_url").notNull(),
  image_name: text("image_name").notNull(),
});

// Define the project files table
export const project_files = pgTable("project_files", {
  id: uuid("id").primaryKey(),
  project_id: uuid("project_id")
    .notNull()
    .references(() => projects.id),
  file_url: text("file_url").notNull(),
  file_name: text("file_name").notNull(),
});


// Type for reading a skill from the database
export type Skill = typeof skills.$inferSelect;

// Type for inserting a new skill into the database
export type NewSkill = typeof skills.$inferInsert;

export type SkillStatus = 'Beginner' | 'Intermediate' | 'Competent' | 'Experienced';
