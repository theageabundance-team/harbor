import { getTodaysReading, dailyReadings } from "@/data/readings";
import { SunriseIcon } from "@/components/Icons";

export default function ReadingPage() {
  const { reading, dayNumber } = getTodaysReading();

  return (
    <div className="mx-auto max-w-3xl">
      <div className="mb-8 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-harbor-navy/5 text-harbor-navy">
          <SunriseIcon className="h-5 w-5" />
        </div>
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-harbor-gold">
            Daily Reading &middot; Day {dayNumber} of {dailyReadings.length}
          </span>
          <h1 className="font-display text-2xl text-harbor-navy sm:text-3xl">
            {new Date().toLocaleDateString("en-US", {
              weekday: "long",
              month: "long",
              day: "numeric",
            })}
          </h1>
        </div>
      </div>

      <article className="rounded-2xl border border-harbor-mist bg-white p-8 shadow-sm">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-harbor-gold">
          {reading.theme}
        </span>
        <h2 className="mt-2 font-display text-3xl text-harbor-navy">
          {reading.reference}
        </h2>

        <div className="mt-6 space-y-3 border-l-2 border-harbor-gold/40 pl-5">
          {reading.passage.map((line, i) => (
            <p key={i} className="font-display text-lg italic leading-relaxed text-harbor-ink/80">
              {line}
            </p>
          ))}
        </div>
        <p className="mt-3 text-xs text-harbor-ink/40">
          World English Bible (WEB) &middot; Public Domain
        </p>

        <div className="mt-8 rounded-xl bg-harbor-mist/50 p-6">
          <h3 className="font-display text-base text-harbor-navy">Reflection</h3>
          <p className="mt-2 text-sm leading-relaxed text-harbor-ink/70">
            {reading.reflection}
          </p>
        </div>

        <div className="mt-6 rounded-xl border border-harbor-gold/30 bg-harbor-gold/5 p-6">
          <h3 className="font-display text-base text-harbor-navy">A Prayer for Today</h3>
          <p className="mt-2 text-sm italic leading-relaxed text-harbor-ink/70">
            {reading.prayerPrompt}
          </p>
        </div>
      </article>
    </div>
  );
}
