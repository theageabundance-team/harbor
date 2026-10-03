"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { SESSION_COOKIE } from "@/lib/session";

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
    return { error: "Please enter the name you purchased under." };
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return { error: "Please enter a valid email address." };
  }

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
