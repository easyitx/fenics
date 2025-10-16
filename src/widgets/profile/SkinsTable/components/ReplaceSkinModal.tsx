import React, { useState } from "react";
import Image from "next/image";
import { Modal } from "@/shared/ui";
import { Typography } from "@/shared/ui/Typography";
import { Button } from "@/shared/ui/Button/ui/Button";
import { SkinCard } from "@/entities/skin";
import { mockSkins } from "@/mocks/profile";
import { SkinData } from "@/mocks/cases";
import styles from "./ReplaceSkinModal.module.scss";

interface ReplaceSkinModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedSkin: SkinData | null;
  onReplace: (replacementSkin: SkinData) => void;
}

export const ReplaceSkinModal: React.FC<ReplaceSkinModalProps> = ({
  isOpen,
  onClose,
  selectedSkin,
  onReplace,
}) => {
  const [selectedReplacement, setSelectedReplacement] = useState<string | null>(
    null
  );

  const availableSkins = mockSkins.filter(
    (skin) => skin.id !== selectedSkin?.id
  );

  const handleSkinSelect = (skinId: string) => {
    setSelectedReplacement(skinId);
  };

  const handleReplace = () => {
    if (selectedReplacement) {
      const replacementSkin = availableSkins.find(
        (skin) => skin.id === selectedReplacement
      );
      if (replacementSkin) {
        onReplace(replacementSkin);
        setSelectedReplacement(null);
        onClose();
      }
    }
  };

  const handleClose = () => {
    setSelectedReplacement(null);
    onClose();
  };

  if (!selectedSkin) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title="Выберите скин на замену"
      size="large"
      className={styles.modal}
    >
      <div className={styles.modalContent}>
        <div className={styles.balanceInfo}>
          <Typography size="lg" weight="semibold" color="primary">
            + $2 на баланс
          </Typography>
        </div>

        <div className={styles.skinsGrid}>
          {availableSkins.map((skin) => (
            <div
              key={skin.id}
              className={`${styles.skinCardWrapper} ${
                selectedReplacement === skin.id ? styles.selected : ""
              }`}
              onClick={() => handleSkinSelect(skin.id)}
            >
              <SkinCard skin={skin} withPrice={true} withState={false} />

              {selectedReplacement !== skin.id && (
                <div className={styles.hoverActions}>
                  <div className={styles.plusIcon}>
                    <Image
                      src="/icons/addSkin.svg"
                      alt="addSkin"
                      width={40}
                      height={40}
                    />
                  </div>
                </div>
              )}

              {selectedReplacement === skin.id && (
                <div className={styles.selectedOverlay}>
                  <Image
                    src="/icons/addedSkin.svg"
                    alt="addedSkin"
                    width={40}
                    height={40}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className={styles.replaceInfo}>
          <div className={styles.currentSkin}>
            <Typography size="small" weight="medium" color="white">
              <span
                style={{
                  color: "var(--color-text-primary)",
                  fontWeight: "var(--font-weight-extrabold)",
                  fontSize: "var(--font-size-lg)",
                }}
              >
                {" | "}
              </span>
              <span style={{ color: "var(--color-text-secondary)" }}>
                {selectedSkin.weaponName} |{" "}
              </span>
              {selectedSkin.marketName} —{" "}
              <span style={{ color: "var(--color-text-primary)" }}>
                ${selectedSkin.price}
              </span>
            </Typography>
          </div>

          <div className={styles.swapButton}>
            <Button
              variant="primary"
              className={styles.swapIconButton}
              size="large"
            >
              <Image
                src="/icons/replace.svg"
                alt="swapIcon"
                width={28}
                height={28}
                className={styles.swapIcon}
              />
            </Button>
          </div>

          <div className={styles.replacementSkin}>
            <Typography size="small" weight="medium" color="white">
              {selectedReplacement ? (
                <>
                  <span
                    style={{
                      color: "var(--color-text-primary)",
                      fontWeight: "var(--font-weight-extrabold)",
                      fontSize: "var(--font-size-lg)",
                    }}
                  >
                    {" | "}
                  </span>
                  <span className={styles.weaponName}>
                    {
                      availableSkins.find((s) => s.id === selectedReplacement)
                        ?.weaponName
                    }
                    {" | "}
                  </span>
                  <span>
                    {
                      availableSkins.find((s) => s.id === selectedReplacement)
                        ?.marketName
                    }{" "}
                    —
                  </span>
                  <span style={{ color: "var(--color-text-primary)" }}>
                    {" "}
                    $
                    {
                      availableSkins.find((s) => s.id === selectedReplacement)
                        ?.price
                    }
                  </span>
                </>
              ) : (
                "Выберите скин для замены"
              )}
            </Typography>
          </div>
        </div>

        <div className={styles.actionButtons}>
          <Button
            variant="primary"
            className={styles.replaceButton}
            onClick={handleReplace}
            disabled={!selectedReplacement}
          >
            <Typography size="body" weight="semibold" color="black">
              Заменить
            </Typography>
          </Button>

          <Button
            variant="outline"
            className={styles.cancelButton}
            onClick={handleClose}
          >
            <Typography size="body" weight="semibold" color="white">
              Отмена
            </Typography>
          </Button>
        </div>
      </div>
    </Modal>
  );
};
