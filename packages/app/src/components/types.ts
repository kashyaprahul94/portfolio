import { HTMLAttributes } from "react";

interface IThemeProps {
  theme?: {
    styles: {
      colors: {
        textPrimary: string;
        textSecondary: string;
        backgroundPrimary: string;
        backgroundSecondary: string;
      };
    };
  };
}

export interface IBaseProps extends HTMLAttributes<any>, IThemeProps {}

export type IPartialBaseProps<T> = Partial<T>;
