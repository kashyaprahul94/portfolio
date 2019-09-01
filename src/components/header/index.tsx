import { useContext, FunctionComponent, ReactNode } from "react";
import styled, { StyledComponent } from "@emotion/styled";
import Router from "next/router";

import ThemeContext from "../../contexts/theme";
import { useScrollPosition } from "../../hooks/scroll";

import { Props, ScrollSpiedHeaderProps } from "./types";

import P from "../paragraph";
import { OutlineButton } from "../button";

import color from "../../style/color";
import { display, position, alignment } from "../../style/layout";
import { dimensions, headerHeight, full, depth } from "../../style/dimension";
import animation from "../../style/animation";

const _headerHeight = parseInt(headerHeight, 10);

const Container: StyledComponent<Props, Props, {}> = styled.header`
  padding: ${dimensions.l} ${dimensions.xl};
  position: ${position.sticky};
  width: ${full};
  top: ${dimensions.zero};
  height: ${headerHeight};

  background-color: ${color.transparent};
  box-shadow: none;

  transition: ${animation.transition({
    duration: animation.durations.short,
  })};

  &.HeaderSpy__Activate {
    background-color: ${props => props.theme.styles.colors.backgroundSecondary};
    box-shadow: ${dimensions.zero} ${dimensions.xs} ${dimensions.s}
      rgba(
        ${dimensions.zero},
        ${dimensions.zero},
        ${dimensions.zero},
        ${depth.s}
      );
  }
`;

const Content: StyledComponent<{}, {}, {}> = styled.div`
  height: ${full};
  width: ${full};
  display: ${display.flex};
  align-items: ${alignment.center};
  justify-content: ${alignment.spaceBetween};
`;

const gotoHome = () => Router.push("/");

const Brand = styled(P)`
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;

const Header: FunctionComponent<Props> = ({ children, ...props }) => {
  const theme = useContext(ThemeContext);
  return (
    <Container
      {...props}
      theme={theme}
      className={`Header ${props.className || ""}`}
    >
      <Content>
        <Brand onClick={gotoHome}>Rahul Kashyap</Brand>
        <OutlineButton size={"s"} onClick={theme.toggleDarkMode}>
          Toggle Dark Mode
        </OutlineButton>
      </Content>
    </Container>
  );
};

const withScrollSpyHeader = (
  OriginalHeader: FunctionComponent<ScrollSpiedHeaderProps>,
) => ({ children, ...props }) => {
  const currentPosition = useScrollPosition({
    throttle: 100,
  });
  const offCanvas = currentPosition.y > Math.min(_headerHeight, 10);
  return (
    <OriginalHeader
      {...props}
      offCanvas={offCanvas}
      className={offCanvas ? "HeaderSpy__Activate" : ""}
    >
      children
    </OriginalHeader>
  );
};

const ScrollAwareHeader = withScrollSpyHeader(Header);

export { Header, ScrollAwareHeader };
export default Header;
