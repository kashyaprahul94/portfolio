import { AppProps } from "next/app";

interface ComponentProps {
  title?: string;
  showHeader?: boolean;
}

export type IComponent = AppProps["Component"] & ComponentProps;
