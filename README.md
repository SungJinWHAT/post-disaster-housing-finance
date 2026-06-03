# Post-Disaster Housing Finance

Pre-funded housing pools release aid after verified disaster damage and reconstruction milestones.

This is a mid-level full-stack Stellar Soroban app scaffold for **Disaster-prone families, LGUs, and housing donors**.

## Stack

- Rust Soroban smart contract split into storage, types, errors, and events modules
- React + Vite + TypeScript frontend with Freighter wallet connection
- Express + TypeScript backend with Prisma and SQLite
- x402-style Stellar USDC payment quote route with MPP Charge fallback metadata

## Structure

- `contract/` - Soroban contract
- `frontend/` - React client
- `backend/` - Express API
- `prisma/` - Prisma schema and migrations folder
- `scripts/` - contract build/deploy/invoke helpers
- `docs/` - setup, contract, and API notes

## Quick Start

```bash
npm install
npm run db:generate
npm --workspace backend run db:migrate
npm run db:seed
npm run dev
```

## Contract

```bash
cd contract
make test
make build
```

## Git Upload

```bash
git init
git add .
git commit -m "Initial Bayanihan Build Soroban full-stack app"
git branch -M main
git remote add origin YOUR_GIT_REMOTE_URL
git push -u origin main
```
