"use client";
import { Input } from "@/shared/ui";
import React, { useState } from "react";

export const PromoInput = () => {
  const [promoCode, setPromoCode] = useState("");

  return (
    <Input
      variant="promo"
      leftIcon="gift"
      placeholder="Введите промокод:"
      className="flex-1 bold text-text-secondary border-none rounded-md"
      rightIcon="promo"
      value={promoCode}
      onChange={setPromoCode}
    />
  );
};
