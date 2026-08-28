import type { Locale } from "../config";

interface FaqsCopy {
  meta: {
    title: string;
    description: string;
  };
  intro: {
    heading: string;
  };
  items: Array<{
    question: string;
    answer: string;
  }>;
}

const english: FaqsCopy = {
  meta: {
    title: "LATYS | FAQs",
    description: "Answers to frequently asked questions about LATYS FOCUS.",
  },
  intro: {
    heading: "Frequently Asked Questions",
  },
  items: [
    {
      question: "How much signal gain can I expect to get?",
      answer: "10–15 dB to the overall link budget.",
    },
    {
      question: "How can I have more range? Aren’t there limits on antenna power output?",
      answer: "Yes, there are limits. However, a FOCUS instantly repeats a signal, adding to the link budget without ever exceeding a regulatory body's maximum transmit power.",
    },
    {
      question: "What environments can the FOCUS operate in?",
      answer: "FOCUS is designed for demanding industrial environments. Its IP-rated enclosure supports operation in dusty and high-humidity conditions, with an operating temperature range of –40°C to +60°C, making it suitable for both indoor and outdoor deployments.",
    },
    {
      question: "What Wi-Fi vendors is the FOCUS compatible with?",
      answer: "FOCUS works at Layer 1 (radio frequency), so it works with any Wi-Fi system—and even other wireless technologies—with zero configuration.",
    },
    {
      question: "What are the licensing costs?",
      answer: "None. The only ongoing costs are a few dollars of electricity per month.",
    },
    {
      question: "What frequency does the FOCUS operate in?",
      answer: "5 GHz, with 6 GHz operation coming soon.",
    },
    {
      question: "Will this also help signal from my client devices to my access points (upstream)?",
      answer: "Absolutely.",
    },
    {
      question: "How much training does my team need to use a FOCUS?",
      answer: "None. FOCUS is plug-and-play with no configuration required. Simply point it in the desired direction and power it on.",
    },
    {
      question: "What is the power draw of a single FOCUS?",
      answer: "4.7 Watts.",
    },
    {
      question: "Can a FOCUS replace a wireless access point?",
      answer: "Yes.",
    },
  ],
};

export const faqsCopy = {
  en: english,
  fr: {
    meta: {
      title: "LATYS | Foire aux questions",
      description: "Réponses aux questions fréquemment posées sur LATYS FOCUS.",
    },
    intro: {
      heading: "Foire aux questions",
    },
    items: [
      {
        question: "Quel gain de signal puis-je espérer obtenir?",
        answer: "De 10 à 15 dB sur le bilan de liaison global.",
      },
      {
        question: "Comment puis-je obtenir une plus grande portée? N’y a-t-il pas des limites à la puissance d’émission des antennes?",
        answer: "Oui, il existe des limites. Cependant, un FOCUS répète instantanément un signal, augmentant ainsi le bilan de liaison sans jamais dépasser la puissance d’émission maximale autorisée par les organismes de réglementation.",
      },
      {
        question: "Dans quels environnements le FOCUS peut-il fonctionner?",
        answer: "FOCUS est conçu pour les environnements industriels exigeants. Son boîtier certifié IP permet une utilisation dans des conditions poussiéreuses et très humides. Grâce à sa plage de températures de fonctionnement de –40 °C à +60 °C, il convient aux déploiements intérieurs comme extérieurs.",
      },
      {
        question: "Avec quels fournisseurs de solutions Wi-Fi le FOCUS est-il compatible?",
        answer: "FOCUS fonctionne à la couche 1 (radiofréquence). Il est donc compatible avec n’importe quel système Wi-Fi, et même avec d’autres technologies sans fil, sans aucune configuration.",
      },
      {
        question: "Quels sont les coûts de licence?",
        answer: "Aucun. Les seuls coûts récurrents se limitent à quelques dollars d’électricité par mois.",
      },
      {
        question: "Sur quelle fréquence le FOCUS fonctionne-t-il?",
        answer: "5 GHz, avec la prise en charge de la bande 6 GHz bientôt disponible.",
      },
      {
        question: "Cela améliorera-t-il également le signal de mes appareils clients vers mes points d’accès (liaison montante)?",
        answer: "Absolument.",
      },
      {
        question: "De quelle formation mon équipe a-t-elle besoin pour utiliser un FOCUS?",
        answer: "Aucune. FOCUS est prêt à l’emploi et ne nécessite aucune configuration. Il suffit de l’orienter dans la direction souhaitée et de le mettre sous tension.",
      },
      {
        question: "Quelle est la consommation électrique d’un FOCUS?",
        answer: "4,7 watts.",
      },
      {
        question: "Un FOCUS peut-il remplacer un point d’accès sans fil?",
        answer: "Oui.",
      },
    ],
  },
} satisfies Record<Locale, FaqsCopy>;
