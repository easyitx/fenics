import React from "react";
import Image from "next/image";
import { Typography } from "@/shared/ui/Typography";
import { Button } from "@/shared/ui/Button";
import { Input } from "@/components/ui/input";
import styles from "../ui/SkinsTable.module.scss";

interface TradeLinkSectionProps {
  tradeLink: string;
  onTradeLinkChange: (value: string) => void;
  onAddLink: () => void;
}

export const TradeLinkSection: React.FC<TradeLinkSectionProps> = ({
  tradeLink,
  onTradeLinkChange,
  onAddLink,
}) => {
  return (
    <div className={styles.tradeLinkSection}>
      <div className="flex w-full justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="/icons/steam.svg"
            alt="Steam"
            width={24}
            height={24}
            className={styles.topbarIcon}
          />
          <Typography size="small" weight="semibold" color="secondary">
            Трейд - ссылка
          </Typography>
        </div>
        <div className="flex items-center gap-2">
          <Image
            src="/icons/question.svg"
            alt="Help"
            width={24}
            height={24}
            className={styles.topbarIcon}
          />
          <Typography size="small" weight="semibold" color="primary">
            Где взять?
          </Typography>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Input
          type="text"
          placeholder="https://steamcommunity.com/tra..."
          value={tradeLink}
          onChange={(e) => onTradeLinkChange(e.target.value)}
          className={styles.inputField}
        />
        <Button className="bg-primary rounded-md p-2" onClick={onAddLink}>
          <Image src="/icons/addLink.svg" alt="Copy" width={24} height={24} />
        </Button>
      </div>
    </div>
  );
};
