export default function AboutLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
      <p>About Layout</p>
    </div>
  );
}
