import { redirect } from "next/navigation";
import { getSession } from "@/lib/session";
import { isAdminSession } from "@/lib/admin";
import { listUsers } from "@/lib/users-store";
import { formatDate, formatDateTime, formatRelativeTime } from "@/lib/format";
import { ShieldIcon } from "@/components/Icons";

export default async function AdminPage() {
  const session = await getSession();
  if (!isAdminSession(session)) {
    redirect("/dashboard");
  }

  const users = await listUsers();

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
            Usuários do Harbor
          </h1>
        </div>
      </div>

      <div className="mb-5 flex flex-wrap items-center gap-4 text-sm text-harbor-ink/50">
        <span>
          <strong className="text-harbor-ink/80">{users.length}</strong>{" "}
          {users.length === 1 ? "usuário" : "usuários"} no total
        </span>
      </div>

      {users.length === 0 ? (
        <div className="rounded-2xl border border-harbor-mist bg-white p-10 text-center text-sm text-harbor-ink/50">
          Ninguém entrou no Harbor ainda.
        </div>
      ) : (
        <div className="overflow-hidden rounded-2xl border border-harbor-mist bg-white shadow-sm">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-harbor-mist bg-harbor-mist/40 text-xs uppercase tracking-wide text-harbor-ink/50">
                <th className="px-5 py-3 font-medium">Cliente</th>
                <th className="px-5 py-3 font-medium">E-mail</th>
                <th className="px-5 py-3 font-medium">Comprou em</th>
                <th className="px-5 py-3 font-medium">Último acesso</th>
                <th className="px-5 py-3 font-medium">Acessos</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
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
        Esta lista é armazenada em um arquivo local, o que funciona em
        desenvolvimento mas não persiste de forma confiável quando o app está
        publicado na Vercel. Veja o README do projeto para conectar um banco
        de dados (recomendamos Upstash Redis) e tornar essa lista permanente
        em produção.
      </p>
    </div>
  );
}
