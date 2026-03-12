import { Card, CardTitle, Section } from "@/components/ui";

export const metadata = { title: "Dashboard" };

const KPIS = [
  { label: "CA Mars 2026", value: "18 450€", trend: "+12%", color: "var(--green)" },
  { label: "Commandes actives", value: "47", trend: "+5", color: "var(--blue)" },
  { label: "Clients actifs", value: "2 547", trend: "+89", color: "var(--purple)" },
  { label: "Taux satisfaction", value: "4.8/5", trend: "stable", color: "var(--orange)" },
];

export default function DashboardPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-black text-[var(--navy)] dark:text-white mb-6">
        📊 Dashboard
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {KPIS.map((kpi) => (
          <Card key={kpi.label} padding="sm">
            <div className="text-xs text-[var(--gray-500)] mb-1">{kpi.label}</div>
            <div className="text-2xl font-black" style={{ color: kpi.color }}>
              {kpi.value}
            </div>
            <div className="text-xs font-bold" style={{ color: kpi.color }}>
              {kpi.trend}
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card>
          <CardTitle className="mb-4">CA Mensuel 2026</CardTitle>
          <div className="text-center py-12 text-[var(--gray-500)] text-sm">
            Graphique SVG barres — sera converti du prototype
          </div>
        </Card>
        <Card>
          <CardTitle className="mb-4">Évolution clients actifs</CardTitle>
          <div className="text-center py-12 text-[var(--gray-500)] text-sm">
            Graphique SVG courbe 12 mois — sera converti du prototype
          </div>
        </Card>
      </div>
    </div>
  );
}
