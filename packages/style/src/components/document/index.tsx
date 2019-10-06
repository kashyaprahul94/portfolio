import React, { useContext, FunctionComponent } from "react";
import styled, { StyledComponent } from "@emotion/styled";

import ThemeContext from "../../contexts/theme";

import { dimensions } from "../../style/dimension";
import { durations, transition } from "../../style/animation";

import { Props } from "./types";

const Container: StyledComponent<Props, Props, {}> = styled.div`
  height: ${dimensions.full};

  color: ${props => props.theme.styles.colors.textPrimary};
  background-color: ${props => props.theme.styles.colors.backgroundPrimary};

  transition: ${transition({
    property: "background",
    duration: durations.medium,
  })};
`;

const Document: FunctionComponent<Props> = ({ children }) => {
  const theme = useContext(ThemeContext);
  return (
    <Container theme={theme} className="Document">
      {children}
    </Container>
  );
};

export { Document };
export default Document;
