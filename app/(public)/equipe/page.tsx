import { Section } from "@/components/ui";

export const metadata = { title: "L'équipe" };

export default function EquipePage() {
  return (
    <Section title="L'équipe" subtitle="Page en cours de développement" centered>
      <div className="text-center py-20">
        <div className="text-6xl mb-4">🚧</div>
        <p className="text-[var(--gray-500)]">
          Cette page sera bientôt disponible avec tout le contenu du prototype.
        </p>
      </div>
    </Section>
  );
}
