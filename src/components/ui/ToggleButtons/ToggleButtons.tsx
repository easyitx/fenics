import React from "react";
import Image from "next/image";
import { Typography } from "@/shared/ui/Typography";
import styles from "./ToggleButtons.module.scss";

interface ToggleButtonsProps {
  activeTab: "skin" | "balance";
  onTabChange: (tab: "skin" | "balance") => void;
}

export const ToggleButtons: React.FC<ToggleButtonsProps> = ({
  activeTab,
  onTabChange,
}) => {
  return (
    <div className={styles.toggleContainer}>
      <button
        className={`${styles.toggleButton} ${
          activeTab === "skin" ? styles.active : ""
        } ${styles.leftButton}`}
        onClick={() => onTabChange("skin")}
      >
        <Image src="/icons/gun.svg" alt="Skin" width={30} height={30} />
        <Typography
          weight="semibold"
          color={activeTab === "skin" ? "white" : "secondary"}
        >
          Скин
        </Typography>
      </button>
      <button
        className={`${styles.toggleButton} ${
          activeTab === "balance" ? styles.active : ""
        } ${styles.rightButton}`}
        onClick={() => onTabChange("balance")}
      >
        <Image src="/icons/wallet.svg" alt="Balance" width={30} height={30} />
        <Typography
          weight="semibold"
          color={activeTab === "balance" ? "white" : "secondary"}
        >
          Баланс
        </Typography>
      </button>
    </div>
  );
};
