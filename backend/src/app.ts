import cors from "cors";
import express from "express";

import healthRoutes from "./routes/health.routes.js";
import itemRoutes from "./routes/items.routes.js";
import transactionRoutes from "./routes/transactions.routes.js";
import { errorMiddleware } from "./middleware/error.middleware.js";

const app = express();

app.use(cors());
app.use(express.json({ limit: "100kb" }));

app.use("/api/health", healthRoutes);
app.use("/api/items", itemRoutes);
app.use("/api/transactions", transactionRoutes);
app.use(errorMiddleware);

export default app;
