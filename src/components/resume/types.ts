import { IBaseProps, IPartialBaseProps } from "../types";

export interface SheetProps extends IBaseProps {
  printMode?: boolean;
  hidden?: boolean;
}

export interface VerticalTimelineProps extends IBaseProps {
  color?: string;
}

export interface VerticalTimelineItemProps extends IPartialBaseProps<any> {
  title: string;
  logo: string;
  showLogo?: boolean;
  logoSize?: string;
}

export interface TimelineProps extends IBaseProps {}

export interface TimelineItemProps extends IPartialBaseProps<any> {
  color: string;
  title: string;
  text?: string;
  subText?: string;
  icon: string;
  placement: "even" | "odd";
}
