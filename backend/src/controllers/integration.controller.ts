import type { Request, Response } from "express";

import { ecosystemIntegration } from "../services/integration.service.js";
import { ok } from "../utils/response.js";

export function getEcosystemIntegration(_request: Request, response: Response) {
  response.json(ok(ecosystemIntegration));
}
