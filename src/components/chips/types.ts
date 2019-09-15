import { ColorVariantsType } from "@components/common/variants";

import { IBaseProps, IPartialBaseProps } from "@components/types";

export interface Props extends IBaseProps {
  variant: ColorVariantsType;
}

export type PartialProps = IPartialBaseProps<Props>;
