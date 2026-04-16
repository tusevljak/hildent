export interface Review {
  id: string;
  name: string;
  rating: number;
  date: string;
  text: string;
  service?: string;
}

export const reviews: Review[] = [
  {
    id: "1",
    name: "Marija Petrović",
    rating: 5,
    date: "2025-02-10",
    text: "Odlična ordinacija! Dr Bratić je izuzetno stručan i profesionalan. Sve je obavljeno brzo i bezbolno. Preporučujem svima!",
    service: "Implantologija",
  },
  {
    id: "2",
    name: "Stefan Nikolić",
    rating: 5,
    date: "2025-01-28",
    text: "Konačno stomatolog kod kog se ne bojim! Prijatan ambijent, ljubazno osoblje i vrhunski rezultati. Beljenje zuba je promenilo moj osmeh.",
    service: "Beljenje zuba",
  },
  {
    id: "3",
    name: "Ana Jovanović",
    rating: 5,
    date: "2025-03-05",
    text: "Invisalign terapija je promenila moj život. Za manje od godinu dana imam savršeno ravne zube. Hvala Dr Bratiću na strpljenju i stručnosti!",
    service: "Invisalign",
  },
  {
    id: "4",
    name: "Miloš Đorđević",
    rating: 5,
    date: "2024-12-15",
    text: "Zakazivanje je super lako, online i telefonom. Dolazim na redovne preglede već 2 godine i uvek sam zadovoljan.",
    service: "Opšta stomatologija",
  },
  {
    id: "5",
    name: "Jelena Stojanović",
    rating: 5,
    date: "2025-02-22",
    text: "Dovela sam i decu – divan pristup prema njima, bez straha i plakanja. Smirili ih i obavili sve preglede sjajno.",
    service: "Dečija stomatologija",
  },
  {
    id: "6",
    name: "Dragan Marinković",
    rating: 5,
    date: "2025-01-10",
    text: "Ugradnja implantata prošla bez ikakvih problema. Stručan tim, moderna oprema i transparentni cenovnik. Preporučujem svima!",
    service: "Implantologija",
  },
];
