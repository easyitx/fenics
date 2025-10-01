import React from "react";
import Image from "next/image";
import { Typography } from "@/shared/ui/Typography";
import { Button } from "@/shared/ui/Button";
import { SkinCard } from "@/entities/skin";
import { mockSkins } from "@/mocks/profile";
import styles from "../ui/SkinsTable.module.scss";

interface InventoryGridProps {
  hoveredItem: string | null;
  onItemHover: (itemId: string | null) => void;
  onItemAction: (action: "sell" | "withdraw", itemId: string) => void;
}

export const InventoryGrid: React.FC<InventoryGridProps> = ({
  hoveredItem,
  onItemHover,
  onItemAction,
}) => {
  return (
    <div className={styles.skinsGrid}>
      {mockSkins.map((skin) => (
        <div
          key={skin.id}
          className={styles.skinCardWrapper}
          onMouseEnter={() => onItemHover(skin.id)}
          onMouseLeave={() => onItemHover(null)}
        >
          <SkinCard />

          {/* Hover Actions */}
          {hoveredItem === skin.id && (
            <div className={styles.hoverActions}>
              <Button
                className={styles.actionButton}
                onClick={() => onItemAction("sell", skin.id)}
              >
                <Image
                  src="/icons/shopping.svg"
                  alt="Sell"
                  width={16}
                  height={16}
                />
                <Typography size="small" weight="semibold" color="white">
                  Продать
                </Typography>
              </Button>
              <Button
                className={styles.actionButton}
                variant="black"
                onClick={() => onItemAction("withdraw", skin.id)}
              >
                <Image
                  src="/icons/steam.svg"
                  alt="Steam"
                  width={16}
                  height={16}
                  className={styles.actionIcon}
                />
                <Typography size="small" weight="semibold" color="white">
                  Забрать
                </Typography>
              </Button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
