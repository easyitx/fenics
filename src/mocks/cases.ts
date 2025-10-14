export interface Case {
  id: string;
  name: string;
  image: string;
  price: number;
  isAvailable: boolean;
  isFree: boolean;
  rarity: string;
}

export interface SkinData {
  id: string;
  marketName: string;
  weaponName: string;
  shortName: string;
  itemImage: string;
  rarity: string;
  price: number;
}

export const casesMock: Case[] = [
  {
    id: "341",
    name: "Dragon Lore",
    image: "2.png",
    price: 2500,
    isAvailable: true,
    isFree: true,
    rarity: "legendary",
  },
  {
    id: "0",
    name: "Dragon Lore",
    image: "2.png",
    price: 2500,
    isAvailable: true,
    isFree: true,
    rarity: "legendary",
  },
  {
    id: "2",
    name: "AWP | Medusa",
    image: "2.png",
    price: 1800,
    isAvailable: true,
    isFree: true,
    rarity: "mythical",
  },
  {
    id: "3",
    name: "AK-47 | Fire Serpent",
    image: "2.png",
    price: 1200,
    isAvailable: false,
    isFree: true,
    rarity: "rare",
  },
  {
    id: "4",
    name: "M4A4 | Howl",
    image: "2.png",
    price: 3200,
    isAvailable: true,
    isFree: true,
    rarity: "ancient",
  },
  {
    id: "5",
    name: "Karambit | Fade",
    image: "2.png",
    price: 2800,
    isAvailable: true,
    isFree: true,
    rarity: "legendary",
  },

  {
    id: "7",
    name: "M9 Bayonet | Crimson Web",
    image: "2.png",
    price: 1500,
    isAvailable: true,
    isFree: false,
    rarity: "rare",
  },
  {
    id: "8",
    name: "Karambit | Tiger Tooth",
    image: "2.png",
    price: 1500,
    isAvailable: true,
    isFree: false,
    rarity: "uncommon",
  },
  {
    id: "9",
    name: "AK-47 | Vulcan",
    image: "2.png",
    price: 1500,
    isAvailable: true,
    isFree: false,
    rarity: "common",
  },
  {
    id: "10",
    name: "AWP | Medusa",
    image: "2.png",
    price: 1500,
    isAvailable: true,
    isFree: false,
    rarity: "mythical",
  },

  {
    id: "12",
    name: "AK-47 | Redline",
    image: "2.png",
    price: 4600,
    isAvailable: false,
    isFree: false,
    rarity: "rare",
  },
  {
    id: "13",
    name: "AWP | Asiimov",
    image: "2.png",
    price: 3900,
    isAvailable: true,
    isFree: false,
    rarity: "uncommon",
  },
];
