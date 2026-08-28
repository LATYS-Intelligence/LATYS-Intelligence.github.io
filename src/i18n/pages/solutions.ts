import type { Locale } from "../config";

export interface FocusCapability {
  title: string;
  body: string;
}

export interface FocusCopy {
  heading: [string, string];
  introduction: string;
  imageAlt: string;
  capabilities: [
    FocusCapability,
    FocusCapability,
    FocusCapability,
    FocusCapability,
  ];
}

export interface FocusAtGlanceEndpoint {
  title: string;
  subtitle?: string;
}

export interface FocusAtGlanceMetric {
  value: string;
  label: string;
}

export interface FocusAtGlanceCopy {
  headingSuffix: string;
  introduction: string;
  endpoints: [
    FocusAtGlanceEndpoint,
    FocusAtGlanceEndpoint,
    FocusAtGlanceEndpoint,
    FocusAtGlanceEndpoint,
    FocusAtGlanceEndpoint,
  ];
  metrics: [
    FocusAtGlanceMetric,
    FocusAtGlanceMetric,
    FocusAtGlanceMetric,
    FocusAtGlanceMetric,
  ];
}

export interface AuraCapability {
  title: string;
  body: string;
}

export interface AuraCopy {
  heading: string;
  introduction: string;
  capabilities: [AuraCapability, AuraCapability, AuraCapability];
  conclusion: string;
  illustrationAlt: string;
}

export interface FocusAuraLayer0Node {
  title: string;
  subtitle: string;
}

export interface FocusAuraLayer0Benefit {
  title: string;
  body: string;
}

export interface FocusAuraLayer0Copy {
  heading: string;
  introduction: string;
  diagramLabel: string;
  nodes: [
    FocusAuraLayer0Node,
    FocusAuraLayer0Node,
    FocusAuraLayer0Node,
    FocusAuraLayer0Node,
  ];
  benefits: [
    FocusAuraLayer0Benefit,
    FocusAuraLayer0Benefit,
    FocusAuraLayer0Benefit,
    FocusAuraLayer0Benefit,
  ];
}

export interface MmWaveCaseStudyCopy {
  eyebrow: string;
  heading: string;
  introduction: string;
  solutionHeading: string;
  solutionBody: string;
  imageLabel: string;
  imageAlt: string;
  videoLabel: string;
  videoAriaLabel: string;
  videoFallback: string;
}

interface SolutionsCopy {
  meta: {
    title: string;
    description: string;
  };
  focus: FocusCopy;
  atGlance: FocusAtGlanceCopy;
  aura: AuraCopy;
  focusAuraLayer0: FocusAuraLayer0Copy;
  mmWaveCaseStudy: MmWaveCaseStudyCopy;
}

