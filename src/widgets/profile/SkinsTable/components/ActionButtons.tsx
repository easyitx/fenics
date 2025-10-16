import React, { useState } from "react";
import Image from "next/image";
import { Typography } from "@/shared/ui/Typography";
import { Button } from "@/shared/ui/Button/ui/Button";
import { SellAllModal } from "./SellAllModal";
import { mockSkins } from "@/mocks/profile";
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
  const [isSellModalOpen, setIsSellModalOpen] = useState(false);

  const handleSellAllClick = () => {
    setIsSellModalOpen(true);
  };

  const handleSellModalClose = () => {
    setIsSellModalOpen(false);
  };

  const handleConfirmSell = () => {
    onSellAll();
  };

  const filteredSkins = inStockOnly
    ? mockSkins.filter((skin) => skin.state === undefined)
    : mockSkins;

  const totalPrice = filteredSkins.reduce(
    (sum, skin) => sum + (skin.price || 0),
    0
  );
  const itemCount = filteredSkins.length;

  return (
    <>
      <div className={styles.actions}>
        <Button className={styles.sellAllButton} onClick={handleSellAllClick}>
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

      <SellAllModal
        isOpen={isSellModalOpen}
        onClose={handleSellModalClose}
        onConfirm={handleConfirmSell}
        itemCount={itemCount}
        totalPrice={totalPrice}
      />
    </>
  );
};
