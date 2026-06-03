import { Router } from "express";

import { createItem, listItems, updateItemStatus } from "../controllers/items.controller.js";
import { validateBody } from "../middleware/validate.middleware.js";
import { createItemSchema, updateStatusSchema } from "../services/item.service.js";

const router = Router();

router.get("/", listItems);
router.post("/", validateBody(createItemSchema), createItem);
router.patch("/:id/status", validateBody(updateStatusSchema), updateItemStatus);

export default router;
