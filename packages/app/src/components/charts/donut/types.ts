import { IBaseProps, IPartialBaseProps } from "@components/types";

export interface Item {
  title: string;
  value: number;
  color: string;
}

export interface DonutItem extends Item {
  id: string;
  angle: number;
}

export interface Props extends IBaseProps {
  size: number;
  stroke: number;
  legend?: boolean;
  items: ReadonlyArray<Item>;
}

export interface SegmentProps extends IBaseProps {
  radius: number;
  normalizedRadius: number;
  stroke: number;
  color?: string;
  strokeDasharray?: number;
  strokeDashoffset?: number;
  angle?: number;
}

export type PartialProps = IPartialBaseProps<Props>;

export interface LegendItemProps extends PartialProps {
  background: string;
}
