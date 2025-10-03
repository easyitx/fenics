import React from "react";
import Image from "next/image";
import { Typography } from "@/shared/ui/Typography";
import { Button } from "@/shared/ui/Button";
import styles from "../ui/SkinsTable.module.scss";

export const UpgradesPlaceholder: React.FC = () => {
  return (
    <div className={styles.upgradesPlaceholder}>
      <div className={styles.placeholderContent}>
        <Image
          src="/icons/upgrade.svg"
          alt="Upgrades"
          width={64}
          height={64}
          className={styles.placeholderIcon}
        />
        <Typography size="xl" weight="semibold" color="white">
          Апгрейды
        </Typography>
        <Typography
          size="base"
          color="secondary"
          className={styles.placeholderDescription}
        >
          Функция апгрейдов будет доступна в ближайшее время
        </Typography>
      </div>
    </div>
  );
};
