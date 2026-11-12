export type MenuCategoryId =
  | "beer-packs"
  | "touareg-packs"
  | "spirits-food";

export type MenuItem = {
  name: string;
  description: string;
  price: string;
};

export type MenuCategory = {
  id: MenuCategoryId;
  label: string;
  items: MenuItem[];
};

export const menuCategories: MenuCategory[] = [
  {
    id: "beer-packs",
    label: "Packs bière & mkila",
    items: [
      { name: "6 Spéciale Gold + Mkila", description: "Pack bière et mkila", price: "230 DH" },
      { name: "6 Casablanca + Mkila", description: "Pack bière et mkila", price: "320 DH" },
      { name: "6 Corona + Mkila", description: "Pack bière et mkila", price: "350 DH" },
    ],
  },
  {
    id: "touareg-packs",
    label: "Packs Touareg",
    items: [
      { name: "Touareg Rouge", description: "2 brochettes de kefta", price: "240 DH" },
      { name: "Touareg Blanc", description: "Friture mixte", price: "280 DH" },
    ],
  },
  {
    id: "spirits-food",
    label: "Spiritueux & food",
    items: [
      { name: "Red Label", description: "Friture mixte · Salade de fruits", price: "1 400 DH" },
      { name: "Black Label", description: "Friture mixte · Salade de fruits", price: "1 500 DH" },
      { name: "Belvedere", description: "Paëlla · Salade de fruits", price: "1 500 DH" },
      { name: "Absolut", description: "Brochettes de poulet · Salade de fruits", price: "1 200 DH" },
    ],
  },
];
