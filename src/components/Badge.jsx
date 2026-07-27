export default function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-button border border-border bg-surface-raised px-3 py-1 text-sm font-medium text-secondary">
      {children}
    </span>
  );
}
