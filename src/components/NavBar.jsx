import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border-soft bg-page/90 backdrop-blur">
      <nav className="mx-auto flex max-w-content items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold text-primary">
          David Nakeeran
        </Link>
        <div className="flex items-center gap-5 text-sm text-muted">
          <Link
            href="#projects"
            className="transition-colors hover:text-primary"
          >
            Projects
          </Link>
          <Link href="#about" className="transition-colors hover:text-primary">
            About
          </Link>
          <Link href="#skills" className="transition-colors hover:text-primary">
            Skills
          </Link>
          <Link
            href="#contact"
            className="transition-colors hover:text-primary"
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
