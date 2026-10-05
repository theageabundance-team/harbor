import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

/**
 * User tracking storage.
 *
 * This reads/writes a JSON file on local disk, which is fine for local
 * development but does NOT persist reliably on Vercel: serverless functions
 * get a fresh, ephemeral filesystem per instance, so entries can disappear
 * or fail to show up depending on which instance serves a request.
 *
 * To make this durable in production, swap the three functions below for
 * calls to a real store (recommended: Upstash Redis via `@upstash/redis` —
 * a HSET per user keyed by email works well, or Vercel Postgres/Neon with a
 * `users` table). Everything else in the app (actions.ts, the admin page)
 * only calls recordLogin / listUsers, so the swap is isolated to this file.
 */

export type StoredUser = {
  name: string;
  email: string;
  firstLoginAt: string; // ISO timestamp — first time this email signed in
  lastLoginAt: string; // ISO timestamp — most recent sign-in
  loginCount: number;
};

const DATA_DIR = path.join(process.cwd(), ".data");
const DATA_FILE = path.join(DATA_DIR, "users.json");

async function readAll(): Promise<Record<string, StoredUser>> {
  try {
    const raw = await readFile(DATA_FILE, "utf-8");
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

async function writeAll(users: Record<string, StoredUser>): Promise<void> {
  await mkdir(DATA_DIR, { recursive: true });
  await writeFile(DATA_FILE, JSON.stringify(users, null, 2), "utf-8");
}

export async function recordLogin(name: string, email: string): Promise<void> {
  const key = email.toLowerCase();
  const users = await readAll();
  const now = new Date().toISOString();
  const existing = users[key];

  users[key] = {
    name,
    email: key,
    firstLoginAt: existing?.firstLoginAt ?? now,
    lastLoginAt: now,
    loginCount: (existing?.loginCount ?? 0) + 1,
  };

  await writeAll(users);
}

export async function listUsers(): Promise<StoredUser[]> {
  const users = await readAll();
  return Object.values(users).sort(
    (a, b) => new Date(b.lastLoginAt).getTime() - new Date(a.lastLoginAt).getTime()
  );
}
