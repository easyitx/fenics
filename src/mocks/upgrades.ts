import { SkinData } from "@/entities/skin/ui/SkinCard";

interface UpgradeItemMock {
  win: boolean;
  percent: number;
  fromSkin: SkinData;
  toSkin: SkinData;
}

export const upgradeItemsMock: UpgradeItemMock[] = [
  {
    win: false,
    percent: 15.5,
    fromSkin: {
      _id: "1",
      marketName: "FAMAS | Contrast Spray",
      weaponName: "FAMAS",
      shortName: "Contrast Spray",
      itemImage:
        "https://cdn.csgoskins.gg/public/uih/items/aHR0cHM6Ly9jZG4uY3Nnb3NraW5zLmdnL3B1YmxpYy9pbWFnZXMvYnVja2V0cy9lY29uL2RlZmF1bHRfZ2VuZXJhdGVkL3dlYXBvbl9rbmlmZV9rdWtyaV9hYV9mYWRlX2xpZ2h0LjUyOWY0MTlkNmE5MGUxMTgwNjRiMDdmNjgwMzFmMDMzOGUyNGZjMTIucG5n/auto/auto/85/notrim/d7a25ab6147067a3f83e410138152aaa.png",
      rarity: "rare",
      price: 10,
    },
    toSkin: {
      _id: "2",
      marketName: "AK-47 | Neon Revolution",
      weaponName: "AK-47",
      shortName: "Neon Revolution",
      itemImage:
        "https://cdn.csgoskins.gg/public/uih/items/aHR0cHM6Ly9jZG4uY3Nnb3NraW5zLmdnL3B1YmxpYy9pbWFnZXMvYnVja2V0cy9lY29uL2RlZmF1bHRfZ2VuZXJhdGVkL3dlYXBvbl9rbmlmZV9rdWtyaV9hYV9mYWRlX2xpZ2h0LjUyOWY0MTlkNmE5MGUxMTgwNjRiMDdmNjgwMzFmMDMzOGUyNGZjMTIucG5n/auto/auto/85/notrim/d7a25ab6147067a3f83e410138152aaa.png",
      rarity: "ancient",
      price: 100,
    },
  },
  {
    win: false,
    percent: 8.2,
    fromSkin: {
      _id: "3",
      marketName: "M4A4 | Howl",
      weaponName: "M4A4",
      shortName: "Howl",
      itemImage:
        "https://cdn.csgoskins.gg/public/uih/items/aHR0cHM6Ly9jZG4uY3Nnb3NraW5zLmdnL3B1YmxpYy9pbWFnZXMvYnVja2V0cy9lY29uL2RlZmF1bHRfZ2VuZXJhdGVkL3dlYXBvbl9rbmlmZV9rdWtyaV9hYV9mYWRlX2xpZ2h0LjUyOWY0MTlkNmE5MGUxMTgwNjRiMDdmNjgwMzFmMDMzOGUyNGZjMTIucG5n/auto/auto/85/notrim/d7a25ab6147067a3f83e410138152aaa.png",
      rarity: "ancient",
      price: 50,
    },
    toSkin: {
      _id: "4",
      marketName: "AWP | Dragon Lore",
      weaponName: "AWP",
      shortName: "Dragon Lore",
      itemImage:
        "https://cdn.csgoskins.gg/public/uih/items/aHR0cHM6Ly9jZG4uY3Nnb3NraW5zLmdnL3B1YmxpYy9pbWFnZXMvYnVja2V0cy9lY29uL2RlZmF1bHRfZ2VuZXJhdGVkL3dlYXBvbl9rbmlmZV9rdWtyaV9hYV9mYWRlX2xpZ2h0LjUyOWY0MTlkNmE5MGUxMTgwNjRiMDdmNjgwMzFmMDMzOGUyNGZjMTIucG5n/auto/auto/85/notrim/d7a25ab6147067a3f83e410138152aaa.png",
      rarity: "ancient",
      price: 500,
    },
  },
  {
    win: true,
    percent: 25.0,
    fromSkin: {
      _id: "5",
      marketName: "Glock-18 | Water Elemental",
      weaponName: "Glock-18",
      shortName: "Water Elemental",
      itemImage:
        "https://cdn.csgoskins.gg/public/uih/items/aHR0cHM6Ly9jZG4uY3Nnb3NraW5zLmdnL3B1YmxpYy9pbWFnZXMvYnVja2V0cy9lY29uL2RlZmF1bHRfZ2VuZXJhdGVkL3dlYXBvbl9rbmlmZV9rdWtyaV9hYV9mYWRlX2xpZ2h0LjUyOWY0MTlkNmE5MGUxMTgwNjRiMDdmNjgwMzFmMDMzOGUyNGZjMTIucG5n/auto/auto/85/notrim/d7a25ab6147067a3f83e410138152aaa.png",
      rarity: "ancient",
      price: 25,
    },
    toSkin: {
      _id: "6",
      marketName: "Desert Eagle | Blaze",
      weaponName: "Desert Eagle",
      shortName: "Blaze",
      itemImage:
        "https://cdn.csgoskins.gg/public/uih/items/aHR0cHM6Ly9jZG4uY3Nnb3NraW5zLmdnL3B1YmxpYy9pbWFnZXMvYnVja2V0cy9lY29uL2RlZmF1bHRfZ2VuZXJhdGVkL3dlYXBvbl9rbmlmZV9rdWtyaV9hYV9mYWRlX2xpZ2h0LjUyOWY0MTlkNmE5MGUxMTgwNjRiMDdmNjgwMzFmMDMzOGUyNGZjMTIucG5n/auto/auto/85/notrim/d7a25ab6147067a3f83e410138152aaa.png",
      rarity: "ancient",
      price: 200,
    },
  },
  {
    win: true,
    percent: 25.0,
    fromSkin: {
      _id: "5",
      marketName: "Glock-18 | Water Elemental",
      weaponName: "Glock-18",
      shortName: "Water Elemental",
      itemImage:
        "https://cdn.csgoskins.gg/public/uih/items/aHR0cHM6Ly9jZG4uY3Nnb3NraW5zLmdnL3B1YmxpYy9pbWFnZXMvYnVja2V0cy9lY29uL2RlZmF1bHRfZ2VuZXJhdGVkL3dlYXBvbl9rbmlmZV9rdWtyaV9hYV9mYWRlX2xpZ2h0LjUyOWY0MTlkNmE5MGUxMTgwNjRiMDdmNjgwMzFmMDMzOGUyNGZjMTIucG5n/auto/auto/85/notrim/d7a25ab6147067a3f83e410138152aaa.png",
      rarity: "ancient",
      price: 25,
    },
    toSkin: {
      _id: "6",
      marketName: "Desert Eagle | Blaze",
      weaponName: "Desert Eagle",
      shortName: "Blaze",
      itemImage:
        "https://cdn.csgoskins.gg/public/uih/items/aHR0cHM6Ly9jZG4uY3Nnb3NraW5zLmdnL3B1YmxpYy9pbWFnZXMvYnVja2V0cy9lY29uL2RlZmF1bHRfZ2VuZXJhdGVkL3dlYXBvbl9rbmlmZV9rdWtyaV9hYV9mYWRlX2xpZ2h0LjUyOWY0MTlkNmE5MGUxMTgwNjRiMDdmNjgwMzFmMDMzOGUyNGZjMTIucG5n/auto/auto/85/notrim/d7a25ab6147067a3f83e410138152aaa.png",
      rarity: "ancient",
      price: 200,
    },
  },
  {
    win: true,
    percent: 25.0,
    fromSkin: {
      _id: "5",
      marketName: "Glock-18 | Water Elemental",
      weaponName: "Glock-18",
      shortName: "Water Elemental",
      itemImage:
        "https://cdn.csgoskins.gg/public/uih/items/aHR0cHM6Ly9jZG4uY3Nnb3NraW5zLmdnL3B1YmxpYy9pbWFnZXMvYnVja2V0cy9lY29uL2RlZmF1bHRfZ2VuZXJhdGVkL3dlYXBvbl9rbmlmZV9rdWtyaV9hYV9mYWRlX2xpZ2h0LjUyOWY0MTlkNmE5MGUxMTgwNjRiMDdmNjgwMzFmMDMzOGUyNGZjMTIucG5n/auto/auto/85/notrim/d7a25ab6147067a3f83e410138152aaa.png",
      rarity: "ancient",
      price: 25,
    },
    toSkin: {
      _id: "6",
      marketName: "Desert Eagle | Blaze",
      weaponName: "Desert Eagle",
      shortName: "Blaze",
      itemImage:
        "https://cdn.csgoskins.gg/public/uih/items/aHR0cHM6Ly9jZG4uY3Nnb3NraW5zLmdnL3B1YmxpYy9pbWFnZXMvYnVja2V0cy9lY29uL2RlZmF1bHRfZ2VuZXJhdGVkL3dlYXBvbl9rbmlmZV9rdWtyaV9hYV9mYWRlX2xpZ2h0LjUyOWY0MTlkNmE5MGUxMTgwNjRiMDdmNjgwMzFmMDMzOGUyNGZjMTIucG5n/auto/auto/85/notrim/d7a25ab6147067a3f83e410138152aaa.png",
      rarity: "ancient",
      price: 200,
    },
  },
  {
    win: true,
    percent: 25.0,
    fromSkin: {
      _id: "5",
      marketName: "Glock-18 | Water Elemental",
      weaponName: "Glock-18",
      shortName: "Water Elemental",
      itemImage:
        "https://cdn.csgoskins.gg/public/uih/items/aHR0cHM6Ly9jZG4uY3Nnb3NraW5zLmdnL3B1YmxpYy9pbWFnZXMvYnVja2V0cy9lY29uL2RlZmF1bHRfZ2VuZXJhdGVkL3dlYXBvbl9rbmlmZV9rdWtyaV9hYV9mYWRlX2xpZ2h0LjUyOWY0MTlkNmE5MGUxMTgwNjRiMDdmNjgwMzFmMDMzOGUyNGZjMTIucG5n/auto/auto/85/notrim/d7a25ab6147067a3f83e410138152aaa.png",
      rarity: "ancient",
      price: 25,
    },
    toSkin: {
      _id: "6",
      marketName: "Desert Eagle | Blaze",
      weaponName: "Desert Eagle",
      shortName: "Blaze",
      itemImage:
        "https://cdn.csgoskins.gg/public/uih/items/aHR0cHM6Ly9jZG4uY3Nnb3NraW5zLmdnL3B1YmxpYy9pbWFnZXMvYnVja2V0cy9lY29uL2RlZmF1bHRfZ2VuZXJhdGVkL3dlYXBvbl9rbmlmZV9rdWtyaV9hYV9mYWRlX2xpZ2h0LjUyOWY0MTlkNmE5MGUxMTgwNjRiMDdmNjgwMzFmMDMzOGUyNGZjMTIucG5n/auto/auto/85/notrim/d7a25ab6147067a3f83e410138152aaa.png",
      rarity: "ancient",
      price: 200,
    },
  },
  {
    win: true,
    percent: 25.0,
    fromSkin: {
      _id: "5",
      marketName: "Glock-18 | Water Elemental",
      weaponName: "Glock-18",
      shortName: "Water Elemental",
      itemImage:
        "https://cdn.csgoskins.gg/public/uih/items/aHR0cHM6Ly9jZG4uY3Nnb3NraW5zLmdnL3B1YmxpYy9pbWFnZXMvYnVja2V0cy9lY29uL2RlZmF1bHRfZ2VuZXJhdGVkL3dlYXBvbl9rbmlmZV9rdWtyaV9hYV9mYWRlX2xpZ2h0LjUyOWY0MTlkNmE5MGUxMTgwNjRiMDdmNjgwMzFmMDMzOGUyNGZjMTIucG5n/auto/auto/85/notrim/d7a25ab6147067a3f83e410138152aaa.png",
      rarity: "ancient",
      price: 25,
    },
    toSkin: {
      _id: "6",
      marketName: "Desert Eagle | Blaze",
      weaponName: "Desert Eagle",
      shortName: "Blaze",
      itemImage:
        "https://cdn.csgoskins.gg/public/uih/items/aHR0cHM6Ly9jZG4uY3Nnb3NraW5zLmdnL3B1YmxpYy9pbWFnZXMvYnVja2V0cy9lY29uL2RlZmF1bHRfZ2VuZXJhdGVkL3dlYXBvbl9rbmlmZV9rdWtyaV9hYV9mYWRlX2xpZ2h0LjUyOWY0MTlkNmE5MGUxMTgwNjRiMDdmNjgwMzFmMDMzOGUyNGZjMTIucG5n/auto/auto/85/notrim/d7a25ab6147067a3f83e410138152aaa.png",
      rarity: "ancient",
      price: 200,
    },
  },
  {
    win: true,
    percent: 25.0,
    fromSkin: {
      _id: "5",
      marketName: "Glock-18 | Water Elemental",
      weaponName: "Glock-18",
      shortName: "Water Elemental",
      itemImage:
        "https://cdn.csgoskins.gg/public/uih/items/aHR0cHM6Ly9jZG4uY3Nnb3NraW5zLmdnL3B1YmxpYy9pbWFnZXMvYnVja2V0cy9lY29uL2RlZmF1bHRfZ2VuZXJhdGVkL3dlYXBvbl9rbmlmZV9rdWtyaV9hYV9mYWRlX2xpZ2h0LjUyOWY0MTlkNmE5MGUxMTgwNjRiMDdmNjgwMzFmMDMzOGUyNGZjMTIucG5n/auto/auto/85/notrim/d7a25ab6147067a3f83e410138152aaa.png",
      rarity: "ancient",
      price: 25,
    },
    toSkin: {
      _id: "6",
      marketName: "Desert Eagle | Blaze",
      weaponName: "Desert Eagle",
      shortName: "Blaze",
      itemImage:
        "https://cdn.csgoskins.gg/public/uih/items/aHR0cHM6Ly9jZG4uY3Nnb3NraW5zLmdnL3B1YmxpYy9pbWFnZXMvYnVja2V0cy9lY29uL2RlZmF1bHRfZ2VuZXJhdGVkL3dlYXBvbl9rbmlmZV9rdWtyaV9hYV9mYWRlX2xpZ2h0LjUyOWY0MTlkNmE5MGUxMTgwNjRiMDdmNjgwMzFmMDMzOGUyNGZjMTIucG5n/auto/auto/85/notrim/d7a25ab6147067a3f83e410138152aaa.png",
      rarity: "ancient",
      price: 200,
    },
  },
  {
    win: true,
    percent: 25.0,
    fromSkin: {
      _id: "5",
      marketName: "Glock-18 | Water Elemental",
      weaponName: "Glock-18",
      shortName: "Water Elemental",
      itemImage:
        "https://cdn.csgoskins.gg/public/uih/items/aHR0cHM6Ly9jZG4uY3Nnb3NraW5zLmdnL3B1YmxpYy9pbWFnZXMvYnVja2V0cy9lY29uL2RlZmF1bHRfZ2VuZXJhdGVkL3dlYXBvbl9rbmlmZV9rdWtyaV9hYV9mYWRlX2xpZ2h0LjUyOWY0MTlkNmE5MGUxMTgwNjRiMDdmNjgwMzFmMDMzOGUyNGZjMTIucG5n/auto/auto/85/notrim/d7a25ab6147067a3f83e410138152aaa.png",
      rarity: "ancient",
      price: 25,
    },
    toSkin: {
      _id: "6",
      marketName: "Desert Eagle | Blaze",
      weaponName: "Desert Eagle",
      shortName: "Blaze",
      itemImage:
        "https://cdn.csgoskins.gg/public/uih/items/aHR0cHM6Ly9jZG4uY3Nnb3NraW5zLmdnL3B1YmxpYy9pbWFnZXMvYnVja2V0cy9lY29uL2RlZmF1bHRfZ2VuZXJhdGVkL3dlYXBvbl9rbmlmZV9rdWtyaV9hYV9mYWRlX2xpZ2h0LjUyOWY0MTlkNmE5MGUxMTgwNjRiMDdmNjgwMzFmMDMzOGUyNGZjMTIucG5n/auto/auto/85/notrim/d7a25ab6147067a3f83e410138152aaa.png",
      rarity: "ancient",
      price: 200,
    },
  },
  {
    win: false,
    percent: 5.8,
    fromSkin: {
      _id: "7",
      marketName: "AWP | Medusa",
      weaponName: "AWP",
      shortName: "Medusa",
      itemImage:
        "https://cdn.csgoskins.gg/public/uih/items/aHR0cHM6Ly9jZG4uY3Nnb3NraW5zLmdnL3B1YmxpYy9pbWFnZXMvYnVja2V0cy9lY29uL2RlZmF1bHRfZ2VuZXJhdGVkL3dlYXBvbl9rbmlmZV9rdWtyaV9hYV9mYWRlX2xpZ2h0LjUyOWY0MTlkNmE5MGUxMTgwNjRiMDdmNjgwMzFmMDMzOGUyNGZjMTIucG5n/auto/auto/85/notrim/d7a25ab6147067a3f83e410138152aaa.png",
      rarity: "ancient",
      price: 300,
    },
    toSkin: {
      _id: "8",
      marketName: "Karambit | Fade",
      weaponName: "Karambit",
      shortName: "Fade",
      itemImage:
        "https://cdn.csgoskins.gg/public/uih/items/aHR0cHM6Ly9jZG4uY3Nnb3NraW5zLmdnL3B1YmxpYy9pbWFnZXMvYnVja2V0cy9lY29uL2RlZmF1bHRfZ2VuZXJhdGVkL3dlYXBvbl9rbmlmZV9rdWtyaV9hYV9mYWRlX2xpZ2h0LjUyOWY0MTlkNmE5MGUxMTgwNjRiMDdmNjgwMzFmMDMzOGUyNGZjMTIucG5n/auto/auto/85/notrim/d7a25ab6147067a3f83e410138152aaa.png",
      rarity: "ancient",
      price: 800,
    },
  },
];
