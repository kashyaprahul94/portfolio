import { useContext, FunctionComponent } from "react";
import PropTypes from "prop-types";
import styled, { StyledComponent } from "@emotion/styled";

import ThemeContext from "../../contexts/theme";

import { Button } from "./base";
import { VariantProps } from "./types";

import colors from "../../style/color";
import { border } from "../../style/layout";

const Container: StyledComponent<VariantProps, VariantProps, {}> = styled(
  Button,
)`
  background-color: ${props => colors[props.variant]};
  color: ${colors.white};
  border-color: ${props =>
    colors.shade(colors[props.variant], colors.lightenFactor)};

  :hover,
  :active {
    border-style: ${border.style.default};
    border-color: ${props => colors[props.variant]};
    background-color: ${props =>
      colors.shade(colors[props.variant], colors.lightenFactor)};
  }
`;

const AccentButton: FunctionComponent<VariantProps> = ({
  block,
  size,
  variant = "primary",
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
      variant={variant}
      className="AccentButton"
    >
      {children}
    </Container>
  );
};

AccentButton.propTypes = {
  ...Button.propTypes,
  variant: PropTypes.oneOf(["primary", "secondary"]),
};

export { AccentButton };
export default AccentButton;
