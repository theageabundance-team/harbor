import Link from "next/link";
import { getTodaysReading } from "@/data/readings";
import { guidedPrayers } from "@/data/prayers";
import { AskIcon, SunriseIcon, PrayerIcon, MusicIcon, ArrowRightIcon } from "@/components/Icons";

const cards = [
  {
    href: "/dashboard/ask",
    icon: AskIcon,
    title: "Ask the Bible",
    copy: "Bring any question — doubts, confusion, curiosity — and get a clear, Scripture-based answer.",
  },
  {
    href: "/dashboard/reading",
    icon: SunriseIcon,
    title: "Daily Reading",
    copy: "Today's passage and reflection, ready whenever you are.",
  },
  {
    href: "/dashboard/prayer",
    icon: PrayerIcon,
    title: "Guided Prayer",
    copy: "Pick a mood and pray through it, line by line.",
  },
  {
    href: "/dashboard/worship",
    icon: MusicIcon,
    title: "Worship",
    copy: "Settle into a hand-picked set of worship songs.",
  },
];

export default function DashboardHome() {
  const { reading } = getTodaysReading();
  const prayerOfTheDay = guidedPrayers[new Date().getDate() % guidedPrayers.length];

  return (
    <div className="mx-auto max-w-5xl">
      <div className="mb-8">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-harbor-gold">
          {new Date().toLocaleDateString("en-US", {
            weekday: "long",
            month: "long",
            day: "numeric",
          })}
        </span>
        <h1 className="mt-2 font-display text-3xl text-harbor-navy sm:text-4xl">
          Come in from the noise.
        </h1>
        <p className="mt-2 max-w-xl text-harbor-ink/60">
          Here&rsquo;s your harbor for today — Scripture, a question answered,
          a prayer, or a song to settle into.
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
              Open
              <ArrowRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-2">
        <div className="rounded-2xl border border-harbor-mist bg-harbor-navy p-7 text-harbor-cream">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-harbor-gold-light">
            Today&rsquo;s Reading &middot; {reading.theme}
          </span>
          <h3 className="mt-2 font-display text-2xl">{reading.reference}</h3>
          <p className="mt-3 text-sm italic leading-relaxed text-harbor-cream/70">
            &ldquo;{reading.passage[0]}&rdquo;
          </p>
          <Link
            href="/dashboard/reading"
            className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-harbor-gold-light hover:text-harbor-gold"
          >
            Read the full passage
            <ArrowRightIcon className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="rounded-2xl border border-harbor-mist bg-white p-7">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-harbor-gold">
            Suggested Prayer &middot; {prayerOfTheDay.mood}
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
            Pray this now
            <ArrowRightIcon className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
