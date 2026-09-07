"use server";

import { redirect } from "next/navigation";
import { checkPassword, createSession, destroySession } from "@/lib/auth";

export async function login(_prev: string | undefined, formData: FormData) {
  const password = String(formData.get("password") || "");
  if (!checkPassword(password)) {
    return "Pogrešna lozinka.";
  }
  await createSession();
  redirect("/admin");
}

export async function logout() {
  await destroySession();
  redirect("/admin");
}
