import { redirect } from "next/navigation";
import { Logo, LogoMark } from "@/components/Logo";
import { EnterForm } from "@/components/EnterForm";
import { AskIcon, SunriseIcon, PrayerIcon, MusicIcon } from "@/components/Icons";
import { getSession } from "@/lib/session";

const features = [
  {
    icon: AskIcon,
    title: "Ask the Bible",
    copy: "Ask any question about Scripture in plain language and receive clear, Bible-grounded answers with the verses behind them.",
  },
  {
    icon: SunriseIcon,
    title: "Daily Reading",
    copy: "A short passage and reflection every morning, so you can begin each day anchored in the Word.",
  },
  {
    icon: PrayerIcon,
    title: "Guided Prayer",
    copy: "Gentle, guided prayers for gratitude, peace, strength, and surrender — whenever you need the words.",
  },
  {
    icon: MusicIcon,
    title: "Worship",
    copy: "A hand-picked collection of worship songs to still your heart before or after your time in the Word.",
  },
];

export default async function Home() {
  const session = await getSession();
  if (session) {
    redirect("/dashboard");
  }

  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden bg-harbor-navy text-harbor-cream">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(201,162,75,0.22),transparent)]" />
        <div className="absolute -bottom-40 left-1/2 h-[560px] w-[1400px] -translate-x-1/2 rounded-[100%] bg-harbor-navy-dark/70 blur-3xl" />
        <svg
          className="harbor-waves absolute bottom-0 left-[-5%] h-48 w-[110%] text-harbor-navy-light/60"
          viewBox="0 0 1200 200"
          preserveAspectRatio="none"
        >
          <path
            d="M0 100C150 40 350 160 600 100C850 40 1050 160 1200 100V200H0V100Z"
            fill="currentColor"
          />
        </svg>
        <svg
          className="absolute bottom-0 left-0 h-32 w-full text-harbor-navy-dark"
          viewBox="0 0 1200 160"
          preserveAspectRatio="none"
        >
          <path
            d="M0 80C200 130 400 30 600 80C800 130 1000 30 1200 80V160H0V80Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* Nav */}
      <header className="relative z-10 flex items-center justify-between px-6 py-6 sm:px-10">
        <Logo />
        <a
          href="#features"
          className="hidden text-sm text-harbor-cream/60 transition-colors hover:text-harbor-cream sm:block"
        >
          What&rsquo;s inside
        </a>
      </header>

      {/* Hero */}
      <section className="relative z-10 mx-auto grid w-full max-w-6xl flex-1 grid-cols-1 items-center gap-16 px-6 pb-24 pt-8 sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:pt-16">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-harbor-gold/30 bg-harbor-gold/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-harbor-gold-light">
            <span className="harbor-beacon h-1.5 w-1.5 rounded-full bg-harbor-gold-light" />
            Your daily devotional companion
          </div>
          <h1 className="font-display text-4xl leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            A quiet harbor for your
            <span className="italic text-harbor-gold-light"> faith</span>,
            every single day.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-harbor-cream/70">
            Ask any question about the Bible and get clear, Scripture-based
            answers. Start your morning with a guided reading, pray with
            words when you have none of your own, and let worship music carry
            you the rest of the way.
          </p>

          <div className="mt-10 grid max-w-md grid-cols-2 gap-4 sm:grid-cols-4">
            {features.map((f) => (
              <div key={f.title} className="flex flex-col items-start gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-harbor-gold-light ring-1 ring-white/10">
                  <f.icon className="h-5 w-5" />
                </div>
                <span className="text-xs font-medium text-harbor-cream/60">
                  {f.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Entry card */}
        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-px rounded-[28px] bg-gradient-to-b from-harbor-gold/40 via-white/5 to-transparent" />
          <div className="relative rounded-[28px] border border-white/10 bg-white/[0.04] p-8 shadow-2xl shadow-black/30 backdrop-blur-xl">
            <div className="mb-6 flex flex-col items-center gap-3 text-center">
              <LogoMark className="h-10 w-10 text-harbor-gold" />
              <h2 className="font-display text-2xl">Welcome to Harbor</h2>
              <p className="text-sm text-harbor-cream/50">
                Enter with your name and email to begin.
              </p>
            </div>
            <EnterForm />
          </div>
        </div>
      </section>

      {/* Features detail */}
      <section
        id="features"
        className="relative z-10 border-t border-white/10 bg-harbor-navy-dark/40 px-6 py-20 sm:px-10"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-harbor-gold-light">
              Inside Harbor
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl">
              Everything you need to stay close to the Word.
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <div
                key={f.title}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-harbor-gold/30 hover:bg-white/[0.06]"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-harbor-gold/15 text-harbor-gold-light">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-harbor-cream/60">
                  {f.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/10 px-6 py-8 text-center text-xs text-harbor-cream/40 sm:px-10">
        Harbor &middot; A daily companion for Scripture, prayer, and worship.
      </footer>
    </main>
  );
}
