import { z } from "zod";

import prisma from "../database/prisma.js";

export const createItemSchema = z.object({
  title: z.string().min(1).max(120).default("Fund rebuild escrow"),
  amount: z.coerce.number().positive(),
  wallet: z.string().min(1).max(120).default("manual-entry"),
});

export const updateStatusSchema = z.object({
  status: z.enum(["pending", "verified", "released"]),
});

export const itemService = {
  list() {
    return prisma.item.findMany({ orderBy: { createdAt: "desc" } });
  },

  create(input: z.infer<typeof createItemSchema>) {
    const data = createItemSchema.parse(input);
    return prisma.item.create({ data });
  },

  updateStatus(id: string, status: string) {
    const parsed = updateStatusSchema.parse({ status });
    return prisma.item.update({ where: { id }, data: parsed }).catch(() => null);
  },
};
