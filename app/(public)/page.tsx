import Link from "next/link";
import { COMPANY, SERVICES } from "@/lib/constants";
import { Section, Card, CardTitle, CardDescription, Badge, Button } from "@/components/ui";

const TRUST_BADGES = [
  "✅ Agréé préfecture",
  "🔒 Paiement Stripe",
  "⭐ 4.8/5 Google",
  "💬 Support 7j/7",
];

const STEPS = [
  { n: "1", emoji: "🔍", title: "Choisissez votre service", desc: "Parcourez notre catalogue ou tapez directement votre besoin", color: "var(--blue)" },
  { n: "2", emoji: "📝", title: "Remplissez votre dossier", desc: "Suivez le tunnel guidé étape par étape en toute sécurité", color: "var(--green)" },
  { n: "3", emoji: "✅", title: "On s'occupe de tout !", desc: "Nos équipes traitent votre dossier. Suivez l'avancement en temps réel", color: "var(--orange)" },
];

const TESTIMONIALS = [
  { name: "Sophie M.", role: "Gérante SASU", text: "TAMEL a simplifié toutes mes démarches. Domiciliation, assurance, carte grise — tout au même endroit.", stars: 5, ago: "2 semaines" },
  { name: "Karim B.", role: "Auto-entrepreneur", text: "Le service de création d'entreprise est top. Micro-entreprise créée en 48h, domiciliation immédiate.", stars: 5, ago: "1 mois" },
  { name: "Marie-Claire D.", role: "Présidente SCI", text: "Équipe réactive et professionnelle. Le suivi en ligne est clair, les documents arrivent vite.", stars: 4, ago: "3 semaines" },
];

const QUICK_CHIPS = [
  "Créer ma SASU", "Plaque AB-123-CD", "RC Pro artisan",
  "Flyers 1000 ex.", "Site internet", "Boîte postale",
];

