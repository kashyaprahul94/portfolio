import { IBaseProps, IPartialBaseProps } from "../types";

export interface Props extends IBaseProps {
  padding?: boolean;
  transparent?: boolean;
  title?: string;
}

export type PartialProps = IPartialBaseProps<Props>;
