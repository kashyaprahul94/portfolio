import { useContext, FunctionComponent } from "react";
import styled, { StyledComponent } from "@emotion/styled";

import { Props } from "./types";

import ThemeContext from "../../contexts/theme";

import typography from "../../style/typography";
import { dimensions } from "../../style/dimension";

const _H1: StyledComponent<Props, Props, {}> = styled.h1`
  font-size: ${typography.sizes.hero};
  font-family: ${typography.fonts.heading};
  color: ${props => props.theme.styles.colors.textPrimary};

  margin-top: ${dimensions.s};
  margin-bottom: ${dimensions.m};
`;

const H1: FunctionComponent<Props> = ({ children, ...props }) => {
  const theme = useContext(ThemeContext);
  return (
    <_H1 {...props} theme={theme} className="Heading H1">
      {children}
    </_H1>
  );
};

export { H1 };
export default H1;
