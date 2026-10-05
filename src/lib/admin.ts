import type { HarborSession } from "@/lib/session";

export const ADMIN_EMAIL = (process.env.ADMIN_EMAIL ?? "biafwrr@gmail.com").toLowerCase();

export function isAdminSession(session: HarborSession | null): boolean {
  return !!session && session.email.toLowerCase() === ADMIN_EMAIL;
}
