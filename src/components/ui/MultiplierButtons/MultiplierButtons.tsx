import React, { useState, useRef, useEffect } from "react";
import styles from "./MultiplierButtons.module.scss";
import { Typography } from "@/shared/ui/Typography";
import Image from "next/image";
import { Button } from "@/shared/ui/Button";

interface MultiplierButtonsProps {
  activeMultiplier: number;
  onMultiplierChange: (multiplier: number) => void;
}

const multipliers = [1.2, 1.5, 2, 5, 10];

export const MultiplierButtons: React.FC<MultiplierButtonsProps> = ({
  activeMultiplier,
  onMultiplierChange,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleMultiplierSelect = (multiplier: number) => {
    onMultiplierChange(multiplier);
    setIsDropdownOpen(false);
  };

  return (
    <div className={styles.multiplierContainer}>
      {/* Desktop version */}
      <div className={styles.desktopVersion}>
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

      <div className={styles.mobileVersion} ref={dropdownRef}>
        <Button
          className={styles.mobileDropdownButton}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <Typography size="base" weight="semibold" color="white">
            x{activeMultiplier}
          </Typography>
          <Image
            src="/upgrades/arrow.svg"
            alt="Dropdown"
            width={16}
            height={16}
            className={`${styles.chevronIcon} ${
              isDropdownOpen ? styles.rotated : ""
            }`}
          />
        </Button>

        {isDropdownOpen && (
          <div className={styles.dropdownMenu}>
            {multipliers.map((multiplier) => (
              <button
                key={multiplier}
                className={`${styles.dropdownItem} ${
                  activeMultiplier === multiplier ? styles.active : ""
                }`}
                onClick={() => handleMultiplierSelect(multiplier)}
              >
                <Typography
                  size="sm"
                  weight="semibold"
                  color={
                    activeMultiplier === multiplier ? "white" : "secondary"
                  }
                >
                  x{multiplier}
                </Typography>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
