import { HTMLAttributes } from "react";

export interface IBaseProps extends HTMLAttributes<any> {}

export type IPartialBaseProps<T> = Partial<T>;
