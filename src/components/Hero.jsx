import Button from "./Button";

export default function Hero() {
  return (
    <section className="border-b border-border-soft bg-page">
      <div className="mx-auto grid min-h-[80vh] max-w-content items-center gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
        <div>
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Junior fullstack developer
          </p>
          <h1 className="max-w-3xl text-display text-primary">
            I build fullstack web applications and enjoy learning new
            technologies.
          </h1>
          <p className="mt-6 max-w-reading text-lead text-muted">
            I&apos;m a junior developer from the UK with experience building
            projects using Laravel, Next.js and Node.js. I like creating
            software that solves real problems, and lately I&apos;ve been
            exploring AI agents to better understand how modern AI applications
            work.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="#projects">View my projects</Button>
            <Button
              href="https://github.com/David-Nakeeran"
              variant="secondary"
              external
            >
              View GitHub
            </Button>
          </div>
        </div>
        <div className="overflow-hidden rounded-panel border border-border bg-terminal shadow-terminal">
          <div className="flex items-center gap-2 border-b border-border-soft px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-danger" />
            <span className="h-3 w-3 rounded-full bg-warning" />
            <span className="h-3 w-3 rounded-full bg-success" />
            <span className="ml-3 font-mono text-xs text-text-subtle">
              devmate
            </span>
          </div>
          <div className="space-y-4 p-6 font-mono text-sm leading-7">
            <p className="text-subtle">
              <span className="text-accent">$</span> npm run devmate
            </p>
            <p className="text-secondary">What would you like me to do?</p>
            <p className="text-primary">
              Explain the authentication code in this workspace.
            </p>
            <div className="space-y-2 border-l border-border pl-4">
              <p className="text-info">
                Thinking: I need to inspect the project files.
              </p>
              <p className="text-warning">Tool: listFiles</p>
              <p className="text-warning">Tool: readFile</p>
              <p className="text-success">
                Complete: Authentication flow explained.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
