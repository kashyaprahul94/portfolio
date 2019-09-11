import { FunctionComponent } from "react";

import { IconContainer } from "./container";
import { IconProps } from "./types";

const GraduationCap: FunctionComponent<IconProps> = ({ size, color }) => {
  return (
    <IconContainer size={size}>
      <svg height={size} width={size} viewBox={`0 0 30 30`}>
        <g fill={color}>
        <path d="M 15 3 A 1 1 0 0 0 14.527344 3.1191406 L 0.53710938 10.113281 L 0.53710938 10.115234 A 1 1 0 0 0 0 11 A 1 1 0 0 0 0.53710938 11.884766 L 0.53710938 11.886719 L 14.521484 18.876953 A 1 1 0 0 0 15 19 A 1 1 0 0 0 15.472656 18.880859 L 29.453125 11.890625 A 1 1 0 0 0 29.462891 11.886719 L 29.462891 11.884766 A 1 1 0 0 0 30 11 A 1 1 0 0 0 29.462891 10.115234 L 29.462891 10.113281 L 15.478516 3.1230469 A 1 1 0 0 0 15 3 z M 29 14.353516 L 27 15.353516 L 27 24.277344 C 26.404366 24.623613 26 25.261054 26 26 C 26 27.105 28 30 28 30 C 28 30 30 27.105 30 26 C 30 25.261054 29.595634 24.623613 29 24.277344 L 29 14.353516 z M 6 16.851562 L 6 21 C 6 23.761 10.029 26 15 26 C 19.971 26 24 23.761 24 21 L 24 16.851562 L 16.365234 20.669922 C 16.281234 20.711922 16.197328 20.746391 16.111328 20.775391 C 15.749328 20.924391 15.377 21 15 21 C 14.624 21 14.252578 20.924391 13.892578 20.775391 C 13.805578 20.746391 13.719766 20.710969 13.634766 20.667969 L 6 16.851562 z"></path>
        </g>
      </svg>
    </IconContainer>
  );
};

export { GraduationCap };
export default GraduationCap;