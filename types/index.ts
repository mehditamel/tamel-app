// ═══ TAMEL Type Definitions ═══

// ── Services ──
export type ServiceCode =
  | "DCM" | "BPM" | "CGM" | "CAM" | "CCM" | "CIF" | "WM"
  | "IMP" | "TAMP" | "CM" | "PIM" | "NM" | "TSM" | "TML"
  | "TIS" | "TPE" | "CREA" | "MPI" | "NET";

export interface Service {
  code: ServiceCode;
  name: string;
  description: string;
  emoji: string;
  color: string;
  audience: "pro" | "part" | "both";
  price?: string;
  priceFrom?: number;
  popular?: boolean;
  badges?: string[];
}

// ── Orders ──
export type OrderStatus =
  | "pending" | "confirmed" | "in_progress" | "documents_required"
  | "payment_pending" | "completed" | "cancelled" | "delivered";

export interface OrderTag {
  label: string;
  color: string;
}

export interface Order {
  id: string;
  ref: string;
  serviceCode: ServiceCode;
  serviceName: string;
  status: OrderStatus;
  progress: number;
  price: string;
  createdAt: string;
  raisonSociale?: string;
  tags: OrderTag[];
}

// ── Client ──
export interface ClientProfile {
  id: string;
  email: string;
  name: string;
  type: "pro" | "part";
  company?: string;
  siren?: string;
  phone?: string;
  points: number;
  level: "bronze" | "argent" | "or" | "platine";
  orders: Order[];
}

// ── Blog ──
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  publishedAt: string;
  readTime: number;
}

// ── Agences ──
export interface Agence {
  id: string;
  name: string;
  address: string;
  city: string;
  phone: string;
  hours: string;
  services: ServiceCode[];
  lat: number;
  lng: number;
  metro?: string;
}

// ── Loyalty ──
export interface Badge {
  id: string;
  name: string;
  description: string;
  emoji: string;
  unlocked: boolean;
}

export interface LoyaltyLevel {
  name: string;
  emoji: string;
  minPoints: number;
  maxPoints: number;
  benefits: string[];
}

// ── Invoice ──
export interface Invoice {
  ref: string;
  date: string;
  service: string;
  amount: string;
  status: "paid" | "pending" | "overdue";
}

// ── Fortune Wheel ──
export interface FortunePrize {
  label: string;
  color: string;
  weight: number;
  value: number;
  emoji: string;
}

// ── BO ──
export type BOSection =
  | "dashboard" | "commandes" | "clients"
  | "chatbot_config" | "fortune_config" | "tarifs_config"
  | "agences_config" | "whatsapp_config" | "seo_config"
  | "onboarding_config" | "notifications_config" | "parametres"
  | "emails" | "fidelite" | "tags" | "etats_commandes" | "kiosque";
