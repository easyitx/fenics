export const textColors = [
  "primary",
  "secondary",
  "tertiary",
  "white",
] as const;

export type TextColor = (typeof textColors)[number];
