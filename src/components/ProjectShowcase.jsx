import Image from "next/image";
import Badge from "./Badge";
import Button from "./Button";
import SectionHeading from "./SectionHeading";

export default function ProjectShowcase({ project, imagePosition = "left" }) {
  const imageOrder = imagePosition === "right" ? "lg:order-2" : "lg:order-1";

  const contentOrder = imagePosition === "right" ? "lg:order-1" : "lg:order-2";

  return (
    <section className="border-b border-border-soft bg-page">
      <div className="mx-auto max-w-content px-6 py-20 lg:py-28">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div
            className={`overflow-hidden rounded-image border border-border bg-surface shadow-panel ${imageOrder}`}
          >
            <Image
              src={project.image}
              alt={`${project.title} project screenshot`}
              width={1600}
              height={900}
              className="h-auto w-full"
            />
          </div>
          <div className={contentOrder}>
            <SectionHeading
              sectionLabel={project.sectionLabel}
              title={project.title}
              description={project.shortDescription}
            />
            <p className="mt-6 leading-8 text-muted">{project.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <Badge key={technology}>{technology}</Badge>
              ))}
            </div>
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-primary">
                Key features
              </h3>
              <ul className="mt-4 space-y-3">
                {project.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-3 text-secondary"
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
              <Button href={project.githubUrl} external>
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
