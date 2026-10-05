type IconProps = { className?: string };

export function AskIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 18.5c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.73.699 3.31 1.86 4.52C5.5 17.5 5 19.5 4 20.5c1.8.2 3.6-.3 5-1.3a9.3 9.3 0 0 0 3 .3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M10.2 9.3a1.8 1.8 0 1 1 2.6 1.6c-.6.3-1 .9-1 1.6v.3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="11.9" cy="14.9" r="0.9" fill="currentColor" />
    </svg>
  );
}

export function SunriseIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M4 18h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path
        d="M6.5 18a5.5 5.5 0 0 1 11 0"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path d="M12 7v2.4M5.6 10.6l1.7 1.3M18.4 10.6l-1.7 1.3M3 14.5h1.6M19.4 14.5H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function PrayerIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 4v7.2M12 11.2c0 3.6-2 5-3.6 6.4-1 .9-1.4 1.8-1.4 2.4h10c0-.6-.4-1.5-1.4-2.4-1.6-1.4-3.6-2.8-3.6-6.4Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path d="M9 7.5c0 1.8 1.3 3 3 3s3-1.2 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function MusicIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M9 18V6.8a1 1 0 0 1 .8-1l8-1.6a1 1 0 0 1 1.2 1v10.3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="7" cy="18" r="2.4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17" cy="15.5" r="2.4" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function CompassIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="m14.6 9.4-1.4 3.8a1 1 0 0 1-.6.6l-3.8 1.4 1.4-3.8a1 1 0 0 1 .6-.6l3.8-1.4Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowRightIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className}>
      <path
        d="M4 10h12M11 5l5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ShieldIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 3.5 5 6v5.2c0 4.3 3 7.6 7 9.3 4-1.7 7-5 7-9.3V6l-7-2.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="m9.2 12 1.9 1.9 3.7-3.9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PlayIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M8 5.5v13l11-6.5-11-6.5Z" />
    </svg>
  );
}
