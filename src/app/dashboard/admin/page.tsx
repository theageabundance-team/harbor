import { redirect } from "next/navigation";
import { getSession } from "@/lib/session";
import { isAdminSession } from "@/lib/admin";
import { listUsers } from "@/lib/users-store";
import { formatDate, formatDateTime, formatRelativeTime } from "@/lib/format";
import { ShieldIcon } from "@/components/Icons";

const MAX_ROWS = 50;

export default async function AdminPage() {
  const session = await getSession();
  if (!isAdminSession(session)) {
    redirect("/dashboard");
  }

  const users = await listUsers();
  const visibleUsers = users.slice(0, MAX_ROWS);

  return (
    <div className="mx-auto max-w-5xl">
      <div className="mb-8 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-harbor-navy/5 text-harbor-navy">
          <ShieldIcon className="h-5 w-5" />
        </div>
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-harbor-gold">
            Admin
          </span>
          <h1 className="font-display text-2xl text-harbor-navy sm:text-3xl">
            Harbor users
          </h1>
        </div>
      </div>

      <div className="mb-5 flex flex-wrap items-center gap-4 text-sm text-harbor-ink/50">
        <span>
          <strong className="text-harbor-ink/80">{users.length.toLocaleString("en-US")}</strong>{" "}
          {users.length === 1 ? "user" : "users"} total
        </span>
        {users.length > MAX_ROWS && (
          <span>
            Showing the {MAX_ROWS} most recently active
          </span>
        )}
      </div>

      {users.length === 0 ? (
        <div className="rounded-2xl border border-harbor-mist bg-white p-10 text-center text-sm text-harbor-ink/50">
          No one has signed in to Harbor yet.
        </div>
      ) : (
        <div className="overflow-hidden rounded-2xl border border-harbor-mist bg-white shadow-sm">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-harbor-mist bg-harbor-mist/40 text-xs uppercase tracking-wide text-harbor-ink/50">
                <th className="px-5 py-3 font-medium">Customer</th>
                <th className="px-5 py-3 font-medium">Email</th>
                <th className="px-5 py-3 font-medium">Purchased on</th>
                <th className="px-5 py-3 font-medium">Last access</th>
                <th className="px-5 py-3 font-medium">Visits</th>
              </tr>
            </thead>
            <tbody>
              {visibleUsers.map((user) => (
                <tr key={user.email} className="border-b border-harbor-mist last:border-0">
                  <td className="px-5 py-3.5 font-medium text-harbor-ink/85">{user.name}</td>
                  <td className="px-5 py-3.5 text-harbor-ink/60">{user.email}</td>
                  <td className="px-5 py-3.5 text-harbor-ink/60">
                    {formatDate(user.firstLoginAt)}
                  </td>
                  <td className="px-5 py-3.5 text-harbor-ink/60" title={formatDateTime(user.lastLoginAt)}>
                    {formatRelativeTime(user.lastLoginAt)}
                  </td>
                  <td className="px-5 py-3.5 text-harbor-ink/60">{user.loginCount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <p className="mt-6 text-xs leading-relaxed text-harbor-ink/40">
        This list is stored in a local file, which works in development but
        doesn&rsquo;t persist reliably once the app is deployed on Vercel. See
        the project README to connect a database (we recommend Upstash
        Redis) and make this list permanent in production.
      </p>
    </div>
  );
}
