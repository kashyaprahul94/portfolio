import { useContext, FunctionComponent } from "react";
import PropTypes from "prop-types";
import styled, { StyledComponent } from "@emotion/styled";

import ThemeContext from "@contexts/theme";

import {
  ColorVariants,
  DefaultColorVariant,
} from "@components/common/variants";

import * as colors from "@style/color";

import { Badge } from "./base";
import { VariantProps } from "./types";

const Container: StyledComponent<VariantProps, VariantProps, {}> = styled(
  Badge,
)`
  background-color: ${colors.transparent};
  border-color: ${props => colors[props.variant]};
  color: ${props => props.theme.styles.colors.textPrimary};
`;

const OutlineBadge: FunctionComponent<VariantProps> = ({
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
      className="OutlineBadge"
    >
      {children}
    </Container>
  );
};

OutlineBadge.propTypes = {
  ...Badge.propTypes,
  variant: PropTypes.oneOf(ColorVariants),
};

export { OutlineBadge };
export default OutlineBadge;
