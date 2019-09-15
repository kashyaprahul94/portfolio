import { IBaseProps, IPartialBaseProps } from "@components/types";

export interface Props extends IBaseProps {
  hasHeader: boolean;
}

export type PartialProps = IPartialBaseProps<Props>;
