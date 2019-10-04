import { FunctionComponent } from "react";
import styled, { StyledComponent } from "@emotion/styled";

import { display, layout } from "../../style/layout";
import { dimensions } from "../../style/dimension";

import { Props, PartialProps } from "./types";

const Container: StyledComponent<PartialProps, PartialProps, {}> = styled.div`
  width: ${dimensions.full};

  display: ${display.grid};
  grid-template-columns: repeat(${props => props.columns}, 1fr);

  ${layout.belowM(`
    display: ${display.block};
  `)}
`;

const ResponsiveGrid: FunctionComponent<Props> = ({
  columns,
  children,
  ...props
}) => {
  return (
    <Container {...props} columns={columns} className="ResponsiveGrid">
      {children}
    </Container>
  );
};

export { ResponsiveGrid };
export default ResponsiveGrid;
