export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: number;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "kako-pravilno-prati-zube",
    title: "Kako pravilno prati zube? Saveti stomatologa",
    excerpt: "Pranje zuba izgleda jednostavno, ali mnogi od nas to rade pogrešno. Saznajte koje greške pravimo i kako ih ispraviti za zdravije zube.",
    date: "2025-01-15",
    category: "Prevencija",
    readTime: 5,
  },
  {
    slug: "invisalign-sta-je-i-za-koga",
    title: "Šta su Invisalign folije i za koga su namenjene?",
    excerpt: "Nevidljive ortodontske folije revolucionisale su ispravljanje zuba. Saznajte da li su Invisalign folije pravo rešenje za vas.",
    date: "2025-02-28",
    category: "Ortodoncija",
    readTime: 7,
  },
  {
    slug: "implantat-ili-krunica",
    title: "Implantat ili krunica – šta je pravo rešenje?",
    excerpt: "Kada nedostaje zub, dve najčešće opcije su implantat i krunica na brušenom zubu. Poredimo prednosti i mane oba pristupa.",
    date: "2025-03-10",
    category: "Implantologija",
    readTime: 8,
  },
];
