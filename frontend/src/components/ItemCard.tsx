import type { Item } from "../types/item";

interface Props {
  item: Item;
  onSelect: (item: Item) => void;
  onVerify: (id: string) => void;
}

export default function ItemCard({ item, onSelect, onVerify }: Props) {
  return (
    <article className="item-card">
      <div>
        <span>{item.status}</span>
        <h3>{item.title}</h3>
        <p>{Number(item.amount || 0).toLocaleString()} USDC</p>
      </div>
      <div className="card-actions">
        <button onClick={() => onSelect(item)}>Open</button>
        <button onClick={() => onVerify(item.id)}>Verify</button>
      </div>
    </article>
  );
}
