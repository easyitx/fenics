export const textColors = [
  "primary",
  "secondary",
  "tertiary",
  "white",
  "black",
  "scarlet",
  "gray",
  "green",
  "red",
  "lightGray",
] as const;

export type TextColor = (typeof textColors)[number];
