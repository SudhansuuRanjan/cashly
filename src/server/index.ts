import { Hono } from "hono";
import type { D1Database, RateLimit } from "@cloudflare/workers-types";

type Bindings = {
  cfwl_staging_db: D1Database;
  MY_RATE_LIMITER: RateLimit;
};

const app = new Hono<{ Bindings: Bindings }>();

app.get("/api/health", (c) => {
  return c.json({ status: "Healthy", timestamp: new Date().toISOString() });
});

export default app;