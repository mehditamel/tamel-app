import { Card, CardTitle } from "@/components/ui";

export const metadata = { title: "Gestion Tags" };

export default function TagsPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-black text-[var(--navy)] dark:text-white mb-6">
        🏷️ Gestion Tags
      </h1>
      <Card>
        <CardTitle className="mb-4">Gestion Tags</CardTitle>
        <p className="text-[var(--gray-500)] text-sm">
          Ce module sera converti depuis le prototype. Toute la logique
          et les interfaces de configuration sont déjà validées.
        </p>
      </Card>
    </div>
  );
}
