import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Roue de la Fortune",
  description: "Tentez votre chance et gagnez des points, des réductions et des services offerts !",
};

export default function FortunePage() {
  return (
    <>
      <Navbar />
      <Section title="🎰 Roue de la Fortune" subtitle="Tentez votre chance ! 50 points par tour" centered maxWidth="sm">
        <div className="text-center py-20">
          <div className="text-7xl mb-6">🎰</div>
          <p className="text-[var(--gray-500)] mb-4">
            La roue de la fortune interactive sera convertie du prototype ici.
            Animation SVG, confettis, historique des tours.
          </p>
        </div>
      </Section>
      <Footer />
    </>
  );
}
