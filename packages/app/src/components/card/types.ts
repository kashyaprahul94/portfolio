import { IBaseProps, IPartialBaseProps } from "@components/types";

export interface Props extends IBaseProps {
  padding?: boolean;
  transparent?: boolean;
  title?: string;
}

export type PartialProps = IPartialBaseProps<Props>;
