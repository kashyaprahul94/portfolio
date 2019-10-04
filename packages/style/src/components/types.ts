import { HTMLAttributes } from "react";

import { ITheme } from "../style/themes";

interface IThemeProps {
  theme?: {
    styles: ITheme;
  };
}

export interface IBaseProps extends HTMLAttributes<any>, IThemeProps {}

export type IPartialBaseProps<T> = Partial<T>;
