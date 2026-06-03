const stellarNetwork = process.env.STELLAR_NETWORK || "stellar:testnet";
const stellarRecipient = process.env.STELLAR_RECIPIENT || "CONFIGURE_STELLAR_RECIPIENT";
const facilitatorUrl = process.env.FACILITATOR_URL || "https://channels.openzeppelin.com/x402/testnet";
const usdcSac =
  process.env.USDC_SAC ||
  (stellarNetwork === "stellar:pubnet"
    ? "CCW67TSZV3SSS2HXMBQ5JFGCKJNXKZM7UQUWUZPUTHXSTZLEO7SJMI75"
    : "CBIELTK6YBZJU5UP2WWQEUCYKLPU6AUNZ2BQ4WWFEIE3USCIHMXQDAMA");
const quoteBaseUnits = "18000";

export const transactionService = {
  paymentQuote(resource: string) {
    return {
      x402Version: 2,
      project: "Bayanihan Build",
      resource,
      configured: !stellarRecipient.startsWith("CONFIGURE_"),
      accepts: [
        {
          scheme: "exact",
          network: stellarNetwork,
          asset: "USDC",
          assetContract: usdcSac,
          decimals: 7,
          maxAmountRequired: quoteBaseUnits,
          displayAmount: (Number(quoteBaseUnits) / 10_000_000).toFixed(4) + " USDC",
          payTo: stellarRecipient,
          facilitatorUrl,
          description: "Bayanihan Build paid API access for Homes protected",
          mimeType: "application/json",
          maxTimeoutSeconds: 60,
        },
      ],
      mppFallback: {
        protocol: "MPP",
        mode: "charge",
        network: stellarNetwork,
        currency: usdcSac,
        recipient: stellarRecipient,
        feeSponsored: true,
        settlement: "Soroban SAC transfer",
      },
    };
  },
};
