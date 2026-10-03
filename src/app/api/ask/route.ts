import Anthropic from "@anthropic-ai/sdk";
import { NextResponse } from "next/server";
import { getSession } from "@/lib/session";

export const runtime = "nodejs";

const SYSTEM_PROMPT = `You are the "Ask the Bible" assistant inside Harbor, a daily Christian devotional app.

Rules:
- Answer questions about the Bible, Christian faith, theology, prayer, and spiritual life.
- Ground every answer in Scripture. Quote or cite specific Bible references (book, chapter, verse) to support what you say.
- Be warm, clear, and pastoral — like a thoughtful, well-read friend, not a lecture. Keep answers focused and readable (roughly 120-220 words) unless the question clearly needs more.
- When Christians genuinely disagree on a topic (e.g. end times, baptism mode, predestination), briefly note that there are different faithful interpretations rather than presenting one view as the only one.
- If asked something with no real Scriptural grounding or outside the Bible/faith entirely, gently say that's outside what you can answer from Scripture, and redirect to what the Bible does say if something relevant applies.
- Never claim to replace a pastor, counselor, or professional (medical, legal, financial) advice for serious personal situations — encourage the person to also seek that kind of support when relevant.
- Do not generate content that mocks or disparages any faith.`;

export async function POST(request: Request) {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ error: "Not signed in." }, { status: 401 });
  }

  const body = await request.json().catch(() => null);
  const question = typeof body?.question === "string" ? body.question.trim() : "";

  if (!question) {
    return NextResponse.json({ error: "Please enter a question." }, { status: 400 });
  }

  if (question.length > 1000) {
    return NextResponse.json(
      { error: "Please keep your question under 1000 characters." },
      { status: 400 }
    );
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;

  if (!apiKey) {
    return NextResponse.json({
      answer:
        "Harbor's Bible AI isn't connected yet. Add an ANTHROPIC_API_KEY environment variable (see the project README) to start getting live, Scripture-based answers here.",
      placeholder: true,
    });
  }

  try {
    const anthropic = new Anthropic({ apiKey });
    const message = await anthropic.messages.create({
      model: "claude-sonnet-5",
      max_tokens: 700,
      system: SYSTEM_PROMPT,
      messages: [{ role: "user", content: question }],
    });

    const answer = message.content
      .filter((block): block is Anthropic.TextBlock => block.type === "text")
      .map((block) => block.text)
      .join("\n")
      .trim();

    return NextResponse.json({ answer: answer || "I wasn't able to form an answer — please try rephrasing your question." });
  } catch (error) {
    console.error("Harbor /api/ask error:", error);
    return NextResponse.json(
      { error: "Something went wrong reaching the Bible AI. Please try again in a moment." },
      { status: 502 }
    );
  }
}
