import { Section, Card, CardTitle } from "@/components/ui";

export const metadata = { title: "Mes factures" };

export default function FacturesPage() {
  return (
    <Section title="📋 Mes factures" maxWidth="lg">
      <Card>
        <CardTitle className="mb-4">Mes factures</CardTitle>
        <p className="text-[var(--gray-500)] text-sm">
          Contenu converti depuis le prototype — données réelles via Prisma + API.
        </p>
      </Card>
    </Section>
  );
}
