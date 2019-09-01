import { FunctionComponent } from "react";
import styled, { StyledComponent } from "@emotion/styled";

import { SheetProps } from "./types";

import color from "../../style/color";
import dimension, { dimensions } from "../../style/dimension";

const Container: StyledComponent<SheetProps, SheetProps, {}> = styled.section`
  margin: ${props => (props.printMode ? 0 : 10)}px auto;
  background-color: ${color.white};
  padding: 10px;

  width: ${dimension.full};
  min-height: ${dimension.full};

  max-width: ${dimensions.a4.width};
  // max-height: ${dimensions.a4.height};

  background-image: url("/static/images/back.png");
  background-size: contain;
  background-repeat: no-repeat;

  box-shadow: 0 0 10px 0 ${color.lightGrey};

  &:last-child {
    box-shadow: 0 -11px 10px 0 ${color.lightGrey};
  }
`;

const Sheet: FunctionComponent<SheetProps> = ({ printMode, children }) => {
  return <Container printMode={printMode}>{children}</Container>;
};

export default Sheet;
export { Sheet };
