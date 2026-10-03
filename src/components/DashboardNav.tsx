"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AskIcon, SunriseIcon, PrayerIcon, MusicIcon, CompassIcon } from "@/components/Icons";

const links = [
  { href: "/dashboard", label: "Accueil", icon: CompassIcon },
  { href: "/dashboard/ask", label: "Demander à la Bible", icon: AskIcon },
  { href: "/dashboard/reading", label: "Lecture du jour", icon: SunriseIcon },
  { href: "/dashboard/prayer", label: "Prière guidée", icon: PrayerIcon },
  { href: "/dashboard/worship", label: "Louange", icon: MusicIcon },
];

export function DashboardNav({ className = "" }: { className?: string }) {
  const pathname = usePathname();

  return (
    <nav className={className}>
      {links.map((link) => {
        const active =
          link.href === "/dashboard"
            ? pathname === "/dashboard"
            : pathname.startsWith(link.href);
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
              active
                ? "bg-harbor-gold/15 text-harbor-navy"
                : "text-harbor-ink/60 hover:bg-harbor-mist/70 hover:text-harbor-ink"
            }`}
          >
            <link.icon
              className={`h-5 w-5 ${active ? "text-harbor-gold" : "text-harbor-ink/40"}`}
            />
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
