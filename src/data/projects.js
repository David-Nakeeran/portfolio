export const projects = [
  {
    id: "devmate",
    title: "DevMate CLI",
    sectionLabel: "Featured project",
    shortDescription:
      "An AI developer assistant that can inspect a codebase and use tools to complete tasks.",
    description:
      "I built DevMate to understand how AI agents can move beyond simple chat responses and interact with a real development workspace.",
    technologies: [
      "Node.js",
      "JavaScript",
      "Gemini API",
      "Tool Calling",
      "fs/promises",
    ],
    image: "/projects/devmate/terminal-main.png",
    githubUrl: "https://github.com/David-Nakeeran/devmate",
    liveUrl: null,
    highlights: [
      "Iterative agent loop",
      "Workspace aware tools",
      "Structured tool calling",
      "Separation between reasoning and execution",
    ],
  },

  {
    id: "thoughtnest",
    title: "ThoughtNest",
    sectionLabel: "Full stack application",
    shortDescription:
      "A role based mental health journaling application for users, therapists and administrators.",
    description:
      "ThoughtNest allows users to record journals and mood check ins while assigned therapists can review relevant information and provide supportive comments.",
    technologies: [
      "Laravel",
      "PHP",
      "Alpine.js",
      "Tailwind CSS",
      "Chart.js",
      "Pest",
    ],
    image: "/projects/thoughtnest/dashboard.png",
    githubUrl: "https://github.com/David-Nakeeran/thoughtnest",
    liveUrl: "https://thoughtnest-production-zbelug.laravel.cloud",
    highlights: [
      "Role based access control",
      "Laravel policies and middleware",
      "Mood tracking and charts",
      "Therapist and administrator workflows",
    ],
  },

  {
    id: "job-tracker",
    title: "Job Tracker",
    sectionLabel: "Web application",
    shortDescription:
      "A responsive application for organising and tracking job applications.",
    description:
      "Job Tracker provides one place to add, update, filter and monitor applications throughout the recruitment process.",
    technologies: [
      "Next.js",
      "React",
      "JavaScript",
      "PostgreSQL",
      "Clerk",
      "Tailwind CSS",
      "Zod",
    ],
    image: "/projects/job-tracker/dashboard.png",
    githubUrl: "https://github.com/David-Nakeeran/job-tracker",
    liveUrl: "https://job-tracker-ten-xi.vercel.app/",
    highlights: [
      "Authentication with Clerk",
      "CRUD application management",
      "Form validation with Zod",
      "Responsive dashboard",
    ],
  },
];
