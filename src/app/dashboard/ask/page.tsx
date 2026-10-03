import { AskIcon } from "@/components/Icons";
import { AskChat } from "@/components/AskChat";

export default function AskPage() {
  return (
    <div className="mx-auto max-w-3xl">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-harbor-navy/5 text-harbor-navy">
          <AskIcon className="h-5 w-5" />
        </div>
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-harbor-gold">
            Demander à la Bible
          </span>
          <h1 className="font-display text-2xl text-harbor-navy sm:text-3xl">
            Vos questions, répondues par les Écritures.
          </h1>
        </div>
      </div>

      <AskChat />
    </div>
  );
}
