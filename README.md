# TAMEL — Plateforme digitale unifiée

> Tous vos services, une seule plateforme.

18 services pour professionnels et particuliers. 7 agences à Marseille et Toulon.

## Stack technique

| Couche | Technologie |
|--------|------------|
| Frontend | Next.js 15 + React 19 + TypeScript |
| Styling | Tailwind CSS 4 |
| Backend | Next.js API Routes + Prisma ORM |
| Base de données | PostgreSQL (Neon serverless) |
| Auth | NextAuth.js v5 |
| Paiement | Stripe |
| IA | Claude API (Anthropic) |
| Hosting | Vercel |

## Démarrage rapide

```bash
# 1. Cloner le repo
git clone https://github.com/tamel/tamel-app.git
cd tamel-app

# 2. Installer les dépendances
npm install

# 3. Configurer l'environnement
cp .env.example .env.local
# Éditer .env.local avec vos clés

# 4. Initialiser la BDD
npx prisma db push
npx tsx prisma/seed.ts

# 5. Lancer en développement
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000)

## Déploiement Vercel

```bash
# 1. Installer Vercel CLI
npm i -g vercel

# 2. Lier au projet
vercel link

# 3. Déployer
vercel --prod
```

Ou simplement : connecter le repo GitHub à Vercel → deploy automatique sur chaque push.

## Structure du projet

```
app/
  (public)/          → Pages publiques (SSR/SSG pour le SEO)
  (auth)/            → Pages authentifiées (espace client)
  bo/                → Back-office (15 modules admin)
  api/               → API Routes (auth, orders, stripe, claude)
  order/[service]/   → 19 tunnels de commande dynamiques
  fortune/           → Roue de la Fortune
components/
  layout/            → Navbar, Footer
  ui/                → Boutons, inputs, cards, badges...
  tunnels/           → Composants de tunnels de commande
  client/            → Composants espace client
  bo/                → Composants back-office
  shared/            → ThemeProvider, composants partagés
lib/
  constants.ts       → Services, agences, données statiques
  utils.ts           → Helpers (cn, formatPrice, etc.)
  prisma.ts          → Prisma client singleton
prisma/
  schema.prisma      → Schéma BDD PostgreSQL
types/
  index.ts           → Types TypeScript partagés
```

## Licence

Propriétaire — TAMEL Centres d'Affaires © 2026
