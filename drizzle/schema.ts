import { pgTable, serial, varchar, text, timestamp, pgEnum } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"

export const skillLevel = pgEnum("skill_level", ['Beginner', 'Intermediate', 'Competent', 'Experienced'])
export const skillStatus = pgEnum("skill_status", ['Beginner', 'Intermediate', 'Competent', 'Experienced'])


export const skills = pgTable("skills", {
	id: serial().primaryKey().notNull(),
	name: varchar({ length: 100 }).notNull(),
	category: varchar({ length: 100 }).notNull(),
	description: text().notNull(),
	status: skillStatus().default('Beginner').notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow().notNull(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow().notNull(),
});
