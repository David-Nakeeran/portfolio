export default function Main() {
  return (
    <main className="flex-1 w-full max-w-4xl mx-auto px-6 lg:px-0">
      <div className="max-w-6xl lg:mx-auto">
        <section id="about" className="mb-16">
          <div className="px-6 lg:px-0 sm:mb-1 mb-4">
            <h2 className="lg:text-lg text-sm font-bold uppercase leading-8">
              About
            </h2>
          </div>
          <div className="py-2 px-6 lg:px-0 text-[#9ca3af]">
            <p className="mb-4 text-base lg:text-lg">
              I’m a full stack developer passionate about building web
              applications that are both functional and accessible. I focus on
              creating experiences that are intuitive for all users, making
              accessibility a core part of every project I take on. I enjoy
              thinking through how both the frontend and backend can work
              together seamlessly to deliver tools people actually find useful.
            </p>

            <p className="mb-4 text-base lg:text-lg">
              My work includes projects like{" "}
              <span className="font-semibold">ThoughtNest</span>, a mental
              health journaling platform designed to support wellbeing, and a{" "}
              <span className="font-semibold">Job Tracker</span>, a tool to
              manage and monitor applications. In both, I handled everything
              from the user interface to backend logic, ensuring that the
              applications not only work reliably but are easy for users to
              interact with. Building practical solutions that balance design,
              functionality, and accessibility is what drives me.
            </p>

            <p className="mb-4 text-base lg:text-lg">
              Outside of coding, I enjoy exploring new technologies,
              experimenting with different ways to improve user experiences, and
              playing video games. I also find satisfaction in refining the
              small touches that make websites feel polished and enjoyable to
              use. Whether it’s a subtle animation, a thoughtful layout, or
              improving accessibility for all users, these details are what make
              building web applications so rewarding to me.
            </p>
          </div>
        </section>

        <section id="stack" className="mb-16">
          <div className="px-6 lg:px-0 sm:mb-1 mb-4">
            <h2 className="lg:text-lg text-sm font-bold uppercase leading-8">
              Technologies I work with
            </h2>
          </div>
          <div className="py-2 px-6 lg:px-0 text-[#9ca3af] text-base lg:text-lg">
            <ul>
              <li className="mb-2 text-base lg:text-lg">
                Frontend: React, Next.js, JavaScript, TypeScript, Tailwind CSS
              </li>
              <li className="mb-2">
                Backend: PHP, Laravel, Node.js, Express.js
              </li>
              <li className="mb-2">Database: PostgreSQL</li>
              <li className="mb-2">Tools & Services: Git, Clerk, Supabase</li>
            </ul>
          </div>
        </section>

        <section id="projects" className="mb-16">
          <div className="px-6 lg:px-0 sm:mb-1 mb-4">
            <h2 className="lg:text-lg text-sm font-bold uppercase leading-8">
              Projects
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 py-3 px-6 lg:px-0 lg:text-lg">
            <div className="group rounded-xl bg-[#161a22] p-6 shadow-lg shadow-black/20 transition hover:-translate-y-1 hover:shadow-amber-500/10 flex flex-col hover:scale-105">
              <div className="flex-1 flex flex-col">
                <h3 className="text-xl font-semibold text-[#e5e7eb]">
                  ThoughtNest
                </h3>
                <p className="mt-2 text-[#9ca3af] leading-relaxed">
                  A safe and accessible space for users to reflect on their
                  thoughts, track their wellbeing, and receive subtle guidance.
                  I built the full interface and backend to make journaling
                  simple, reliable, and intuitive.
                </p>
                <ul className="mt-4 mb-4 flex flex-wrap gap-2 lg:text-lg">
                  <li className="rounded-full bg-amber-500/10 px-3 py-1 text-sm text-amber-400">
                    Laravel
                  </li>
                  <li className="rounded-full bg-amber-500/10 px-3 py-1 text-sm text-amber-400">
                    PHP
                  </li>
                  <li className="rounded-full bg-amber-500/10 px-3 py-1 text-sm text-amber-400">
                    Alpine.js
                  </li>
                  <li className="rounded-full bg-amber-500/10 px-3 py-1 text-sm text-amber-400">
                    PostgreSQL
                  </li>
                  <li className="rounded-full bg-amber-500/10 px-3 py-1 text-sm text-amber-400">
                    Blade
                  </li>
                  <li className="rounded-full bg-amber-500/10 px-3 py-1 text-sm text-amber-400">
                    Tailwind CSS
                  </li>
                </ul>
              </div>
              <div className="mt-auto flex gap-4 text-sm font-medium">
                <a
                  className="text-[#e5e7eb] hover:text-amber-400 transition"
                  href="https://github.com/David-Nakeeran/thoughtnest"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>

            <div className="group rounded-xl bg-[#161a22] p-6 shadow-lg shadow-black/20 transition hover:-translate-y-1 hover:shadow-amber-500/10 flex flex-col hover:scale-105">
              <div className="flex-1 flex flex-col">
                <h3 className="text-xl font-semibold text-[#e5e7eb]">
                  Job Application Tracker
                </h3>
                <p className="mt-2 text-[#9ca3af] leading-relaxed">
                  A streamlined tool to help users organise and monitor their
                  job applications efficiently. I designed both the frontend and
                  backend to create a clean, accessible experience that makes
                  tracking progress effortless.
                </p>
                <ul className="mt-4 mb-4 flex flex-wrap gap-2 lg:text-lg">
                  <li className="rounded-full bg-amber-500/10 px-3 py-1 text-sm text-amber-400">
                    React
                  </li>
                  <li className="rounded-full bg-amber-500/10 px-3 py-1 text-sm text-amber-400">
                    Next.js
                  </li>
                  <li className="rounded-full bg-amber-500/10 px-3 py-1 text-sm text-amber-400">
                    TypeScript
                  </li>
                  <li className="rounded-full bg-amber-500/10 px-3 py-1 text-sm text-amber-400">
                    Tailwind
                  </li>
                  <li className="rounded-full bg-amber-500/10 px-3 py-1 text-sm text-amber-400">
                    PostgreSQL
                  </li>
                </ul>
              </div>

              <div className="mt-auto flex gap-4 text-sm font-medium">
                <a
                  className="text-[#e5e7eb] hover:text-amber-400 transition"
                  href="https://github.com/David-Nakeeran/job-tracker"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  className="text-amber-400 hover:underline"
                  href="https://job-tracker-ten-xi.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
