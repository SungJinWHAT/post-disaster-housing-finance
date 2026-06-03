import app from "./app.js";
import { logger } from "./utils/logger.js";

const port = Number(process.env.BACKEND_PORT || 8787);

app.listen(port, () => {
  logger.info(`API listening on http://localhost:${port}`);
});
