import { cookies } from "next/headers";
import crypto from "crypto";

const COOKIE_NAME = "hildent_admin";

function adminPassword() {
  return process.env.ADMIN_PASSWORD || "";
}

// Stateless session token: HMAC of a constant, keyed by the admin password.
// Changing ADMIN_PASSWORD automatically invalidates every existing cookie.
function expectedToken() {
  const pw = adminPassword();
  if (!pw) return "";
  return crypto.createHmac("sha256", pw).update("hildent-admin-v1").digest("hex");
}

export function checkPassword(input: string) {
  const pw = adminPassword();
  if (!pw || !input) return false;
  const a = Buffer.from(input);
  const b = Buffer.from(pw);
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}

export async function createSession() {
  const jar = await cookies();
  jar.set(COOKIE_NAME, expectedToken(), {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30, // 30 dana
  });
}

export async function destroySession() {
  const jar = await cookies();
  jar.delete(COOKIE_NAME);
}

export async function isAuthed() {
  const expected = expectedToken();
  if (!expected) return false;
  const jar = await cookies();
  const token = jar.get(COOKIE_NAME)?.value;
  return !!token && token === expected;
}
