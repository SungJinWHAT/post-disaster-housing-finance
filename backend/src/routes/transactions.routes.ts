import { Router } from "express";

import { getPaymentQuote, getProtectedSummary } from "../controllers/transactions.controller.js";

const router = Router();

router.get("/payments/quote", getPaymentQuote);
router.get("/payments/protected-summary", getProtectedSummary);

export default router;
