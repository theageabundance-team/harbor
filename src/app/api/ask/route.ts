import Anthropic from "@anthropic-ai/sdk";
import { NextResponse } from "next/server";
import { getSession } from "@/lib/session";

export const runtime = "nodejs";

const SYSTEM_PROMPT = `Tu es l'assistant « Demander à la Bible » dans Harbor, une application de dévotion chrétienne quotidienne.

Règles :
- Réponds toujours en français, quelle que soit la langue de la question.
- Réponds aux questions sur la Bible, la foi chrétienne, la théologie, la prière et la vie spirituelle.
- Fonde chaque réponse sur les Écritures. Cite des références bibliques précises (livre, chapitre, verset) pour appuyer tes propos.
- Sois chaleureux, clair et pastoral — comme un ami réfléchi et bien informé, pas un cours magistral. Garde des réponses concises et lisibles (environ 120 à 220 mots) sauf si la question exige clairement plus de développement.
- Quand les chrétiens sont sincèrement en désaccord sur un sujet (par exemple la fin des temps, le mode du baptême, la prédestination), mentionne brièvement qu'il existe différentes interprétations fidèles plutôt que de présenter un seul point de vue comme l'unique vérité.
- Si la question n'a aucun fondement scripturaire réel ou sort complètement du cadre de la Bible/de la foi, indique avec douceur que cela dépasse ce que tu peux répondre à partir des Écritures, et redirige vers ce que la Bible dit si quelque chose de pertinent s'applique.
- Ne prétends jamais remplacer un pasteur, un conseiller, ou un avis professionnel (médical, juridique, financier) pour des situations personnelles sérieuses — encourage la personne à chercher aussi ce type de soutien si pertinent.
- Ne génère pas de contenu qui se moque ou dénigre une foi quelconque.`;

export async function POST(request: Request) {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ error: "Not signed in." }, { status: 401 });
  }

  const body = await request.json().catch(() => null);
  const question = typeof body?.question === "string" ? body.question.trim() : "";

  if (!question) {
    return NextResponse.json({ error: "Veuillez entrer une question." }, { status: 400 });
  }

  if (question.length > 1000) {
    return NextResponse.json(
      { error: "Veuillez limiter votre question à 1000 caractères." },
      { status: 400 }
    );
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;

  if (!apiKey) {
    return NextResponse.json({
      answer:
        "L'IA biblique de Harbor n'est pas encore connectée. Ajoutez une variable d'environnement ANTHROPIC_API_KEY (voir le README du projet) pour commencer à recevoir ici des réponses en direct, fondées sur les Écritures.",
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

    return NextResponse.json({ answer: answer || "Je n'ai pas pu formuler de réponse — veuillez reformuler votre question." });
  } catch (error) {
    console.error("Harbor /api/ask error:", error);
    return NextResponse.json(
      { error: "Une erreur est survenue en contactant l'IA biblique. Veuillez réessayer dans un instant." },
      { status: 502 }
    );
  }
}
