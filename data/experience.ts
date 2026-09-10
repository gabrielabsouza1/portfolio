export type Experience = {
  id: string;
  yearRange: string;
  dates: string;
  role: string;
  company: string;
  location: string;
  description: string;
  technologies: readonly string[];
};

export const experiences: readonly Experience[] = [
  {
    id: "leadster",
    yearRange: "2022 — 2024",
    dates: "Jan 2022 — Aug 2024",
    role: "Full-Stack Developer",
    company: "Leadster",
    location: "Brazil",
    description:
      "Developed and maintained modern web applications across front-end and back-end environments using JavaScript, TypeScript, React, Next.js, Python and SQL. Built responsive interfaces, reusable components, SPA and SSR applications, integrated REST APIs and backend services, and contributed to server-side and data-driven functionality. Also worked on performance optimization, existing web applications and collaborative Agile/Scrum development workflows.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Python",
      "SQL",
      "REST APIs",
    ],
  },
  {
    id: "casa-do-no-break",
    yearRange: "2020 — 2022",
    dates: "Dec 2020 — Jan 2022",
    role: "Web Developer",
    company: "Casa do No Break",
    location: "Brazil",
    description:
      "Developed and maintained responsive websites and web applications using HTML, CSS, JavaScript and WordPress across desktop and mobile devices. Implemented interactive functionality, debugged front-end issues and improved usability, performance and cross-browser compatibility while translating business requirements into technical solutions.",
    technologies: ["JavaScript", "HTML", "CSS", "WordPress"],
  },
];
