import { Section, Card, CardTitle } from "@/components/ui";

export const metadata = { title: "Mon profil" };

export default function ProfilPage() {
  return (
    <Section title="👤 Mon profil" maxWidth="lg">
      <Card>
        <CardTitle className="mb-4">Mon profil</CardTitle>
        <p className="text-[var(--gray-500)] text-sm">
          Contenu converti depuis le prototype — données réelles via Prisma + API.
        </p>
      </Card>
    </Section>
  );
}
