CREATE TABLE "project_files" (
	"id" text PRIMARY KEY NOT NULL,
	"project_id" text NOT NULL,
	"file_url" text NOT NULL,
	"file_name" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "project_images" (
	"id" text PRIMARY KEY NOT NULL,
	"project_id" text NOT NULL,
	"image_url" text NOT NULL,
	"image_name" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "projects" (
	"id" text PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"description" text NOT NULL,
	"full_description" text,
	"features" text[],
	"image_url" text,
	"live_url" text,
	"github_url" text,
	"technologies" text[],
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "project_files" ADD CONSTRAINT "project_files_project_id_projects_id_fk" FOREIGN KEY ("project_id") REFERENCES "public"."projects"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "project_images" ADD CONSTRAINT "project_images_project_id_projects_id_fk" FOREIGN KEY ("project_id") REFERENCES "public"."projects"("id") ON DELETE no action ON UPDATE no action;