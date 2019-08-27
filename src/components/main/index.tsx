import { FunctionComponent } from "react";
import styled, { StyledComponent } from "@emotion/styled";

import { Props } from "./types";

import { headerHeight, dimensions } from "../../style/dimension";

const _Main: StyledComponent<Props, Props, {}> = styled.main`
  min-height: 100%;
  padding-top: ${props =>
    props.hasHeader
      ? `calc(${headerHeight} + ${dimensions.xxl})`
      : dimensions.xxl};
`;

const Main: FunctionComponent<Props> = ({ hasHeader, children, ...props }) => {
  return (
    <_Main hasHeader={false} className="Main" {...props}>
      {children}
    </_Main>
  );
};

export { Main };
export default Main;
