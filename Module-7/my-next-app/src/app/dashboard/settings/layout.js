export default function DashboardLayout({ children }) {
  return (
    <section className="my-2 border border-red-400 p-2">
      <nav className="font-bold border">It is Setting Layout</nav>
      {children}
    </section>
  );
}
