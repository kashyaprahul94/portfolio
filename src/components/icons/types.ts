import { IBaseProps, IPartialBaseProps } from "../types";

export interface Props extends IBaseProps {
  size: number;
}

export interface IconProps {
  size: number;
  color: string;
}

export type PartialProps = IPartialBaseProps<Props>;
