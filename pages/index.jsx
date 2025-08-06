import Head from "next/head";
import { motion } from "framer-motion";

const featureList = [
  { title: "Blazing Speed", desc: "Instant page loads, optimized pipeline.", emoji: "⚡" },
  { title: "Dark Mode", desc: "Eye-friendly interface by default.", emoji: "🌙" },
  { title: "Tabbed Browsing", desc: "Organize work with smart tabs.", emoji: "🗂️" },
  { title: "Custom UI", desc: "Tweak themes and layouts to match your vibe.", emoji: "🎨" },
  { title: "Cross-Platform", desc: "Windows now, Linux & Android coming.", emoji: "🌐" },
];

const roadmap = [
  { phase: "Alpha", items: ["Core browser engine", "Dark UI", "Tabs"] },
  { phase: "Beta", items: ["Installer", "Performance tuning", "Sync"] },
  { phase: "1.0", items: ["Linux support", "Extension basics", "Privacy modes"] },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>SpeedForce Browser</title>
        <meta name="description" content="SpeedForce — the techy, ultra-fast browser with dark mode and tabs." />
        <meta property="og:title" content="SpeedForce Browser" />
        <meta property="og:description" content="Built for speed. Designed for power users." />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="sticky top-0 z-50 backdrop-blur-md bg-black/60 py-4 px-6 flex justify-between items-center border-b border-gray-800">
        <div className="flex items-center space-x-3">
          <img src="/logo.png" alt="SpeedForce" className="w-10 h-10" />
          <span className="text-white font-bold text-xl tracking-wide">SpeedForce</span>
        </div>
        <nav className="flex gap-6 text-sm md:text-base">
          <a href="#" className="text-gray-300 hover:text-white transition">Home</a>
          <a href="/features" className="text-gray-300 hover:text-white transition">Features</a>
          <a href="/about" className="text-gray-300 hover:text-white transition">About</a>
          <a href="#roadmap" className="text-gray-300 hover:text-white transition">Roadmap</a>
        </nav>
        <div>
          <a
            href="#"
            className="px-5 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full text-black font-semibold shadow-lg hover:scale-105 transition-transform"
          >
            Download
          </a>
        </div>
      </header>

      <main className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
        {/* Hero */}
        <section className="relative overflow-hidden pt-24 pb-20">
          <div className="absolute inset-0 -z-10">
            <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900 via-black to-black opacity-80" />
            <motion.div
              animate={{ scale: [1, 1.05, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 pointer-events-none blur-3xl"
            >
              <div className="w-full h-full bg-gradient-to-tr from-cyan-500/30 to-purple-500/20 mix-blend-overlay" />
            </motion.div>
          </div>

          <div className="max-w-6xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-12">
            <div className="flex-1">
              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-5xl md:text-6xl font-extrabold leading-tight"
              >
                SpeedForce Browser
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="mt-4 text-lg text-gray-300"
              >
                Techy. Fast. Customizable. Built for power users who value speed and control.
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="mt-8 flex flex-wrap gap-4"
              >
                <a
                  href="#"
                  className="px-7 py-3 bg-white text-black font-semibold rounded-full shadow-lg hover:shadow-xl transition"
                >
                  Download for Windows
                </a>
                <a
                  href="#"
                  className="px-7 py-3 border border-blue-500 text-blue-400 rounded-full font-medium hover:bg-blue-700/30 transition"
                >
                  Join Beta
                </a>
              </motion.div>
            </div>
            <div className="flex-1">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="relative bg-[#0f111a] p-6 rounded-2xl shadow-2xl backdrop-blur-sm border border-gray-700"
              >
                <div className="rounded-md overflow-hidden">
                  <div className="bg-[#0d0f1e] p-4 rounded-t-lg flex justify-between items-center">
                    <div className="flex space-x-2">
                      <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                      <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                      <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                    </div>
                    <div className="text-xs text-gray-400">SpeedForce</div>
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="p-6 bg-black text-sm">
                    <p>https://speedforcebrowser.com</p>
                    <div className="mt-4 flex gap-2">
                      <div className="flex-1 bg-gray-800 p-3 rounded">Tab 1</div>
                      <div className="flex-1 bg-gray-700 p-3 rounded opacity-70">Tab 2</div>
                    </div>
                    <div className="mt-6">Page content preview...</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-center mb-8"
            >
              Features
            </motion.h2>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {featureList.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="bg-[#0f1228] p-6 rounded-2xl shadow-xl border border-gray-700 hover:scale-105 transform transition"
                >
                  <div className="text-3xl mb-2">{f.emoji}</div>
                  <h3 className="text-xl font-semibold">{f.title}</h3>
                  <p className="mt-2 text-gray-300">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Roadmap */}
        <section id="roadmap" className="py-16 bg-gradient-to-tr from-[#0f1228] to-[#1e2040]">
          <div className="max-w-5xl mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-center mb-6"
            >
              Roadmap
            </motion.h2>
            <div className="grid gap-10 md:grid-cols-3">
              {roadmap.map(r => (
                <motion.div
                  key={r.phase}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="bg-[#0f111a] p-6 rounded-2xl border border-gray-600 shadow-md"
                >
                  <div className="text-indigo-400 font-bold mb-2">{r.phase}</div>
                  <ul className="list-disc pl-5 space-y-1 text-gray-300">
                    {r.items.map(i => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Beta signup */}
        <section className="py-16">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-4"
            >
              Join the Beta
            </motion.h2>
            <p className="text-gray-300 mb-6">
              Get early access to SpeedForce and help shape the future of browsing.
            </p>
            <motion.form
              initial={{ scale: 0.97, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <input
                type="email"
                placeholder="you@example.com"
                className="flex-1 px-4 py-3 rounded-lg bg-[#0f1228] border border-gray-600 placeholder-gray-500 focus:outline-none"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold hover:brightness-110 transition"
              >
                Sign Up
              </button>
            </motion.form>
          </div>
        </section>

        <footer className="py-12 text-center text-gray-400">
          &copy; {new Date().getFullYear()} SpeedForce. All rights reserved.
        </footer>
      </main>
    </>
  );
}
