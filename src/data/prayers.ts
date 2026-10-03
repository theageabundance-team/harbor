export type GuidedPrayer = {
  slug: string;
  title: string;
  mood: string;
  duration: string;
  intro: string;
  lines: string[];
  closing: string;
};

export const guidedPrayers: GuidedPrayer[] = [
  {
    slug: "gratitude",
    title: "A Prayer of Gratitude",
    mood: "Thankful",
    duration: "2 min",
    intro:
      "Pause and bring your attention to this moment. Breathe in slowly, and let this prayer give words to your thankfulness.",
    lines: [
      "Lord, thank you for this day and for the breath in my lungs.",
      "Thank you for the people who love me, and the ones I get to love.",
      "Thank you for small mercies I almost missed — a kind word, a quiet moment, a problem that resolved itself.",
      "Thank you for being near even when I forget to notice.",
      "Today I choose gratitude over complaint, and trust over worry.",
    ],
    closing: "In Jesus' name, Amen.",
  },
  {
    slug: "peace",
    title: "A Prayer for Peace",
    mood: "Anxious",
    duration: "2 min",
    intro:
      "If your mind is racing or your chest feels tight, slow down here. Let each line settle before moving to the next.",
    lines: [
      "Father, my mind is loud right now, and I need your quiet.",
      "I hand you the thing I keep replaying, and the thing I keep dreading.",
      "You are not anxious about my life, even when I am — so I borrow your calm.",
      "Let your peace, which doesn't need my circumstances to change first, guard my heart right now.",
      "I breathe in your presence, and I breathe out what I've been holding.",
    ],
    closing: "You are near. I am not alone. Amen.",
  },
  {
    slug: "strength",
    title: "A Prayer for Strength",
    mood: "Weary",
    duration: "2 min",
    intro:
      "For the days that feel heavier than you expected — this prayer is for when your own strength has run out.",
    lines: [
      "Lord, I'm tired in a way that sleep alone won't fix.",
      "I don't have much left to bring to today, so I ask you to meet me in the gap.",
      "Be strong where I am weak. Be steady where I am shaking.",
      "Remind me that your power works best in exactly this kind of weakness.",
      "Carry what I cannot carry right now.",
    ],
    closing: "By your strength, not mine, Amen.",
  },
  {
    slug: "surrender",
    title: "A Prayer of Surrender",
    mood: "Overwhelmed",
    duration: "2 min",
    intro:
      "Some things are too heavy to keep holding onto with closed hands. This prayer is an open hand.",
    lines: [
      "God, I've been gripping this tightly, and I'm tired of holding it alone.",
      "I release my need to control the outcome.",
      "I release my timeline, and trust yours instead.",
      "I release the person, the plan, the fear I keep circling back to.",
      "Here are my open hands — take what I can't carry, and give me what I actually need.",
    ],
    closing: "Not my will, but yours. Amen.",
  },
  {
    slug: "morning",
    title: "A Morning Prayer",
    mood: "Starting the day",
    duration: "1 min",
    intro:
      "Before the day fills up with noise, start it here — just a minute with the One who already knows how today will go.",
    lines: [
      "Good morning, Lord. Thank you for a new day I haven't used up yet.",
      "Go ahead of me into every conversation, every task, every unexpected moment.",
      "Help me carry your peace into rooms that don't have any.",
      "Let me notice you today — in people, in pauses, in answered and unanswered prayers alike.",
    ],
    closing: "This day is yours. Lead me through it. Amen.",
  },
  {
    slug: "evening",
    title: "An Evening Prayer",
    mood: "Winding down",
    duration: "2 min",
    intro:
      "As the day closes, lay it down here — the good, the hard, and the unfinished.",
    lines: [
      "Lord, thank you for carrying me through this day.",
      "For what went well, thank you. For what didn't, I release it into your hands tonight.",
      "Forgive me where I fell short, and remind me that tomorrow is a fresh mercy, not a second chance I have to earn.",
      "Watch over the people I love while we sleep.",
      "Quiet my mind, and let me rest in knowing you're still awake, still working, still good.",
    ],
    closing: "Into your hands I commit this day. Amen.",
  },
];
