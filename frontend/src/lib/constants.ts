export const PROJECT = {
  "id": 8,
  "name": "Post-Disaster Housing Finance",
  "slug": "08-post-disaster-housing-finance",
  "shortName": "Bayanihan Build",
  "audience": "Disaster-prone families, LGUs, and housing donors",
  "mission": "Pre-funded housing pools release aid after verified disaster damage and reconstruction milestones.",
  "stat": "Families can wait five or more years for reconstruction.",
  "metric": "Homes protected",
  "action": "Sponsor resilient housing",
  "contractAction": "Fund rebuild escrow",
  "visual": "Resilient house section drawing, storm-path overlay, construction tranche ladder, community rebuild map.",
  "palette": [
    "#1c1917",
    "#ea580c",
    "#0f766e",
    "#fffbeb"
  ],
  "pattern": "rebuild-map"
} as const;

export const ECOSYSTEM_INTEGRATION = {
  "name": "OpenZeppelin Relayer",
  "kind": "Fee-sponsored Stellar transactions",
  "url": "https://docs.openzeppelin.com/relayer",
  "useCase": "The app includes an OpenZeppelin Relayer profile so disaster beneficiaries can be supported with gasless transaction submission when the relayer API key is configured."
} as const;

export const API_URL = import.meta.env.VITE_API_URL || "";
export const STELLAR_NETWORK = import.meta.env.VITE_STELLAR_NETWORK || "stellar:testnet";
export const CONTRACT_ID = import.meta.env.VITE_CONTRACT_ID || "YOUR_CONTRACT_ID";
