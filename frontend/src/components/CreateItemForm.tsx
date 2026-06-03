import { FormEvent, useState } from "react";

interface Props {
  walletAddress: string;
  onCreate: (title: string, amount: number, wallet: string) => Promise<void>;
}

export default function CreateItemForm({ walletAddress, onCreate }: Props) {
  const [title, setTitle] = useState("Fund rebuild escrow");
  const [amount, setAmount] = useState("100");
  const [pending, setPending] = useState(false);

  async function submit(event: FormEvent) {
    event.preventDefault();
    setPending(true);
    try {
      await onCreate(title, Number(amount), walletAddress || "manual-entry");
    } finally {
      setPending(false);
    }
  }

  return (
    <form className="panel form-panel" onSubmit={submit}>
      <h2>Create impact item</h2>
      <label>
        Item title
        <input value={title} onChange={(event) => setTitle(event.target.value)} />
      </label>
      <label>
        Amount
        <input type="number" value={amount} onChange={(event) => setAmount(event.target.value)} />
      </label>
      <button type="submit" disabled={pending}>{pending ? "Saving..." : "Save item"}</button>
    </form>
  );
}
