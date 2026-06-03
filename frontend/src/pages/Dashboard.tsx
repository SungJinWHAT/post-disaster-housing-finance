import { useEffect, useState } from "react";

import CreateItemForm from "../components/CreateItemForm";
import ItemCard from "../components/ItemCard";
import TransactionStatus from "../components/TransactionStatus";
import { useContract } from "../hooks/useContract";
import type { Item, PaymentQuote } from "../types/item";
import type { WalletState } from "../types/wallet";

interface Props {
  wallet: WalletState;
  onSelect: (item: Item) => void;
}

export default function Dashboard({ wallet, onSelect }: Props) {
  const contract = useContract();
  const [items, setItems] = useState<Item[]>([]);
  const [quote, setQuote] = useState<PaymentQuote | null>(null);

  async function refresh() {
    const [nextItems, nextQuote] = await Promise.all([
      contract.listItems(),
      contract.getPaymentQuote(),
    ]);
    setItems(nextItems);
    setQuote(nextQuote);
  }

  useEffect(() => {
    refresh().catch(console.error);
  }, []);

  async function createItem(title: string, amount: number, walletAddress: string) {
    const item = await contract.createItem(title, amount, walletAddress);
    contract.prepareDeposit(amount);
    setItems((current) => [item, ...current]);
  }

  async function verifyItem(id: string) {
    const updated = await contract.verifyItem(id);
    setItems((current) => current.map((item) => (item.id === id ? updated : item)));
  }

  return (
    <section className="dashboard">
      <CreateItemForm walletAddress={wallet.address} onCreate={createItem} />
      <div className="panel">
        <h2>Bayanihan Build records</h2>
        <TransactionStatus status={contract.status} />
        <div className="payment-box">
          <span>x402 quote</span>
          <strong>{quote?.accepts[0]?.displayAmount || "Loading"}</strong>
          <code>{quote?.accepts[0]?.network || "stellar:testnet"}</code>
        </div>
        <div className="item-grid">
          {items.map((item) => (
            <ItemCard key={item.id} item={item} onSelect={onSelect} onVerify={verifyItem} />
          ))}
        </div>
      </div>
    </section>
  );
}
