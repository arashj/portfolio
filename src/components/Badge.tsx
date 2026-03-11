export function Badge({ text }: { text: string }) {
  return (
    <span className="badge" role="listitem">
      {text}
    </span>
  );
}
