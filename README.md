# Post Disaster Housing Finance

A Stellar testnet housing finance app for transparent post-disaster aid, milestone releases, and beneficiary records.

## Problem
After typhoons, floods, and earthquakes, housing aid can move through slow and opaque manual processes. Families need faster support, while donors and local groups need proof that funds are tied to real rebuilding milestones. This app gives disaster recovery teams an auditable housing finance workflow.

## How It Works
A recovery coordinator creates a housing case, assigns milestones, and records release approvals. Soroban keeps milestone and release events verifiable, while the backend stores case details, documents, and payment status for local operations.

## How It Uses Stellar
This project is built around Stellar testnet instead of treating blockchain as a cosmetic add-on.

- Freighter wallet connection for user-owned Stellar accounts.
- Stellar testnet RPC and Horizon configuration for account and transaction flows.
- Soroban smart contract written in Rust for verifiable project state, status changes, and events.
- Stellar assets and SAC-ready configuration for low-cost value movement.
- x402-style payment quote route for machine-readable Stellar payment requirements.
- OpenZeppelin Relayer integration profile: The app includes an OpenZeppelin Relayer profile so disaster beneficiaries can be supported with gasless transaction submission when the relayer API key is configured.

## Track
Track 5 Social Impact

## Tech Stack
- Framework: React + Vite + TypeScript frontend
- Backend: Express + TypeScript API
- Database: Prisma + SQLite for local prototype data
- Smart Contract: Rust Soroban contract
- Stellar SDK: @stellar/stellar-sdk
- Wallet: Freighter via @stellar/freighter-api
- Network: Stellar testnet
- Ecosystem integration: OpenZeppelin Relayer

## Setup & Run

```bash
git clone https://github.com/sungj8436-create/post-disaster-housing-finance.git
cd post-disaster-housing-finance
npm install
npm run db:generate
npm --workspace backend run db:migrate
npm run db:seed
npm run dev
```

Frontend defaults to Vite and the backend defaults to port 8787. Copy `.env.example` values into local environment files before connecting to deployed contracts.

## Contract

```bash
cd contract
make test
make build
```

Deploy to Stellar testnet after configuring a funded Stellar CLI identity:

```bash
stellar keys generate --global alice --network testnet --fund
./scripts/build-contract.sh
./scripts/deploy-contract.sh
```

## Network Details
- Network: Stellar testnet
- RPC URL: https://soroban-testnet.stellar.org
- Horizon URL: https://horizon-testnet.stellar.org
- Contract IDs: Not deployed yet. Set CONTRACT_ID after Stellar testnet deployment.
- Asset issuers: Testnet housing-aid asset placeholder only. Replace after selecting the final asset or SAC contract.
- Ecosystem integration: OpenZeppelin Relayer (https://docs.openzeppelin.com/relayer)

## Originality & Disclosure
This is original hackathon work for StellarX Philippines. It uses an original project concept, custom UI, local full-stack scaffolding, and a project-specific Soroban contract structure. Open-source Stellar SDKs, starter patterns, AI coding assistance, and the OpenZeppelin Relayer integration profile are disclosed because they are allowed and encouraged by the submission guideline. This repo is not a copied team project, not a pre-existing product submission, and not a barely modified example repo.

## Team
- Pixeeee - @sungj8436-create

## Submission Issue
Use `.github/ISSUE_TEMPLATE/stellarx-submission.md` to open the required StellarX submission issue. Suggested title:

```text
Team #Pixeeee - Post Disaster Housing Finance
```

## License
MIT
