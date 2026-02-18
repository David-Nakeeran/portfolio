"use client";
import { useEffect } from "react";
export default function Main() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-6");
            entry.target.classList.add("opacity-100", "translate-y-0");
          }
        });
      },
      { threshold: 0.15 },
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="lg:pt-25 lg:pr-10 flex-1 lg:pl-6">
      <div className="max-w-6xl lg:mx-auto">
        <section
          id="about"
          className="mb-6 reveal opacity-0 translate-y-6 transition-all duration-1000 ease-out"
        >
          <div className="px-6 lg:px-0">
            <h2 className="text-sm font-bold uppercase">About</h2>
          </div>
          <div className="py-2 px-6 lg:px-0 text-[#9ca3af]">
            <p className="mb-4">
              I’m a full stack developer passionate about building web
              applications that are both functional and accessible. I focus on
              creating experiences that are intuitive for all users, making
              accessibility a core part of every project I take on. I enjoy
              thinking through how both the frontend and backend can work
              together seamlessly to deliver tools people actually find useful.
            </p>

            <p className="mb-4">
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

            <p className="mb-4">
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

        <section
          id="stack"
          className="mb-6 reveal opacity-0 translate-y-6 transition-all duration-1000 ease-out"
        >
          <div className="py-5 px-6 lg:px-0">
            <h2 className="text-sm font-bold uppercase">
              Technologies I work with
            </h2>
          </div>
          <div className="py-2 px-6 lg:px-0 text-[#9ca3af]">
            <ul>
              <li className="mb-2">
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

        <section
          id="projects"
          className="mb-6 reveal opacity-0 translate-y-6 transition-all duration-1000 ease-out"
        >
          <div className="py-5 px-6 lg:px-0">
            <h2 className="text-sm font-bold uppercase">Projects</h2>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 py-2 px-6 lg:px-0">
            <div className="group rounded-xl bg-[#161a22] p-6 shadow-lg shadow-black/20 transition hover:-translate-y-1 hover:shadow-amber-500/10">
              <div>
                <h3 className="text-xl font-semibold text-[#e5e7eb]">
                  ThoughtNest
                </h3>
                <p className="mt-2 text-[#9ca3af] leading-relaxed">
                  A full-stack journaling platform designed for mental
                  wellbeing, with a focus on accessibility and intuitive UI.
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
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
                <div className="mt-6 flex gap-4 text-sm font-medium">
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
            </div>

            <div className="group rounded-xl bg-[#161a22] p-6 shadow-lg shadow-black/20 transition hover:-translate-y-1 hover:shadow-amber-500/10">
              <div>
                <h3 className="text-xl font-semibold text-[#e5e7eb]">
                  Job Application Tracker
                </h3>
                <p className="mt-2 text-[#9ca3af] leading-relaxed">
                  A full-stack job application tracker to help users manage
                  their applications efficiently, built with accessible design
                  principles.
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
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
                <div className="mt-6 flex gap-4 text-sm font-medium">
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
          </div>
        </section>
      </div>
    </main>
  );
}
