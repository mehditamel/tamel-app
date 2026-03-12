import { Card, CardTitle } from "@/components/ui";

export const metadata = { title: "Templates Email" };

export default function EmailsPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-black text-[var(--navy)] dark:text-white mb-6">
        📧 Templates Email
      </h1>
      <Card>
        <CardTitle className="mb-4">Templates Email</CardTitle>
        <p className="text-[var(--gray-500)] text-sm">
          Ce module sera converti depuis le prototype. Toute la logique
          et les interfaces de configuration sont déjà validées.
        </p>
      </Card>
    </div>
  );
}
