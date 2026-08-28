import type { Locale } from "../config";

interface InsightItem {
  kicker: string;
  title: string;
  body: string;
}

interface InsightsCopy {
  meta: {
    title: string;
    description: string;
  };
  intro: {
    eyebrow: string;
    heading: string;
    body: string;
  };
  featured: InsightItem;
  items: InsightItem[];
}

const english: InsightsCopy = {
  meta: {
    title: "LATYS | Insights",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  intro: {
    eyebrow: "Lorem ipsum",
    heading: "Sed ut perspiciatis unde omnis.",
    body: "Iste natus error sit voluptatem accusantium doloremque laudantium.",
  },
  featured: {
    kicker: "Lorem ipsum",
    title: "Totam rem aperiam eaque ipsa.",
    body: "Quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
  items: [
    {
      kicker: "Dolor sit amet",
      title: "Nemo enim ipsam voluptatem.",
      body: "Quia voluptas sit aspernatur aut odit aut fugit.",
    },
    {
      kicker: "Consectetur",
      title: "Sed quia consequuntur magni.",
      body: "Dolores eos qui ratione voluptatem sequi nesciunt.",
    },
    {
      kicker: "Adipiscing elit",
      title: "Neque porro quisquam est.",
      body: "Qui dolorem ipsum quia dolor sit amet consectetur.",
    },
    {
      kicker: "Sed do eiusmod",
      title: "Ut enim ad minima veniam.",
      body: "Quis nostrum exercitationem ullam corporis suscipit.",
    },
    {
      kicker: "Tempor incididunt",
      title: "Quis autem vel eum iure.",
      body: "Reprehenderit qui in ea voluptate velit esse quam nihil.",
    },
  ],
};

export const insightsCopy = {
  en: english,
  fr: {
    ...english,
    meta: {
      title: "LATYS | Perspectives",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  },
} satisfies Record<Locale, InsightsCopy>;
