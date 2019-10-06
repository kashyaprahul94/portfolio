import React, { FunctionComponent } from "react";

import { IconContainer } from "./container";
import { IconProps } from "./types";

const Mobile: FunctionComponent<IconProps> = ({ size, color }) => {
  return (
    <IconContainer size={size}>
      <svg height={size} width={size} viewBox={`0 0 24 24`}>
        <g fill={color}>
          <path d="M17,1H7C5.895,1,5,1.895,5,3v18c0,1.105,0.895,2,2,2h10c1.105,0,2-0.895,2-2V3C19,1.895,18.105,1,17,1z M13.5,21h-3 c-0.276,0-0.5-0.224-0.5-0.5l0,0c0-0.276,0.224-0.5,0.5-0.5h3c0.276,0,0.5,0.224,0.5,0.5l0,0C14,20.776,13.776,21,13.5,21z M16.333,18H7.667C7.298,18,7,17.702,7,17.333V4.667C7,4.298,7.298,4,7.667,4h8.667C16.702,4,17,4.298,17,4.667v12.667 C17,17.702,16.702,18,16.333,18z" />
        </g>
      </svg>
    </IconContainer>
  );
};

export { Mobile };
export default Mobile;
