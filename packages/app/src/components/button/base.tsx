import { FunctionComponent } from "react";
import PropTypes from "prop-types";
import styled, { StyledComponent } from "@emotion/styled";

import { transparent } from "@style/color";
import { border } from "@style/layout";
import { text, fonts, weights, sizes } from "@style/typography";
import { dimensions } from "@style/dimension";

import { BaseProps } from "./types";

const Container: StyledComponent<BaseProps, BaseProps, {}> = styled.button`
  background-color: ${transparent};
  color: ${transparent};
  border: ${border.width.m} ${border.style.default} ${transparent};
  padding: ${dimensions.m} ${dimensions.l};
  text-transform: ${text.lowercase};
  outline: none;

  font-size: ${props => sizes[props.size || sizes.default]};
  font-weight: ${weights.lighter};
  font-family: ${fonts.primary};

  width: ${props => (props.block ? dimensions.full : dimensions.auto)};

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
