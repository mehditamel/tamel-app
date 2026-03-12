"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Search, Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/shared/theme-provider";
import { cn } from "@/lib/utils";
import { COMPANY } from "@/lib/constants";

const NAV_LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/services?type=pro", label: "Professionnels" },
  { href: "/services?type=part", label: "Particuliers" },
  { href: "/agences", label: "Agences" },
  { href: "/outils", label: "Nos outils" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/equipe", label: "L'Équipe" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const pathname = usePathname();
  const { theme, toggle } = useTheme();

  return (
    <>
      <nav className="sticky top-0 z-50 bg-[var(--navy)] px-4 md:px-6 h-[60px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center text-white font-black text-xs">
            TML
          </div>
          <div className="hidden sm:block">
            <div className="text-white font-extrabold text-sm leading-none">
              TAMEL<span className="text-[var(--blue-light)]">.fr</span>
            </div>
            <div className="text-white/50 text-[10px]">
              Votre centre d&apos;affaires vous rend service !
            </div>
          </div>
        </Link>

        {/* Search bar (desktop) */}
        <div className="hidden lg:flex items-center bg-white/10 rounded-lg px-3 py-1.5 mx-4 flex-1 max-w-[280px]">
          <Search size={14} className="text-white/50 mr-2" />
          <input
            type="text"
            placeholder="SIREN, plaque, service..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent text-white text-xs placeholder:text-white/40 outline-none w-full"
          />
        </div>

        {/* Nav links (desktop) */}
        <div className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-white text-[13px] font-medium px-3 py-1.5 rounded-lg transition-colors",
                pathname === link.href
                  ? "bg-white/15"
                  : "hover:bg-white/10"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            className="text-white/60 hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <Link
            href="/espace-client"
            className="hidden md:block text-white text-xs font-semibold px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
          >
            Mon espace
          </Link>

          <Link
            href="/bo"
            className="hidden md:block text-white text-xs font-bold px-3 py-1.5 rounded-lg bg-[var(--red)] hover:bg-red-600 transition-colors"
          >
            Back-office
          </Link>

          {/* Hamburger (mobile) */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white p-1.5"
            aria-label="Menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 top-[60px] bg-[var(--navy)] z-40 p-5 flex flex-col gap-2 animate-fade-in lg:hidden overflow-y-auto">
          {[
            ...NAV_LINKS,
            { href: "/blog", label: "Blog" },
            { href: "/faq", label: "FAQ" },
            { href: "/espace-client", label: "Mon espace" },
            { href: "/fortune", label: "🎰 Roue de la Fortune" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-white bg-white/8 hover:bg-white/15 rounded-xl px-5 py-3.5 text-[15px] font-semibold transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
