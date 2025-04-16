export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-12">
      <h1 className="text-4xl font-bold mb-4">Welcome to SaaS Template</h1>
      <p className="text-lg text-gray-600 mb-8 dark:text-gray-300">A fork-ready, micro-services SaaS starter kit.</p>
      <a href="/dashboard" className="inline-block bg-black text-white px-6 py-2 rounded hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 transition">Go to Dashboard</a>
    </main>
  );
}
