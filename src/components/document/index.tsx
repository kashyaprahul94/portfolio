import { useContext, FunctionComponent } from "react";
import styled, { StyledComponent } from "@emotion/styled";

import ThemeContext from "../../contexts/theme";

import { Props } from "./types";

import dimension from "../../style/dimension";
import animation from "../../style/animation";

const Container: StyledComponent<Props, Props, {}> = styled.div`
  height: ${dimension.full};

  color: ${props => props.theme.styles.colors.textPrimary};
  background-color: ${props => props.theme.styles.colors.backgroundPrimary};

  transition: ${animation.transition({
    property: "background",
    duration: animation.durations.medium,
  })};
`;

const Document: FunctionComponent<Props> = ({ children }) => {
  const theme = useContext(ThemeContext);
  return (
    <Container theme={theme} className="Document">
      {children}
    </Container>
  );
};

export { Document };
export default Document;
