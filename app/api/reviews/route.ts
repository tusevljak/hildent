import { NextResponse } from "next/server";
import { getSql, ensureSchema } from "@/lib/db";
import { isAuthed } from "@/lib/auth";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    await ensureSchema();
    const sql = getSql();
    const rows = await sql`
      SELECT id, name, rating, text, service, date
      FROM reviews
      ORDER BY date DESC, id DESC
    `;
    return NextResponse.json(rows);
  } catch (err) {
    console.error("GET /api/reviews", err);
    return NextResponse.json({ error: "db_unavailable" }, { status: 503 });
  }
}

export async function POST(req: Request) {
  if (!(await isAuthed())) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }
  let body: {
    name?: string;
    rating?: number;
    text?: string;
    service?: string;
    date?: string;
  };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const name = (body.name || "").trim();
  const text = (body.text || "").trim();
  const rating = Math.min(5, Math.max(1, Number(body.rating) || 5));
  const service = (body.service || "").trim() || null;
  const date = body.date && /^\d{4}-\d{2}-\d{2}$/.test(body.date) ? body.date : null;

  if (!name || !text) {
    return NextResponse.json({ error: "name_and_text_required" }, { status: 400 });
  }

  try {
    await ensureSchema();
    const sql = getSql();
    const [row] = await sql`
      INSERT INTO reviews (name, rating, text, service, date)
      VALUES (${name}, ${rating}, ${text}, ${service}, ${date ?? sql`CURRENT_DATE`})
      RETURNING id, name, rating, text, service, date
    `;
    return NextResponse.json(row, { status: 201 });
  } catch (err) {
    console.error("POST /api/reviews", err);
    return NextResponse.json({ error: "db_error" }, { status: 500 });
  }
}
