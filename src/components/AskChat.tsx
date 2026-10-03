"use client";

import { useRef, useState } from "react";
import { AskIcon, ArrowRightIcon } from "@/components/Icons";

type ChatMessage = {
  role: "user" | "assistant" | "system";
  content: string;
};

const SUGGESTIONS = [
  "What does the Bible say about anxiety?",
  "Why did Jesus speak in parables?",
  "What is the meaning of grace?",
  "How can I forgive someone who hurt me?",
];

export function AskChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  async function ask(question: string) {
    const trimmed = question.trim();
    if (!trimmed || loading) return;

    setMessages((prev) => [...prev, { role: "user", content: trimmed }]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: trimmed }),
      });
      const data = await res.json();

      if (!res.ok) {
        setMessages((prev) => [
          ...prev,
          { role: "system", content: data.error ?? "Something went wrong." },
        ]);
      } else {
        setMessages((prev) => [...prev, { role: "assistant", content: data.answer }]);
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "system", content: "Network error — please try again." },
      ]);
    } finally {
      setLoading(false);
      requestAnimationFrame(() => {
        scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
      });
    }
  }

  return (
    <div className="flex h-[calc(100vh-13rem)] min-h-[420px] flex-col rounded-2xl border border-harbor-mist bg-white shadow-sm md:h-[calc(100vh-11rem)]">
      <div ref={scrollRef} className="scrollbar-thin flex-1 space-y-5 overflow-y-auto p-6">
        {messages.length === 0 && (
          <div className="flex h-full flex-col items-center justify-center gap-6 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-harbor-navy/5 text-harbor-navy">
              <AskIcon className="h-7 w-7" />
            </div>
            <div>
              <h2 className="font-display text-xl text-harbor-navy">
                Ask anything about the Bible.
              </h2>
              <p className="mx-auto mt-2 max-w-sm text-sm text-harbor-ink/55">
                Every answer is grounded in Scripture, with the references
                behind it.
              </p>
            </div>
            <div className="grid w-full max-w-lg grid-cols-1 gap-2 sm:grid-cols-2">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => ask(s)}
                  className="rounded-xl border border-harbor-mist bg-harbor-cream px-4 py-3 text-left text-sm text-harbor-ink/70 transition-colors hover:border-harbor-gold/40 hover:bg-harbor-gold/5"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((m, i) => (
          <div
            key={i}
            className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[85%] whitespace-pre-wrap rounded-2xl px-4 py-3 text-[15px] leading-relaxed sm:max-w-[75%] ${
                m.role === "user"
                  ? "bg-harbor-navy text-harbor-cream"
                  : m.role === "system"
                    ? "bg-red-50 text-red-700"
                    : "bg-harbor-mist/60 text-harbor-ink/85"
              }`}
            >
              {m.content}
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex justify-start">
            <div className="flex items-center gap-1.5 rounded-2xl bg-harbor-mist/60 px-4 py-3">
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-harbor-ink/40 [animation-delay:-0.3s]" />
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-harbor-ink/40 [animation-delay:-0.15s]" />
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-harbor-ink/40" />
            </div>
          </div>
        )}
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          ask(input);
        }}
        className="flex items-end gap-2 border-t border-harbor-mist p-4"
      >
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              ask(input);
            }
          }}
          placeholder="Ask a question about the Bible…"
          rows={1}
          className="max-h-32 flex-1 resize-none rounded-xl border border-harbor-mist bg-harbor-cream px-4 py-3 text-sm outline-none focus:border-harbor-gold/50"
        />
        <button
          type="submit"
          disabled={loading || !input.trim()}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-harbor-gold text-harbor-navy-dark transition-opacity hover:opacity-90 disabled:opacity-40"
          aria-label="Send question"
        >
          <ArrowRightIcon className="h-4 w-4" />
        </button>
      </form>
    </div>
  );
}
