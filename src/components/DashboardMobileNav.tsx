"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AskIcon, SunriseIcon, PrayerIcon, MusicIcon, CompassIcon } from "@/components/Icons";

const links = [
  { href: "/dashboard", label: "Accueil", icon: CompassIcon },
  { href: "/dashboard/ask", label: "Bible", icon: AskIcon },
  { href: "/dashboard/reading", label: "Lecture", icon: SunriseIcon },
  { href: "/dashboard/prayer", label: "Prière", icon: PrayerIcon },
  { href: "/dashboard/worship", label: "Louange", icon: MusicIcon },
];

export function DashboardMobileNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed inset-x-0 bottom-0 z-20 flex border-t border-harbor-mist bg-harbor-cream/95 backdrop-blur md:hidden">
      {links.map((link) => {
        const active =
          link.href === "/dashboard"
            ? pathname === "/dashboard"
            : pathname.startsWith(link.href);
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`flex flex-1 flex-col items-center gap-1 py-2.5 text-[11px] font-medium ${
              active ? "text-harbor-navy" : "text-harbor-ink/45"
            }`}
          >
            <link.icon className={`h-5 w-5 ${active ? "text-harbor-gold" : ""}`} />
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
