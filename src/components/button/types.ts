import { IBaseProps, IPartialBaseProps } from "../types";

export interface BaseProps extends IBaseProps {
  block?: boolean;
  size?: string;
}

export interface VariantProps extends BaseProps {
  variant?: string;
}

export type PartialProps = IPartialBaseProps<BaseProps>;
