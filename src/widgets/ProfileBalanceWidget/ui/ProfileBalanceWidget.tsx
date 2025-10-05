import Avatar from "@/shared/ui/Avatar/Avatar";
import React from "react";
import { IUser } from "@/entities/user";
import { Typography } from "@/shared/ui/Typography";
import styles from "./ProfileBalanceWidget.module.scss";

interface ProfileBalanceWidgetProps {
  user: IUser;
}

export const ProfileBalanceWidget = ({ user }: ProfileBalanceWidgetProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Typography>{user.balance?.current}</Typography>
        {user.username}
      </div>
      <Avatar username={user.username} className="max-h-full" />
    </div>
  );
};
