import { FunctionComponent } from "react";
import styled, { StyledComponent } from "@emotion/styled";

import { Props } from "./types";

import dimension, { headerHeight, dimensions } from "../../style/dimension";

const Container: StyledComponent<Props, Props, {}> = styled.main`
  height: ${dimension.full};
  padding-top: ${props =>
    props.hasHeader && `calc(${headerHeight} + ${dimensions.xxl})`};
`;

const Main: FunctionComponent<Props> = ({ hasHeader, children, ...props }) => {
  return (
    <Container hasHeader={false} className="Main" {...props}>
      {children}
    </Container>
  );
};

export { Main };
export default Main;
