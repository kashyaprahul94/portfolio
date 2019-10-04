export type SizeType =
  | "xs"
  | "s"
  | "m"
  | "l"
  | "xl"
  | "xxl"
  | "xxxl"
  | "jumbo"
  | "hero"
  | "default";

export const Sizes: ReadonlyArray<SizeType> = [
  "default",
  "xs",
  "s",
  "m",
  "l",
  "xl",
  "xxl",
  "xxxl",
  "jumbo",
  "hero",
];

export const DefaultSize = Sizes[0];
