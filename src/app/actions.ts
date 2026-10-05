"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { SESSION_COOKIE } from "@/lib/session";
import { recordLogin } from "@/lib/users-store";

export type EnterState = {
  error?: string;
};

export async function enterHarbor(
  _prevState: EnterState,
  formData: FormData
): Promise<EnterState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();

  if (!name) {
    return { error: "Veuillez entrer le nom utilisé lors de votre achat." };
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return { error: "Veuillez entrer une adresse e-mail valide." };
  }

  await recordLogin(name, email);

  const store = await cookies();
  store.set(SESSION_COOKIE, JSON.stringify({ name, email }), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 90,
  });

  redirect("/dashboard");
}

export async function leaveHarbor() {
  const store = await cookies();
  store.delete(SESSION_COOKIE);
  redirect("/");
}
