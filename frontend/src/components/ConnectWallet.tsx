import { Wallet } from "lucide-react";

import { shortenAddress } from "../lib/stellar";
import type { WalletState } from "../types/wallet";

interface Props {
  wallet: WalletState;
  onConnect: () => void;
}

export default function ConnectWallet({ wallet, onConnect }: Props) {
  return (
    <button className="wallet-button" onClick={onConnect}>
      <Wallet size={18} />
      {wallet.connected ? shortenAddress(wallet.address) : "Connect Freighter"}
    </button>
  );
}
