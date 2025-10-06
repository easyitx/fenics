"use client";

import React, { useState } from "react";
import styles from "./SkinsTable.module.scss";
import { FeaturedItem } from "@/widgets/profile/FeaturedItem";
import {
  TradeLinkSection,
  TabNavigation,
  ActionButtons,
  InventoryGrid,
  UpgradesPlaceholder,
} from "../components";
interface SkinsTableProps {
  className?: string;
}

export function SkinsTable({ className }: SkinsTableProps) {
  const [activeTab, setActiveTab] = useState<"inventory" | "upgrades">(
    "inventory"
  );
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
      <div className={styles.topBar}>
        <TradeLinkSection
          tradeLink={tradeLink}
          onTradeLinkChange={setTradeLink}
          onAddLink={handleAddLink}
        />
        <FeaturedItem />
      </div>

      <div className={styles.navigation}>
        <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
        <ActionButtons
          onSellAll={handleSellAll}
          inStockOnly={inStockOnly}
          onInStockToggle={setInStockOnly}
        />
      </div>

      {activeTab === "inventory" ? (
        <InventoryGrid onItemAction={handleItemAction} />
      ) : (
        <UpgradesPlaceholder />
      )}
    </div>
  );
}
