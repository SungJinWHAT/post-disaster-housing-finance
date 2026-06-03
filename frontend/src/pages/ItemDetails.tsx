import type { Item } from "../types/item";

interface Props {
  item: Item | null;
  onBack: () => void;
}

export default function ItemDetails({ item, onBack }: Props) {
  if (!item) {
    return (
      <section className="panel details">
        <p>No item selected.</p>
        <button onClick={onBack}>Back</button>
      </section>
    );
  }

  return (
    <section className="panel details">
      <button onClick={onBack}>Back</button>
      <h1>{item.title}</h1>
      <dl>
        <dt>Amount</dt>
        <dd>{item.amount.toLocaleString()} USDC</dd>
        <dt>Status</dt>
        <dd>{item.status}</dd>
        <dt>Wallet</dt>
        <dd>{item.wallet}</dd>
        <dt>Created</dt>
        <dd>{new Date(item.createdAt).toLocaleString()}</dd>
      </dl>
    </section>
  );
}
