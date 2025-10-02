import React, { ReactNode } from "react";
import { AppBackground } from "@/shared/ui/AppBackground";
import { MobileNavigationContainer } from "@/shared/ui/MobileNavigationContainer";

type TLayoutItems =
  | "header"
  | "footer"
  | "content"
  | "liveStream"
  | "banners"
  | "mobileNavigation";

interface ILayoutRenderProps extends Record<TLayoutItems, () => ReactNode> {}

interface ILayoutProps {
  renderProps: Partial<ILayoutRenderProps>;
}

export const MainLayout = ({
  renderProps: {
    banners,
    content,
    footer,
    header,
    liveStream,
    mobileNavigation,
  },
}: ILayoutProps) => {
  return (
    <div className="pt-10">
      {header?.()}
      {liveStream?.()}
      {banners?.()}
      <main className="">{content?.()}</main>
      {footer?.()}
      {mobileNavigation?.()}
    </div>
  );
};
