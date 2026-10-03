import { cookies } from "next/headers";

export const SESSION_COOKIE = "harbor_session";

export type HarborSession = {
  name: string;
  email: string;
};

export async function getSession(): Promise<HarborSession | null> {
  const store = await cookies();
  const raw = store.get(SESSION_COOKIE)?.value;
  if (!raw) return null;

  try {
    const parsed = JSON.parse(raw);
    if (typeof parsed?.name === "string" && typeof parsed?.email === "string") {
      return { name: parsed.name, email: parsed.email };
    }
    return null;
  } catch {
    return null;
  }
}
