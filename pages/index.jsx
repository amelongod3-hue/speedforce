export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <section className="max-w-4xl mx-auto text-center py-20">
        <h1 className="text-5xl font-bold mb-6">SpeedForce Browser</h1>
        <p className="text-xl mb-8">
          The fastest browser built for speed, privacy, and style.
        </p>
        <a
          href="#"
          className="inline-block bg-white text-black font-semibold px-8 py-4 rounded-2xl shadow-lg transition hover:bg-gray-300"
        >
          Download for Windows
        </a>
      </section>

      <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 py-16">
        <div>
          <h2 className="text-2xl font-semibold mb-2">⚡ Blazing Fast</h2>
          <p>Built on Chromium for lightning-fast page loads and smooth performance.</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">🧩 Tabbed Browsing</h2>
          <p>Work smarter with full tab support and fast switching.</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">🎨 Custom Dark UI</h2>
          <p>Dark mode by default, with a sleek and modern interface.</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">🔒 Privacy Focused</h2>
          <p>No tracking, no ads — your data stays yours.</p>
        </div>
      </section>

      <footer className="text-center py-12 text-gray-400">
        &copy; {new Date().getFullYear()} SpeedForce. All rights reserved.
      </footer>
    </main>
  );
}
