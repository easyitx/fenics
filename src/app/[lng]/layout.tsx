import React from "react";
import type { Metadata } from "next";

import { proximaNova } from "@/shared/lib/fonts";
import { Footer, Header } from "@/widgets";
import { dir } from "i18next";
import "./globals.scss";
import "@/shared/styles/index.scss";
import { languages } from "@/app/i18n/settings";
import { AppProvider } from "@/app/providers/app-provider";

import { LiveStream } from "@/widgets/live-stream";
import { MainLayout } from "@/shared/ui/MainLayout/";
import { RemSystemProvider } from "@/shared/ui/RemSystemProvider";

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
    <html lang={lng} dir={dir(lng)} className={`${proximaNova.variable} dark`}>
      <body>
        <AppProvider lng={lng}>
          <MainLayout
            renderProps={{
              header: () => <Header classname="container" />,
              liveStream: () => <LiveStream />,
              content: () => (
                <div className="container mx-auto mt-[1rem]">{children}</div>
              ),
              footer: () => <Footer />,
            }}
          />
        </AppProvider>
      </body>
    </html>
  );
}
