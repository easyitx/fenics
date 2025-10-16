import React from "react";
import { Typography } from "@/shared/ui/Typography";
import { SkinCard, SkinData } from "@/entities/skin/ui/SkinCard";
import styles from "./UpgradeItem.module.scss";
import Image from "next/image";
interface UpgradeItemProps {
  win: boolean;
  percent: number;
  fromSkin: SkinData;
  toSkin: SkinData;
}

export const UpgradeItem: React.FC<UpgradeItemProps> = ({
  win,
  percent,
  fromSkin,
  toSkin,
}) => {
  return (
    <div
      className={styles.upgradeItem}
      style={{
        border: win
          ? "0.5px solid var(--color-text-green)"
          : "0.5px solid var(--color-text-red)",
      }}
    >
      <div className={styles.upgradeHeader}>
        {win ? (
          <Typography size="xl" weight="bold" color="green">
            Выигрыш
          </Typography>
        ) : (
          <Typography size="xl" weight="bold" color="red">
            Проигрыш
          </Typography>
        )}

        <div
          className={`${styles.chanceBadge} ${win ? styles.win : styles.lose}`}
        >
          <Typography size="sm" weight="normal" color={win ? "green" : "red"}>
            Шанс - {percent}%
          </Typography>
        </div>
      </div>

      <div className={styles.skinsContainer}>
        <div className={styles.skinWrapper}>
          <SkinCard width={170} height={120} withPrice={true} skin={fromSkin} />
        </div>
        <div className={styles.skinWrapperMobile}>
          <SkinCard width={130} height={90} withPrice={true} skin={fromSkin} />
        </div>

        <div
          className={styles.arrowContainer}
          style={{
            background: win
              ? "var(--color-text-green)"
              : "var(--color-text-red)",
          }}
        >
          <Image
            src="/icons/toRight.svg"
            alt="Upgrade"
            width={18}
            height={18}
          />
        </div>

        <div className={styles.skinWrapper}>
          <SkinCard width={170} height={120} withPrice={true} skin={toSkin} />
        </div>
        <div className={styles.skinWrapperMobile}>
          <SkinCard width={130} height={90} withPrice={true} skin={fromSkin} />
        </div>
      </div>
    </div>
  );
};
