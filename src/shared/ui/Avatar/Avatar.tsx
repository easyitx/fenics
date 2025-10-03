import React from "react";
import Image from "next/image";
import { IUser } from "@/entities/user";
import fallback_avatar from "@/shared/assets/images/fallback_avatar/morty.webp";
interface AvatarProps extends Pick<IUser, "username" | "avatar"> {
  size?: number;
  className?: string;
}

const Avatar: React.FC<AvatarProps> = ({
  username,
  avatar,
  size = 50,
  className,
}) => {
  return (
    <Image
      src={avatar || fallback_avatar}
      alt={`${username}'s avatar`}
      width={size}
      height={size}
      className={`rounded-md h-full w-auto ${className}`}
    />
  );
};

export default Avatar;
