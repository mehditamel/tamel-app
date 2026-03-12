import { Card, CardTitle } from "@/components/ui";

export const metadata = { title: "SEO & Marketing" };

export default function SeoConfigPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-black text-[var(--navy)] dark:text-white mb-6">
        🔍 SEO & Marketing
      </h1>
      <Card>
        <CardTitle className="mb-4">SEO & Marketing</CardTitle>
        <p className="text-[var(--gray-500)] text-sm">
          Ce module sera converti depuis le prototype. Toute la logique
          et les interfaces de configuration sont déjà validées.
        </p>
      </Card>
    </div>
  );
}
