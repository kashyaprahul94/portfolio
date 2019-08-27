import { HTMLAttributes } from "react";

export interface Props extends HTMLAttributes<any> {}

export interface ScrollSpiedHeaderProps extends Props {
  offCanvas: boolean;
}
