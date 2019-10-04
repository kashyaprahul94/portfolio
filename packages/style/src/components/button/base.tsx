import { FunctionComponent } from "react";
import PropTypes from "prop-types";
import styled, { StyledComponent } from "@emotion/styled";

import { Sizes, DefaultSize } from "../common";

import { transparent } from "../../style/color";
import { dimensions } from "../../style/dimension";
import { border } from "../../style/layout";
import { fonts, sizes, text, weights } from "../../style/typography";

import { BaseProps } from "./types";

const Container: StyledComponent<BaseProps, BaseProps, {}> = styled.button`
  background-color: ${transparent};
  color: ${transparent};
  border: ${border.width.m} ${border.style.default} ${transparent};
  padding: ${dimensions.m} ${dimensions.l};
  text-transform: ${text.lowercase};
  outline: none;

  font-size: ${props => sizes[props.size!]};
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
  size = DefaultSize,
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
  size: PropTypes.oneOf(Sizes),
};

export { Button };
export default Button;
