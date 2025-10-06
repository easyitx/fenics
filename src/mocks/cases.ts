export interface Case {
  id: string;
  name: string;
  image: string;
  price: number;
  isAvailable: boolean;
}

export const casesMock: Case[] = [
  {
    id: "1",
    name: "Dragon Lore",
    image: "2.png",
    price: 2500,
    isAvailable: true,
  },
  {
    id: "2",
    name: "AWP | Medusa",
    image: "2.png",
    price: 1800,
    isAvailable: true,
  },
  {
    id: "3",
    name: "AK-47 | Fire Serpent",
    image: "2.png",
    price: 1200,
    isAvailable: false,
  },
  {
    id: "4",
    name: "M4A4 | Howl",
    image: "2.png",
    price: 3200,
    isAvailable: true,
  },
  {
    id: "5",
    name: "Karambit | Fade",
    image: "2.png",
    price: 2800,
    isAvailable: true,
  },
  {
    id: "6",
    name: "AWP | Dragon Lore",
    image: "2.png",
    price: 4500,
    isAvailable: false,
  },
  {
    id: "7",
    name: "M9 Bayonet | Crimson Web",
    image: "2.png",
    price: 1500,
    isAvailable: true,
  },
  {
    id: "8",
    name: "Glock-18 | Fade",
    image: "2.png",
    price: 800,
    isAvailable: true,
  },
  {
    id: "9",
    name: "AK-47 | Redline",
    image: "2.png",
    price: 600,
    isAvailable: false,
  },
  {
    id: "10",
    name: "AWP | Asiimov",
    image: "2.png",
    price: 900,
    isAvailable: true,
  },
];
