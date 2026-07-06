export function SectionHeading({
  index,
  label,
}: {
  index: string;
  label: string;
}) {
  return (
    <div className="mb-12 flex items-baseline gap-4 border-b border-line pb-4">
      <span className="text-3xl font-extrabold text-subtle">{index}</span>
      <h2 className="font-mono text-xs uppercase tracking-[0.25em] text-muted">
        {label}
      </h2>
    </div>
  );
}
