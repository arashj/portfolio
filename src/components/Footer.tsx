export function Footer({ name, rightsText }: { name: string; rightsText: string }) {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <p>
          © {year} <strong>{name}</strong> {rightsText}
        </p>
      </div>
    </footer>
  );
}
