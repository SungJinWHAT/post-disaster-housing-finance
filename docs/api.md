# API

Base URL: `http://localhost:8787`

## Health

`GET /api/health`

## Items

`GET /api/items`
`POST /api/items`
`PATCH /api/items/:id/status`

## Agentic Payments

`GET /api/transactions/payments/quote`
`GET /api/transactions/payments/protected-summary`

The payment quote advertises x402 v2 `exact` requirements for Stellar USDC on `stellar:testnet` by default and includes MPP Charge fallback metadata.

Project: Post-Disaster Housing Finance

## Ecosystem Integration

`GET /api/integrations/ecosystem` returns the disclosed Stellar ecosystem integration profile for the StellarX originality rules.

