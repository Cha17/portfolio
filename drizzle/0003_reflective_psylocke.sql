ALTER TABLE "projects" ALTER COLUMN "id" SET DATA TYPE uuid;--> statement-breakpoint
ALTER TABLE "projects" ALTER COLUMN "id" SET DEFAULT gen_random_uuid();--> statement-breakpoint
ALTER TABLE "projects" ALTER COLUMN "full_description" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "projects" ALTER COLUMN "features" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "projects" ALTER COLUMN "image_url" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "projects" ALTER COLUMN "technologies" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "projects" ADD COLUMN "display_pdf" boolean DEFAULT false NOT NULL;