export interface ServiceItem {
  name: string;
  price: number;
}

export interface ServiceCategory {
  id: string;
  title: string;
  icon: string;
  description: string;
  comingSoon?: boolean;
  items: ServiceItem[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: "endodoncija",
    title: "Bolesti zuba i endodoncija",
    icon: "Zap",
    description: "Lečenje karijesa, endodontski tretmani i beljenje zuba.",
    items: [
      { name: "Kompozitni ispun (prva klasa, peta klasa)", price: 4000 },
      { name: "Kompozitna nadogradnja (tropovršinska, druga klasa)", price: 5000 },
      { name: "Faseta od kompozitne plombe", price: 8000 },
      { name: "Pre endo build up", price: 3000 },
      { name: "Terapija dubokog karijesa", price: 3000 },
      { name: "Prva pomoć kod dentalgija (zubobolja)", price: 3000 },
      { name: "Mortalna ekstirpacija bočnih zuba", price: 3000 },
      { name: "Lečenje gangrene po seansi", price: 3000 },
      { name: "Endodontsko lečenje jednokorenih zuba", price: 5000 },
      { name: "Endodontsko lečenje dvokorenih zuba", price: 7000 },
      { name: "Endodontsko lečenje trokorenih zuba", price: 9000 },
      { name: "Revizija starog punjenja po kanalu", price: 5000 },
      { name: "Izlivanje devitalizovanog zuba po seansi", price: 4000 },
      { name: "Beljenje zuba obe vilice", price: 15000 },
      { name: "Silikonske folije za beljenje/zaštitu/bruksizam", price: 6000 },
      { name: "Specijalistički pregled", price: 3000 },
    ],
  },
  {
    id: "decija",
    title: "Dečija i preventivna stomatologija",
    icon: "Heart",
    description: "Nežna briga o dečijim zubima i prevencija karijesa.",
    items: [
      { name: "Zalivanje fisura po zubu", price: 3000 },
      { name: "Aplikacija mumifikacione paste + ZOE + cement plomba", price: 3000 },
      { name: "Vađenje mlečnog zuba", price: 3000 },
      { name: "Prva pomoć kod frakture zuba", price: 2000 },
      { name: "Uklanjanje mekih/čvrstih naslaga", price: 3000 },
      { name: "Fluorizacija zuba", price: 3000 },
      { name: "Plomba na mlečnim zubima (GJC)", price: 3000 },
    ],
  },
  {
    id: "parodontologija",
    title: "Parodontologija i oralna medicina",
    icon: "Shield",
    description: "Lečenje desni, uklanjanje kamenca i kiretaže.",
    items: [
      { name: "Ultrazvučno uklanjanje kamenca i mekih naslaga", price: 3500 },
      { name: "Obrada paradontalnog džepa i aplikacija leka", price: 3000 },
      { name: "Sanacija parodontalnog apscesa", price: 3000 },
      { name: "Peskiranje zuba", price: 3500 },
      { name: "Kiretaža zuba po vilici", price: 9000 },
      { name: "Fluorizacija zuba", price: 3000 },
    ],
  },
  {
    id: "hirurgija",
    title: "Oralna hirurgija",
    icon: "Scissors",
    description: "Vađenje zuba, hirurški zahvati, apikotomija, cistektomija.",
    items: [
      { name: "Rutinsko vađenje zuba (paradontopatični)", price: 3000 },
      { name: "Rutinsko vađenje zuba", price: 4000 },
      { name: "Incizija apscesa sa aplikacijom jodoform štrajfne", price: 3000 },
      { name: "Lečenje alveolita posle vađenja zuba", price: 4000 },
      { name: "Komplikovano vađenje jednokorenih zuba", price: 4000 },
      { name: "Komplikovano vađenje višekorenih zuba", price: 7000 },
      { name: "Hirurško vađenje zuba", price: 14000 },
      { name: "Hirurško zatvaranje sinusa", price: 15000 },
      { name: "Apikotomija (po zubu)", price: 14000 },
      { name: "Cistektomija (po zubu)", price: 14000 },
      { name: "Režanj operacija (po zubu)", price: 6000 },
      { name: "Hirurško oslobađanje zuba", price: 15000 },
      { name: "Frenektomija", price: 7000 },
      { name: "Gingivektomija", price: 5000 },
    ],
  },
  {
    id: "implantologija",
    title: "Implantologija",
    icon: "Star",
    description: "Ugradnja premium implantata vodećih svetskih brendova.",
    items: [
      { name: "Ugradnja Nobel implantata", price: 80000 },
      { name: "Ugradnja Alpha implantata", price: 75000 },
      { name: "Ugradnja Straumann implantata", price: 80000 },
      { name: "Sinus lift", price: 95000 },
    ],
  },
  {
    id: "protetika",
    title: "Stomatološka protetika",
    icon: "Award",
    description: "Krunice, mostovi, proteze i viniri za savršen osmeh.",
    items: [
      { name: "Privremena krunica (CAD/CAM)", price: 3000 },
      { name: "Uklanjanje stare krunice", price: 2000 },
      { name: "Cementiranje stare krunice", price: 3000 },
      { name: "Metalo-keramička krunica", price: 14000 },
      { name: "Bezmetalna krunica", price: 22000 },
      { name: "Livena nadogradnja na jednokorenom zubu", price: 4000 },
      { name: "Livena nadogradnja na višekorenom zubu", price: 6000 },
      { name: "Fiberglas nadogradnja", price: 6000 },
      { name: "Imedijantna proteza", price: 28000 },
      { name: "Parcijalna akrilatna proteza", price: 30000 },
      { name: "Totalna akrilatna proteza", price: 36000 },
      { name: "Totalna proteza sa metalnom bazom", price: 40000 },
      { name: "Skeletirana parcijalna proteza - Vizil", price: 50000 },
      { name: "Biodentaplast proteza (Bredent)", price: 50000 },
      { name: "Direktno podlaganje proteze", price: 5000 },
      { name: "Indirektno podlaganje proteze", price: 9000 },
      { name: "Keramička faseta (vinir)", price: 25000 },
    ],
  },
  {
    id: "protetika-implanti",
    title: "Protetika na implantima",
    icon: "Layers",
    description: "Nadogradnje i krunice na implantima svih sistema.",
    items: [
      { name: "Hibridni rad na 4 implantata - Co-Cr frame", price: 300000 },
      { name: "Hibridni rad na 4 implantata - BioHPP frame", price: 360000 },
      { name: "M-K krunica na Alpha Bio implantu", price: 24000 },
      { name: "M-K krunica na Straumann implantu", price: 30000 },
      { name: "M-K krunica na Nobel implantu", price: 30000 },
      { name: "Bezmetalna krunica na Alpha Bio implantu", price: 36000 },
      { name: "Bezmetalna krunica na Straumann implantu", price: 42000 },
      { name: "Bezmetalna krunica na Nobel implantu", price: 42000 },
    ],
  },
  {
    id: "ortodoncija",
    title: "Ortopedija vilica",
    icon: "AlignCenter",
    description: "Fiksni i mobilni ortodontski aparati za ravne zube.",
    items: [
      { name: "Pokretni aparati (po vilici)", price: 36000 },
      { name: "Bimaksilarni aparat (obe vilice)", price: 50000 },
      { name: "Fiksni aparat sa metalnim bravicama", price: 84000 },
      { name: "Fiksni aparat sa estetskim bravicama", price: 96000 },
      { name: "Retenciona folija", price: 8000 },
    ],
  },
  {
    id: "invisalign",
    title: "Invisalign",
    icon: "Smile",
    description: "Nevidljive folije za ispravljanje zuba – moderan pristup ortodonciji.",
    items: [
      { name: "Invisalign do 7 folija", price: 240000 },
      { name: "Invisalign do 14 folija", price: 340000 },
      { name: "Invisalign do 20 folija", price: 480000 },
      { name: "Invisalign 21+ folija", price: 600000 },
    ],
  },
  {
    id: "estetska",
    title: "Anti Aging / Estetska medicina",
    icon: "Sparkles",
    description: "Estetski tretmani lica i anti-aging procedure.",
    comingSoon: true,
    items: [],
  },
];
