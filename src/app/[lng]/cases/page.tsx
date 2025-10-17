import Image from "next/image";
import styles from "./page.module.scss";
import { Typography } from "@/shared/ui/Typography";
import { cn } from "@/shared/lib/utils";

export default function Bonuses() {
  return (
    <div className={styles.bonusesContainer}>
      <div className={cn(styles.bonusCard, styles.tg)}></div>
      <div className={cn(styles.bonusCard, styles.vk)}></div>
    </div>
  );
}
