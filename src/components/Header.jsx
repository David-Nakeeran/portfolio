export default function Header() {
  return (
    <header className="lg:flex lg:flex-col lg:sticky lg:top-0 pt-24 mb-16 lg:items-start flex-1 max-w-2xl px-6">
      <div>
        <h1 className="font-bold text-5xl mb-3">David Nakeeran</h1>
        <h2 className="text-xl text-[#9ca3af] mb-3">Web Developer</h2>
        <p className="text-[#9ca3af] mb-8">
          Building accessible, user-focused web experiences.
        </p>
        <nav className="">
          <ul>
            <li className="mb-2">
              <a href="#about">About</a>
            </li>
            <li className="mb-2">
              <a href="#stack">Technologies I work with</a>
            </li>
            <li className="mb-2">
              <a href="#projects">Projects</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
