import { Section, Card, CardTitle } from "@/components/ui";

export const metadata = { title: "Mes documents" };

export default function DocumentsPage() {
  return (
    <Section title="📄 Mes documents" maxWidth="lg">
      <Card>
        <CardTitle className="mb-4">Mes documents</CardTitle>
        <p className="text-[var(--gray-500)] text-sm">
          Contenu converti depuis le prototype — données réelles via Prisma + API.
        </p>
      </Card>
    </Section>
  );
}
