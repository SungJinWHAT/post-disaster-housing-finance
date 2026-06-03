import { Contract, rpc } from "@stellar/stellar-sdk";

import { CONTRACT_ID } from "./constants";

export function getContract() {
  return new Contract(CONTRACT_ID);
}

export function getRpcServer(url = "https://soroban-testnet.stellar.org") {
  return new rpc.Server(url);
}

export function describeContractCall(method: string, args: unknown[]) {
  return {
    contractId: CONTRACT_ID,
    method,
    args,
    status: "prepared-client-side",
  };
}
