import { MusicIcon } from "@/components/Icons";
import { WorshipGrid } from "@/components/WorshipGrid";

export default function WorshipPage() {
  return (
    <div className="mx-auto max-w-5xl">
      <div className="mb-8 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-harbor-navy/5 text-harbor-navy">
          <MusicIcon className="h-5 w-5" />
        </div>
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-harbor-gold">
            Worship
          </span>
          <h1 className="font-display text-2xl text-harbor-navy sm:text-3xl">
            Let your heart settle into worship.
          </h1>
        </div>
      </div>

      <WorshipGrid />

      <p className="mt-8 text-xs leading-relaxed text-harbor-ink/40">
        Videos are streamed directly from YouTube via their official artist
        and label channels. Harbor doesn&rsquo;t host or redistribute any
        audio or video files.
      </p>
    </div>
  );
}
