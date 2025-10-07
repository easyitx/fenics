import React from "react";
import { UpgradeItem } from "@/widgets/profile/UpgradeItem";
import { upgradeItemsMock } from "@/mocks/upgrades";
import styles from "../ui/SkinsTable.module.scss";

export const UpgradesPlaceholder: React.FC = () => {
  return (
    <div className={styles.upgradesGrid}>
      {upgradeItemsMock.map((item, index) => (
        <div key={index} className={styles.upgradeItemWrapper}>
          <UpgradeItem
            win={item.win}
            percent={item.percent}
            fromSkin={item.fromSkin}
            toSkin={item.toSkin}
          />
        </div>
      ))}
    </div>
  );
};
