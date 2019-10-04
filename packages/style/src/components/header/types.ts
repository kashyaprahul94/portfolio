import { IBaseProps, IPartialBaseProps } from "../types";

export interface Props extends IBaseProps {}

export interface ScrollSpiedHeaderProps extends Props {
  offCanvas: boolean;
}

export type PartialProps = IPartialBaseProps<Props>;
