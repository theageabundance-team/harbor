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
    title: "Une prière de gratitude",
    mood: "Reconnaissant",
    duration: "2 min",
    intro:
      "Prenez un moment et portez votre attention à l'instant présent. Respirez lentement, et laissez cette prière donner des mots à votre reconnaissance.",
    lines: [
      "Seigneur, merci pour ce jour et pour le souffle dans mes poumons.",
      "Merci pour les personnes qui m'aiment, et celles que j'ai la chance d'aimer.",
      "Merci pour les petites grâces que j'ai failli manquer — un mot gentil, un moment calme, un problème qui s'est résolu de lui-même.",
      "Merci d'être proche même quand j'oublie de le remarquer.",
      "Aujourd'hui, je choisis la gratitude plutôt que la plainte, et la confiance plutôt que l'inquiétude.",
    ],
    closing: "Au nom de Jésus, Amen.",
  },
  {
    slug: "peace",
    title: "Une prière pour la paix",
    mood: "Anxieux",
    duration: "2 min",
    intro:
      "Si votre esprit s'emballe ou que votre poitrine se serre, ralentissez ici. Laissez chaque ligne se poser avant de passer à la suivante.",
    lines: [
      "Père, mon esprit est bruyant en ce moment, et j'ai besoin de ton calme.",
      "Je te remets ce que je n'arrête pas de ressasser, et ce que je redoute sans cesse.",
      "Tu n'es pas inquiet pour ma vie, même quand je le suis — alors j'emprunte ton calme.",
      "Que ta paix, qui n'a pas besoin que mes circonstances changent d'abord, garde mon cœur en ce moment.",
      "J'inspire ta présence, et j'expire ce que je retenais.",
    ],
    closing: "Tu es proche. Je ne suis pas seul. Amen.",
  },
  {
    slug: "strength",
    title: "Une prière pour la force",
    mood: "Épuisé",
    duration: "2 min",
    intro:
      "Pour les jours qui semblent plus lourds que prévu — cette prière est pour quand votre propre force s'est épuisée.",
    lines: [
      "Seigneur, je suis fatigué d'une manière que le sommeil seul ne réparera pas.",
      "Il ne me reste pas grand-chose à apporter à cette journée, alors je te demande de me rejoindre dans le vide.",
      "Sois fort là où je suis faible. Sois stable là où je chancelle.",
      "Rappelle-moi que ta puissance s'accomplit justement dans cette faiblesse.",
      "Porte ce que je ne peux pas porter en ce moment.",
    ],
    closing: "Par ta force, non la mienne, Amen.",
  },
  {
    slug: "surrender",
    title: "Une prière d'abandon",
    mood: "Dépassé",
    duration: "2 min",
    intro:
      "Certaines choses sont trop lourdes pour continuer à les tenir à poings fermés. Cette prière est une main ouverte.",
    lines: [
      "Dieu, je serre cela très fort, et je suis fatigué de le porter seul.",
      "Je renonce à mon besoin de contrôler le résultat.",
      "Je renonce à mon calendrier, et je fais confiance au tien à la place.",
      "Je renonce à la personne, au plan, à la peur que je n'arrête pas de ressasser.",
      "Voici mes mains ouvertes — prends ce que je ne peux pas porter, et donne-moi ce dont j'ai vraiment besoin.",
    ],
    closing: "Non ma volonté, mais la tienne. Amen.",
  },
  {
    slug: "morning",
    title: "Une prière du matin",
    mood: "Début de journée",
    duration: "1 min",
    intro:
      "Avant que la journée ne se remplisse de bruit, commencez-la ici — juste une minute avec Celui qui sait déjà comment se déroulera aujourd'hui.",
    lines: [
      "Bonjour, Seigneur. Merci pour un jour nouveau que je n'ai pas encore utilisé.",
      "Va devant moi dans chaque conversation, chaque tâche, chaque moment inattendu.",
      "Aide-moi à porter ta paix dans des lieux qui n'en ont pas.",
      "Laisse-moi te remarquer aujourd'hui — dans les gens, dans les pauses, dans les prières exaucées comme dans celles qui ne le sont pas encore.",
    ],
    closing: "Ce jour est à toi. Guide-moi à travers lui. Amen.",
  },
  {
    slug: "evening",
    title: "Une prière du soir",
    mood: "Fin de journée",
    duration: "2 min",
    intro:
      "Alors que la journée se termine, déposez-la ici — le bon, le difficile, et l'inachevé.",
    lines: [
      "Seigneur, merci de m'avoir porté à travers cette journée.",
      "Pour ce qui s'est bien passé, merci. Pour ce qui n'a pas marché, je le remets entre tes mains ce soir.",
      "Pardonne-moi là où j'ai échoué, et rappelle-moi que demain est une grâce nouvelle, non une seconde chance que je dois mériter.",
      "Veille sur les personnes que j'aime pendant que nous dormons.",
      "Apaise mon esprit, et laisse-moi me reposer en sachant que tu es encore éveillé, encore à l'œuvre, encore bon.",
    ],
    closing: "Entre tes mains je remets ce jour. Amen.",
  },
];
