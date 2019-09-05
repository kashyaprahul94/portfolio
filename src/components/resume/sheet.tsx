import { FunctionComponent } from "react";
import styled, { StyledComponent } from "@emotion/styled";

import { white, lightGrey } from "../../style/color";
import { dimensions } from "../../style/dimension";

import { SheetProps } from "./types";

const Container: StyledComponent<SheetProps, SheetProps, {}> = styled.section`
  margin: ${props => (props.printMode ? 0 : 10)}px auto;
  background-color: ${white};
  padding: 10px;

  width: ${dimensions.full};
  min-height: ${props =>
    props.printMode ? dimensions.a4.sclaedHeight : dimensions.full};

  max-width: ${dimensions.a4.width};
  max-height: ${dimensions.a4.height};

  background-image: url("/static/images/back.png");
  background-size: contain;
  background-repeat: no-repeat;

  box-shadow: ${props =>
    props.printMode ? undefined : `0 0 10px 0 ${lightGrey}`};
`;

const Sheet: FunctionComponent<SheetProps> = ({
  printMode,
  hidden,
  children,
}) => {
  return (
    !hidden && (
      <Container printMode={printMode} hidden={hidden}>
        {children}
      </Container>
    )
  );
};

export default Sheet;
export { Sheet };
