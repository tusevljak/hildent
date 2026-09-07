import { NextResponse } from "next/server";
import { getSql, ensureSchema } from "@/lib/db";
import { isAuthed } from "@/lib/auth";

export const dynamic = "force-dynamic";

export async function DELETE(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!(await isAuthed())) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }
  const { id } = await params;
  const numId = Number(id);
  if (!Number.isInteger(numId)) {
    return NextResponse.json({ error: "invalid_id" }, { status: 400 });
  }
  try {
    await ensureSchema();
    const sql = getSql();
    await sql`DELETE FROM reviews WHERE id = ${numId}`;
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("DELETE /api/reviews/[id]", err);
    return NextResponse.json({ error: "db_error" }, { status: 500 });
  }
}
