import Badge from "./Badge";
import SectionHeading from "./SectionHeading";

const skillGroups = [
  {
    title: "Languages",
    skills: ["PHP", "JavaScript", "C#", "SQL", "HTML", "CSS"],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      "Laravel",
      "Next.js",
      "React",
      "Node.js",
      "Express",
      "Tailwind CSS",
      "Alpine.js",
    ],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "SQLite", "MySQL"],
  },
  {
    title: "Tools & Platforms",
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "Clerk",
      "Chart.js",
      "REST APIs",
      ".NET",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="border-b border-border-soft bg-page">
      <div className="mx-auto max-w-content px-6 py-20 lg:py-28">
        <SectionHeading
          sectionLabel="Skills"
          title="Technologies I enjoy working with"
          description="These are the technologies I've been using across my recent projects."
        />

        <div className="mt-12 space-y-10">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="mb-4 text-lg font-semibold text-primary">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
