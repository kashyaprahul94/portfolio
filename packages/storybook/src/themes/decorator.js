import React, { useState, useEffect } from "react";
import { Global } from "@emotion/core";
import styled from "@emotion/styled";
import addons from "@storybook/addons";

import {
  dark as themeDark,
  light as themeLight,
} from "@kashyaprahul94/portfolio-style/lib/style/themes";

import ThemeContext from "@kashyaprahul94/portfolio-style/lib/contexts/theme";

import { reset as cssReset } from "../../../app/src/style/reset";
import { fonts as cssFonts } from "../../../app/src/style/fonts";
import { base as cssBase } from "../../../app/src/style/base";

const channel = addons.getChannel();
const getInitialDarkModeValue = __window => {
  try {
    const storyBookStorage = __window.localStorage.getItem(
      "@storybook/ui/store",
    );
    const { theme } = JSON.parse(storyBookStorage);
    return theme.base === "dark";
  } catch (error) {
    return false;
  }
};

const ContentWrapper = styled.main`
  width: 100%;
  padding: 20px;
  position: relative;
`;

const ThemeDecorator = ({ context, children }) => {
  const [isDarkMode, setDarkMode] = useState(getInitialDarkModeValue(window));

  useEffect(() => {
    channel.on && channel.on("DARK_MODE", setDarkMode);
    return () => channel.off && channel.off("DARK_MODE", setDarkMode);
  }, [channel, setDarkMode]);

  const styles = isDarkMode ? themeDark : themeLight;

  const themeContext = {
    styles,
    isDarkMode,
    toggleDarkMode: () => {
      console.info("Please use theme switcher to toggle dark mode");
    },
  };

  return (
    <ThemeContext.Provider value={themeContext}>
      <Global styles={[cssReset, cssFonts, cssBase(themeContext.styles)]} />
      <ContentWrapper>{children}</ContentWrapper>
    </ThemeContext.Provider>
  );
};

export const withTheme = (story, context) => (
  <ThemeDecorator context={context}>{story()}</ThemeDecorator>
);
