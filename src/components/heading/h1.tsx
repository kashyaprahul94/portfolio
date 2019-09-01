import { useContext, FunctionComponent } from "react";
import styled, { StyledComponent } from "@emotion/styled";

import { Props } from "./types";

import ThemeContext from "../../contexts/theme";

import typography from "../../style/typography";
import { dimensions } from "../../style/dimension";

const Container: StyledComponent<Props, Props, {}> = styled.h1`
  font-size: ${typography.sizes.hero};
  color: ${props => props.theme.styles.colors.textPrimary};

  margin-top: ${dimensions.s};
  margin-bottom: ${dimensions.m};
`;

const H1: FunctionComponent<Props> = ({ children, ...props }) => {
  const theme = useContext(ThemeContext);
  return (
    <Container {...props} theme={theme} className="Heading H1">
      {children}
    </Container>
  );
};

export { H1 };
export default H1;
