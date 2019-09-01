import { IBaseProps, IPartialBaseProps } from "../types";

export interface Props extends IBaseProps {
  variant: "primary" | "secondary";
}

export type PartialProps = IPartialBaseProps<Props>;
