import Avatar from "@/shared/ui/Avatar/Avatar";
import React from "react";
import { IUser } from "@/entities/user";
import { Typography } from "@/shared/ui/Typography";
import styles from "./ProfileBalanceWidget.module.scss";
import Link from "next/link";

interface ProfileBalanceWidgetProps {
  user: IUser;
}

export const ProfileBalanceWidget = ({ user }: ProfileBalanceWidgetProps) => {
  return (
    <Link href="/profile">
      <div className={styles.container}>
        <div className={styles.content}>
          <Typography size="sm" color="white" weight="normal">
            {user.username}
          </Typography>

          <Typography weight="semibold">{user.balance?.current}</Typography>
        </div>
        <Avatar username={user.username} className="h-[50px] w-[50px]" />
      </div>
    </Link>
  );
};
