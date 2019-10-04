import { IBaseProps, IPartialBaseProps } from "../types";

export interface Props extends IBaseProps {}

export type PartialProps = IPartialBaseProps<Props>;
