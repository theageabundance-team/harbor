const RELATIVE_UNITS: [Intl.RelativeTimeFormatUnit, number][] = [
  ["year", 1000 * 60 * 60 * 24 * 365],
  ["month", 1000 * 60 * 60 * 24 * 30],
  ["week", 1000 * 60 * 60 * 24 * 7],
  ["day", 1000 * 60 * 60 * 24],
  ["hour", 1000 * 60 * 60],
  ["minute", 1000 * 60],
];

const rtf = new Intl.RelativeTimeFormat("pt-BR", { numeric: "auto" });

export function formatRelativeTime(isoDate: string): string {
  const diffMs = new Date(isoDate).getTime() - Date.now();

  for (const [unit, unitMs] of RELATIVE_UNITS) {
    if (Math.abs(diffMs) >= unitMs) {
      return rtf.format(Math.round(diffMs / unitMs), unit);
    }
  }
  return rtf.format(Math.round(diffMs / 1000), "second");
}

export function formatDateTime(isoDate: string): string {
  return new Date(isoDate).toLocaleString("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function formatDate(isoDate: string): string {
  return new Date(isoDate).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}
