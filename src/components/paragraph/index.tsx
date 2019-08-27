import { useContext, FunctionComponent } from "react";
import styled, { StyledComponent } from "@emotion/styled";

import { Props } from "./types";

import ThemeContext from "../../contexts/theme";

import typography from "../../style/typography";
import { dimensions } from "../../style/dimension";

const _P: StyledComponent<Props, Props, {}> = styled.p`
  font-size: ${typography.sizes.l};
  font-family: ${typography.fonts.primary};
  color: ${props => props.theme.styles.colors.textPrimary};

  margin-top: ${dimensions.zero};
  margin-bottom: ${dimensions.s};
`;

const P: FunctionComponent<Props> = ({ className, children, ...props }) => {
  const theme = useContext(ThemeContext);
  return (
    <_P {...props} theme={theme} className={`${className} Paragraph`}>
      {children}
    </_P>
  );
};

export { P };
export default P;