export default function HomePage() {
  const topServices = SERVICES.filter((s) => s.audience !== "part").slice(0, 6);

  return (
    <>
      {/* ═══ Hero ═══ */}
      <section className="bg-gradient-to-b from-[var(--navy)] to-[var(--navy-light)] text-white text-center py-16 md:py-20 px-4">
        <div className="inline-block bg-white/10 backdrop-blur rounded-full px-4 py-1.5 text-xs font-medium mb-6">
          🏆 N°1 des centres d&apos;affaires à Marseille — Agrément {COMPANY.agrement}
        </div>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight mb-4">
          Tous vos services,<br />
          <span className="text-[var(--blue-light)]">une seule plateforme</span>
        </h1>

        <p className="text-white/60 text-sm md:text-base max-w-xl mx-auto mb-8">
          TAMEL réunit {COMPANY.servicesCount} services essentiels dans une
          application unique. Tapez votre SIREN, votre plaque, votre besoin —
          nous trouvons le service.
        </p>

        <div className="max-w-xl mx-auto bg-white rounded-2xl flex items-center p-2 mb-4">
          <input
            type="text"
            placeholder="Ex : RC Pro artisan bâtiment..."
            className="flex-1 px-4 py-3 text-gray-800 text-sm outline-none bg-transparent"
          />
          <Button size="lg">Rechercher</Button>
        </div>

        <div className="flex flex-wrap justify-center gap-3 md:gap-5 text-[11px] text-white/60 mb-6">
          {TRUST_BADGES.map((badge) => (
            <span key={badge}>{badge}</span>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {QUICK_CHIPS.map((chip) => (
            <span key={chip} className="bg-white/10 text-white/80 text-xs px-3 py-1.5 rounded-full cursor-pointer hover:bg-white/20 transition-colors">
              {chip}
            </span>
          ))}
        </div>

        <div className="flex justify-center gap-10 md:gap-16">
          {[
            { value: String(COMPANY.agenciesCount), label: "Agences" },
            { value: String(COMPANY.servicesCount), label: "Services" },
            { value: COMPANY.clientsCount, label: "Clients actifs" },
            { value: `${new Date().getFullYear() - COMPANY.founded} ans`, label: "D'expérience" },
          ].map((kpi) => (
            <div key={kpi.label} className="text-center">
              <div className="text-3xl md:text-4xl font-black">{kpi.value}</div>
              <div className="text-white/50 text-xs">{kpi.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ Fortune banner ═══ */}
      <div className="max-w-4xl mx-auto px-4 -mt-6 mb-4">
        <Link
          href="/fortune"
          className="flex items-center justify-between bg-gradient-to-r from-[var(--orange)] to-[#E67E22] rounded-2xl px-6 py-4 hover:shadow-lg transition-shadow"
        >
          <div className="flex items-center gap-3">
            <span className="text-3xl">🎰</span>
            <div>
              <div className="text-white font-extrabold">Roue de la Fortune — Tentez votre chance !</div>
              <div className="text-white/70 text-xs">Gagnez des points, des réductions et des services offerts</div>
            </div>
          </div>
          <div className="hidden sm:block bg-white text-[var(--orange)] px-4 py-2 rounded-xl font-extrabold text-sm shrink-0">
            Jouer →
          </div>
        </Link>
      </div>

      {/* ═══ Comment ça marche ═══ */}
      <Section title="Comment ça marche ?" subtitle="3 étapes simples pour accéder à nos services" centered maxWidth="md">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STEPS.map((step) => (
            <div key={step.n} className="relative text-center">
              <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl" style={{ background: `${step.color}15` }}>
                {step.emoji}
              </div>
              <div className="absolute top-0 right-1/4 w-6 h-6 rounded-full text-white text-xs font-black flex items-center justify-center" style={{ background: step.color }}>
                {step.n}
              </div>
              <h3 className="font-extrabold text-[var(--navy)] dark:text-white mb-1">{step.title}</h3>
              <p className="text-[var(--gray-500)] text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ═══ Testimonials ═══ */}
      <Section title="Ils nous font confiance" subtitle={`Plus de ${COMPANY.clientsCount} clients satisfaits`} centered maxWidth="md" className="pt-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t) => (
            <Card key={t.name}>
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className={i < t.stars ? "text-[var(--orange)]" : "text-gray-200"}>★</span>
                ))}
              </div>
              <p className="text-[var(--gray-600)] dark:text-[var(--gray-500)] text-sm italic leading-relaxed mb-3">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex justify-between items-center">
                <div>
                  <div className="font-bold text-sm text-[var(--navy)] dark:text-white">{t.name}</div>
                  <div className="text-[var(--gray-500)] text-xs">{t.role}</div>
                </div>
                <span className="text-[var(--gray-500)] text-[10px]">Il y a {t.ago}</span>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* ═══ Services ═══ */}
      <Section title="Nos services" centered>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {topServices.map((s) => (
            <Link key={s.code} href={`/order/${s.code.toLowerCase()}`}>
              <Card hover>
                <div className="text-3xl mb-3">{s.emoji}</div>
                <CardTitle className="mb-1">{s.name}</CardTitle>
                <CardDescription className="mb-3">{s.description}</CardDescription>
                <div className="flex items-center gap-2">
                  {s.priceFrom !== undefined && (
                    <span className="text-sm font-bold" style={{ color: s.color }}>
                      Dès {s.priceFrom}€
                    </span>
                  )}
                  {s.popular && <Badge variant="custom" color={s.color}>POPULAIRE</Badge>}
                </div>
              </Card>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/services?type=pro">
            <Button size="lg">Voir les {COMPANY.servicesCount} services →</Button>
          </Link>
        </div>
      </Section>

      {/* ═══ Parrainage ═══ */}
      <div className="max-w-4xl mx-auto px-4 pb-16">
        <Link
          href="/ambassadeur"
          className="flex flex-col md:flex-row items-center justify-between gap-4 bg-gradient-to-r from-[#1A237E] to-[#283593] rounded-2xl px-6 py-5 text-center md:text-left"
        >
          <div>
            <div className="text-white font-black text-lg">🤝 Parrainez vos proches, gagnez des points !</div>
            <div className="text-blue-200/60 text-sm">200 points pour vous + 100 points pour votre filleul</div>
          </div>
          <div className="bg-white text-[#1A237E] px-5 py-2.5 rounded-xl font-extrabold text-sm shrink-0">
            Découvrir →
          </div>
        </Link>
      </div>
    </>
  );
}
