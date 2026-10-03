"use client";

import { useState } from "react";
import { worshipTracks, type WorshipTrack } from "@/data/worship";
import { PlayIcon } from "@/components/Icons";

function TrackCard({ track }: { track: WorshipTrack }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="overflow-hidden rounded-2xl border border-harbor-mist bg-white shadow-sm">
      <div className="relative aspect-video w-full bg-harbor-navy">
        {playing ? (
          <iframe
            className="h-full w-full"
            src={`https://www.youtube.com/embed/${track.youtubeId}?autoplay=1&rel=0`}
            title={`${track.title} — ${track.artist}`}
            allow="accelerate-compressor; autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="group absolute inset-0 flex items-center justify-center"
            aria-label={`Lire ${track.title}`}
          >
            <img
              src={`https://img.youtube.com/vi/${track.youtubeId}/hqdefault.jpg`}
              alt=""
              className="absolute inset-0 h-full w-full object-cover opacity-80 transition-opacity group-hover:opacity-60"
            />
            <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-harbor-gold text-harbor-navy-dark shadow-lg transition-transform group-hover:scale-110">
              <PlayIcon className="h-6 w-6 translate-x-0.5" />
            </span>
          </button>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-display text-base text-harbor-navy">{track.title}</h3>
        <p className="text-sm text-harbor-ink/50">{track.artist}</p>
      </div>
    </div>
  );
}

export function WorshipGrid() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {worshipTracks.map((track) => (
        <TrackCard key={track.youtubeId} track={track} />
      ))}
    </div>
  );
}
