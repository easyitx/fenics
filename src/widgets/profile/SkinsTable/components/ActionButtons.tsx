import React from "react";
import Image from "next/image";
import { Typography } from "@/shared/ui/Typography";
import { Button } from "@/shared/ui/Button";
import styles from "../ui/SkinsTable.module.scss";

interface ActionButtonsProps {
  onSellAll: () => void;
  inStockOnly: boolean;
  onInStockToggle: (checked: boolean) => void;
}

export const ActionButtons: React.FC<ActionButtonsProps> = ({
  onSellAll,
  inStockOnly,
  onInStockToggle,
}) => {
  return (
    <div className={styles.actions}>
      <Button className={styles.sellAllButton} onClick={onSellAll}>
        <Image
          src="/icons/shopping.svg"
          alt="Sell all"
          width={24}
          height={24}
        />
        <Typography size="small" weight="semibold" color="white">
          Продать все
        </Typography>
      </Button>

      <Button
        variant="outline"
        className={styles.checkboxLabel}
        onClick={() => onInStockToggle(!inStockOnly)}
      >
        <Typography size="small" color="secondary">
          В наличии
        </Typography>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={(e) => onInStockToggle(e.target.checked)}
          className={styles.checkbox}
          readOnly
        />
        <span className={styles.checkmark}></span>
      </Button>
    </div>
  );
};
