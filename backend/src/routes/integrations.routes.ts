import { Router } from "express";

import { getEcosystemIntegration } from "../controllers/integration.controller.js";

const router = Router();

router.get("/ecosystem", getEcosystemIntegration);

export default router;
