import { FunctionComponent } from "react";
import PropTypes from "prop-types";
import styled, { StyledComponent } from "@emotion/styled";

import { BaseProps } from "./types";

import colors from "../../style/color";
import { border } from "../../style/layout";
import typography from "../../style/typography";
import dimension from "../../style/dimension";

const Container: StyledComponent<BaseProps, BaseProps, {}> = styled.button`
  background-color: ${colors.transparent};
  color: ${colors.transparent};
  border: ${border.width.m} ${border.style.default} ${colors.transparent};
  padding: ${dimension.dimensions.m} ${dimension.dimensions.l};
  text-transform: ${typography.text.lowercase};
  outline: none;

  font-size: ${props =>
    typography.sizes[props.size || typography.sizes.default]};
  font-weight: ${typography.weights.lighter};
  font-family: ${typography.fonts.primary};

  width: ${props => (props.block ? dimension.full : "auto")};

  border-radius: ${border.radius.s};

  :hover,
  :active {
    border-style: ${border.style.dashed};
  }
`;

const Button: FunctionComponent<BaseProps> = ({
  className,
  block,
  size,
  children,
  ...props
}) => {
  return (
    <Container
      {...props}
      block={block}
      size={size}
      className={`Button ${className}`}
    >
      {children}
    </Container>
  );
};

Button.propTypes = {
  block: PropTypes.bool,
  size: PropTypes.oneOf(["xs", "s", "m", "l", "xl", "xxl", "jumbo", "hero"]),
};

export { Button };
export default Button;
