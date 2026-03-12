import { Section, Card, CardTitle, Button } from "@/components/ui";

export const metadata = { title: "Mon espace" };

export default function EspaceClientPage() {
  return (
    <Section title="Mon espace" subtitle="Connectez-vous pour accéder à vos services" centered maxWidth="sm">
      <Card className="max-w-md mx-auto">
        <CardTitle className="text-center mb-6">Connexion</CardTitle>
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-[var(--gray-500)] mb-1.5">Email</label>
            <input
              type="email"
              placeholder="votre@email.fr"
              className="w-full px-3 py-2.5 text-sm rounded-xl border-2 border-[var(--gray-100)] outline-none focus:border-[var(--blue)]"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-[var(--gray-500)] mb-1.5">Mot de passe</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-3 py-2.5 text-sm rounded-xl border-2 border-[var(--gray-100)] outline-none focus:border-[var(--blue)]"
            />
          </div>
          <Button size="lg" className="w-full">Se connecter</Button>
        </div>
      </Card>
    </Section>
  );
}
