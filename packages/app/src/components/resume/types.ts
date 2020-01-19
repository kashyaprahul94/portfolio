import { IBaseProps, IPartialBaseProps } from "@components/types";

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
  grayscaleLogo?: boolean;
}

export interface ILink {
  type?: "location" | "phone" | "email" | "http" | "skype";
  action?: "chat";
  link: string;
}
