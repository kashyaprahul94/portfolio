import { FunctionComponent } from "react";
import styled, { StyledComponent } from "@emotion/styled";

import { headerHeight, dimensions } from "@style/dimension";

import { Props } from "./types";

const Container: StyledComponent<Props, Props, {}> = styled.main`
  height: ${dimensions.full};
  padding-top: ${props =>
    props.hasHeader && `calc(${headerHeight} + ${dimensions.xxl})`};
`;

const Main: FunctionComponent<Props> = ({ hasHeader, children, ...props }) => {
  return (
    <Container hasHeader={hasHeader} className="Main" {...props}>
      {children}
    </Container>
  );
};

export { Main };
export default Main;
