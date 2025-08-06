import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>SpeedForce Browser</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="bg-black py-4 px-6 flex justify-between items-center border-b border-gray-700">
        <div className="flex items-center space-x-4">
          <img src="/logo.png" alt="SpeedForce Logo" className="w-10 h-10" />
          <span className="text-white text-xl font-bold">SpeedForce</span>
        </div>
        <nav className="space-x-6 text-gray-300">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/features">Features</Link>
        </nav>
      </header>
      <main className="min-h-screen bg-black text-white px-6 py-12 space-y-16">
        <section className="text-center">
          <h1 className="text-5xl font-bold">SpeedForce Browser</h1>
          <p className="mt-4 text-gray-400 text-lg">
            A blazing fast, customizable browser for modern users.
          </p>
          <a
            href="#"
            className="mt-6 inline-block bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-300"
          >
            Download for Windows
          </a>
        </section>
      </main>
    </>
  );
}
