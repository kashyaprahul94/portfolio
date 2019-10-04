import { IBaseProps, IPartialBaseProps } from "../types";

export interface Props extends IBaseProps {
  columns: number;
}

export type PartialProps = IPartialBaseProps<Props>;
