import { Section, Card, CardTitle } from "@/components/ui";

export const metadata = { title: "Mes commandes" };

export default function CommandesPage() {
  return (
    <Section title="📦 Mes commandes" maxWidth="lg">
      <Card>
        <CardTitle className="mb-4">Mes commandes</CardTitle>
        <p className="text-[var(--gray-500)] text-sm">
          Contenu converti depuis le prototype — données réelles via Prisma + API.
        </p>
      </Card>
    </Section>
  );
}
