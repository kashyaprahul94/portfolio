import { ColorVariantsType, SizeType } from "../common";

import { IBaseProps, IPartialBaseProps } from "../types";

export interface BaseProps extends IBaseProps {
  block?: boolean;
  size?: SizeType;
}

export interface VariantProps extends BaseProps {
  variant?: ColorVariantsType;
}

export type PartialProps = IPartialBaseProps<BaseProps>;
