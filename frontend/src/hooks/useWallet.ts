import { useState } from "react";
import { getAddress, getNetwork, isAllowed, isConnected, setAllowed } from "@stellar/freighter-api";

import type { WalletState } from "../types/wallet";

function unwrap<T>(value: T | Record<string, T>, key: string): T {
  if (value && typeof value === "object" && key in value) {
    return (value as Record<string, T>)[key];
  }
  return value as T;
}

export function useWallet() {
  const [wallet, setWallet] = useState<WalletState>({
    connected: false,
    address: "",
    network: "",
    status: "Connect Freighter to continue.",
  });

  async function connect() {
    try {
      const installed = unwrap(await isConnected(), "isConnected");
      if (!installed) {
        setWallet((state) => ({ ...state, status: "Freighter is not detected." }));
        return;
      }

      const allowed = unwrap(await isAllowed(), "isAllowed");
      if (!allowed) await setAllowed();

      const address = unwrap(await getAddress(), "address");
      const network = unwrap(await getNetwork(), "network");
      setWallet({
        connected: true,
        address,
        network,
        status: "Wallet connected.",
      });
    } catch (error) {
      setWallet((state) => ({
        ...state,
        status: error instanceof Error ? error.message : "Wallet connection failed.",
      }));
    }
  }

  return { wallet, connect };
}
