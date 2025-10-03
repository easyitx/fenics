"use client";

import React, { createContext, useContext } from "react";
import { LngProvider } from "./lng-provider";
import { CookiesProvider } from "react-cookie";

export type AppContextState = {
  testState: boolean;
};

const AppContext = createContext<AppContextState | null>(null);

export type AppContextProviderProps = {
  children: React.ReactNode;
  lng: string;
};

export const AppProvider = ({ children, lng }: AppContextProviderProps) => {
  return (
    <AppContext.Provider value={{ testState: true }}>
      <CookiesProvider>
        <LngProvider lng={lng}>{children}</LngProvider>
      </CookiesProvider>
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppContextState => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("Please use Providers in parent component");
  }

  return context;
};
