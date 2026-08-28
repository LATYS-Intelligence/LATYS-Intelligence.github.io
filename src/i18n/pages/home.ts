import type { Locale } from "../config";

interface LayerZeroLayerCopy {
  level: string;
  name: string;
  protocol: string;
}

export interface LayerZeroCopy {
  eyebrow: string;
  heading: string;
  introduction: string;
  stackLabel: string;
  layers: readonly [
    LayerZeroLayerCopy,
    LayerZeroLayerCopy,
    LayerZeroLayerCopy,
    LayerZeroLayerCopy,
    LayerZeroLayerCopy,
    LayerZeroLayerCopy,
    LayerZeroLayerCopy,
    LayerZeroLayerCopy,
  ];
  explanation: {
    heading: string;
    body: string;
    points: readonly [string, string, string];
  };
}

interface HomeCopy {
  meta: {
    title: string;
    description: string;
  };
  layerZero: LayerZeroCopy;
}

export const homeCopy = {
  en: {
    meta: {
      title: "LATYS | Home",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    layerZero: {
      eyebrow: "Platform",
      heading: "What is Layer-0 Wireless™?",
      introduction: "The OSI model has always assumed the physical medium is fixed. LATYS breaks that assumption.",
      stackLabel: "Traditional OSI model",
      layers: [
        { level: "L7", name: "Application", protocol: "HTTP · DNS · FTP" },
        { level: "L6", name: "Presentation", protocol: "TLS · SSL" },
        { level: "L5", name: "Session", protocol: "NetBIOS · RPC" },
        { level: "L4", name: "Transport", protocol: "TCP · UDP" },
        { level: "L3", name: "Network", protocol: "IP · ICMP · OSPF" },
        { level: "L2", name: "Data link", protocol: "Ethernet · Wi-Fi · 5G" },
        { level: "L1", name: "Physical", protocol: "Cable · fiber · RF" },
        { level: "L0", name: "Environment", protocol: "RF propagation, controlled by LATYS" },
      ],
      explanation: {
        heading: "The environment becomes part of the network.",
        body: "Instead of adding another radio, LATYS controls how signals already behave as they travel, improving coverage and capacity for the network you already have.",
        points: [
          "Today's networks stop at Layer 1. Everything above assumes a fixed, uncontrolled medium.",
          "LATYS reaches below the physical layer, shaping RF propagation in real time.",
          "Built for the reliability and latency that Edge AI and autonomous systems demand.",
        ],
      },
    },
  },
  fr: {
    meta: {
      title: "LATYS | Accueil",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    layerZero: {
      eyebrow: "Plateforme",
      heading: "Qu'est-ce que Layer-0 Wireless™?",
      introduction: "Le modèle OSI a toujours supposé que le support physique était fixe. LATYS remet cette hypothèse en question.",
      stackLabel: "Modèle OSI traditionnel",
      layers: [
        { level: "L7", name: "Application", protocol: "HTTP · DNS · FTP" },
        { level: "L6", name: "Présentation", protocol: "TLS · SSL" },
        { level: "L5", name: "Session", protocol: "NetBIOS · RPC" },
        { level: "L4", name: "Transport", protocol: "TCP · UDP" },
        { level: "L3", name: "Réseau", protocol: "IP · ICMP · OSPF" },
        { level: "L2", name: "Liaison de données", protocol: "Ethernet · Wi-Fi · 5G" },
        { level: "L1", name: "Physique", protocol: "Câble · fibre · RF" },
        { level: "L0", name: "Environnement", protocol: "Propagation RF, contrôlée par LATYS" },
      ],
      explanation: {
        heading: "L'environnement devient partie intégrante du réseau.",
        body: "Au lieu d'ajouter une autre radio, LATYS contrôle la façon dont les signaux existants se propagent, ce qui améliore la couverture et la capacité du réseau déjà en place.",
        points: [
          "Les réseaux actuels s'arrêtent à la couche 1. Tout ce qui se trouve au-dessus suppose un support fixe et non contrôlé.",
          "LATYS agit sous la couche physique et façonne la propagation RF en temps réel.",
          "Conçu pour répondre aux exigences de fiabilité et de latence de l'IA en périphérie et des systèmes autonomes.",
        ],
      },
    },
  },
} satisfies Record<Locale, HomeCopy>;
