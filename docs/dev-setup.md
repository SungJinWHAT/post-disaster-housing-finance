# Dev Setup Guide

This project follows the StellarX Philippines setup guidance for testnet-first Stellar builds.

## Core Environment

Most prototype flows can run without third-party API keys.

| Tool or protocol | Key required | Notes |
|---|---|---|
| Soroban RPC | No for public testnet | Use `https://soroban-testnet.stellar.org` |
| Freighter | No | Browser extension wallet |
| Soroswap | No | Public protocol contracts |
| Blend | No | Public protocol contracts |
| Reflector Oracle | No | Public oracle references |
| Stellar Wallets Kit | No | Optional multi-wallet layer |

## Testnet Infrastructure

| Resource | Value |
|---|---|
| Soroban RPC | `https://soroban-testnet.stellar.org` |
| Horizon | `https://horizon-testnet.stellar.org` |
| Friendbot | `https://friendbot.stellar.org` |
| Circle USDC SAC | `CBIELTK6YBZJU5UP2WWQEUCYKLPU6AUNZ2BQ4WWFEIE3USCIHMXQDAMA` |
| XLM SAC | `CDLZFC3SYJYDZT7K67VZ75HPJVIEUVNIXF47ZG2FB2RMQQVU2HHGCYSC` |

## Protocol References

| Protocol | Testnet reference |
|---|---|
| Soroswap Router | `CCJUD55AG6W5HAI5LRVNKAE5WDP5XGZBUDS5WNTIVDU7O264UZZE7BRD` |
| Soroswap Factory | `CDP3HMUH6SMS3S7NPGNDJLULCOXXEPSHY4JKUKMBNQMATHDHWXRRJTBY` |
| Blend Pool Factory V2 | `CDV6RX4CGPCOKGTBFS52V3LMWQGZN3LCQTXF5RVPOOCG4XVMHXQ4NTF6` |
| Blend Backstop V2 | `CBDVWXT433PRVTUNM56C3JREF3HIZHRBA64NB2C3B2UNCKIS65ZYCLZA` |
| Blend Testnet V2 Pool | `CCEBVDYM32YNYCVNRXQKDFFPISJJCV557CDZEIRBEE4NCV4KHPQ44HGF` |
| Aquarius pools | `https://testnet.aqua.network/pools` |
| Reflector oracles | `https://reflector.network/oracles` |

Testnet contract addresses can change. If a protocol call stops working, confirm the current registry before debugging app logic.

## Asset Registry Notes

Do not assume every testnet asset with the same symbol is interchangeable.

| Source | Issuer |
|---|---|
| Circle standard testnet USDC | `GBBD47IF6LWK7P7MDEVSCWR7DPUWV3NY3DTQEVFL4NAT4AQH3ZLLFLA5` |
| Blend-specific testnet USDC usage | `GATALTGTWIOT6BUDBCZM3Q4OQ4BO2COLOAZ7IYSKPLC2PMSOPPGF5V56` |

Before using a protocol integration, verify which issuer or SAC representation it expects.

## Build Gotchas

- Always simulate Soroban transactions before signing and submitting.
- Use `Networks.TESTNET` or `Networks.PUBLIC` instead of hardcoded passphrase strings.
- Poll transaction finality after `sendTransaction`; submission does not mean success.
- Extend Soroban storage TTLs before important entries expire.
- Wrap Freighter calls with timeouts so missing extensions do not hang the UI.
- Use dynamic Freighter imports in SSR apps.
- With newer Freighter APIs, treat `signTransaction` as returning an object such as `{ signedTxXdr }`.
- Create trustlines before receiving classic Stellar assets.
- Use `BigInt` for Soroswap amounts.
- Prefer Soroban RPC for smart contract calls, simulation, submission, and modern account sequence flows.
- Use `localhost`, not raw IP addresses, as the WebAuthn `rpId` for local passkey testing.
- Check SDK version drift before copying older examples.

