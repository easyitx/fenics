"use client";

import { useState } from "react";
import styles from "./page.module.scss";
import { BalanceSlider } from "@/widgets/balance";
import { IBalance } from "@/entities/balance";
import { ToggleButtons } from "@/components/ui/ToggleButtons";
import { MultiplierButtons } from "@/components/ui/MultiplierButtons";
import { Typography } from "@/shared/ui/Typography";
import { user } from "@/mocks/profile";
import { Button } from "@/shared/ui/Button";

export default function Upgrades() {
  const [activeTab, setActiveTab] = useState<"skin" | "balance">("balance");
  const [activeMultiplier, setActiveMultiplier] = useState<number>(1.5);
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

  const handleTabChange = (tab: "skin" | "balance") => {
    setActiveTab(tab);
  };

  const handleMultiplierChange = (multiplier: number) => {
    setActiveMultiplier(multiplier);
  };

  return (
    <div className="min-h-screen" style={{ background: "rgba(15, 10, 13, 1)" }}>
      <div className={styles.container}>
        <div className={styles.usersItem}></div>
        <div className={styles.initial}></div>
        <div className={styles.upgradeItem}></div>
        <div className={styles.balanceSection}>
          <BalanceSlider
            balance={balance}
            onValueChange={handleBalanceChange}
            className={styles.balanceWidget}
          />
          <ToggleButtons activeTab={activeTab} onTabChange={handleTabChange} />
          <MultiplierButtons
            activeMultiplier={activeMultiplier}
            onMultiplierChange={handleMultiplierChange}
          />
        </div>
      </div>
      <div className={styles.gridContainer}>
        <div className={styles.gridItem}>
          <div className={styles.filters}>
            <Typography color="secondary" weight="semibold" size="xl">
              Ваш инвентарь
            </Typography>
          </div>
          <div className={styles.inventoryContainer}>
            {!user ? (
              <div className={styles.inventoryList}>123</div>
            ) : (
              <div className={styles.inventoryEmpty}>
                <Typography color="secondary" weight="semibold" size="xl">
                  Для доступа к апгрейдам необходима <br /> авторизация
                </Typography>
                <Button
                  variant="primary"
                  size="large"
                  style={{ width: "200px" }}
                >
                  Авторизация
                </Button>
              </div>
            )}
          </div>
        </div>
        <div className={styles.gridItem}>
          <div className={styles.filters}>
            <Typography color="secondary" weight="semibold" size="xl">
              Скины
            </Typography>
          </div>
          <div className={styles.inventoryContainer}>
            {!user ? (
              <div className={styles.inventoryList}>123</div>
            ) : (
              <div className={styles.inventoryEmpty}>
                <Typography color="secondary" weight="semibold" size="xl">
                  Для доступа к апгрейдам необходима <br /> авторизация
                </Typography>
                <Button
                  variant="primary"
                  size="large"
                  style={{ width: "200px" }}
                >
                  Авторизация
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
