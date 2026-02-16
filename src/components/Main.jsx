export default function Main() {
  return (
    <main>
      <section>
        <h2>About</h2>
        <p>
          I’m a full stack developer passionate about building web applications
          that are both functional and accessible. I focus on creating
          experiences that are intuitive for all users, making accessibility a
          core part of every project I take on. I enjoy thinking through how
          both the frontend and backend can work together seamlessly to deliver
          tools people actually find useful.
        </p>

        <p>
          My work includes projects like{" "}
          <span className="font-semibold">ThoughtNest</span>, a mental health
          journaling platform designed to support wellbeing, and a{" "}
          <span className="font-semibold">Job Tracker</span>, a tool to manage
          and monitor applications. In both, I handled everything from the user
          interface to backend logic, ensuring that the applications not only
          work reliably but are easy for users to interact with. Building
          practical solutions that balance design, functionality, and
          accessibility is what drives me.
        </p>

        <p>
          Outside of coding, I enjoy exploring new technologies, experimenting
          with different ways to improve user experiences, and playing video
          games. I also find satisfaction in refining the small touches that
          make websites feel polished and enjoyable to use. Whether it’s a
          subtle animation, a thoughtful layout, or improving accessibility for
          all users, these details are what make building web applications so
          rewarding to me.
        </p>
      </section>

      <section>
        <h2>Technologies I work with</h2>

        <ul>
          <li>
            Frontend: React, Next.js, JavaScript, TypeScript, Tailwind CSS
          </li>
          <li>Backend: PHP, Laravel, Node.js, Express.js</li>
          <li>Database: PostgreSQL</li>
          <li>Tools & Services: Git, Clerk, Supabase</li>
        </ul>
      </section>

      <section>
        <h2>Projects</h2>
        <div>
          <div>
            <h3>ThoughtNest</h3>
            <p>
              A full-stack journaling platform designed for mental wellbeing,
              with a focus on accessibility and intuitive UI.
            </p>
            <ul>
              <li>Laravel</li>
              <li>PHP</li>
              <li>Alpine.js</li>
              <li>PostgreSQL</li>
              <li>Blade</li>
              <li>Tailwind CSS</li>
            </ul>
            <div>
              <a
                href="https://github.com/David-Nakeeran/thoughtnest"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div>
          <div>
            <h3>Job Application Tracker</h3>
            <p>
              A full-stack job application tracker to help users manage their
              applications efficiently, built with accessible design principles.
            </p>
            <ul>
              <li>Next.js</li>
              <li>TypeScript</li>
              <li>Tailwind</li>
              <li>PostgreSQL</li>
            </ul>
            <div>
              <a
                href="https://github.com/David-Nakeeran/job-tracker"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
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
    </main>
  );
}
