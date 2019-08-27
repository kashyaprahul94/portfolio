import { HTMLAttributes } from "react";

export interface BaseProps extends HTMLAttributes<any> {
  block?: boolean;
  size?: string;
}

export interface VariantProps extends BaseProps {
  variant?: string;
}
