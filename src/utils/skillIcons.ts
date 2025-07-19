// Map of skill names to their corresponding Iconify icon names
export const skillIconMap: Record<string, string> = {
  // Frontend Development
  "React": "logos:react",
  "Next.js": "logos:nextjs-icon",
  "TypeScript": "logos:typescript-icon",
  "JavaScript": "logos:javascript",
  "HTML": "logos:html-5",
  "CSS": "logos:css-3",
  "Tailwind CSS": "logos:tailwindcss-icon",
  "Material-UI": "logos:material-ui",
  "Bootstrap": "logos:bootstrap",
  "Vite": "logos:vite",

  // Backend Development
  "Node.js": "logos:nodejs-icon",
  "Express": "logos:express",
  "Python": "logos:python",
  "PHP": "logos:php",
  "Laravel": "logos:laravel",
  "Flask": "logos:flask",
  "PostgreSQL": "logos:postgresql",
  "MySQL": "logos:mysql",
  "MongoDB": "logos:mongodb-icon",
  "Redis": "logos:redis",
  "GraphQL": "logos:graphql",
  "REST API": "vscode-icons:file-type-rest",
  "Drizzle": "logos:drizzle",
  "Kysely": "logos:kysely",

  // Mobile Development
  "Flutter": "logos:flutter",
  "Swift": "logos:swift",
  "Kotlin": "logos:kotlin",
  "Android Studio": "logos:android-studio",

  // Design
  "Figma": "logos:figma",
  "Adobe XD": "logos:adobe-xd",
  "Adobe Photoshop": "logos:adobe-photoshop",
  "Adobe Illustrator": "logos:adobe-illustrator",
  "Canva": "simple-icons:canva",
  "Inkscape": "simple-icons:inkscape",

  // DevOps & Cloud
  "Docker": "logos:docker-icon",
  "AWS": "logos:aws",
  "Firebase": "logos:firebase",
  "Supabase": "logos:supabase",
  "Vercel": "logos:vercel",
  "Linux": "logos:linux-tux",

  // Testing & QA
  "Jest": "logos:jest",
  "Cypress": "logos:cypress",
  "Selenium": "logos:selenium",

  // Version Control
  "Git": "logos:git-icon",
  "GitHub": "logos:github-icon",
  "GitLab": "logos:gitlab",
  "Bitbucket": "logos:bitbucket",

  // Others
  "VS Code": "logos:visual-studio-code",
  "Webpack": "logos:webpack",
  "npm": "logos:npm-icon",
  "Yarn": "logos:yarn",
  "Postman": "logos:postman-icon",
  "Jira": "logos:jira",
  "Notion": "logos:notion-icon",
  "Slack": "logos:slack-icon",

  // Default icon for skills without a specific icon
  "default": "carbon:skill-level"
};

// Function to get the icon name for a skill
export function getSkillIcon(skillName: string): string {
  // Try to find an exact match
  if (skillIconMap[skillName]) {
    return skillIconMap[skillName];
  }

  // Try to find a partial match
  const partialMatch = Object.keys(skillIconMap).find(key =>
    skillName.toLowerCase().includes(key.toLowerCase())
  );

  if (partialMatch) {
    return skillIconMap[partialMatch];
  }

  // Return default icon if no match found
  return skillIconMap.default;
} 