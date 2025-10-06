"use client";

import React from "react";
import Image from "next/image";
import { Typography } from "@/shared/ui/Typography";
import styles from "./ProfileCard.module.scss";
import { UnstyledButton, Button } from "@/shared/ui/Button/ui/Button";

interface ProfileCardProps {
  className?: string;
}

export function ProfileCard({ className }: ProfileCardProps) {
  return (
    <div className={`${styles.profileCard} ${className || ""}`}>
      <div className={styles.userNameContainer}>
        <div className={styles.avatarContainer}>
          <Image
            src="/avatar.png"
            alt="User avatar"
            width={228}
            height={228}
            className={styles.avatar}
          />
        </div>
        <Typography
          as="h2"
          size="h3"
          weight="bold"
          color="white"
          className={styles.username}
        >
          samuray
        </Typography>

        <Typography as="p" size="h4" weight="bold" className={styles.balance}>
          $3 239.24
        </Typography>

        <div className={styles.userId}>
          <UnstyledButton>
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

      <div className={styles.withdrawalInfo}>
        <Typography
          color="scarlet"
          weight="semibold"
          className={styles.withdrawalLabel}
        >
          Выведено:
        </Typography>
        <div className={styles.withdrawalInfoContent}>
          <Image
            src="/icons/convert.svg"
            alt="Money"
            width={24}
            height={24}
            className={styles.moneyIcon}
          />
          <Typography size="small" weight="bold" color="primary">
            <span className={styles.withdrawalInfoText}>58 предметов на</span>{" "}
            $25 000
          </Typography>
        </div>
      </div>

      <div className={styles.socialLinks}>
        <div className={styles.socialItem}>
          <Button className="w-fit h-full">
            <Image
              src="/icons/tg.svg"
              alt="Telegram"
              width={23}
              height={19}
              className={styles.socialIcon}
            />
          </Button>
          <Button className={styles.socialButton}>
            <Typography size="small" weight="semibold" color="white">
              TELEGRAM
            </Typography>
            <div className={styles.status}>
              <Image
                src="/icons/active.svg"
                alt="Check"
                width={8}
                height={8}
                className={styles.statusIcon}
              />
              <Typography size="xs" color="white" weight="normal">
                Активно
              </Typography>
            </div>
          </Button>
        </div>

        <div className={styles.socialItem}>
          <Button className="w-fit h-full" variant="surface">
            <Image
              src="/icons/vk.svg"
              alt="VK"
              width={23}
              height={23}
              className={styles.socialIcon}
            />
          </Button>
          <Button variant="surface" className={styles.socialButton}>
            <Typography size="small" weight="semibold" color="white">
              VK
            </Typography>
            <div className={styles.status}>
              <Image
                src="/icons/notActive.svg"
                alt="Check"
                width={8}
                height={8}
                className={styles.statusIcon}
              />
              <Typography size="xs" color="scarlet" weight="normal">
                Не активно
              </Typography>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
}
