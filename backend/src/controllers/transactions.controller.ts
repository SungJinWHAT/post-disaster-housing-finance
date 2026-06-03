import type { Request, Response } from "express";

import { itemService } from "../services/item.service.js";
import { transactionService } from "../services/transaction.service.js";

export function getPaymentQuote(request: Request, response: Response) {
  const resource = typeof request.query.resource === "string" ? request.query.resource : "08-post-disaster-housing-finance:impact-api";
  response.json(transactionService.paymentQuote(resource));
}

export async function getProtectedSummary(request: Request, response: Response) {
  if (!request.header("X-PAYMENT")) {
    response.status(402).json({
      error: "Payment required",
      payment: transactionService.paymentQuote("08-post-disaster-housing-finance:protected-summary"),
    });
    return;
  }

  response.json({
    paid: true,
    verificationMode: "demo-header-only",
    items: (await itemService.list()).slice(0, 3),
  });
}
