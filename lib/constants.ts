import type { Service, Agence, LoyaltyLevel, FortunePrize, Badge } from "@/types";

// ═══ Design ═══
export const NAVY = "#0D1B4B";
export const BLUE = "#2980B9";
export const GREEN = "#27AE60";
export const ORANGE = "#F39C12";
export const RED = "#E74C3C";
export const PURPLE = "#8E44AD";
export const TEAL = "#1ABC9C";

// ═══ Company ═══
export const COMPANY = {
  name: "TAMEL — Centres d'Affaires",
  siren: "752540831",
  agrement: "N°2021/AEFDJ/13/03",
  phone: "04 12 050 000",
  email: "contact@tamel.fr",
  whatsapp: "33412050000",
  address: "19 rue du Musée, 13001 Marseille",
  founded: 2012,
  agenciesCount: 7,
  servicesCount: 18,
  clientsCount: "2 500+",
};

// ═══ Services (19) ═══
export const SERVICES: Service[] = [
  { code: "DCM", name: "Domiciliation commerciale", description: "Adresse officielle pour votre entreprise avec scan courrier et réexpédition", emoji: "🏢", color: "#2980B9", audience: "pro", priceFrom: 19, popular: true, badges: ["Agrément préfectoral"] },
  { code: "BPM", name: "Boîte postale", description: "Adresse postale personnelle ou professionnelle avec gestion courrier", emoji: "📬", color: "#27AE60", audience: "both", priceFrom: 7.9 },
  { code: "CGM", name: "Carte grise", description: "Changement de propriétaire, duplicata, changement d'adresse", emoji: "🚗", color: "#E67E22", audience: "both", priceFrom: 9.9, popular: true, badges: ["SIV N°208293"] },
  { code: "CAM", name: "Assurance professionnelle", description: "RC Pro, décennale, multirisque, cyber, santé collective", emoji: "🛡️", color: "#8E44AD", audience: "both", priceFrom: 0, price: "Devis gratuit", badges: ["ORIAS N°22004565"] },
  { code: "CCM", name: "Courtage crédit", description: "Crédit immobilier, professionnel, rachat, trésorerie", emoji: "💳", color: "#2C3E50", audience: "both", priceFrom: 0, price: "Gratuit", badges: ["IOBSP"] },
  { code: "CIF", name: "Conseil financier", description: "PER, assurance-vie, SCPI, optimisation patrimoniale", emoji: "📊", color: "#F39C12", audience: "both", badges: ["CIF/AMF"] },
  { code: "WM", name: "Site internet", description: "Création de site professionnel avec brief IA et accompagnement", emoji: "🌐", color: "#3498DB", audience: "pro", priceFrom: 190 },
  { code: "IMP", name: "Impression", description: "Cartes de visite, flyers, brochures, affiches", emoji: "🖨️", color: "#1ABC9C", audience: "both", priceFrom: 15 },
  { code: "TAMP", name: "Tampons", description: "Tampons encreurs professionnels personnalisés", emoji: "🔴", color: "#E74C3C", audience: "pro", priceFrom: 29 },
  { code: "CM", name: "Code de la route", description: "Formation et passage du code en agence", emoji: "🚦", color: "#27AE60", audience: "part", priceFrom: 30 },
  { code: "PIM", name: "Photo d'identité", description: "Photos biométriques conformes ANTS", emoji: "📷", color: "#9B59B6", audience: "both", priceFrom: 8 },
  { code: "NM", name: "Nettoyage", description: "Nettoyage de bureaux et locaux professionnels", emoji: "🧹", color: "#16A085", audience: "pro" },
  { code: "TSM", name: "Télésecrétariat", description: "Accueil téléphonique externalisé et gestion d'agenda", emoji: "📞", color: "#2980B9", audience: "pro", priceFrom: 290, badges: ["Partenaire 3CX"] },
  { code: "TML", name: "Textile & flocage", description: "T-shirts, polos, casquettes personnalisés", emoji: "👕", color: "#E67E22", audience: "both", priceFrom: 8 },
  { code: "TIS", name: "Tisane artisanale", description: "Tisanes bio artisanales de Provence", emoji: "🍵", color: "#27AE60", audience: "both", priceFrom: 6 },
  { code: "TPE", name: "Terminal de paiement", description: "Terminal myPOS avec commissions avantageuses", emoji: "💳", color: "#17A589", audience: "pro", priceFrom: 0, badges: ["Partenaire myPOS"] },
  { code: "CREA", name: "Création d'entreprise", description: "Micro-entreprise, SASU, SAS, SARL — accompagnement complet", emoji: "🚀", color: "#1A237E", audience: "pro", priceFrom: 0, popular: true },
  { code: "MPI", name: "Pièces d'identité", description: "Passeport, CNI, renouvellement", emoji: "🪪", color: "#6B7A99", audience: "both" },
  { code: "NET", name: "Nom de domaine", description: "Réservation .fr/.com/.eu avec hébergement email", emoji: "🔗", color: "#2980B9", audience: "both", priceFrom: 12 },
];

