import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <div className="text-7xl mb-4">🏢</div>
        <h1 className="text-4xl font-black text-[var(--navy)] dark:text-white mb-2">
          Page introuvable
        </h1>
        <p className="text-[var(--gray-500)] mb-8 max-w-md">
          Cette page n&apos;existe pas ou a été déplacée.
          Mais nos 18 services sont toujours disponibles !
        </p>
        <div className="flex gap-3">
          <Link href="/">
            <Button>Retour à l&apos;accueil</Button>
          </Link>
          <Link href="/services">
            <Button variant="outline">Voir nos services</Button>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
