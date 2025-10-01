"use client";

import React from "react";
import Image from "next/image";
import { Typography } from "@/shared/ui/Typography";
import styles from "./ProfileCard.module.scss";
import { UnstyledButton, Button } from "@/shared/ui/Button";

interface ProfileCardProps {
  className?: string;
}

export function ProfileCard({ className }: ProfileCardProps) {
  return (
    <div className={`${styles.profileCard} ${className || ""}`}>
      <div className={styles.userNameContainer}>
        {/* Avatar */}
        <div className={styles.avatarContainer}>
          <Image
            src="/avatar.png"
            alt="User avatar"
            width={228}
            height={228}
            className={styles.avatar}
          />
        </div>
        {/* Username */}
        <Typography
          as="h2"
          size="h3"
          weight="bold"
          color="white"
          className={styles.username}
        >
          samuray
        </Typography>

        {/* Balance */}
        <Typography as="p" size="h4" weight="bold" className={styles.balance}>
          $3 239.24
        </Typography>

        {/* User ID */}
        <div className={styles.userId}>
          <UnstyledButton className="flex items-center gap-2">
            <Image
              src="/icons/copy.svg"
              alt="ID"
              width={16}
              height={16}
              className={styles.userIdIcon}
            />
            <Typography size="small" weight="semibold" color="black">
              ID: 245176
            </Typography>
          </UnstyledButton>
        </div>
      </div>

      {/* Withdrawal Info */}
      <div className={styles.withdrawalInfo}>
        <Typography
          size="small"
          color="scarlet"
          className={styles.withdrawalLabel}
        >
          Выведено:
        </Typography>
        <div className="flex items-center justify-center gap-2">
          <Image
            src="/icons/convert.svg"
            alt="Money"
            width={24}
            height={24}
            className={styles.moneyIcon}
          />
          <Typography size="small" weight="medium">
            <span className="text-white">58 предметов</span> на $25 000
          </Typography>
        </div>
      </div>

      {/* Social Links */}
      <div className={styles.socialLinks}>
        {/* Telegram */}
        <div className={styles.socialItem}>
          <div className="flex items-center justify-center gap-2 h-12">
            <Button className="w-fit h-full">
              <Image
                src="/icons/tg.svg"
                alt="Telegram"
                width={23}
                height={19}
                className={styles.socialIcon}
              />
            </Button>
            <Button className="w-2/3 flex flex-col items-center justify-center h-full">
              <Typography size="small" weight="semibold" color="white">
                TELEGRAM
              </Typography>
              <div className={styles.status}>
                <div className={styles.statusDot}></div>
                <Typography size="xs" color="white">
                  Активно
                </Typography>
              </div>
            </Button>
          </div>
        </div>

        {/* VK */}
        <div className={styles.socialItem}>
          <div className="flex items-center justify-center gap-2 h-12">
            <Button className="w-fit h-full" variant="surface">
              <Image
                src="/icons/vk.svg"
                alt="VK"
                width={23}
                height={23}
                className={styles.socialIcon}
              />
            </Button>
            <Button
              variant="surface"
              className="w-2/3 flex flex-col items-center justify-center h-full"
            >
              <Typography size="small" weight="semibold" color="white">
                VK
              </Typography>
              <div className={styles.status}>
                <div className={styles.statusDot}></div>
                <Typography size="xs" color="white">
                  Не активно
                </Typography>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
