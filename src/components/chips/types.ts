import { IBaseProps, IPartialBaseProps } from "../types";

export interface Props extends IBaseProps {
  variant: "primary" | "secondary" | "midnightblue";
}

export type PartialProps = IPartialBaseProps<Props>;
