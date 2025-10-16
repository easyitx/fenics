import React, { useState } from "react";
import Image from "next/image";
import { Typography } from "@/shared/ui/Typography";
import { Button } from "@/shared/ui/Button/ui/Button";
import { SkinCard } from "@/entities/skin";
import { mockSkins } from "@/mocks/profile";
import { SkinData } from "@/mocks/cases";
import { ReplaceSkinModal } from "./ReplaceSkinModal";
import { SellModal } from "./SellModal";
import styles from "../ui/SkinsTable.module.scss";

interface InventoryGridProps {
  onItemAction: (
    action: "sell" | "withdraw" | "replace",
    itemId: string,
    replacementId?: string
  ) => void;
}

export const InventoryGrid: React.FC<InventoryGridProps> = ({
  onItemAction,
}) => {
  const [isReplaceModalOpen, setIsReplaceModalOpen] = useState(false);
  const [selectedSkinForReplace, setSelectedSkinForReplace] =
    useState<SkinData | null>(null);
  const [isSellModalOpen, setIsSellModalOpen] = useState(false);
  const [selectedSkinForSell, setSelectedSkinForSell] =
    useState<SkinData | null>(null);

  const handleReplaceClick = (skin: SkinData) => {
    setSelectedSkinForReplace(skin);
    setIsReplaceModalOpen(true);
  };

  const handleReplaceModalClose = () => {
    setIsReplaceModalOpen(false);
    setSelectedSkinForReplace(null);
  };

  const handleReplace = (replacementSkin: SkinData) => {
    if (selectedSkinForReplace) {
      onItemAction("replace", selectedSkinForReplace.id, replacementSkin.id);
    }
  };

  const handleSellClick = (skin: SkinData) => {
    setSelectedSkinForSell(skin);
    setIsSellModalOpen(true);
  };

  const handleSellModalClose = () => {
    setIsSellModalOpen(false);
    setSelectedSkinForSell(null);
  };

  const handleSell = () => {
    if (selectedSkinForSell) {
      onItemAction("sell", selectedSkinForSell.id);
    }
  };

  return (
    <>
      <div className={styles.skinsGrid}>
        {mockSkins.map((skin) => (
          <div key={skin.id} className={styles.skinCardWrapper}>
            <SkinCard skin={skin} />
            {skin?.state === undefined && (
              <div className={styles.hoverActions}>
                <Button
                  className={styles.actionButton}
                  onClick={() => handleSellClick(skin)}
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

                <Button
                  className={styles.actionButton}
                  variant="outline"
                  style={{ background: "white" }}
                  onClick={() => handleReplaceClick(skin)}
                >
                  <Image
                    src="/icons/change.svg"
                    alt="Replace"
                    width={16}
                    height={16}
                  />
                  <Typography size="small" weight="semibold" color="primary">
                    Заменить
                  </Typography>
                </Button>
              </div>
            )}
          </div>
        ))}
      </div>

      <ReplaceSkinModal
        isOpen={isReplaceModalOpen}
        onClose={handleReplaceModalClose}
        selectedSkin={selectedSkinForReplace}
        onReplace={handleReplace}
      />

      <SellModal
        isOpen={isSellModalOpen}
        onClose={handleSellModalClose}
        onConfirm={handleSell}
        skin={selectedSkinForSell}
      />
    </>
  );
};
