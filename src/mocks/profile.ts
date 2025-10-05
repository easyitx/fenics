import { IUser } from "@/entities/user";

interface SkinItem {
  id: string;
  name: string;
  price: string;
  image: string;
  isHighlighted?: boolean;
}

export const mockUser: IUser = {
  username: "RudyGrays",
  balance: {
    current: 3239.24,
    total: 3239.24,
    currency: "USD",
  },
};

export const mockSkins: SkinItem[] = [
  {
    id: "1",
    name: "Kukri Knife Fade",
    price: "30$",
    image: "/cases/1.png",
    isHighlighted: true,
  },
  {
    id: "2",
    name: "FAMAS Contrast Spr...",
    price: "15$",
    image: "/cases/1.png",
  },
  {
    id: "3",
    name: "Desert Eagle Night",
    price: "30$",
    image: "/cases/1.png",
  },
  {
    id: "4",
    name: "Desert Eagle Night",
    price: "30$",
    image: "/cases/1.png",
  },
  {
    id: "5",
    name: "Desert Eagle Night",
    price: "30$",
    image: "/cases/1.png",
  },
  {
    id: "6",
    name: "Desert Eagle Night",
    price: "30$",
    image: "/cases/1.png",
  },
  {
    id: "7",
    name: "Desert Eagle Night",
    price: "30$",
    image: "/cases/1.png",
  },
  {
    id: "8",
    name: "Desert Eagle Night",
    price: "30$",
    image: "/cases/1.png",
  },
  {
    id: "9",
    name: "AK-47 Redline",
    price: "45$",
    image: "/cases/1.png",
    isHighlighted: true,
  },
  {
    id: "10",
    name: "AWP Dragon Lore",
    price: "120$",
    image: "/cases/1.png",
  },
  {
    id: "11",
    name: "M4A4 Howl",
    price: "85$",
    image: "/cases/1.png",
  },
  {
    id: "12",
    name: "Glock-18 Fade",
    price: "25$",
    image: "/cases/1.png",
  },
  {
    id: "13",
    name: "Karambit Tiger Tooth",
    price: "95$",
    image: "/cases/1.png",
  },
  {
    id: "14",
    name: "AK-47 Vulcan",
    price: "35$",
    image: "/cases/1.png",
  },
  {
    id: "15",
    name: "AWP Medusa",
    price: "75$",
    image: "/cases/1.png",
  },
  {
    id: "16",
    name: "M4A1-S Hyper Beast",
    price: "28$",
    image: "/cases/1.png",
  },
  {
    id: "17",
    name: "Butterfly Knife Slaughter",
    price: "110$",
    image: "/cases/1.png",
  },
  {
    id: "18",
    name: "AK-47 Fire Serpent",
    price: "65$",
    image: "/cases/1.png",
  },
  {
    id: "19",
    name: "AWP Lightning Strike",
    price: "40$",
    image: "/cases/1.png",
  },
  {
    id: "20",
    name: "M4A4 Asiimov",
    price: "32$",
    image: "/cases/1.png",
  },
  {
    id: "21",
    name: "Huntsman Knife Crimson Web",
    price: "55$",
    image: "/cases/1.png",
  },
  {
    id: "22",
    name: "AK-47 Neon Revolution",
    price: "38$",
    image: "/cases/1.png",
  },
  {
    id: "23",
    name: "AWP Oni Taiji",
    price: "42$",
    image: "/cases/1.png",
  },
  {
    id: "24",
    name: "M4A1-S Golden Coil",
    price: "48$",
    image: "/cases/1.png",
  },
  {
    id: "25",
    name: "AK-47 Bloodsport",
    price: "52$",
    image: "/cases/1.png",
  },
  {
    id: "26",
    name: "AWP Gungnir",
    price: "95$",
    image: "/cases/1.png",
  },
  {
    id: "27",
    name: "M4A4 The Emperor",
    price: "68$",
    image: "/cases/1.png",
  },
  {
    id: "28",
    name: "Karambit Doppler",
    price: "180$",
    image: "/cases/1.png",
    isHighlighted: true,
  },
  {
    id: "29",
    name: "AK-47 Fuel Injector",
    price: "42$",
    image: "/cases/1.png",
  },
  {
    id: "30",
    name: "AWP Prince",
    price: "58$",
    image: "/cases/1.png",
  },
  {
    id: "31",
    name: "M4A1-S Icarus Fell",
    price: "35$",
    image: "/cases/1.png",
  },
  {
    id: "32",
    name: "Butterfly Knife Fade",
    price: "220$",
    image: "/cases/1.png",
  },
  {
    id: "33",
    name: "AK-47 Aquamarine Revenge",
    price: "38$",
    image: "/cases/1.png",
  },
  {
    id: "34",
    name: "AWP Fade",
    price: "85$",
    image: "/cases/1.png",
  },
  {
    id: "35",
    name: "M4A4 Poseidon",
    price: "72$",
    image: "/cases/1.png",
  },
  {
    id: "36",
    name: "Huntsman Knife Fade",
    price: "165$",
    image: "/cases/1.png",
  },
  {
    id: "37",
    name: "AK-47 Point Disarray",
    price: "28$",
    image: "/cases/1.png",
  },
  {
    id: "38",
    name: "AWP Mortis",
    price: "45$",
    image: "/cases/1.png",
  },
  {
    id: "39",
    name: "M4A1-S Master Piece",
    price: "62$",
    image: "/cases/1.png",
  },
  {
    id: "40",
    name: "Talon Knife Crimson Web",
    price: "125$",
    image: "/cases/1.png",
  },
  {
    id: "41",
    name: "AK-47 Frontside Misty",
    price: "32$",
    image: "/cases/1.png",
  },
  {
    id: "42",
    name: "AWP Wildfire",
    price: "48$",
    image: "/cases/1.png",
  },
  {
    id: "43",
    name: "M4A4 Daybreak",
    price: "55$",
    image: "/cases/1.png",
  },
  {
    id: "44",
    name: "Bayonet Slaughter",
    price: "88$",
    image: "/cases/1.png",
  },
  {
    id: "45",
    name: "AK-47 Jaguar",
    price: "41$",
    image: "/cases/1.png",
  },
  {
    id: "46",
    name: "AWP Redline",
    price: "35$",
    image: "/cases/1.png",
  },
  {
    id: "47",
    name: "M4A1-S Cyrex",
    price: "29$",
    image: "/cases/1.png",
  },
  {
    id: "48",
    name: "Flip Knife Fade",
    price: "145$",
    image: "/cases/1.png",
  },
];
