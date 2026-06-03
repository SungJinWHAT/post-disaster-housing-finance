import ConnectWallet from "./ConnectWallet";
import type { WalletState } from "../types/wallet";

interface Props {
  page: string;
  wallet: WalletState;
  onConnect: () => void;
  onNavigate: (page: "home" | "dashboard" | "details") => void;
}

export default function Navbar({ page, wallet, onConnect, onNavigate }: Props) {
  return (
    <nav className="topbar">
      <button className="brand-button" onClick={() => onNavigate("home")}>Impact Vault</button>
      <div className="nav-actions">
        <button className={page === "home" ? "active" : ""} onClick={() => onNavigate("home")}>Home</button>
        <button className={page === "dashboard" ? "active" : ""} onClick={() => onNavigate("dashboard")}>Dashboard</button>
        <ConnectWallet wallet={wallet} onConnect={onConnect} />
      </div>
    </nav>
  );
}
