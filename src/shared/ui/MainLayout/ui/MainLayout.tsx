import React, { ReactNode } from "react";
import { AppBackground } from "@/shared/ui/AppBackground";

type TLayoutItems = "header" | "footer" | "content" | "liveStream" | "banners";

interface ILayoutRenderProps extends Record<TLayoutItems, () => ReactNode> {}

interface ILayoutProps {
  renderProps: Partial<ILayoutRenderProps>;
}

export const MainLayout = ({
  renderProps: { banners, content, footer, header, liveStream },
}: ILayoutProps) => {
  return (
    <AppBackground>
      {header?.()}
      {liveStream?.()}
      {banners?.()}
      <main className="">{content?.()}</main>
      {footer?.()}
    </AppBackground>
  );
};
