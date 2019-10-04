import { ColorVariantsType } from "../common/variants";

import { IBaseProps, IPartialBaseProps } from "../types";

export interface BaseProps extends IBaseProps {
  block?: boolean;
}

export interface VariantProps extends BaseProps {
  variant?: ColorVariantsType;
}

export type PartialProps = IPartialBaseProps<BaseProps>;
