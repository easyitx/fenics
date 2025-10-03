import React from "react";
import Image from "next/image";
import { Typography } from "@/shared/ui/Typography";
import styles from "../ui/SkinsTable.module.scss";

interface TabNavigationProps {
  activeTab: "inventory" | "upgrades";
  onTabChange: (tab: "inventory" | "upgrades") => void;
}

export const TabNavigation: React.FC<TabNavigationProps> = ({
  activeTab,
  onTabChange,
}) => {
  return (
    <div className={styles.tabs}>
      <button
        className={`${styles.tab} ${
          activeTab === "inventory" ? styles.active : ""
        } ${styles.leftButton}`}
        onClick={() => onTabChange("inventory")}
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
        } ${styles.rightButton}`}
        onClick={() => onTabChange("upgrades")}
      >
        <Image src="/icons/upgrade.svg" alt="Upgrades" width={24} height={24} />
        <Typography size="small" weight="semibold" color="white">
          Апгрейды
        </Typography>
      </button>
    </div>
  );
};
