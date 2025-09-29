import React from "react";
import type { Metadata } from "next";

import { proximaNova } from "@/shared/lib/fonts";
import { Banners, Footer, Header } from "@/widgets";
import { dir } from "i18next";
import "./globals.scss";
import "@/shared/styles/index.scss";
import { languages } from "@/app/i18n/settings";
import { AppProvider } from "@/app/providers/app-provider";

export const metadata: Metadata = {
  title: "Fenics.gg",
  description: "test",
};
export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}
export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lng: string }>;
}) {
  const { lng } = await params;
  return (
    <html lang={lng} dir={dir(lng)} className={proximaNova.variable}>
      <body>
        <AppProvider lng={lng}>
          <Header />
          <Banners />
          <main>{children}</main>
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
