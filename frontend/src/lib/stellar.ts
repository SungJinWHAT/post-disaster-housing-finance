import { Networks } from "@stellar/stellar-sdk";

export function getNetworkPassphrase(network: string) {
  return network === "stellar:pubnet" ? Networks.PUBLIC : Networks.TESTNET;
}

export function shortenAddress(address: string) {
  if (!address) return "";
  return `${address.slice(0, 6)}...${address.slice(-6)}`;
}
