import { useState } from "react";

import { API_URL } from "../lib/constants";
import { describeContractCall } from "../lib/soroban";
import type { Item, PaymentQuote } from "../types/item";

export function useContract() {
  const [status, setStatus] = useState("Ready");

  async function listItems(): Promise<Item[]> {
    const response = await fetch(`${API_URL}/api/items`);
    if (!response.ok) throw new Error("Could not load items");
    return response.json();
  }

  async function createItem(title: string, amount: number, wallet: string): Promise<Item> {
    setStatus("Saving item");
    const response = await fetch(`${API_URL}/api/items`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, amount, wallet }),
    });
    if (!response.ok) throw new Error("Could not create item");
    const item = await response.json();
    setStatus("Item saved");
    return item;
  }

  async function verifyItem(id: string): Promise<Item> {
    const response = await fetch(`${API_URL}/api/items/${id}/status`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: "verified" }),
    });
    if (!response.ok) throw new Error("Could not verify item");
    return response.json();
  }

  async function getPaymentQuote(): Promise<PaymentQuote> {
    const response = await fetch(`${API_URL}/api/transactions/payments/quote`);
    if (!response.ok) throw new Error("Could not load payment quote");
    return response.json();
  }

  return {
    status,
    listItems,
    createItem,
    verifyItem,
    getPaymentQuote,
    prepareDeposit: (amount: number) => describeContractCall("deposit", [amount]),
  };
}
