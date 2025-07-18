// Import necessary types from Drizzle ORM for PostgreSQL
// - pgTable: Creates a new table in PostgreSQL
// - serial: Auto-incrementing integer
// - text: For storing large text data
// - integer: For storing whole numbers
// - timestamp: For storing date and time
// - varchar: For storing strings with a maximum length
import { pgTable, serial, text, integer, timestamp, varchar } from "drizzle-orm/pg-core";

// Define the skills table
// This table stores both the skill and its category information
export const skills = pgTable("skills", {
  // Primary key: Automatically increments for each new skill
  id: serial("id").primaryKey(),
  // Name of the skill (e.g., "React & Next.js")
  name: varchar("name", { length: 100 }).notNull(),
  // Category of the skill (e.g., "Frontend Development", "Backend Development")
  category: varchar("category", { length: 100 }).notNull(),
  // Skill proficiency level from 0-100
  level: integer("level").notNull(),
  // Detailed description of the skill
  description: text("description").notNull(),
  // Order within the category (for display purposes)
  displayOrder: integer("display_order").notNull(),
  // Automatically set to current timestamp when record is created
  createdAt: timestamp("created_at").defaultNow().notNull(),
  // Automatically set to current timestamp when record is updated
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Type for reading a skill from the database
// Uses Drizzle's type inference to match the table structure
export type Skill = typeof skills.$inferSelect;

// Type for inserting a new skill into the database
// Uses Drizzle's type inference to match the table structure
export type NewSkill = typeof skills.$inferInsert;