import Link from "next/link";
import { redirect } from "next/navigation";
import { Logo } from "@/components/Logo";
import { DashboardNav } from "@/components/DashboardNav";
import { DashboardMobileNav } from "@/components/DashboardMobileNav";
import { ShieldIcon } from "@/components/Icons";
import { getSession } from "@/lib/session";
import { isAdminSession } from "@/lib/admin";
import { leaveHarbor } from "@/app/actions";

export default async function DashboardLayout({ children }: LayoutProps<"/dashboard">) {
  const session = await getSession();
  if (!session) {
    redirect("/");
  }

  const firstName = session.name.trim().split(/\s+/)[0] || session.name;
  const isAdmin = isAdminSession(session);

  return (
    <div className="flex h-screen overflow-hidden bg-harbor-cream">
      <aside className="hidden h-screen w-64 shrink-0 flex-col border-r border-harbor-mist bg-white/60 px-5 py-8 md:flex">
        <Logo className="px-2 text-harbor-navy" markClassName="text-harbor-gold" />
        <div className="mt-10 flex-1 overflow-y-auto">
          <DashboardNav className="flex flex-col gap-1" />
          {isAdmin && (
            <Link
              href="/dashboard/admin"
              className="mt-4 flex items-center gap-3 rounded-xl border border-harbor-gold/30 bg-harbor-gold/10 px-4 py-3 text-sm font-medium text-harbor-navy transition-colors hover:bg-harbor-gold/20"
            >
              <ShieldIcon className="h-5 w-5 text-harbor-gold" />
              Admin
            </Link>
          )}
        </div>
        <div className="border-t border-harbor-mist pt-4">
          <p className="truncate px-2 text-sm font-medium text-harbor-ink/80">
            {session.name}
          </p>
          <p className="truncate px-2 text-xs text-harbor-ink/40">{session.email}</p>
          <form action={leaveHarbor}>
            <button
              type="submit"
              className="mt-3 w-full rounded-lg px-2 py-2 text-left text-sm text-harbor-ink/50 transition-colors hover:bg-harbor-mist/60 hover:text-harbor-ink"
            >
              Quitter Harbor
            </button>
          </form>
        </div>
      </aside>

      <div className="flex h-screen flex-1 flex-col overflow-hidden">
        <header className="flex shrink-0 items-center justify-between border-b border-harbor-mist bg-white/60 px-5 py-4 md:hidden">
          <Logo className="text-harbor-navy" markClassName="text-harbor-gold" />
          <div className="flex items-center gap-4">
            {isAdmin && (
              <Link
                href="/dashboard/admin"
                className="text-xs font-medium text-harbor-gold underline-offset-2 hover:underline"
              >
                Admin
              </Link>
            )}
            <form action={leaveHarbor}>
              <button
                type="submit"
                className="text-xs font-medium text-harbor-ink/50 underline-offset-2 hover:underline"
              >
                Quitter
              </button>
            </form>
          </div>
        </header>

        <div className="hidden shrink-0 items-center justify-between border-b border-harbor-mist bg-white/40 px-10 py-5 md:flex">
          <p className="font-display text-lg text-harbor-ink/80">
            Bon retour, {firstName}.
          </p>
        </div>

        <main className="flex-1 overflow-y-auto px-5 pb-24 pt-6 sm:px-8 md:px-10 md:pb-10 md:pt-8">
          {children}
        </main>

        <DashboardMobileNav />
      </div>
    </div>
  );
}
