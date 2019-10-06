import React, { FunctionComponent } from "react";

import { IconContainer } from "./container";
import { IconProps } from "./types";

const Location: FunctionComponent<IconProps> = ({ size, color }) => {
  return (
    <IconContainer size={size}>
      <svg height={size} width={size} viewBox={`0 0 24 24`}>
        <g fill={color}>
          <path d="M12,2C8.134,2,5,5.134,5,9c0,3.966,4.404,9.82,6.226,12.071c0.4,0.494,1.148,0.494,1.548,0C14.596,18.82,19,12.966,19,9 C19,5.134,15.866,2,12,2z M12,11.5c-1.381,0-2.5-1.119-2.5-2.5c0-1.381,1.119-2.5,2.5-2.5s2.5,1.119,2.5,2.5 C14.5,10.381,13.381,11.5,12,11.5z" />
        </g>
      </svg>
    </IconContainer>
  );
};

export { Location };
export default Location;
