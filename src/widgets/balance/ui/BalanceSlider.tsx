"use client";

import React, { useState } from "react";
import { Slider } from "@/components/ui/slider/slider";
import { IBalanceSliderProps } from "@/entities/balance";
import styles from "./BalanceSlider.module.scss";
import { Typography } from "@/shared/ui/Typography";

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
        <Typography color="secondary" size="sm" weight="bold">
          Баланс
        </Typography>
        <Typography color="primary" size="sm" weight="bold">
          {selectedValue} {balance.currency} /{" "}
          <span style={{ color: "var(--color-text-white)" }}>
            {balance.total} {balance.currency}
          </span>
        </Typography>
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
