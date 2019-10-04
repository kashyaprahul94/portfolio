import { IBaseProps, IPartialBaseProps } from "../types";

export interface Props extends IBaseProps {
  hasHeader: boolean;
}

export type PartialProps = IPartialBaseProps<Props>;
