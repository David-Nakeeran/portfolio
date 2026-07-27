import Link from "next/link";

export default function Button({
  href,
  children,
  variant = "primary",
  external = false,
}) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-button px-5 py-3 text-sm font-medium transition-colors";

  const variants = {
    primary: "bg-accent text-page hover:bg-accent-hover",

    secondary:
      "border border-border bg-surface text-primary hover:bg-surface-hover",
  };

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClasses} ${variants[variant]}`}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={`${baseClasses} ${variants[variant]}`}>
      {children}
    </Link>
  );
}