const english: SolutionsCopy = {
  meta: {
    title: "LATYS FOCUS™ + AURA™ | Intelligent Wireless Network Solutions",
    description:
      "LATYS FOCUS™ shapes radio signals while AURA™ uses AI-driven automation to plan, optimize, and manage intelligent wireless networks.",
  },
  focus: {
    heading: [
      "Connectivity, where it is needed.",
      "When it is needed.",
    ],
    introduction:
      "LATYS FOCUS™ is a Smart Reconfigurable Intelligent Surface (SmartRIS) that shapes radio energy to deliver stronger coverage and capacity exactly where the network needs it.",
    imageAlt:
      "Two LATYS FOCUS SmartRIS units, with one upright and one horizontal.",
    capabilities: [
      {
        title: "Shape the signal.",
        body: "Acting as an RF lens or mirror, FOCUS™ concentrates, redirects and extends radio signals to strengthen coverage and unlock capacity.",
      },
      {
        title: "Transmit or reflect.",
        body: "A single surface can actively pass RF energy through or reflect it around obstacles, creating a more flexible signal path.",
      },
      {
        title: "Adapt on command.",
        body: "Active network control reconfigures the surface as users, equipment and demand move.",
      },
      {
        title: "Adapt to any network.",
        body: "Protocol-agnostic, multiband operation integrates with existing infrastructure without adding network latency.",
      },
    ],
  },
  atGlance: {
    headingSuffix: "at a glance.",
    introduction:
      "One FOCUS™ core reads live network performance data and steers optimized signal paths to every site — factories, venues, and warehouses alike — with no extra access points to license or manage.",
    endpoints: [
      {
        title: "Industrial Site",
        subtitle: "Factory automation",
      },
      {
        title: "Base Station",
        subtitle: "Macro cell tower",
      },
      {
        title: "Smart Buildings",
      },
      {
        title: "Stadium",
        subtitle: "High-density coverage",
      },
      {
        title: "Warehouse",
        subtitle: "Logistics and material flow",
      },
    ],
    metrics: [
      {
        value: "18x",
        label: "Better signal",
      },
      {
        value: "40%",
        label: "Lower network cost",
      },
      {
        value: "5 min",
        label: "Install time",
      },
      {
        value: "1/8",
        label: "Power draw vs. leading APs",
      },
    ],
  },
  aura: {
    heading: "AI-Driven Unified Radio Automation",
    introduction:
      "LATYS AURA™ turns network data into coordinated radio decisions. It unifies simulation, planning, and near-real-time optimization so teams can understand network behaviour, act on changing conditions, and automate improvements from one intelligent control layer.",
    capabilities: [
      {
        title: "Simulation and planning",
        body: "Model network behaviour before deployment, compare scenarios, and plan changes with a clearer view of expected performance.",
      },
      {
        title: "Near-real-time optimization",
        body: "Continuously interpret live conditions and refine radio configurations as demand, interference, and network priorities evolve.",
      },
      {
        title: "AI-RAN integration",
        body: "Connect with AI-RAN infrastructure to analyze performance-management (PM) data and translate insights into configuration-management (CM) updates.",
      },
    ],
    conclusion:
      "Together, LATYS FOCUS™ and AURA™ offer a cost-effective, zero-added-latency path to wireless networks that are ready for Edge AI.",
    illustrationAlt:
      "LATYS AURA cloud automation connected to a monitor displaying line and bar chart network data.",
  },
  focusAuraLayer0: {
    heading:
      "SmartRIS with AI-Driven Optimization? That’s Layer-0 Wireless™",
    introduction:
      "A base station, a FOCUS™ surface, and AURA™’s optimization loop — reshaping propagation without touching existing infrastructure.",
    diagramLabel: "Layer-0 Wireless control loop",
    nodes: [
      {
        title: "Base station",
        subtitle: "Existing network",
      },
      {
        title: "FOCUS™ SmartRIS",
        subtitle: "Reshapes RF path",
      },
      {
        title: "Coverage area",
        subtitle: "Edge AI / autonomy",
      },
      {
        title: "AURA™",
        subtitle: "Optimization loop",
      },
    ],
    benefits: [
      {
        title: "Zero latency",
        body: "Signal shaping happens in the medium — no added processing delay.",
      },
      {
        title: "Protocol agnostic",
        body: "Works across Wi-Fi, 5G/6G, and other systems, in any frequency band.",
      },
      {
        title: "Lower cost",
        body: "Improves coverage and capacity without new towers or backhaul.",
      },
      {
        title: "2–90 GHz",
        body: "Demonstrated in the harshest RF environments, from mid-band through mmWave.",
      },
    ],
  },
  mmWaveCaseStudy: {
    eyebrow: "mmWave case study",
    heading: "mmWave capacity without the site sprawl.",
    introduction:
      "mmWave unlocks dramatically more capacity, but its shorter reach can demand many more sites than mid-band and still leave difficult areas underserved.",
    solutionHeading: "Shape the coverage you already have.",
    solutionBody:
      "Layer-0 Wireless™ redirects RF energy into coverage gaps without costly base-station equipment or backhaul.",
    imageLabel: "Traditional mmWave deployment",
    imageAlt:
      "Diagram of a traditional mmWave deployment with many coverage sites surrounding a central base station.",
    videoLabel: "Coverage shaped with Layer-0 Wireless™",
    videoAriaLabel:
      "Animation showing LATYS FOCUS and AURA shaping mmWave coverage.",
    videoFallback: "Your browser does not support embedded video.",
  },
};

