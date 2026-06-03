import { Contract, rpc } from "@stellar/stellar-sdk";

const rpcUrl = process.env.STELLAR_RPC_URL || "https://soroban-testnet.stellar.org";
const contractId = process.env.CONTRACT_ID || "YOUR_CONTRACT_ID";

export const sorobanService = {
  rpc() {
    return new rpc.Server(rpcUrl);
  },

  contract() {
    return new Contract(contractId);
  },

  describeInvoke(method: string, args: unknown[]) {
    return { contractId, method, args, network: process.env.STELLAR_NETWORK || "stellar:testnet" };
  },
};
