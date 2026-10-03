export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="24" cy="24" r="23" stroke="currentColor" strokeOpacity="0.25" />
      <path
        d="M24 6c2.8 4.4 4.3 8.6 4.3 13.1 0 3.1-1.9 5-4.3 5s-4.3-1.9-4.3-5C19.7 14.6 21.2 10.4 24 6Z"
        fill="currentColor"
        className="text-harbor-gold"
      />
      <circle cx="24" cy="12.5" r="1.4" fill="var(--color-navy)" />
      <path
        d="M10 40c1.8-6.5 7.1-11 14-11s12.2 4.5 14 11"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M6 40h36"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M14 34c2-1.2 4-1.8 6-1.8M28 32.2c2 0 4 .6 6 1.8"
        stroke="currentColor"
        strokeOpacity="0.6"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Logo({ className = "", markClassName = "" }: { className?: string; markClassName?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className={`h-7 w-7 text-harbor-gold ${markClassName}`} />
      <span className="font-display text-xl tracking-wide">Harbor</span>
    </span>
  );
}
