import { ColorVariantsType } from "@components/common/variants";

import { IBaseProps, IPartialBaseProps } from "@components/types";

export interface BaseProps extends IBaseProps {
  block?: boolean;
  size?: string;
}

export interface VariantProps extends BaseProps {
  variant?: ColorVariantsType;
}

export type PartialProps = IPartialBaseProps<BaseProps>;
