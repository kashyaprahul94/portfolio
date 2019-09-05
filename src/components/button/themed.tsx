import { useContext, FunctionComponent } from "react";
import styled, { StyledComponent } from "@emotion/styled";

import ThemeContext from "../../contexts/theme";

import { transparent } from "../../style/color";

import { Button } from "./base";
import { VariantProps } from "./types";

const Container: StyledComponent<VariantProps, VariantProps, {}> = styled(
  Button,
)`
  background-color: ${transparent};
  color: ${props => props.theme.styles.colors.textPrimary};
  border-color: ${props => props.theme.styles.colors.textPrimary};
`;

const ThemedButton: FunctionComponent<VariantProps> = ({
  block,
  size,
  children,
  ...props
}) => {
  const theme = useContext(ThemeContext);
  return (
    <Container
      {...props}
      theme={theme}
      block={block}
      size={size}
      className="ThemedButton"
    >
      {children}
    </Container>
  );
};

ThemedButton.propTypes = {
  ...Button.propTypes,
};

export { ThemedButton };
export default ThemedButton;
