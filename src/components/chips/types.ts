import { ColorVariantsType } from "../common/variants";

import { IBaseProps, IPartialBaseProps } from "../types";

export interface Props extends IBaseProps {
  variant: ColorVariantsType;
}

export type PartialProps = IPartialBaseProps<Props>;
