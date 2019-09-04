import { IBaseProps, IPartialBaseProps } from "../types";

export interface SheetProps extends IBaseProps {
  printMode?: boolean;
  hidden?: boolean;
}

export interface TimelineProps extends IBaseProps {
  color?: string;
  logoSize?: string;
}

export interface TimelineItemProps extends IPartialBaseProps<any> {
  company: string;
  logo: string;
  showLogo?: boolean;
}
