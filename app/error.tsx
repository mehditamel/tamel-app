"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // TODO: Log to Sentry
    console.error("App error:", error);
  }, [error]);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <div className="text-6xl mb-4">⚠️</div>
      <h1 className="text-3xl font-black text-[var(--navy)] dark:text-white mb-2">
        Une erreur est survenue
      </h1>
      <p className="text-[var(--gray-500)] mb-6 max-w-md">
        Nous nous excusons pour la gêne. Notre équipe a été notifiée.
      </p>
      <div className="flex gap-3">
        <Button onClick={reset}>Réessayer</Button>
        <Button variant="outline" onClick={() => (window.location.href = "/")}>
          Retour à l&apos;accueil
        </Button>
      </div>
      {process.env.NODE_ENV === "development" && (
        <pre className="mt-8 p-4 bg-red-50 dark:bg-red-900/20 rounded-xl text-left text-xs text-red-700 dark:text-red-300 max-w-lg overflow-x-auto">
          {error.message}
        </pre>
      )}
    </main>
  );
}
