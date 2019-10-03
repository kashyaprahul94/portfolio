import { useContext, FunctionComponent } from "react";
import styled, { StyledComponent } from "@emotion/styled";

import ThemeContext from "@contexts/theme";

import { sizes } from "@style/typography";
import { dimensions } from "@style/dimension";

import { Props } from "./types";

const Container: StyledComponent<Props, Props, {}> = styled.h2`
  font-size: ${sizes.jumbo};
  color: ${props => props.theme.styles.colors.textPrimary};

  margin-top: ${dimensions.s};
  margin-bottom: ${dimensions.m};
`;

const H2: FunctionComponent<Props> = ({ children, ...props }) => {
  const theme = useContext(ThemeContext);
  return (
    <Container {...props} theme={theme} className="Heading H2">
      {children}
    </Container>
  );
};

export { H2 };
export default H2;
