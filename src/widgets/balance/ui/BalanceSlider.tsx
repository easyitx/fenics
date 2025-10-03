"use client";

import React, { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { IBalanceSliderProps } from "@/entities/balance";
import styles from "./BalanceSlider.module.scss";

export const BalanceSlider: React.FC<IBalanceSliderProps> = ({
  balance,
  onValueChange,
  className,
}) => {
  const [selectedValue, setSelectedValue] = useState(balance.current);

  const handleValueChange = (value: number[]) => {
    const newValue = value[0];
    setSelectedValue(newValue);
    onValueChange(newValue);
  };

  return (
    <div className={`${styles.balanceSlider} ${className || ""}`}>
      <div className={styles.balanceHeader}>
        <span className={styles.balanceLabel}>Баланс</span>
        <span className={styles.balanceValue}>
          {selectedValue} {balance.currency} / {balance.total}{" "}
          {balance.currency}
        </span>
      </div>
      <div className={styles.sliderContainer}>
        <Slider
          value={[selectedValue]}
          onValueChange={handleValueChange}
          max={balance.total}
          min={0}
          step={1}
          className={styles.slider}
        />
      </div>
    </div>
  );
};
