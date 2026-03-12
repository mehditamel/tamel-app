# 🚀 Guide de mise en production TAMEL — GitHub + Vercel

## Étape 1 : Créer le repo GitHub

1. Va sur **https://github.com/new**
2. Remplis :
   - Repository name : `tamel-app`
   - Description : `Plateforme digitale unifiée TAMEL — Centres d'Affaires`
   - **Private** (cocher privé)
   - NE PAS cocher "Add a README" (on a déjà le nôtre)
3. Cliquer **Create repository**
4. Tu verras une page avec des instructions. Copie l'URL du repo :
   ```
   https://github.com/TON-USERNAME/tamel-app.git
   ```

## Étape 2 : Pousser le code sur GitHub

Ouvre un terminal sur ton PC :

```bash
# 1. Dézippe le projet
cd ~/Desktop   # ou là où tu veux
unzip tamel-app.zip
cd tamel-app

# 2. Initialise git (si pas déjà fait)
git init
git branch -m main

# 3. Configure ton identité
git config user.email "mehdi@tamel.fr"
git config user.name "Mehdi TAMEL"

# 4. Premier commit
git add -A
git commit -m "feat: initial project structure"

# 5. Connecte au repo GitHub
git remote add origin https://github.com/TON-USERNAME/tamel-app.git

# 6. Pousse le code
git push -u origin main
```

> 💡 Si GitHub te demande un mot de passe, utilise un **Personal Access Token** :
> GitHub → Settings → Developer settings → Personal access tokens → Generate new token (classic)
> Coche "repo" → Generate → Copie le token et utilise-le comme mot de passe

## Étape 3 : Connecter Vercel

1. Va sur **https://vercel.com** et connecte-toi avec ton compte GitHub
2. Clique **"Add New Project"**
3. Tu verras ton repo `tamel-app` dans la liste → Clique **"Import"**
4. Vercel détecte automatiquement Next.js. Vérifie :
   - Framework Preset : **Next.js** ✅
   - Root Directory : `.` ✅
   - Build Command : `next build` ✅
   - Output Directory : `.next` ✅
5. **Environment Variables** : pour l'instant, pas besoin (le site fonctionne sans BDD en mode statique). On ajoutera plus tard :
   - `NEXTAUTH_SECRET` → `openssl rand -base64 32` dans ton terminal
   - `DATABASE_URL` → quand on aura Neon
6. Clique **"Deploy"**

⏳ Attends 30-60 secondes... ✅ **Ton site est en ligne !**

Tu auras une URL comme : `https://tamel-app-xxx.vercel.app`

## Étape 4 : Domaine personnalisé (optionnel)

1. Dans Vercel → ton projet → **Settings → Domains**
2. Ajoute `tamel.fr` (ou `app.tamel.fr`)
3. Vercel te donne des enregistrements DNS à ajouter chez ton registrar :
   - Type A : `76.76.21.21`
   - Type CNAME : `cname.vercel-dns.com`
4. SSL automatique en 2 minutes ✅

## Étape 5 : Workflow quotidien

À partir de maintenant, chaque `git push` déploie automatiquement :

```bash
# Tu modifies un fichier
# ...

# Tu commit et push
git add -A
git commit -m "feat: ajout page tarifs complète"
git push

# → Vercel déploie automatiquement en 30 sec ✅
```

### Branches de preview

Si tu crées une branche, Vercel crée une URL de preview :

```bash
git checkout -b feature/page-tarifs
# ... modifications ...
git push -u origin feature/page-tarifs

# → Vercel crée : https://tamel-app-feature-page-tarifs-xxx.vercel.app
# Tu peux tester avant de merger dans main
```

## Étape 6 : Travailler avec Claude

Quand tu travailles avec moi (Claude) sur le projet :

1. Tu me donnes un fichier ou une feature à créer
2. Je génère le code
3. Tu le copies dans ton projet local
4. Tu commit + push → déployé en 30 sec

Ou mieux : utilise **Claude Code** (terminal) directement dans ton dossier projet pour que je puisse éditer les fichiers directement.

## Récap des comptes à créer

| Service | URL | Gratuit ? |
|---------|-----|-----------|
| GitHub | github.com | ✅ Oui |
| Vercel | vercel.com | ✅ Hobby gratuit |
| Neon (BDD) | neon.tech | ✅ Free tier |
| Stripe (paiement) | stripe.com | ✅ Mode test |
| Resend (emails) | resend.com | ✅ 100 emails/jour |

> 💰 Coût total pour démarrer : **0€**
