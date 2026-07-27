import Badge from "./Badge";
import Button from "./Button";
import SectionHeading from "./SectionHeading";
import Image from "next/image";

export default function FeaturedProject({ project }) {
  return (
    <section id="projects" className="border-b border-border-soft bg-page-soft">
      <div className="mx-auto max-w-content px-6 py-20 lg:py-28">
        <SectionHeading
          sectionLabel={project.sectionLabel}
          title={project.title}
          description={project.shortDescription}
        />
        <div className="mt-12 grid items-start gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="overflow-hidden rounded-image border border-border bg-terminal shadow-terminal">
            <Image
              src={project.image}
              alt={`${project.title} screenshot`}
              width={1600}
              height={900}
              className="h-auto w-full"
              priority
            />
          </div>
          <div>
            <p className="text-base leading-8 text-muted">
              {project.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <Badge key={technology}>{technology}</Badge>
              ))}
            </div>
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-primary">
                What I built
              </h3>
              <ul className="mt-4 space-y-3">
                {project.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-3 text-text-secondary"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                    />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href={project.githubUrl} variant="primary" external>
                View code
              </Button>
              {project.liveUrl && (
                <Button href={project.liveUrl} variant="secondary" external>
                  Live project
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
