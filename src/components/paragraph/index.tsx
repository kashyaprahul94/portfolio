import { useContext, FunctionComponent } from "react";
import styled, { StyledComponent } from "@emotion/styled";

import ThemeContext from "../../contexts/theme";

import { sizes, fonts } from "../../style/typography";
import { dimensions } from "../../style/dimension";

import { Props } from "./types";

const Container: StyledComponent<Props, Props, {}> = styled.p`
  font-size: ${sizes.l};
  font-family: ${fonts.primary};
  color: ${props => props.theme.styles.colors.textPrimary};

  margin-top: ${dimensions.zero};
  margin-bottom: ${dimensions.s};
`;

const P: FunctionComponent<Props> = ({ className, children, ...props }) => {
  const theme = useContext(ThemeContext);
  return (
    <Container {...props} theme={theme} className={`${className} Paragraph`}>
      {children}
    </Container>
  );
};

export { P };
export default P;
