export default function SectionHeading({
  sectionLabel,
  title,
  description,
  align = "left",
}) {
  const alignment = align === "center" ? "text-center" : "text-left";

  return (
    <div className={alignment}>
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
        {sectionLabel}
      </p>

      <h2 className="text-section text-primary">{title}</h2>

      {description && (
        <p className="mt-4 max-w-reading text-lead text-muted">{description}</p>
      )}
    </div>
  );
}
