"use client";

import React, { createContext, useContext } from "react";
import { FontsProvider } from "./fonts-provider";

export type LngContextState = {
  lng: string;
};

const LngContext = createContext<LngContextState | null>(null);

export type LngContextProviderProps = {
  children: React.ReactNode;
  lng: string;
};

export const LngProvider = ({ children, lng }: LngContextProviderProps) => {
  return (
    <LngContext.Provider
      value={{
        lng,
      }}
    >
      <FontsProvider>{children}</FontsProvider>
    </LngContext.Provider>
  );
};

export const useLngContext = (): LngContextState => {
  const context = useContext(LngContext);

  if (!context) {
    throw new Error("Please use Providers in parent component");
  }

  return context;
};
