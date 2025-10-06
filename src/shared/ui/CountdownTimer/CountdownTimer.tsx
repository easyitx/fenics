"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import styles from "./CountdownTimer.module.scss";
import { Typography } from "@/shared/ui";

interface CountdownTimerProps {
  targetDate?: Date;
  className?: string;
  resetOnZero?: boolean;
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({
  targetDate,
  className,
  resetOnZero = true,
}) => {
  const defaultTargetDate = useMemo(() => {
    return new Date(
      Date.now() + 12 * 60 * 60 * 1000 + 42 * 60 * 1000 + 37 * 1000
    );
  }, []);

  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [currentTarget, setCurrentTarget] = useState(
    targetDate || defaultTargetDate
  );
  const hasResetRef = useRef(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const target = currentTarget.getTime();
      const difference = target - now;

      if (difference > 0) {
        const hours = Math.floor(difference / (1000 * 60 * 60));
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ hours, minutes, seconds });
        hasResetRef.current = false;
      } else {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });

        if (resetOnZero && !hasResetRef.current) {
          hasResetRef.current = true;
          const newTarget = new Date(
            Date.now() + 12 * 60 * 60 * 1000 + 42 * 60 * 1000 + 37 * 1000
          );
          setCurrentTarget(newTarget);
        }
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [currentTarget, resetOnZero]);

  useEffect(() => {
    if (targetDate && targetDate.getTime() !== currentTarget.getTime()) {
      setCurrentTarget(targetDate);
      hasResetRef.current = false;
    }
  }, [targetDate, currentTarget]);

  return (
    <div className={`${styles.countdown} ${className || ""}`}>
      <div className={styles.label}>
        <div>
          <Typography size="lg" weight="normal" color="secondary">
            До обнуления:
          </Typography>
        </div>
      </div>
      <div className={styles.timer}>
        <div className="flex flex-col items-center">
          <div className={styles.timeBlock}>
            <Typography
              className={styles.number}
              color="scarlet"
              size="2xl"
              weight="bold"
            >
              {timeLeft.hours.toString().padStart(2, "0")}
            </Typography>
          </div>
          <div className={styles.unit}>часов</div>
        </div>
        <div className="flex flex-col items-center">
          <div className={styles.timeBlock}>
            <Typography
              className={styles.number}
              color="scarlet"
              size="2xl"
              weight="bold"
            >
              {timeLeft.minutes.toString().padStart(2, "0")}
            </Typography>
          </div>
          <div className={styles.unit}>минут</div>
        </div>
        <div className="flex flex-col items-center">
          <div className={styles.timeBlock}>
            <Typography
              className={styles.number}
              color="scarlet"
              size="2xl"
              weight="bold"
            >
              {timeLeft.seconds.toString().padStart(2, "0")}
            </Typography>
          </div>
          <div className={styles.unit}>секунд</div>
        </div>
      </div>
    </div>
  );
};
