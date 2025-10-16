import React from "react";
import { Modal } from "@/shared/ui/Modal";
import { Button } from "@/shared/ui/Button/ui/Button";
import { Typography } from "@/shared/ui/Typography";
import styles from "./SellAllModal.module.scss";

interface SellAllModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  itemCount: number;
  totalPrice: number;
}

export const SellAllModal: React.FC<SellAllModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  itemCount,
  totalPrice,
}) => {
  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="small"
      title="Подтвердите продажу"
      className={styles.modal}
    >
      <div className={styles.content}>
        <Typography
          size="body"
          color="secondary"
          lineHeight="tight"
          className={styles.description}
        >
          Вы уверены, что хотите продать {itemCount} предметов за $
          {totalPrice.toFixed(2)}?
        </Typography>

        <div className={styles.buttons}>
          <Button
            className={styles.sellButton}
            onClick={handleConfirm}
            size="medium"
          >
            <Typography size="body" weight="semibold" color="white">
              Продать все
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
