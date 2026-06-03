import { useState } from "react";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import ItemDetails from "./pages/ItemDetails";
import { useWallet } from "./hooks/useWallet";
import type { Item } from "./types/item";

type Page = "home" | "dashboard" | "details";

export default function App() {
  const [page, setPage] = useState<Page>("home");
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const wallet = useWallet();

  return (
    <main>
      <Navbar page={page} onNavigate={setPage} wallet={wallet.wallet} onConnect={wallet.connect} />
      {page === "home" ? <Home onStart={() => setPage("dashboard")} /> : null}
      {page === "dashboard" ? (
        <Dashboard
          wallet={wallet.wallet}
          onSelect={(item) => {
            setSelectedItem(item);
            setPage("details");
          }}
        />
      ) : null}
      {page === "details" ? <ItemDetails item={selectedItem} onBack={() => setPage("dashboard")} /> : null}
    </main>
  );
}
