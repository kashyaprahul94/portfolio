import { useContext, FunctionComponent } from "react";
import PropTypes from "prop-types";
import styled, { StyledComponent } from "@emotion/styled";

import ThemeContext from "../../contexts/theme";

import { ColorVariants, DefaultColorVariant } from "../common/variants";

import * as colors from "../../style/color";

import { Button } from "./base";
import { VariantProps } from "./types";

const Container: StyledComponent<VariantProps, VariantProps, {}> = styled(
  Button,
)`
  background-color: ${colors.transparent};
  color: ${props => props.theme.styles.colors.textPrimary};
  border-color: ${props =>
    colors.shade(colors[props.variant!], colors.lightenFactor)};
`;

const OutlineButton: FunctionComponent<VariantProps> = ({
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
      className="OutlineButton"
    >
      {children}
    </Container>
  );
};

OutlineButton.propTypes = {
  ...Button.propTypes,
  variant: PropTypes.oneOf(ColorVariants),
};

export { OutlineButton };
export default OutlineButton;
