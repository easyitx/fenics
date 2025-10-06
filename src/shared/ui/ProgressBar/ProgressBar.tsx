import React from "react";
import Image from "next/image";
import styles from "./ProgressBar.module.scss";

interface ProgressBarProps {
  totalSteps: number;
  completedSteps: number;
  iconSize?: number;
  className?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  totalSteps,
  completedSteps,
  iconSize = 44,
  className,
}) => {
  const progressPercentage = (completedSteps / totalSteps) * 100;

  return (
    <div className={`${styles.progressBar} ${className || ""}`}>
      <div className={styles.track}>
        <div
          className={styles.progress}
          style={{ width: `${progressPercentage}%` }}
        >
          <div className={styles.glow} />
        </div>
      </div>

      <div className={styles.steps}>
        {Array.from({ length: totalSteps }, (_, index) => {
          const isCompleted = index < completedSteps;

          return isCompleted ? (
            <Image
              src="/icons/verify.svg"
              alt="verify"
              width={iconSize}
              height={iconSize}
            />
          ) : (
            <Image
              src="/icons/lock.svg"
              alt="lock"
              width={iconSize}
              height={iconSize}
            />
          );
        })}
      </div>
    </div>
  );
};
