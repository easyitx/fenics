export interface TypographyVariant {
  fontSize: string;
  fontWeight: number;
  lineHeight: string;
  letterSpacing: string;
}

export interface TypographyTheme {
  h1: TypographyVariant;
  h2: TypographyVariant;
  h3: TypographyVariant;
  h4: TypographyVariant;
  h5: TypographyVariant;
  h6: TypographyVariant;
  body: TypographyVariant;
  caption: TypographyVariant;
  small: TypographyVariant;
}

export type TypographySize =
  | "xs"
  | "sm"
  | "base"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl"
  | "6xl";
export type TypographyWeight =
  | "light"
  | "normal"
  | "bold"
  | "extrabold"
  | "black";
export type TypographyColor = "primary" | "secondary" | "tertiary" | "white";
export type TypographyAlign = "left" | "center" | "right" | "justify";
export type TypographyLineHeight =
  | "tight"
  | "snug"
  | "normal"
  | "relaxed"
  | "loose";
export type TypographyLetterSpacing =
  | "tighter"
  | "tight"
  | "normal"
  | "wide"
  | "wider"
  | "widest";
