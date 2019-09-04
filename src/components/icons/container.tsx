import { FunctionComponent } from "react";
import styled, { StyledComponent } from "@emotion/styled";

import { Props, PartialProps } from "./types";

const Container: StyledComponent<PartialProps, PartialProps, {}> = styled.i`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  display: inline-block;
  vertical-align: middle;
  margin-right: 5px;
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
