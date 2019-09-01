import { FunctionComponent } from "react";
import styled, { StyledComponent } from "@emotion/styled";

import { Props } from "./types";

import { primary } from "../../style/color";
import { fonts } from "../../style/typography";

const Container: StyledComponent<Props, Props, {}> = styled.div`
  padding: 8px 12px;
  background: ${primary};
  color: #fff;
  border-radius: 20px;
  display: inline-block;
  vertical-align: top;

  font-family: ${fonts.primary};
  margin: 5px;
`;

const Chip: FunctionComponent<Props> = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};

export { Chip };
export default Chip;
