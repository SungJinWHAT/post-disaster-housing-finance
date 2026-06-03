import { Router } from "express";

import { ok } from "../utils/response.js";

const router = Router();

router.get("/", (_request, response) => {
  response.json(ok({ project: "Bayanihan Build", status: "healthy" }));
});

export default router;
