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

  const handleItemAction = (
    action: "sell" | "withdraw" | "replace",
    itemId: string,
    replacementId?: string
  ) => {
    console.log(
      `${action} item ${itemId}${
        replacementId ? ` with replacement ${replacementId}` : ""
      }`
    );
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
        <div className={styles.actionButtonsMobile}>
          <ActionButtons
            onSellAll={handleSellAll}
            inStockOnly={inStockOnly}
            onInStockToggle={setInStockOnly}
          />
        </div>
        <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
        <div className={styles.actionButtons}>
          <ActionButtons
            onSellAll={handleSellAll}
            inStockOnly={inStockOnly}
            onInStockToggle={setInStockOnly}
          />
        </div>
      </div>

      {activeTab === "inventory" ? (
        <InventoryGrid onItemAction={handleItemAction} />
      ) : (
        <UpgradesPlaceholder />
      )}
    </div>
  );
}
