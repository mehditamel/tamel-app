import Link from "next/link";
import { COMPANY } from "@/lib/constants";

const FOOTER_LINKS = {
  services: [
    { label: "Domiciliation", href: "/order/dcm" },
    { label: "Carte grise", href: "/order/cgm" },
    { label: "Assurance", href: "/order/cam" },
    { label: "Création entreprise", href: "/order/crea" },
    { label: "Tous les services", href: "/services" },
  ],
  resources: [
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/faq" },
    { label: "Nos outils", href: "/outils" },
    { label: "Tarifs", href: "/tarifs" },
    { label: "Agences", href: "/agences" },
  ],
  legal: [
    { label: "Mentions légales", href: "/mentions-legales" },
    { label: "CGV", href: "/cgv" },
    { label: "Confidentialité", href: "/confidentialite" },
    { label: "Cookies", href: "/cookies" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[var(--navy)] text-white px-6 py-12">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <div className="font-extrabold text-lg mb-1">
            TAMEL<span className="text-[var(--blue-light)]">.fr</span>
          </div>
          <div className="text-white/40 text-xs italic mb-4">
            Votre centre d&apos;affaires vous rend service !
          </div>
          <div className="text-white/50 text-xs leading-relaxed">
            SIREN {COMPANY.siren}
            <br />
            Agrément {COMPANY.agrement}
            <br />
            {COMPANY.phone}
          </div>
        </div>

        {/* Services */}
        <div>
          <div className="font-bold text-sm mb-3">Services</div>
          {FOOTER_LINKS.services.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-white/50 text-xs mb-1.5 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Resources */}
        <div>
          <div className="font-bold text-sm mb-3">Ressources</div>
          {FOOTER_LINKS.resources.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-white/50 text-xs mb-1.5 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Legal */}
        <div>
          <div className="font-bold text-sm mb-3">Légal</div>
          {FOOTER_LINKS.legal.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-white/50 text-xs mb-1.5 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-8 pt-6 border-t border-white/10 text-center text-white/30 text-xs">
        © {new Date().getFullYear()} TAMEL — Centres d&apos;Affaires. Tous
        droits réservés.
      </div>
    </footer>
  );
}
