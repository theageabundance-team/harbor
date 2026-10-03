import { guidedPrayers } from "@/data/prayers";
import { PrayerIcon } from "@/components/Icons";

export default function PrayerPage() {
  return (
    <div className="mx-auto max-w-3xl">
      <div className="mb-8 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-harbor-navy/5 text-harbor-navy">
          <PrayerIcon className="h-5 w-5" />
        </div>
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-harbor-gold">
            Prière guidée
          </span>
          <h1 className="font-display text-2xl text-harbor-navy sm:text-3xl">
            Priez à travers ce que la journée apporte.
          </h1>
        </div>
      </div>

      <div className="space-y-6">
        {guidedPrayers.map((prayer) => (
          <article
            key={prayer.slug}
            id={prayer.slug}
            className="scroll-mt-24 rounded-2xl border border-harbor-mist bg-white p-7 shadow-sm"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h2 className="font-display text-xl text-harbor-navy">{prayer.title}</h2>
              <div className="flex items-center gap-2 text-xs text-harbor-ink/45">
                <span className="rounded-full bg-harbor-mist px-2.5 py-1 font-medium text-harbor-ink/60">
                  {prayer.mood}
                </span>
                <span>{prayer.duration}</span>
              </div>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-harbor-ink/60">
              {prayer.intro}
            </p>
            <div className="mt-5 space-y-3 border-l-2 border-harbor-gold/40 pl-5">
              {prayer.lines.map((line, i) => (
                <p key={i} className="text-[15px] leading-relaxed text-harbor-ink/80">
                  {line}
                </p>
              ))}
            </div>
            <p className="mt-5 font-display text-sm italic text-harbor-gold">
              {prayer.closing}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
