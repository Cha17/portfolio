ALTER TABLE "skills" ADD COLUMN "status" text NOT NULL;--> statement-breakpoint
ALTER TABLE "skills" DROP COLUMN "level";--> statement-breakpoint
ALTER TABLE "skills" DROP COLUMN "display_order";