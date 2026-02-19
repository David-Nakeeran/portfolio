export default function Header() {
  return (
    <header className="pt-24 pb-16 text-center">
      <div>
        <h1 className="font-bold text-5xl mb-3">David Nakeeran</h1>
        <h2 className="text-[#9ca3af] mb-4 text-base lg:text-lg">
          Web Developer
        </h2>
        <p className="text-[#9ca3af] mb-8 max-w-xl mx-auto text-base lg:text-lg">
          Building accessible, user-focused web experiences.
        </p>
        <nav>
          <ul className="flex flex-wrap justify-center gap-6 text-sm font-medium lg:text-lg">
            <li className="mb-2">
              <a
                href="#about"
                className="relative inline-block  after:block after:h-0.5 after:w-0 after:bg-amber-400/80 after:absolute 
               after:left-0 after:bottom-0 after:transition-all after:duration-300
               hover:after:w-full after:ease-out"
              >
                About
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#stack"
                className="relative inline-block  after:block after:h-0.5 after:w-0 after:bg-amber-400/80 after:absolute 
               after:left-0 after:bottom-0 after:transition-all after:duration-300
               hover:after:w-full after:ease-out"
              >
                Technologies I work with
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#projects"
                className="relative inline-block  after:block after:h-0.5 after:w-0 after:bg-amber-400/80 after:absolute 
               after:left-0 after:bottom-0 after:transition-all after:duration-300
               hover:after:w-full after:ease-out"
              >
                Projects
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
