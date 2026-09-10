export type SkillGroup = {
  id: string;
  label: string;
  items: readonly string[];
};

export const skillGroups: readonly SkillGroup[] = [
  {
    id: "frontend",
    label: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "Responsive Design",
    ],
  },
  {
    id: "backend",
    label: "Backend",
    items: [
      "Node.js",
      "Python",
      "REST APIs",
      "Next.js API Routes",
      "Server-Side Development",
    ],
  },
  {
    id: "databases",
    label: "Databases",
    items: ["PostgreSQL", "SQL", "Supabase", "Relational Databases"],
  },
  {
    id: "cloud",
    label: "Cloud & DevOps",
    items: ["AWS", "Docker", "CI/CD", "GitHub Actions", "Vercel"],
  },
  {
    id: "testing",
    label: "Testing & Quality",
    items: ["Jest", "Cypress", "Postman", "Debugging", "API Testing"],
  },
  {
    id: "tools",
    label: "Tools & Other",
    items: ["Git", "GitHub", "VS Code", "WordPress", "Shopify", "Agile", "Scrum"],
  },
];

export const exploringSkills = {
  id: "exploring",
  label: "Currently exploring",
  items: ["C++"],
} as const;
