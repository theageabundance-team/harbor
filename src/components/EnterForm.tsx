"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { enterHarbor, type EnterState } from "@/app/actions";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="group relative inline-flex w-full items-center justify-center gap-2 rounded-full bg-harbor-gold px-6 py-3.5 font-medium text-harbor-navy-dark transition-all hover:bg-harbor-gold-light disabled:cursor-not-allowed disabled:opacity-70"
    >
      {pending ? "Ouverture du port…" : "Entrer dans Harbor"}
      <svg
        className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
        viewBox="0 0 20 20"
        fill="none"
      >
        <path
          d="M4 10h12M11 5l5 5-5 5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

const initialState: EnterState = {};

export function EnterForm() {
  const [state, formAction] = useActionState(enterHarbor, initialState);

  return (
    <form action={formAction} className="space-y-4">
      <div>
        <label
          htmlFor="name"
          className="mb-1.5 block text-sm font-medium text-harbor-cream/80"
        >
          Nom figurant sur votre achat
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Jeanne Dupont"
          required
          className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-harbor-cream placeholder:text-harbor-cream/30 outline-none transition-colors focus:border-harbor-gold/70 focus:bg-white/10"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-1.5 block text-sm font-medium text-harbor-cream/80"
        >
          Adresse e-mail
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="jeanne@exemple.com"
          required
          className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-harbor-cream placeholder:text-harbor-cream/30 outline-none transition-colors focus:border-harbor-gold/70 focus:bg-white/10"
        />
      </div>

      {state?.error && (
        <p className="rounded-lg bg-red-500/10 px-3 py-2 text-sm text-red-200">
          {state.error}
        </p>
      )}

      <SubmitButton />

      <p className="text-center text-xs leading-relaxed text-harbor-cream/40">
        En entrant, vous commencez votre marche quotidienne avec Harbor —
        Écritures, prière et louange dans un même lieu paisible.
      </p>
    </form>
  );
}
