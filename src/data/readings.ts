export type DailyReading = {
  reference: string;
  theme: string;
  passage: string[];
  reflection: string;
  prayerPrompt: string;
};

/**
 * Le texte biblique est tiré de la Bible Segond 1910 (LSG), domaine public.
 * Les réflexions et les prières sont des écrits originaux pour Harbor.
 */
export const dailyReadings: DailyReading[] = [
  {
    reference: "Psaume 23.1-6",
    theme: "Confiance & provision",
    passage: [
      "Cantique de David. L'Éternel est mon berger : je ne manquerai de rien.",
      "Il me fait reposer dans de verts pâturages, Il me dirige près des eaux paisibles.",
      "Il restaure mon âme, Il me conduit dans les sentiers de la justice, à cause de son nom.",
      "Quand je marche dans la vallée de l'ombre de la mort, je ne crains aucun mal, car tu es avec moi : ta houlette et ton bâton me rassurent.",
      "Tu dresses devant moi une table, en face de mes adversaires ; tu oins d'huile ma tête, et ma coupe déborde.",
      "Oui, le bonheur et la grâce m'accompagneront tous les jours de ma vie, et j'habiterai dans la maison de l'Éternel jusqu'à la fin de mes jours.",
    ],
    reflection:
      "Avant même que quoi que ce soit ne vous soit demandé aujourd'hui, laissez-vous conduire. Un berger n'attend pas que ses brebis trouvent seules le chemin — il marche devant elles. Où que vous mène cette journée, vous n'avancez pas seul.",
    prayerPrompt:
      "Seigneur, aujourd'hui je dépose mon besoin de tout contrôler. Conduis-moi vers des eaux paisibles. Restaure ce qui, en moi, est usé.",
  },
  {
    reference: "Jean 3.16-17",
    theme: "Grâce",
    passage: [
      "Car Dieu a tant aimé le monde qu'il a donné son Fils unique, afin que quiconque croit en lui ne périsse point, mais qu'il ait la vie éternelle.",
      "Dieu, en effet, n'a pas envoyé son Fils dans le monde pour qu'il juge le monde, mais pour que le monde soit sauvé par lui.",
    ],
    reflection:
      "C'est le centre de tout ce vers quoi Harbor vous ramène : vous n'avez pas reçu une sentence, mais un Sauveur. Quoi que vous portiez en entrant dans cette journée, cela ne change rien à la profondeur de l'amour qu'on vous porte.",
    prayerPrompt:
      "Père, merci d'aimer le monde — et de m'aimer — non comme une transaction, mais comme un don. Aide-moi à recevoir cette grâce aujourd'hui plutôt que de chercher à la mériter.",
  },
  {
    reference: "Philippiens 4.6-7",
    theme: "La paix plutôt que l'anxiété",
    passage: [
      "Ne vous inquiétez de rien ; mais en toute chose faites connaître vos besoins à Dieu par des prières et des supplications, avec des actions de grâces.",
      "Et la paix de Dieu, qui surpasse toute intelligence, gardera vos cœurs et vos pensées en Jésus-Christ.",
    ],
    reflection:
      "Remarquez l'échange : l'inquiétude remise entre les mains de Dieu, la reconnaissance offerte à la place, et une paix reçue qui ne tient même pas compte de la logique de vos circonstances. Cet échange vous est offert aujourd'hui.",
    prayerPrompt:
      "Dieu, voici ce qui pèse sur moi en ce moment. Je te le remets et je choisis de te rendre grâce au milieu même de cette épreuve. Garde mon cœur et mon esprit aujourd'hui.",
  },
  {
    reference: "Matthieu 6.25-27",
    theme: "Ne pas s'inquiéter",
    passage: [
      "C'est pourquoi je vous dis : ne vous inquiétez pas pour votre vie de ce que vous mangerez, ni pour votre corps, de quoi vous serez vêtus. La vie n'est-elle pas plus que la nourriture, et le corps plus que le vêtement ?",
      "Regardez les oiseaux du ciel : ils ne sèment ni ne moissonnent, et ils n'amassent rien dans des greniers ; et votre Père céleste les nourrit. Ne valez-vous pas beaucoup plus qu'eux ?",
      "Qui de vous, par ses inquiétudes, peut ajouter une coudée à la durée de sa vie ?",
    ],
    reflection:
      "L'inquiétude promet le contrôle et ne le livre jamais. Jésus parle des oiseaux non parce que leur vie est facile, mais parce qu'ils sont pourvus sans s'épuiser à lutter. Vous valez plus pour votre Père qu'eux.",
    prayerPrompt:
      "Seigneur, je reconnais les choses que j'ai essayé de contrôler par l'inquiétude plutôt que par la confiance. Rappelle-moi aujourd'hui que tu me vois et que tu pourvois.",
  },
  {
    reference: "Romains 8.28",
    theme: "Toutes choses concourent au bien",
    passage: [
      "Nous savons, du reste, que toutes choses concourent au bien de ceux qui aiment Dieu, de ceux qui sont appelés selon son dessein.",
    ],
    reflection:
      "Ce n'est pas la promesse que tout est bon — c'est la promesse que Dieu est à l'œuvre même dans ce qui ne l'est pas. Rien de ce que vous traversez aujourd'hui n'est perdu pour lui.",
    prayerPrompt:
      "Père, je ne vois pas toujours comment cela concourt au bien. Donne-moi de faire confiance à ta main, même dans ce qui n'est pas clair en ce moment.",
  },
  {
    reference: "Proverbes 3.5-6",
    theme: "Confiance plutôt qu'intelligence",
    passage: [
      "Confie-toi en l'Éternel de tout ton cœur, et ne t'appuie pas sur ta sagesse.",
      "Reconnais-le dans toutes tes voies, et il aplanira tes sentiers.",
    ],
    reflection:
      "La confiance est la plus difficile exactement là où la compréhension s'arrête. Aujourd'hui, dans la décision ou la situation que vous ne pouvez pas entièrement raisonner, ce verset est une invitation.",
    prayerPrompt:
      "Dieu, là où je ne comprends pas, je choisis quand même de te faire confiance. Aplanis mon sentier aujourd'hui.",
  },
  {
    reference: "Ésaïe 41.10",
    theme: "Ne crains rien",
    passage: [
      "Ne crains rien, car je suis avec toi ; ne promène pas des regards inquiets, car je suis ton Dieu.",
      "Je te fortifie, je viens à ton secours, je te soutiens de ma droite triomphante.",
    ],
    reflection:
      "Quatre promesses en un souffle : présence, force, secours, et soutien. Lisez ce verset lentement, en laissant chaque promesse se poser avant de passer à la suivante.",
    prayerPrompt:
      "Seigneur, je nomme la crainte que je porte aujourd'hui. Merci que ta présence pèse plus lourd qu'elle. Fortifie-moi et soutiens-moi.",
  },
  {
    reference: "1 Corinthiens 13.4-7",
    theme: "La charité définie",
    passage: [
      "La charité est patiente, elle est pleine de bonté ; la charité n'est point envieuse ; la charité ne se vante point, elle ne s'enfle point d'orgueil,",
      "elle ne fait rien de malhonnête, elle ne cherche point son intérêt, elle ne s'irrite point, elle ne soupçonne point le mal,",
      "elle ne se réjouit point de l'injustice, mais elle se réjouit de la vérité ;",
      "elle excuse tout, elle croit tout, elle espère tout, elle supporte tout.",
    ],
    reflection:
      "Remplacez le mot « charité » par votre propre nom et relisez — c'est le but, non une accusation. Puis relisez-le avec Dieu comme sujet, car c'est là que c'est vrai en premier lieu.",
    prayerPrompt:
      "Père, façonne mon amour aujourd'hui pour qu'il ressemble davantage à cela — patient, humble, et pas facilement irrité. Aime bien à travers moi.",
  },
  {
    reference: "Josué 1.9",
    theme: "Fortifie-toi et prends courage",
    passage: [
      "Ne t'ai-je pas donné cet ordre : fortifie-toi et prends courage ? Ne t'effraie point et ne t'épouvante point, car l'Éternel, ton Dieu, est avec toi dans tout ce que tu entreprendras.",
    ],
    reflection:
      "Le courage, dans les Écritures, n'est rarement l'absence de peur — c'est l'obéissance malgré elle, à cause de celui qui marche avec vous. Où que vous mène cette journée, cela reste vrai.",
    prayerPrompt:
      "Dieu, donne-moi du courage pour ce qui m'attend aujourd'hui. Merci de ne pas y aller seul.",
  },
  {
    reference: "Psaume 46.1-3",
    theme: "Dieu notre refuge",
    passage: [
      "Dieu est pour nous un refuge et un appui, un secours qui ne manque jamais dans la détresse.",
      "C'est pourquoi nous sommes sans crainte quand la terre est bouleversée, et que les montagnes chancellent au cœur des mers,",
      "quand les flots de la mer mugissent, écument, se soulèvent jusqu'à faire trembler les montagnes.",
    ],
    reflection:
      "Ce psaume a été écrit pour des gens dont le monde était réellement en train de s'écrouler. Il ne minimise pas le chaos — il affirme simplement que Dieu est plus stable que lui. Que cela soit vrai pour tout ce qui vacille dans votre vie aujourd'hui.",
    prayerPrompt:
      "Seigneur, sois mon refuge aujourd'hui. Quand tout semble instable autour de moi, laisse-moi me tenir sur toi plutôt.",
  },
  {
    reference: "Matthieu 11.28-30",
    theme: "Repos pour les fatigués",
    passage: [
      "Venez à moi, vous tous qui êtes fatigués et chargés, et je vous donnerai du repos.",
      "Prenez mon joug sur vous et recevez mes instructions, car je suis doux et humble de cœur ; et vous trouverez du repos pour vos âmes.",
      "Car mon joug est doux, et mon fardeau léger.",
    ],
    reflection:
      "Remarquez que ce n'est pas une invitation à cesser de travailler — c'est une invitation à cesser de porter le poids seul. Jésus offre un joug, non un hamac : un fardeau partagé, un rythme plus doux.",
    prayerPrompt:
      "Jésus, je suis fatigué. Je t'apporte ce que je portais seul et je te demande ton repos plutôt que mon effort acharné.",
  },
  {
    reference: "Galates 5.22-23",
    theme: "Le fruit de l'Esprit",
    passage: [
      "Mais le fruit de l'Esprit, c'est l'amour, la joie, la paix, la patience, la bonté, la bénignité, la fidélité, la douceur, la tempérance ;",
      "la loi n'est pas contre ces choses.",
    ],
    reflection:
      "Le fruit pousse ; il ne se fabrique pas. Ces qualités ne sont pas une liste de choses à accomplir aujourd'hui — elles sont la preuve que l'on reste proche de l'Esprit, un jour tranquille après l'autre.",
    prayerPrompt:
      "Saint-Esprit, fais grandir ton fruit en moi aujourd'hui — surtout celui dont j'ai le plus besoin en ce moment. Je veux rester assez proche de toi pour que cela arrive.",
  },
  {
    reference: "Jérémie 29.11-13",
    theme: "Des projets pour prospérer",
    passage: [
      "Car je connais les projets que j'ai formés sur vous, dit l'Éternel, projets de paix et non de malheur, afin de vous donner un avenir et de l'espérance.",
      "Vous m'invoquerez, et vous partirez ; vous me prierez, et je vous exaucerai.",
      "Vous me chercherez, et vous me trouverez, si vous me cherchez de tout votre cœur.",
    ],
    reflection:
      "Cette promesse a été adressée à des gens en exil, loin de chez eux, sans chemin clair pour rentrer. Si les projets de Dieu pour eux étaient encore bons, faites confiance : ses projets pour vous — quelle que soit cette saison — le sont aussi.",
    prayerPrompt:
      "Père, je te cherche aujourd'hui de tout mon cœur. Merci pour des projets de paix à mon égard, même quand cette saison semble incertaine.",
  },
  {
    reference: "Romains 12.1-2",
    theme: "Un esprit transformé",
    passage: [
      "Je vous exhorte donc, frères, par les compassions de Dieu, à offrir vos corps comme un sacrifice vivant, saint, agréable à Dieu, ce qui sera de votre part un culte raisonnable.",
      "Ne vous conformez pas au siècle présent, mais soyez transformés par le renouvellement de l'intelligence, afin que vous discerniez quelle est la volonté de Dieu, ce qui est bon, agréable et parfait.",
    ],
    reflection:
      "La transformation commence dans l'esprit, non dans le comportement — ce sur quoi vous méditez aujourd'hui façonne qui vous deviendrez demain. Que cette lecture elle-même fasse partie de ce renouvellement.",
    prayerPrompt:
      "Seigneur, renouvelle mon esprit aujourd'hui. Là où j'ai été façonné par le bruit du monde, refaçonne-moi plutôt par ta vérité.",
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
