import React, { useContext, FunctionComponent } from "react";
import PropTypes from "prop-types";
import styled, { StyledComponent } from "@emotion/styled";

import ThemeContext from "../../contexts/theme";

import { ColorVariants, DefaultColorVariant } from "../common/variants";

import * as colors from "../../style/color";

import { Badge } from "./base";
import { VariantProps } from "./types";

const Container: StyledComponent<VariantProps, VariantProps, {}> = styled(
  Badge,
)`
  background-color: ${props => colors[props.variant!]};
  color: ${colors.white};
`;

const AccentBadge: FunctionComponent<VariantProps> = ({
  block,
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
      variant={variant}
      className="AccentBadge"
    >
      {children}
    </Container>
  );
};

AccentBadge.propTypes = {
  ...Badge.propTypes,
  variant: PropTypes.oneOf(ColorVariants),
};

export { AccentBadge };
export default AccentBadge;
