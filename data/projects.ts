export type ProjectStatusKind = "live" | "development";

export type FeaturedProject = {
  id: string;
  number: string;
  title: string;
  category: string;
  status: string;
  statusKind: ProjectStatusKind;
  description: string;
  technologies: readonly string[];
  featuresLabel: string;
  features: readonly string[];
  liveUrl?: string;
  liveLabel?: string;
  sourceUrl?: string;
  sourceLabel?: string;
  reverse?: boolean;
  visual: "jobcompass" | "coreguard";
};

export type MoreProject = {
  id: string;
  title: string;
  description: string;
  technologies: readonly string[];
  image: string;
  imageAlt: string;
  liveUrl?: string;
  sourceUrl?: string;
};

export const featuredProjects: readonly FeaturedProject[] = [
  {
    id: "jobcompass",
    number: "01",
    title: "JobCompass",
    category: "Full-Stack Web Application",
    status: "Live",
    statusKind: "live",
    description:
      "JobCompass is a full-stack job discovery and application management platform designed to simplify the job search process. It aggregates job listings, applies location and work-mode filtering, supports user authentication, allows users to save jobs and track applications, and provides job compatibility insights.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "REST APIs",
      "Authentication",
      "Vercel",
    ],
    featuresLabel: "Highlights",
    features: [
      "Job search and filtering",
      "Location-aware results",
      "Remote / Hybrid / On-site filters",
      "User authentication",
      "Saved jobs",
      "Application tracking",
      "Job match indicators",
      "External job API integration",
    ],
    liveUrl: "https://job-compass-snowy.vercel.app/",
    liveLabel: "Live project",
    // Provide the JobCompass GitHub URL to enable the Source Code link.
    sourceLabel: "Source code",
    visual: "jobcompass",
  },
  {
    id: "coreguard",
    number: "02",
    title: "CoreGuard",
    category: "System Utility",
    status: "In development",
    statusKind: "development",
    description:
      "CoreGuard is a C++ system utility focused on providing a simple overview of system health and storage usage. The project explores system-level programming through features such as disk usage analysis, CPU and RAM monitoring, health scoring and cleanup recommendations.",
    technologies: ["C++", "Systems Programming", "Windows"],
    featuresLabel: "Concepts in progress",
    features: [
      "System health score",
      "CPU usage",
      "RAM usage",
      "Disk usage",
      "Free disk space",
      "Disk status classification",
      "Cleanup recommendations",
      "Multiple drive information",
    ],
    sourceLabel: "View source",
    reverse: true,
    visual: "coreguard",
  },
];

export const moreProjects: readonly MoreProject[] = [
  {
    id: "employee-management",
    title: "Employee Management System",
    description:
      "Native Android application developed in Kotlin implementing full CRUD operations with Room database persistence. Designed with RecyclerView, multiple activities/fragments, and MVVM architecture to ensure scalable and maintainable code structure.",
    technologies: [
      "Kotlin",
      "Android Studio",
      "RecyclerView",
      "Room Database",
      "MVVM Architecture",
    ],
    image: "/img/emp_management_project.png",
    imageAlt: "Employee Management System Android app screens",
  },
  {
    id: "gallery",
    title: "Gallery",
    description:
      "A photo gallery created as my first project using ReactJS, SASS, Pexels API and Axios.",
    technologies: ["ReactJS", "SASS", "Axios", "React Context", "React Hooks"],
    image: "/img/gallery.png",
    imageAlt: "Gallery project interface",
    liveUrl: "https://gallery-blue.vercel.app/",
    sourceUrl: "https://github.com/gabrielabsouza1/gallery",
  },
];
