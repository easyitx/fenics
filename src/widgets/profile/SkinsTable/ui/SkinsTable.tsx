"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Typography } from "@/shared/ui/Typography";
import { Button } from "@/shared/ui/Button";
import styles from "./SkinsTable.module.scss";
import { Input } from "@/components/ui/input";
import { FeaturedItem } from "@/widgets/profile/FeaturedItem";

interface SkinItem {
  id: string;
  name: string;
  price: string;
  image: string;
  isHighlighted?: boolean;
}

interface SkinsTableProps {
  className?: string;
}

const mockSkins: SkinItem[] = [
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
];

export function SkinsTable({ className }: SkinsTableProps) {
  const [activeTab, setActiveTab] = useState<"inventory" | "upgrades">(
    "inventory"
  );
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [tradeLink, setTradeLink] = useState("");
  const handleSellAll = () => {
    console.log("Sell all items");
  };

  const handleItemAction = (action: "sell" | "withdraw", itemId: string) => {
    console.log(`${action} item ${itemId}`);
  };

  const handleAddLink = () => {
    console.log("Add link");
  };

  return (
    <div className={`${styles.skinsTable} ${className || ""}`}>
      {/* Top Bar */}
      <div className={styles.topBar}>
        <div className={styles.tradeLinkSection}>
          <div className="flex w-full justify-between">
            <div className="flex items-center gap-2">
              <Image
                src="/icons/steam.svg"
                alt="Steam"
                width={24}
                height={24}
              />
              <Typography size="small" weight="semibold" color="secondary">
                Трейд - ссылка
              </Typography>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/icons/question.svg"
                alt="Help"
                width={24}
                height={24}
              />
              <Typography size="small" weight="semibold" color="primary">
                Где взять?
              </Typography>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Input
              type="text"
              placeholder="https://steamcommunity.com/tra..."
              value={tradeLink}
              onChange={(e) => setTradeLink(e.target.value)}
              className={styles.inputField}
            />
            <Button
              className="bg-primary rounded-md p-2"
              onClick={handleAddLink}
            >
              <Image
                src="/icons/addLink.svg"
                alt="Copy"
                width={24}
                height={24}
              />
            </Button>
          </div>
        </div>
        {/* Featured Item */}
        <FeaturedItem />
      </div>

      {/* Navigation and Actions */}
      <div className={styles.navigation}>
        <div className={styles.tabs}>
          <button
            className={`${styles.tab} ${
              activeTab === "inventory" ? styles.active : ""
            }`}
            onClick={() => setActiveTab("inventory")}
          >
            <Image
              src="/icons/equipment.svg"
              alt="Inventory"
              width={24}
              height={24}
            />
            <Typography size="small" weight="semibold" color="white">
              Инвентарь
            </Typography>
          </button>
          <button
            className={`${styles.tab} ${
              activeTab === "upgrades" ? styles.active : ""
            }`}
            onClick={() => setActiveTab("upgrades")}
          >
            <Image
              src="/icons/upgrade.svg"
              alt="Upgrades"
              width={24}
              height={24}
            />
            <Typography size="small" weight="semibold" color="white">
              Апгрейды
            </Typography>
          </button>
        </div>

        <div className={styles.actions}>
          <Button className={styles.sellAllButton} onClick={handleSellAll}>
            <Image
              src="/icons/shopping.svg"
              alt="Sell all"
              width={24}
              height={24}
            />
            <Typography size="small" weight="semibold" color="white">
              Продать все
            </Typography>
          </Button>

          <Button
            variant="outline"
            className={styles.checkboxLabel}
            onClick={() => setInStockOnly(!inStockOnly)}
          >
            <Typography size="small" color="secondary">
              В наличии
            </Typography>
            <input
              type="checkbox"
              checked={inStockOnly}
              onChange={(e) => setInStockOnly(e.target.checked)}
              className={styles.checkbox}
              readOnly
            />
            <span className={styles.checkmark}></span>
          </Button>
        </div>
      </div>

      {/* Skins Grid */}
      <div className={styles.skinsGrid}>
        {mockSkins.map((skin) => (
          <div
            key={skin.id}
            className={`${styles.skinCard} ${
              skin.isHighlighted ? styles.highlighted : ""
            }`}
            onMouseEnter={() => setHoveredItem(skin.id)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <div className={styles.skinImageContainer}>
              <Image
                src={skin.image}
                alt={skin.name}
                width={120}
                height={80}
                className={styles.skinImage}
              />
              <div className={styles.priceTag}>
                <Typography size="small" weight="bold">
                  {skin.price}
                </Typography>
              </div>
              {skin.isHighlighted && (
                <div className={styles.highlightIcon}>
                  <Image
                    src="/icons/magic-star.svg"
                    alt="Highlight"
                    width={16}
                    height={16}
                    className={styles.starIcon}
                  />
                </div>
              )}
            </div>
            <Typography
              size="small"
              weight="medium"
              className={styles.skinName}
            >
              {skin.name}
            </Typography>

            {/* Hover Actions */}
            {hoveredItem === skin.id && (
              <div className={styles.hoverActions}>
                <Button
                  className={styles.actionButton}
                  onClick={() => handleItemAction("sell", skin.id)}
                >
                  <Typography size="small" weight="medium">
                    Продать
                  </Typography>
                </Button>
                <Button
                  className={styles.actionButton}
                  onClick={() => handleItemAction("withdraw", skin.id)}
                >
                  <Typography size="small" weight="medium">
                    Забрать
                  </Typography>
                </Button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
