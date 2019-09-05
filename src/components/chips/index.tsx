import { FunctionComponent } from "react";
import styled, { StyledComponent } from "@emotion/styled";

import * as colors from "../../style/color";
import { fonts } from "../../style/typography";

import { Props } from "./types";

const Container: StyledComponent<Props, Props, {}> = styled.div`
  padding: 8px 12px;
  background-color: ${props => colors[props.variant]};
  color: #fff;
  border-radius: 20px;
  display: inline-block;
  vertical-align: top;

  font-family: ${fonts.primary};
  margin: 5px;
  cursor: default;
`;

const Chip: FunctionComponent<Props> = ({ variant, children, ...props }) => {
  return (
    <Container variant={variant} {...props}>
      {children}
    </Container>
  );
};

export { Chip };
export default Chip;
