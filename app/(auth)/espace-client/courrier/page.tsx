import { Section, Card, CardTitle } from "@/components/ui";

export const metadata = { title: "Mon courrier" };

export default function CourrierPage() {
  return (
    <Section title="📬 Mon courrier" maxWidth="lg">
      <Card>
        <CardTitle className="mb-4">Mon courrier</CardTitle>
        <p className="text-[var(--gray-500)] text-sm">
          Contenu converti depuis le prototype — données réelles via Prisma + API.
        </p>
      </Card>
    </Section>
  );
}
