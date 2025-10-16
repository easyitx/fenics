import React from "react";
import { Modal } from "@/shared/ui/Modal";
import { Button } from "@/shared/ui/Button/ui/Button";
import { Typography } from "@/shared/ui/Typography";
import { SkinCard } from "@/entities/skin";
import { SkinData } from "@/mocks/cases";
import styles from "./SellModal.module.scss";

interface SellModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  skin: SkinData | null;
}

export const SellModal: React.FC<SellModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  skin,
}) => {
  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  if (!skin) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="small"
      className={styles.modal}
      title="Подтвердите продажу"
    >
      <div className={styles.content}>
        <Typography
          size="body"
          color="secondary"
          className={styles.description}
          lineHeight="tight"
        >
          Вы уверены, что хотите продать {skin.weaponName} | {skin.marketName}{" "}
          за ${skin.price}?
        </Typography>

        <div className={styles.buttons}>
          <Button
            className={styles.sellButton}
            onClick={handleConfirm}
            size="medium"
          >
            <Typography size="body" weight="semibold" color="white">
              Продать
            </Typography>
          </Button>

          <Button
            variant="outline"
            className={styles.cancelButton}
            onClick={onClose}
            size="medium"
          >
            <Typography size="body" weight="medium" color="white">
              Отмена
            </Typography>
          </Button>
        </div>
      </div>
    </Modal>
  );
};
