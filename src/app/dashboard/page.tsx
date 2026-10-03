import Link from "next/link";
import { getTodaysReading } from "@/data/readings";
import { guidedPrayers } from "@/data/prayers";
import { AskIcon, SunriseIcon, PrayerIcon, MusicIcon, ArrowRightIcon } from "@/components/Icons";

const cards = [
  {
    href: "/dashboard/ask",
    icon: AskIcon,
    title: "Demander à la Bible",
    copy: "Apportez n'importe quelle question — doutes, confusion, curiosité — et recevez une réponse claire, fondée sur les Écritures.",
  },
  {
    href: "/dashboard/reading",
    icon: SunriseIcon,
    title: "Lecture du jour",
    copy: "Le passage et la réflexion du jour, prêts quand vous l'êtes.",
  },
  {
    href: "/dashboard/prayer",
    icon: PrayerIcon,
    title: "Prière guidée",
    copy: "Choisissez une humeur et priez à travers elle, ligne par ligne.",
  },
  {
    href: "/dashboard/worship",
    icon: MusicIcon,
    title: "Louange",
    copy: "Installez-vous dans une sélection de chants de louange.",
  },
];

export default function DashboardHome() {
  const { reading } = getTodaysReading();
  const prayerOfTheDay = guidedPrayers[new Date().getDate() % guidedPrayers.length];

  return (
    <div className="mx-auto max-w-5xl">
      <div className="mb-8">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-harbor-gold">
          {new Date().toLocaleDateString("fr-FR", {
            weekday: "long",
            month: "long",
            day: "numeric",
          })}
        </span>
        <h1 className="mt-2 font-display text-3xl text-harbor-navy sm:text-4xl">
          Venez vous abriter du bruit.
        </h1>
        <p className="mt-2 max-w-xl text-harbor-ink/60">
          Voici votre port pour aujourd&rsquo;hui — les Écritures, une
          question répondue, une prière, ou un chant pour vous poser.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {cards.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className="group flex flex-col rounded-2xl border border-harbor-mist bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-harbor-navy/5 text-harbor-navy">
              <card.icon className="h-5 w-5" />
            </div>
            <h2 className="font-display text-lg text-harbor-navy">{card.title}</h2>
            <p className="mt-1.5 flex-1 text-sm leading-relaxed text-harbor-ink/55">
              {card.copy}
            </p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-harbor-gold">
              Ouvrir
              <ArrowRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-2">
        <div className="rounded-2xl border border-harbor-mist bg-harbor-navy p-7 text-harbor-cream">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-harbor-gold-light">
            Lecture du jour &middot; {reading.theme}
          </span>
          <h3 className="mt-2 font-display text-2xl">{reading.reference}</h3>
          <p className="mt-3 text-sm italic leading-relaxed text-harbor-cream/70">
            &laquo; {reading.passage[0]} &raquo;
          </p>
          <Link
            href="/dashboard/reading"
            className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-harbor-gold-light hover:text-harbor-gold"
          >
            Lire le passage complet
            <ArrowRightIcon className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="rounded-2xl border border-harbor-mist bg-white p-7">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-harbor-gold">
            Prière suggérée &middot; {prayerOfTheDay.mood}
          </span>
          <h3 className="mt-2 font-display text-2xl text-harbor-navy">
            {prayerOfTheDay.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-harbor-ink/60">
            {prayerOfTheDay.intro}
          </p>
          <Link
            href={`/dashboard/prayer#${prayerOfTheDay.slug}`}
            className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-harbor-navy hover:text-harbor-gold"
          >
            Prier maintenant
            <ArrowRightIcon className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
