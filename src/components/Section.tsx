export function Section({
  id,
  eyebrow,
  title,
  children
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="section" id={id}>
      <div className="wrap">
        <div className="sectionTop">
          <div>
            <p className="eyebrow">{eyebrow}</p>
            <h2 className="sectionTitle">{title}</h2>
            <hr className="sectionRule" />
          </div>
        </div>
        {children}
      </div>
    </section>
  );
}
