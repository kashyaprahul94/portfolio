import { useContext, FunctionComponent } from "react";
import styled, { StyledComponent } from "@emotion/styled";

import { Props } from "./types";

import ThemeContext from "../../contexts/theme";

import typography from "../../style/typography";
import { dimensions } from "../../style/dimension";

const _H2: StyledComponent<Props, Props, {}> = styled.h2`
  font-size: ${typography.sizes.jumbo};
  font-family: ${typography.fonts.heading};
  color: ${props => props.theme.styles.colors.textPrimary};

  margin-top: ${dimensions.s};
  margin-bottom: ${dimensions.m};
`;

const H2: FunctionComponent<Props> = ({ children, ...props }) => {
  const theme = useContext(ThemeContext);
  return (
    <_H2 {...props} theme={theme} className="Heading H2">
      {children}
    </_H2>
  );
};

export { H2 };
export default H2;
