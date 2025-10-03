"use client";

import { useState } from "react";
import styles from "./page.module.scss";
import { BalanceSlider } from "@/widgets/balance";
import { IBalance } from "@/entities/balance";

export default function Upgrades() {
  const [balance, setBalance] = useState<IBalance>({
    current: 12,
    total: 24,
    currency: "$",
  });

  const handleBalanceChange = (newValue: number) => {
    setBalance((prev) => ({
      ...prev,
      current: newValue,
    }));
  };

  return (
    <div className="min-h-screen">
      <div className={styles.container}>
        <div className={styles.usersItem}></div>
        <div className={styles.initial}></div>
        <div className={styles.upgradeItem}></div>
      </div>
      <div className={styles.balanceSection}>
        <BalanceSlider
          balance={balance}
          onValueChange={handleBalanceChange}
          className={styles.balanceWidget}
        />
      </div>
    </div>
  );
}
