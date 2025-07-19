// Import necessary types from Drizzle ORM for PostgreSQL
import { pgTable, serial, text, integer, timestamp, varchar } from "drizzle-orm/pg-core";

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

// Type for reading a skill from the database
export type Skill = typeof skills.$inferSelect;

// Type for inserting a new skill into the database
export type NewSkill = typeof skills.$inferInsert;

export type SkillStatus = 'Beginner' | 'Intermediate' | 'Competent' | 'Experienced';
