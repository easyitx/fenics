export const textColors = [
  "primary",
  "secondary",
  "tertiary",
  "white",
  "black",
  "scarlet",
] as const;

export type TextColor = (typeof textColors)[number];
