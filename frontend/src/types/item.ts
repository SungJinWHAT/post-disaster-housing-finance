export type ItemStatus = "pending" | "verified" | "released";

export interface Item {
  id: string;
  title: string;
  amount: number;
  status: ItemStatus;
  wallet: string;
  createdAt: string;
}

export interface PaymentQuote {
  x402Version: number;
  project: string;
  resource: string;
  accepts: Array<{
    scheme: string;
    network: string;
    asset: string;
    assetContract: string;
    displayAmount: string;
    payTo: string;
    facilitatorUrl: string;
  }>;
  mppFallback: {
    protocol: string;
    mode: string;
    network: string;
  };
}
