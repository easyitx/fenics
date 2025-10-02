import React from "react";
import { Typography } from "../Typography";
import { cn } from "@/shared/lib/utils";

export const Price = ({
  classname,
  value,
  сurrency = "$",
}: {
  classname?: string;
  value?: number;
  сurrency?: string;
}) => {
  return (
    <Typography className={cn(classname)} as="p">
      {сurrency} {value}
    </Typography>
  );
};
