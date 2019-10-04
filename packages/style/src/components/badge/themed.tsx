import { useContext, FunctionComponent } from "react";
import styled, { StyledComponent } from "@emotion/styled";

import ThemeContext from "../../contexts/theme";

import { Badge } from "./base";
import { BaseProps } from "./types";

const Container: StyledComponent<BaseProps, BaseProps, {}> = styled(Badge)`
  background-color: ${props => props.theme.styles.colors.backgroundSecondary};
  color: ${props => props.theme.styles.colors.textPrimary};
`;

const ThemedBadge: FunctionComponent<BaseProps> = ({
  block,
  children,
  ...props
}) => {
  const theme = useContext(ThemeContext);
  return (
    <Container {...props} theme={theme} block={block} className="ThemedBadge">
      {children}
    </Container>
  );
};

ThemedBadge.propTypes = {
  ...Badge.propTypes,
};

export { ThemedBadge };
export default ThemedBadge;
