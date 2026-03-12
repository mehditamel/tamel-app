import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge Tailwind classes safely */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Format price in EUR */
export function formatPrice(amount: number): string {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  }).format(amount);
}

/** Generate order reference */
export function generateOrderRef(serviceCode: string): string {
  return `${serviceCode}-${Date.now().toString(36).toUpperCase()}`;
}

/** Truncate text */
export function truncate(text: string, length: number): string {
  return text.length > length ? text.slice(0, length) + "…" : text;
}

/** Get level from points */
export function getLevelFromPoints(points: number): {
  name: string;
  emoji: string;
  nextLevel: string | null;
  pointsToNext: number;
} {
  if (points >= 5000) return { name: "Platine", emoji: "💎", nextLevel: null, pointsToNext: 0 };
  if (points >= 2000) return { name: "Or", emoji: "🥇", nextLevel: "Platine", pointsToNext: 5000 - points };
  if (points >= 500) return { name: "Argent", emoji: "🥈", nextLevel: "Or", pointsToNext: 2000 - points };
  return { name: "Bronze", emoji: "🥉", nextLevel: "Argent", pointsToNext: 500 - points };
}

/** Credit simulator */
export function calculateMonthlyPayment(
  amount: number,
  months: number,
  annualRate: number
): { monthly: number; total: number; interest: number } {
  const r = annualRate / 100 / 12;
  const monthly = amount * (r * Math.pow(1 + r, months)) / (Math.pow(1 + r, months) - 1);
  const total = monthly * months;
  return {
    monthly: Math.round(monthly),
    total: Math.round(total),
    interest: Math.round(total - amount),
  };
}

/** Status color */
export function getStatusColor(status: string): string {
  const map: Record<string, string> = {
    pending: "#F39C12",
    confirmed: "#2980B9",
    in_progress: "#3498DB",
    documents_required: "#E67E22",
    payment_pending: "#E74C3C",
    completed: "#27AE60",
    cancelled: "#95A5A6",
    delivered: "#27AE60",
    paid: "#27AE60",
    overdue: "#E74C3C",
  };
  return map[status] || "#6B7A99";
}

/** Status label FR */
export function getStatusLabel(status: string): string {
  const map: Record<string, string> = {
    pending: "En attente",
    confirmed: "Confirmée",
    in_progress: "En cours",
    documents_required: "Document requis",
    payment_pending: "Paiement en attente",
    completed: "Terminée",
    cancelled: "Annulée",
    delivered: "Livrée",
    paid: "Payée",
    overdue: "En retard",
  };
  return map[status] || status;
}
