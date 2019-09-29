import { IBaseProps, IPartialBaseProps } from "@components/types";

export interface Props extends IBaseProps {
  columns: number;
}

export type PartialProps = IPartialBaseProps<Props>;
