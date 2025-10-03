import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import "./index.scss";

import { proximaNova } from "@/shared/lib/fonts";
import { Banners, Footer, Header } from "@/widgets";
import { AppBackground } from "@/shared/ui/AppBackground";
import { dir } from "i18next";

import { languages } from "@/app/i18n/settings";
import { AppProvider } from "@/app/providers/app-provider";

import { LiveStream } from "@/widgets/live-stream";
import { MainLayout } from "@/shared/ui/MainLayout/";
import { MobileNavigation } from "@/widgets/MobileNavigation/MobileNavigation";
import { MobileNavigationContainer } from "@/shared/ui/MobileNavigationContainer";

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
          <AppBackground />
          <MainLayout
            renderProps={{
              header: () => <Header classname="app-container mx-auto px-5" />,
              liveStream: () => (
                <div className="app-container mx-auto py-[1rem] mt-2">
                  <LiveStream />
                </div>
              ),
              banners: () => <Banners classname="app-container mx-auto mt-2" />,
              content: () => (
                <div className="app-container mx-auto mt-16">{children}</div>
              ),
              footer: () => (
                <Footer classname="app-container mx-auto px-[2rem] mt-6" />
              ),
              mobileNavigation: () => (
                <MobileNavigationContainer>
                  <div className="pb-20">
                    <MobileNavigation />
                  </div>
                </MobileNavigationContainer>
              ),
            }}
          />
        </AppProvider>
      </body>
    </html>
  );
}
