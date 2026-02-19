export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 text-center">
      <h1 className="text-4xl font-bold mb-4">Uniform Next.js App Router Starter</h1>
      <p className="text-lg text-neutral-600 max-w-md">
        This project is powered by Uniform CMS. Compositions are served via the{" "}
        <code className="bg-neutral-200 px-1 rounded">/uniform/[code]</code> and{" "}
        <code className="bg-neutral-200 px-1 rounded">/playground/[code]</code> routes.
      </p>
    </main>
  );
}
