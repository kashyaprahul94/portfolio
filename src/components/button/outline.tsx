import { useContext, FunctionComponent } from "react";
import PropTypes from "prop-types";
import styled, { StyledComponent } from "@emotion/styled";

import ThemeContext from "../../contexts/theme";
import { Button } from "./base";
import { VariantProps } from "./types";

import colors from "../../style/color";

const _Button: StyledComponent<VariantProps, VariantProps, {}> = styled(Button)`
  background-color: ${colors.transparent};
  color: ${props => props.theme.styles.colors.textPrimary};
  border-color: ${props =>
    colors.shade(colors[props.variant], colors.lightenFactor)};
`;

const OutlineButton: FunctionComponent<VariantProps> = ({
  block,
  size,
  variant = "primary",
  children,
  ...props
}) => {
  const theme = useContext(ThemeContext);
  return (
    <_Button
      {...props}
      theme={theme}
      block={block}
      size={size}
      variant={variant}
      className="OutlineButton"
    >
      {children}
    </_Button>
  );
};

OutlineButton.propTypes = {
  ...Button.propTypes,
  variant: PropTypes.oneOf(["primary", "secondary"])
};

export { OutlineButton };
export default OutlineButton;