const french: SolutionsCopy = {
  meta: {
    title: "LATYS FOCUS™ + AURA™ | Solutions de réseau sans fil intelligentes",
    description:
      "LATYS FOCUS™ façonne les signaux radio, tandis qu’AURA™ automatise par l’IA la planification, l’optimisation et la gestion des réseaux sans fil intelligents.",
  },
  focus: {
    heading: [
      "La connectivité là où elle est nécessaire.",
      "Au moment où elle est nécessaire.",
    ],
    introduction:
      "LATYS FOCUS™ est une surface intelligente reconfigurable (SmartRIS) qui façonne l’énergie radio afin d’offrir davantage de couverture et de capacité, exactement là où le réseau en a besoin.",
    imageAlt:
      "Deux unités SmartRIS LATYS FOCUS, l’une verticale et l’autre horizontale.",
    capabilities: [
      {
        title: "Façonner le signal.",
        body: "Agissant comme une lentille ou un miroir RF, FOCUS™ concentre, redirige et prolonge les signaux radio pour renforcer la couverture et libérer de la capacité.",
      },
      {
        title: "Transmettre ou réfléchir.",
        body: "Une même surface peut transmettre activement l’énergie RF ou la réfléchir autour des obstacles afin de créer un parcours de signal plus souple.",
      },
      {
        title: "S’adapter à la demande.",
        body: "Le contrôle actif du réseau reconfigure la surface au rythme des déplacements des utilisateurs, des équipements et de la demande.",
      },
      {
        title: "S’adapter à tous les réseaux.",
        body: "Son fonctionnement multibande et indépendant des protocoles s’intègre à l’infrastructure existante sans ajouter de latence au réseau.",
      },
    ],
  },
  atGlance: {
    headingSuffix: "en un coup d’œil.",
    introduction:
      "Un cœur FOCUS™ analyse en direct les données de performance du réseau et oriente des parcours de signal optimisés vers chaque site — usines, lieux événementiels et entrepôts — sans ajouter de points d’accès à gérer ni de licences supplémentaires.",
    endpoints: [
      {
        title: "Site industriel",
        subtitle: "Automatisation d’usine",
      },
      {
        title: "Station de base",
        subtitle: "Site macrocellulaire",
      },
      {
        title: "Bâtiments intelligents",
      },
      {
        title: "Stade",
        subtitle: "Couverture haute densité",
      },
      {
        title: "Entrepôt",
        subtitle: "Logistique et flux de matières",
      },
    ],
    metrics: [
      {
        value: "18x",
        label: "Meilleur signal",
      },
      {
        value: "40%",
        label: "Réduction des coûts réseau",
      },
      {
        value: "5 min",
        label: "Temps d’installation",
      },
      {
        value: "1/8",
        label: "Consommation par rapport aux principaux points d’accès",
      },
    ],
  },
  aura: {
    heading: "Automatisation Radio Unifiée Pilotée par l’IA",
    introduction:
      "LATYS AURA™ transforme les données réseau en décisions radio coordonnées. La plateforme réunit la simulation, la planification et l’optimisation en quasi-temps réel afin d’aider les équipes à comprendre le comportement du réseau, à réagir à l’évolution des conditions et à automatiser les améliorations à partir d’une couche de contrôle intelligente unique.",
    capabilities: [
      {
        title: "Simulation et planification",
        body: "Modélisez le comportement du réseau avant le déploiement, comparez différents scénarios et planifiez les changements avec une vision plus claire des performances attendues.",
      },
      {
        title: "Optimisation en quasi-temps réel",
        body: "Interprétez continuellement les conditions en direct et ajustez les configurations radio à mesure que la demande, les interférences et les priorités du réseau évoluent.",
      },
      {
        title: "Intégration à l’AI-RAN",
        body: "Connectez-vous à l’infrastructure AI-RAN pour analyser les données de gestion des performances (PM) et convertir les résultats en mises à jour de gestion de la configuration (CM).",
      },
    ],
    conclusion:
      "Ensemble, LATYS FOCUS™ et AURA™ offrent une solution rentable, sans latence supplémentaire, pour préparer les réseaux sans fil à l’IA en périphérie.",
    illustrationAlt:
      "Automatisation infonuagique LATYS AURA reliée à un moniteur affichant les données réseau sous forme de courbes et de barres.",
  },
  focusAuraLayer0: {
    heading:
      "SmartRIS avec optimisation pilotée par l’IA? C’est Layer-0 Wireless™",
    introduction:
      "Une station de base, une surface FOCUS™ et la boucle d’optimisation d’AURA™ — pour remodeler la propagation sans toucher à l’infrastructure existante.",
    diagramLabel: "Boucle de contrôle Layer-0 Wireless",
    nodes: [
      {
        title: "Station de base",
        subtitle: "Réseau existant",
      },
      {
        title: "FOCUS™ SmartRIS",
        subtitle: "Remodèle le trajet RF",
      },
      {
        title: "Zone de couverture",
        subtitle: "IA en périphérie / autonomie",
      },
      {
        title: "AURA™",
        subtitle: "Boucle d’optimisation",
      },
    ],
    benefits: [
      {
        title: "Latence zéro",
        body: "Le façonnage du signal s’effectue dans le milieu — sans délai de traitement supplémentaire.",
      },
      {
        title: "Indépendant du protocole",
        body: "Fonctionne avec le Wi-Fi, la 5G/6G et d’autres systèmes, sur toute bande de fréquences.",
      },
      {
        title: "Coûts réduits",
        body: "Améliore la couverture et la capacité sans ajouter de tours ni de réseau de collecte.",
      },
      {
        title: "2–90 GHz",
        body: "Démontré dans les environnements RF les plus exigeants, des bandes moyennes aux ondes millimétriques.",
      },
    ],
  },
  mmWaveCaseStudy: {
    eyebrow: "Étude de cas mmWave",
    heading: "La capacité mmWave sans multiplier les sites.",
    introduction:
      "Le spectre mmWave offre une capacité nettement supérieure, mais sa portée plus courte peut exiger beaucoup plus de sites que les bandes moyennes, tout en laissant certaines zones difficiles mal desservies.",
    solutionHeading: "Façonnez la couverture existante.",
    solutionBody:
      "Layer-0 Wireless™ redirige l’énergie RF vers les zones mal desservies, sans ajouter de coûteux équipements de station de base ni de réseau de collecte.",
    imageLabel: "Déploiement mmWave traditionnel",
    imageAlt:
      "Schéma d’un déploiement mmWave traditionnel comprenant de nombreux sites de couverture autour d’une station de base centrale.",
    videoLabel: "Couverture façonnée avec Layer-0 Wireless™",
    videoAriaLabel:
      "Animation montrant LATYS FOCUS et AURA en train de façonner la couverture mmWave.",
    videoFallback: "Votre navigateur ne prend pas en charge la vidéo intégrée.",
  },
};

export const solutionsCopy = {
  en: english,
  fr: french,
} satisfies Record<Locale, SolutionsCopy>;
