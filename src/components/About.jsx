import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="border-b border-border-soft bg-page-soft">
      <div className="mx-auto max-w-content px-6 py-20 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <SectionHeading
            sectionLabel="About me"
            title="I enjoy turning ideas into projects people can use."
          />
          <div className="max-w-reading space-y-6 text-base leading-8 text-muted">
            <p>
              I started building websites because I enjoy taking an idea and
              turning it into something that works. Since then, I have built
              fullstack projects using Laravel, Next.js and Node.js, including
              dashboards, role based applications and tools that interact with
              APIs.
            </p>
            <p>
              Most of what I know has come from building projects, getting
              things wrong and working through the problems. I also volunteer
              with a development team, where I&apos;m currently helping review
              and improve their frontend architecture by researching a move from
              InuitCSS to Tailwind CSS and preparing a proposal for their
              Technical Steering Committee. It&apos;s been a great opportunity
              to learn how technical decisions are made on a real project.
            </p>
            <p>
              More recently, I have been experimenting with AI agents and tool
              calling through DevMate. I am still learning, but that is one of
              the things I enjoy most about development: there is always
              something new to explore.
            </p>
            <p>
              I am currently looking for my first professional developer role
              where I can contribute, keep improving and learn from developers
              with more experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
