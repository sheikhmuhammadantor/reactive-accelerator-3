export default function DashboardLayout({
  children, // will be a page or nested layout
}) {
  return (
    <section className="my-2 ml-4 border border-blue-500 p-2">
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav className="text-lg font-bold p-2 border my-2">
        It is Dashboard Layout
      </nav>

      {children}
    </section>
  );
}
