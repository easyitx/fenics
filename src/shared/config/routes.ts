export interface RouteConfig {
  name: string;
  path: string;
  icon: string;
  label: string;
}

export const routes: RouteConfig[] = [
  {
    name: "cases",
    path: "/cases",
    icon: "box",
    label: "Кейсы",
  },
  {
    name: "upgrades",
    path: "/upgrades",
    icon: "flash",
    label: "Улучшения",
  },
  {
    name: "bonuses",
    path: "/bonuses",
    icon: "magic-star",
    label: "Бонусы",
  },
  {
    name: "calendar",
    path: "/calendar",
    icon: "calendar",
    label: "Календарь",
  },
];

export const getRouteByPath = (path: string): RouteConfig | undefined => {
  return routes.find((route) => route.path === path);
};

export const getRouteByName = (name: string): RouteConfig | undefined => {
  return routes.find((route) => route.name === name);
};
