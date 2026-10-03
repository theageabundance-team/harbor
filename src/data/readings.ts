export type DailyReading = {
  reference: string;
  theme: string;
  passage: string[];
  reflection: string;
  prayerPrompt: string;
};

/**
 * Scripture text is the World English Bible (WEB), public domain.
 * Reflections and prayer prompts are original to Harbor.
 */
export const dailyReadings: DailyReading[] = [
  {
    reference: "Psalm 23:1-6",
    theme: "Trust & Provision",
    passage: [
      "Yahweh is my shepherd: I shall lack nothing.",
      "He makes me lie down in green pastures. He leads me beside still waters.",
      "He restores my soul. He guides me in the paths of righteousness for his name's sake.",
      "Even though I walk through the valley of the shadow of death, I will fear no evil, for you are with me. Your rod and your staff, they comfort me.",
      "You prepare a table before me in the presence of my enemies. You anoint my head with oil. My cup runs over.",
      "Surely goodness and loving kindness shall follow me all the days of my life, and I will dwell in Yahweh's house forever.",
    ],
    reflection:
      "Before anything else is asked of you today, be led. A shepherd doesn't wait for the sheep to figure out the way — he walks ahead of them. Wherever today takes you, you are not navigating alone.",
    prayerPrompt:
      "Lord, today I lay down my need to control the path. Lead me to still water. Restore what feels worn down in me.",
  },
  {
    reference: "John 3:16-17",
    theme: "Grace",
    passage: [
      "For God so loved the world, that he gave his one and only Son, that whoever believes in him should not perish, but have eternal life.",
      "For God didn't send his Son into the world to judge the world, but that the world should be saved through him.",
    ],
    reflection:
      "This is the center of everything Harbor points back to: you were not sent a verdict, you were sent a Savior. Whatever you're carrying into today, it doesn't change how deeply you are loved.",
    prayerPrompt:
      "Father, thank you for loving the world — and loving me — not as a transaction, but as a gift. Help me receive that grace today instead of earning for it.",
  },
  {
    reference: "Philippians 4:6-7",
    theme: "Peace over Anxiety",
    passage: [
      "In nothing be anxious, but in everything, by prayer and petition with thanksgiving, let your requests be made known to God.",
      "And the peace of God, which surpasses all understanding, will guard your hearts and your thoughts in Christ Jesus.",
    ],
    reflection:
      "Notice the exchange: anxiety handed over, thanksgiving offered instead, and peace received that doesn't even make logical sense given your circumstances. That trade is available to you today.",
    prayerPrompt:
      "God, here is what's weighing on me right now. I release it to you and choose to thank you in the middle of it. Guard my heart and my mind today.",
  },
  {
    reference: "Matthew 6:25-27",
    theme: "Do Not Worry",
    passage: [
      "Therefore I tell you, don't be anxious for your life: what you will eat, or what you will drink; nor yet for your body, what you will wear. Isn't life more than food, and the body more than clothing?",
      "See the birds of the sky, that they don't sow, neither do they reap, nor gather into barns. Your heavenly Father feeds them. Aren't you of much more value than they?",
      "Which of you, by being anxious, can add one moment to his lifespan?",
    ],
    reflection:
      "Worry promises control and never delivers it. Jesus points to the birds not because their lives are easy, but because they're provided for without striving. You are worth more to your Father than they are.",
    prayerPrompt:
      "Lord, I confess the things I've been trying to control through worry instead of trust. Remind me today that you see me and you provide.",
  },
  {
    reference: "Romans 8:28",
    theme: "All Things for Good",
    passage: [
      "We know that all things work together for good for those who love God, to those who are called according to his purpose.",
    ],
    reflection:
      "This isn't a promise that everything is good — it's a promise that God is at work even inside what isn't. Nothing you're walking through today is wasted on Him.",
    prayerPrompt:
      "Father, I don't always see how this is working for good. Give me eyes to trust your hand even in what's unclear right now.",
  },
  {
    reference: "Proverbs 3:5-6",
    theme: "Trust, Not Understanding",
    passage: [
      "Trust in Yahweh with all your heart, and don't lean on your own understanding.",
      "In all your ways acknowledge him, and he will make your paths straight.",
    ],
    reflection:
      "Trust is hardest exactly where understanding runs out. Today, in the one decision or situation you can't fully reason your way through, this verse is your invitation.",
    prayerPrompt:
      "God, in the place where I don't understand, I choose to trust you anyway. Make my path straight today.",
  },
  {
    reference: "Isaiah 41:10",
    theme: "Fear Not",
    passage: [
      "Don't you be afraid, for I am with you. Don't be dismayed, for I am your God.",
      "I will strengthen you. Yes, I will help you. Yes, I will uphold you with the right hand of my righteousness.",
    ],
    reflection:
      "Four promises in one breath: presence, strength, help, and being upheld. Read this one slowly, and let each promise land before moving to the next.",
    prayerPrompt:
      "Lord, I name the fear I'm carrying today. Thank you that your presence outweighs it. Strengthen and uphold me.",
  },
  {
    reference: "1 Corinthians 13:4-7",
    theme: "Love Defined",
    passage: [
      "Love is patient and is kind; love doesn't envy. Love doesn't brag, is not proud,",
      "doesn't behave itself inappropriately, doesn't seek its own way, is not provoked, takes no account of evil;",
      "doesn't rejoice in unrighteousness, but rejoices with the truth;",
      "bears all things, believes all things, hopes all things, endures all things.",
    ],
    reflection:
      "Replace the word 'love' with your own name and read it again — that's the aim, not the accusation. Then read it with God as the subject, because that's where it's first true.",
    prayerPrompt:
      "Father, shape my love today to look more like this — patient, humble, and not easily provoked. Love well through me.",
  },
  {
    reference: "Joshua 1:9",
    theme: "Be Strong and Courageous",
    passage: [
      "Haven't I commanded you? Be strong and courageous. Don't be afraid. Don't be dismayed, for Yahweh your God is with you wherever you go.",
    ],
    reflection:
      "Courage in Scripture is rarely the absence of fear — it's obedience in spite of it, because of who goes with you. Wherever today takes you, that's still true.",
    prayerPrompt:
      "God, give me courage for what's in front of me today. Thank you that I don't walk into it alone.",
  },
  {
    reference: "Psalm 46:1-3",
    theme: "God Our Refuge",
    passage: [
      "God is our refuge and strength, a very present help in trouble.",
      "Therefore we won't be afraid, though the earth changes, though the mountains are shaken into the heart of the seas;",
      "though its waters roar and are troubled, though the mountains tremble with their swelling. Selah.",
    ],
    reflection:
      "This psalm was written for people whose world was genuinely shaking. It doesn't minimize the chaos — it simply insists that God is steadier than it. Let that be true for whatever is shaking in your life today.",
    prayerPrompt:
      "Lord, be my refuge today. When things around me feel unstable, let me stand on you instead.",
  },
  {
    reference: "Matthew 11:28-30",
    theme: "Rest for the Weary",
    passage: [
      "Come to me, all you who labor and are heavily burdened, and I will give you rest.",
      "Take my yoke upon you, and learn from me, for I am gentle and humble in heart; and you will find rest for your souls.",
      "For my yoke is easy, and my burden is light.",
    ],
    reflection:
      "Notice this isn't an invitation to stop working — it's an invitation to stop carrying it alone. Jesus offers a yoke, not a hammock: shared weight, gentler pace.",
    prayerPrompt:
      "Jesus, I'm tired. I bring you what I've been carrying alone and ask for your rest instead of my striving.",
  },
  {
    reference: "Galatians 5:22-23",
    theme: "Fruit of the Spirit",
    passage: [
      "But the fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faith,",
      "gentleness, and self-control. Against such things there is no law.",
    ],
    reflection:
      "Fruit grows; it isn't manufactured. These qualities aren't a checklist to perform today — they're evidence of staying close to the Spirit, one unhurried day at a time.",
    prayerPrompt:
      "Holy Spirit, grow your fruit in me today — especially the one I need most right now. I want to stay close enough to you for that to happen.",
  },
  {
    reference: "Jeremiah 29:11-13",
    theme: "Plans to Prosper",
    passage: [
      "For I know the thoughts that I think toward you, says Yahweh, thoughts of peace, and not of evil, to give you hope and a future.",
      "You shall call on me, and you shall go and pray to me, and I will listen to you.",
      "You shall seek me, and find me, when you search for me with all your heart.",
    ],
    reflection:
      "This promise was spoken to people in exile, far from home, with no clear way back. If God's plans for them were still good, trust that His plans for you — in whatever season this is — still are too.",
    prayerPrompt:
      "Father, I seek you today with my whole heart. Thank you for thoughts of peace over me, even when the season feels uncertain.",
  },
  {
    reference: "Romans 12:1-2",
    theme: "Transformed Mind",
    passage: [
      "Therefore I urge you, brothers, by the mercies of God, to present your bodies a living sacrifice, holy, acceptable to God, which is your spiritual service.",
      "Don't be conformed to this world, but be transformed by the renewing of your mind, so that you may prove what is the good, well-pleasing, and perfect will of God.",
    ],
    reflection:
      "Transformation starts in the mind, not the behavior — what you dwell on today shapes who you become tomorrow. Let this reading itself be part of that renewing.",
    prayerPrompt:
      "Lord, renew my mind today. Where I've been shaped by the world's noise, reshape me by your truth instead.",
  },
];

export function getTodaysReading(date: Date = new Date()): {
  reading: DailyReading;
  dayNumber: number;
} {
  const start = Date.UTC(2024, 0, 1);
  const current = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
  const daysSinceStart = Math.floor((current - start) / (1000 * 60 * 60 * 24));
  const index = ((daysSinceStart % dailyReadings.length) + dailyReadings.length) % dailyReadings.length;
  return { reading: dailyReadings[index], dayNumber: index + 1 };
}
