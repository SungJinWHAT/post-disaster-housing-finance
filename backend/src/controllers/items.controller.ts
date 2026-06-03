import type { Request, Response } from "express";

import { itemService } from "../services/item.service.js";

export async function listItems(_request: Request, response: Response) {
  response.json(await itemService.list());
}

export async function createItem(request: Request, response: Response) {
  const item = await itemService.create(request.body);
  response.status(201).json(item);
}

export async function updateItemStatus(request: Request, response: Response) {
  const item = await itemService.updateStatus(String(request.params.id), request.body.status);
  if (!item) {
    response.status(404).json({ error: "Item not found" });
    return;
  }
  response.json(item);
}
