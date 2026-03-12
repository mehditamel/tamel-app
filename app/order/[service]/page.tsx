import { notFound } from "next/navigation";
import { SERVICES } from "@/lib/constants";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Breadcrumb } from "@/components/shared/breadcrumb";
import { StepBar } from "@/components/shared/step-bar";
import { Badge, Button, Card, CardTitle, Section } from "@/components/ui";

interface OrderPageProps {
  params: Promise<{ service: string }>;
}

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ service: s.code.toLowerCase() }));
}

export async function generateMetadata({ params }: OrderPageProps) {
  const { service } = await params;
  const svc = SERVICES.find((s) => s.code.toLowerCase() === service);
  if (!svc) return { title: "Service introuvable" };
  return { title: `Commander — ${svc.name}` };
}

export default async function OrderPage({ params }: OrderPageProps) {
  const { service } = await params;
  const svc = SERVICES.find((s) => s.code.toLowerCase() === service);
  if (!svc) notFound();

  return (
    <>
      <Navbar />
      <div className="max-w-3xl mx-auto px-4 py-4">
        <Breadcrumb
          items={[
            { label: "Services", href: "/services" },
            { label: svc.name },
          ]}
        />
      </div>

      {/* Header */}
      <div className="bg-gradient-to-r from-[var(--navy)] to-[var(--navy-light)] text-white px-4 py-8">
        <div className="max-w-3xl mx-auto flex items-center gap-4">
          <div className="text-4xl">{svc.emoji}</div>
          <div>
            <h1 className="text-xl md:text-2xl font-black">{svc.name}</h1>
            <p className="text-white/60 text-sm">{svc.description}</p>
          </div>
          {svc.badges && svc.badges.length > 0 && (
            <Badge variant="success" className="ml-auto hidden md:inline-flex">
              ✅ {svc.badges[0]}
            </Badge>
          )}
        </div>
      </div>

      {/* Step bar placeholder */}
      <div className="max-w-3xl mx-auto px-4">
        <StepBar
          steps={["Choix", "Coordonnées", "Documents", "Paiement", "Confirmation"]}
          current={1}
          color={svc.color}
        />
      </div>

      {/* Tunnel content placeholder */}
      <Section maxWidth="sm" className="py-8">
        <Card>
          <CardTitle className="mb-4">
            Tunnel de commande — {svc.name}
          </CardTitle>
          <p className="text-[var(--gray-500)] text-sm mb-6">
            Le formulaire complet du prototype sera converti ici.
            Chaque tunnel aura ses propres étapes, validations et calculs.
          </p>
          {svc.priceFrom !== undefined && (
            <div className="text-lg font-black mb-4" style={{ color: svc.color }}>
              À partir de {svc.priceFrom}€
            </div>
          )}
          <Button size="lg" className="w-full">
            Démarrer ma commande →
          </Button>
        </Card>
      </Section>

      <Footer />
    </>
  );
}
