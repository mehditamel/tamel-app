import { Section, Card, CardTitle } from "@/components/ui";

export const metadata = { title: "Fidélité" };

export default function FidelitePage() {
  return (
    <Section title="⭐ Fidélité" maxWidth="lg">
      <Card>
        <CardTitle className="mb-4">Fidélité</CardTitle>
        <p className="text-[var(--gray-500)] text-sm">
          Contenu converti depuis le prototype — données réelles via Prisma + API.
        </p>
      </Card>
    </Section>
  );
}
