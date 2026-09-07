import postgres from "postgres";

// Singleton postgres.js client. Connects lazily on first query, so the app
// (and `next build`) works even when DATABASE_URL is not set yet — only the
// API routes that actually query will fail until the env var is configured.
declare global {
  // eslint-disable-next-line no-var
  var _sql: ReturnType<typeof postgres> | undefined;
  // eslint-disable-next-line no-var
  var _schemaReady: Promise<void> | undefined;
}

export function getSql() {
  const url = process.env.DATABASE_URL;
  if (!url) {
    throw new Error("DATABASE_URL nije postavljen.");
  }
  if (!global._sql) {
    global._sql = postgres(url, {
      // Coolify's internal Postgres is plain TCP on the private network.
      ssl: url.includes("sslmode=require") ? "require" : false,
      max: 5,
      idle_timeout: 20,
    });
  }
  return global._sql;
}

// Creates tables if they don't exist. Idempotent; runs once per process.
export async function ensureSchema() {
  if (!global._schemaReady) {
    const sql = getSql();
    global._schemaReady = (async () => {
      await sql`
        CREATE TABLE IF NOT EXISTS reviews (
          id          SERIAL PRIMARY KEY,
          name        TEXT NOT NULL,
          rating      INTEGER NOT NULL DEFAULT 5,
          text        TEXT NOT NULL,
          service     TEXT,
          date        DATE NOT NULL DEFAULT CURRENT_DATE,
          created_at  TIMESTAMPTZ NOT NULL DEFAULT now()
        )
      `;
    })();
  }
  return global._schemaReady;
}
