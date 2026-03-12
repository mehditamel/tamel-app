import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: { template: "%s | TAMEL Back-office", default: "TAMEL Back-office" },
  robots: { index: false, follow: false },
};

const BO_SECTIONS = [
  { group: "PRINCIPAL", items: [
    { href: "/bo/dashboard", label: "📊 Dashboard", code: "dashboard" },
    { href: "/bo/commandes", label: "📦 Commandes", code: "commandes" },
    { href: "/bo/clients", label: "👥 Clients", code: "clients" },
  ]},
  { group: "ADMIN", items: [
    { href: "/bo/chatbot-config", label: "🤖 Chatbot", code: "chatbot" },
    { href: "/bo/fortune-config", label: "🎰 Fortune", code: "fortune" },
    { href: "/bo/tarifs-config", label: "💰 Tarifs", code: "tarifs" },
    { href: "/bo/agences-config", label: "🏢 Agences", code: "agences" },
    { href: "/bo/whatsapp-config", label: "📲 WhatsApp", code: "whatsapp" },
    { href: "/bo/seo-config", label: "🔍 SEO", code: "seo" },
    { href: "/bo/onboarding-config", label: "🎯 Onboarding", code: "onboarding" },
    { href: "/bo/notifications-config", label: "🔔 Notifications", code: "notif" },
    { href: "/bo/parametres", label: "⚙️ Paramètres", code: "params" },
    { href: "/bo/emails", label: "📧 Emails", code: "emails" },
    { href: "/bo/fidelite", label: "⭐ Fidélité", code: "fidelite" },
    { href: "/bo/tags", label: "🏷️ Tags", code: "tags" },
    { href: "/bo/etats-commandes", label: "📋 États", code: "etats" },
    { href: "/bo/kiosque", label: "🖥️ Kiosque", code: "kiosque" },
  ]},
];

export default function BOLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-[var(--gray-50)]">
      {/* Sidebar */}
      <aside className="w-56 bg-[var(--navy)] text-white flex-shrink-0 overflow-y-auto hidden md:block">
        <div className="p-4 border-b border-white/10">
          <Link href="/" className="font-extrabold text-lg">
            TAMEL<span className="text-[var(--blue-light)]">.fr</span>
          </Link>
          <div className="text-white/40 text-[10px]">Back-office v2.1</div>
        </div>

        <nav className="p-3">
          {BO_SECTIONS.map((section) => (
            <div key={section.group} className="mb-4">
              <div className="text-white/30 text-[10px] font-bold tracking-wider px-2 mb-2">
                {section.group}
              </div>
              {section.items.map((item) => (
                <Link
                  key={item.code}
                  href={item.href}
                  className="block text-white/70 hover:text-white hover:bg-white/10 text-xs font-medium px-3 py-2 rounded-lg mb-0.5 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          ))}
        </nav>

        <div className="p-3 mt-auto border-t border-white/10">
          <Link
            href="/"
            className="block text-white/50 hover:text-white text-xs px-3 py-2 rounded-lg transition-colors"
          >
            🏠 Retour au site
          </Link>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto">{children}</main>
    </div>
  );
}
