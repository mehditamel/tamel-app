import { Section, Card, CardTitle } from "@/components/ui";

export const metadata = { title: "Mes messages" };

export default function MessagesPage() {
  return (
    <Section title="💬 Mes messages" maxWidth="lg">
      <Card>
        <CardTitle className="mb-4">Mes messages</CardTitle>
        <p className="text-[var(--gray-500)] text-sm">
          Contenu converti depuis le prototype — données réelles via Prisma + API.
        </p>
      </Card>
    </Section>
  );
}
