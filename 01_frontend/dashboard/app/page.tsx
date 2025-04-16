export default function DashboardHome() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-12">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <p className="text-lg text-gray-600 mb-8 dark:text-gray-300">You are signed in. Billing, analytics, and more go here.</p>
      <button className="bg-primary text-white px-6 py-2 rounded hover:bg-primary/80 transition">Upgrade</button>
    </main>
  );
}
