import React, { useContext, FunctionComponent } from "react";
import PropTypes from "prop-types";
import styled, { StyledComponent } from "@emotion/styled";

import ThemeContext from "../../contexts/theme";

import { ColorVariants, DefaultColorVariant } from "../common/variants";

import * as colors from "../../style/color";
import { border } from "../../style/layout";

import { Button } from "./base";
import { VariantProps } from "./types";

const Container: StyledComponent<VariantProps, VariantProps, {}> = styled(
  Button,
)`
  background-color: ${props => colors[props.variant!]};
  color: ${colors.white};
  border-color: ${props =>
    colors.shade(colors[props.variant!], colors.lightenFactor)};

  :hover,
  :active {
    border-style: ${border.style.default};
    border-color: ${props => colors[props.variant!]};
    background-color: ${props =>
      colors.shade(colors[props.variant!], colors.lightenFactor)};
  }
`;

const AccentButton: FunctionComponent<VariantProps> = ({
  block,
  size,
  variant = DefaultColorVariant,
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
  variant: PropTypes.oneOf(ColorVariants),
};

export { AccentButton };
export default AccentButton;
