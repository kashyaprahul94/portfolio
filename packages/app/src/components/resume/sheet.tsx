import { FunctionComponent } from "react";
import styled, { StyledComponent } from "@emotion/styled";

import {
  white,
  lightGrey,
} from "@kashyaprahul94/portfolio-style/lib/style/color";
import { dimensions } from "@kashyaprahul94/portfolio-style/lib/style/dimension";

import { SheetProps } from "./types";

const Container: StyledComponent<SheetProps, SheetProps, {}> = styled.section`
  margin: ${props => (props.printMode ? dimensions.zero : dimensions.l)}
    ${dimensions.auto};
  background-color: ${white};
  padding: ${dimensions.l};

  width: ${dimensions.full};
  min-height: ${dimensions.full};

  max-width: ${props =>
    props.printMode ? dimensions.a4.width : dimensions.wide};
  max-height: ${dimensions.full};

  background-image: url("/static/images/back.png");
  background-size: contain;
  background-repeat: no-repeat;

  box-shadow: ${props =>
    props.printMode
      ? undefined
      : `${dimensions.zero} ${dimensions.zero} ${dimensions.m} ${
          dimensions.zero
        } ${lightGrey}`};

  @media print {
    page-break-after: always;
  }
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
