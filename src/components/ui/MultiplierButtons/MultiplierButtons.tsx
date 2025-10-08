import React from "react";
import styles from "./MultiplierButtons.module.scss";
import { Typography } from "@/shared/ui/Typography";

interface MultiplierButtonsProps {
  activeMultiplier: number;
  onMultiplierChange: (multiplier: number) => void;
}

const multipliers = [1.2, 1.5, 2, 5, 10];

export const MultiplierButtons: React.FC<MultiplierButtonsProps> = ({
  activeMultiplier,
  onMultiplierChange,
}) => {
  return (
    <div className={styles.multiplierContainer}>
      {multipliers.map((multiplier) => (
        <button
          key={multiplier}
          className={`${styles.multiplierButton} ${
            activeMultiplier === multiplier ? styles.active : ""
          }`}
          onClick={() => onMultiplierChange(multiplier)}
        >
          <Typography
            size="lg"
            weight="semibold"
            color={activeMultiplier === multiplier ? "white" : "secondary"}
          >
            x{multiplier}
          </Typography>
        </button>
      ))}
    </div>
  );
};
