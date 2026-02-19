"use client";

export default function GlobalError({ error }: { error: Error }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Something went wrong</h1>
      <p className="mt-2 text-lg text-neutral-600">{error.message}</p>
    </main>
  );
}