// ═══ Agences (7) ═══
export const AGENCES: Agence[] = [
  { id: "noailles", name: "Noailles", address: "19 rue du Musée", city: "13001 Marseille", phone: "04 12 050 001", hours: "09:00-18:00", services: ["DCM","BPM","CGM","CAM","IMP","CREA"], lat: 43.2965, lng: 5.3698, metro: "M1 Noailles" },
  { id: "belledemai", name: "Belle de Mai", address: "40 rue Belle de Mai", city: "13003 Marseille", phone: "04 12 050 002", hours: "09:00-18:00", services: ["DCM","BPM","CGM","TPE"], lat: 43.3064, lng: 5.3845 },
  { id: "joliette", name: "La Joliette", address: "Euroméditerranée", city: "13002 Marseille", phone: "04 12 050 003", hours: "09:00-17:00", services: ["DCM","BPM","CGM"], lat: 43.3066, lng: 5.3654 },
  { id: "stferreol", name: "Saint-Ferréol", address: "Rue Saint-Ferréol", city: "13001 Marseille", phone: "04 12 050 004", hours: "09:00-18:00", services: ["DCM","BPM","CGM","CAM","WM"], lat: 43.2945, lng: 5.3773, metro: "M1 Estrangin" },
  { id: "chartreux", name: "Les Chartreux", address: "Boulevard des Chartreux", city: "13004 Marseille", phone: "04 12 050 005", hours: "09:00-17:00", services: ["DCM","BPM"], lat: 43.3015, lng: 5.3952 },
  { id: "coursjulien", name: "Cours Julien", address: "Cours Julien", city: "13006 Marseille", phone: "04 12 050 006", hours: "09:00-17:00", services: ["DCM","BPM","IMP","TML"], lat: 43.2925, lng: 5.3854 },
  { id: "toulon", name: "Toulon Nogues", address: "Centre-ville", city: "83000 Toulon", phone: "04 94 050 001", hours: "09:00-18:00", services: ["DCM","BPM","CGM","CAM"], lat: 43.1242, lng: 5.928 },
];

// ═══ Loyalty ═══
export const LOYALTY_LEVELS: LoyaltyLevel[] = [
  { name: "Bronze", emoji: "🥉", minPoints: 0, maxPoints: 499, benefits: ["Accès standard", "Cumul de points"] },
  { name: "Argent", emoji: "🥈", minPoints: 500, maxPoints: 1999, benefits: ["5% de réduction", "Support prioritaire"] },
  { name: "Or", emoji: "🥇", minPoints: 2000, maxPoints: 4999, benefits: ["10% de réduction", "Événements exclusifs", "Cadeaux"] },
  { name: "Platine", emoji: "💎", minPoints: 5000, maxPoints: Infinity, benefits: ["15% de réduction", "Gestionnaire dédié", "Services offerts"] },
];

export const BADGES: Badge[] = [
  { id: "first", name: "Premier pas", description: "1ère commande", emoji: "🌟", unlocked: false },
  { id: "loyal", name: "Fidèle", description: "5 commandes", emoji: "🔥", unlocked: false },
  { id: "multi", name: "Multi-services", description: "3 services différents", emoji: "💫", unlocked: false },
  { id: "ambassador", name: "Ambassadeur", description: "1 parrainage", emoji: "🤝", unlocked: false },
  { id: "vip", name: "VIP", description: "Niveau Or", emoji: "⭐", unlocked: false },
  { id: "regular", name: "Assidu", description: "12 mois actif", emoji: "🎯", unlocked: false },
  { id: "whale", name: "Gros joueur", description: "500 pts Fortune", emoji: "💰", unlocked: false },
  { id: "champion", name: "Champion", description: "Tous les badges", emoji: "🏆", unlocked: false },
];

// ═══ Fortune Wheel ═══
export const FORTUNE_PRIZES: FortunePrize[] = [
  { label: "+10 pts", color: "#27AE60", weight: 25, value: 10, emoji: "⭐" },
  { label: "+25 pts", color: "#2980B9", weight: 20, value: 25, emoji: "💫" },
  { label: "+50 pts", color: "#F39C12", weight: 15, value: 50, emoji: "🌟" },
  { label: "+100 pts", color: "#E67E22", weight: 10, value: 100, emoji: "🔥" },
  { label: "5€ offerts", color: "#8E44AD", weight: 10, value: 50, emoji: "💵" },
  { label: "Tampon offert", color: "#E74C3C", weight: 8, value: 30, emoji: "🔖" },
  { label: "x2 pts 24h", color: "#1ABC9C", weight: 7, value: 0, emoji: "⚡" },
  { label: "+200 pts !!", color: "#C0392B", weight: 5, value: 200, emoji: "🎉" },
];

// ═══ Promo codes ═══
export const PROMO_CODES: Record<string, { discount: number; type: "percent" | "fixed" }> = {
  BIENVENUE10: { discount: 10, type: "percent" },
  DOMICIL2026: { discount: 20, type: "percent" },
  CREA100: { discount: 100, type: "fixed" },
  PARRAIN50: { discount: 50, type: "fixed" },
};
