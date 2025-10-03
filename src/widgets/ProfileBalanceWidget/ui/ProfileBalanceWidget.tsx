import { IUser } from "@/entities/user";
import { cn } from "@/shared/lib/utils";
import { Typography } from "@/shared/ui";
import Avatar from "@/shared/ui/Avatar/Avatar";
import { Price } from "@/shared/ui/Price/Price";
import React, { FC } from "react";

interface ProfileBalanceWidgetProps {
  user: IUser;
  classname?: string;
}

export const ProfileBalanceWidget: FC<ProfileBalanceWidgetProps> = ({
  user,
  classname,
}) => {
  return (
    <div
      className={cn(
        "flex justify-between cursor-pointer bg-background border border-primary items-center rounded-lg p-1  max-h-full",
        classname
      )}
      style={{
        backgroundImage:
          "radial-gradient(ellipse at 50% 100%, rgba(235, 43, 172, 0.15) 0%, transparent 70%)",
      }}
    >
      <div className="flex flex-col justify-center flex-grow px-5">
        <Typography className="text-white  text-sm" as="p" maxLength={10}>
          {user?.username}
        </Typography>
        <Price
          value={user.balance}
          classname="text-primary text-md font-bold"
        />
      </div>
      <Avatar
        username={user.username}
        avatar={user.avatar}
        className="rounded-lg h-[70%]"
      />
    </div>
  );
};
