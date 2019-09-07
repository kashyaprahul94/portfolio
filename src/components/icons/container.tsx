import { FunctionComponent } from "react";
import styled, { StyledComponent } from "@emotion/styled";

import { display, border, alignment } from "../../style/layout";
import { dimensions } from "../../style/dimension";

import { Props, PartialProps } from "./types";

const Container: StyledComponent<PartialProps, PartialProps, {}> = styled.i`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  display: ${display.inlineBlock};
  vertical-align: ${alignment.middle};
  margin-right: ${dimensions.s};
`;

const IconContainer: FunctionComponent<Props> = ({ size, children }) => {
  return (
    <Container className="Icon" size={size}>
      {children}
    </Container>
  );
};

export { IconContainer };
export default IconContainer;
