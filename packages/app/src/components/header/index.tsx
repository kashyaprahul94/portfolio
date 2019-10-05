import { useContext, FunctionComponent } from "react";
import styled, { StyledComponent } from "@emotion/styled";
import Router from "next/router";

import ThemeContext from "@kashyaprahul94/portfolio-style/lib/contexts/theme";
import { useScrollPosition } from "@kashyaprahul94/portfolio-style/lib/hooks/scroll";

import { P } from "@kashyaprahul94/portfolio-style/lib/components/paragraph";
import { OutlineButton } from "@kashyaprahul94/portfolio-style/lib/components/button";

import { transparent } from "@kashyaprahul94/portfolio-style/lib/style/color";
import {
  display,
  position,
  alignment,
} from "@kashyaprahul94/portfolio-style/lib/style/layout";
import {
  dimensions,
  headerHeight,
  depth,
} from "@kashyaprahul94/portfolio-style/lib/style/dimension";
import {
  transition,
  durations,
} from "@kashyaprahul94/portfolio-style/lib/style/animation";

import { Props, ScrollSpiedHeaderProps } from "./types";

//
//

const _headerHeight = parseInt(headerHeight, 10);

const Container: StyledComponent<Props, Props, {}> = styled.header`
  padding: ${dimensions.l} ${dimensions.xl};
  position: ${position.sticky};
  width: ${dimensions.full};
  top: ${dimensions.zero};
  height: ${headerHeight};

  background-color: ${transparent};
  box-shadow: none;

  transition: ${transition({
    duration: durations.short,
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
  height: ${dimensions.full};
  width: ${dimensions.full};
  display: ${display.flex};
  align-items: ${alignment.center};
  justify-content: ${alignment.spaceBetween};
`;

const Brand = styled(P)`
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;

//

const gotoHome = () => Router.push("/");

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
) => ({ ...props }) => {
  const currentPosition = useScrollPosition({
    throttle: 100,
  });
  const offCanvas = currentPosition.y > Math.min(_headerHeight, 10);
  return (
    <OriginalHeader
      {...props}
      offCanvas={offCanvas}
      className={offCanvas ? "HeaderSpy__Activate" : ""}
    />
  );
};

const ScrollAwareHeader = withScrollSpyHeader(Header);

export { Header, ScrollAwareHeader };
export default Header;
