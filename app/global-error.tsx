"use client";

export default function GlobalError({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen items-center justify-center bg-white">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-800">
            Something went wrong
          </h2>
          <p className="mt-2 text-slate-500">
            Please try again or return to the homepage.
          </p>
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={() => reset()}
              className="rounded-full bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Try Again
            </button>
            <a
              href="/"
              className="rounded-full border border-slate-200 px-6 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-blue-300"
            >
              Go Home
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}
