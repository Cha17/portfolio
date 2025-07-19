ALTER TABLE "projects" ALTER COLUMN "id" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "projects" ALTER COLUMN "id" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "projects" ALTER COLUMN "full_description" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "projects" ALTER COLUMN "features" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "projects" ALTER COLUMN "image_url" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "projects" ALTER COLUMN "technologies" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "projects" DROP COLUMN "display_pdf";