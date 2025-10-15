import React from "react";
import Image from "next/image";
import styles from "./StatsCounters.module.scss";
import { Typography } from "@/shared/ui/Typography";

interface StatsCountersProps {
  className?: string;
}

export const StatsCounters: React.FC<StatsCountersProps> = ({ className }) => {
  const stats = [
    {
      id: "1",
      value: "2 531",
      label: "Онлайн",
      icon: "online",
    },
    {
      id: "2",
      value: "250",
      label: "Игроков",
      icon: "users",
    },
    {
      id: "3",
      value: "50 123",
      label: "Открыто кейсов",
      icon: "unlock",
    },
    {
      id: "4",
      value: "23 425",
      label: "Апгрейдов",
      icon: "share",
    },
  ];

  return (
    <div className={`${styles.statsCounters} ${className || ""}`}>
      {stats.map((stat) => {
        return (
          <div key={stat.id} className={styles.statItemContainer}>
            <div className={styles.statItem}>
              <Image
                src={`/icons/${stat.icon}.svg`}
                alt={stat.label}
                width={30}
                height={30}
                className={styles.statIcon}
              />

              <div className={styles.statValue}>
                <Typography
                  size="h6"
                  weight="bold"
                  className={styles.statValueText}
                >
                  {stat.value}
                </Typography>
              </div>
            </div>
            <div className={styles.statLabel}>
              <Typography
                size="h6"
                weight="bold"
                color="secondary"
                className={styles.statLabelText}
              >
                {stat.label}
              </Typography>
            </div>
          </div>
        );
      })}
    </div>
  );
};
