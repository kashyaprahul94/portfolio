import * as path from "path";
import { configure, addParameters, addDecorator } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

import { withTheme, themes } from "./themes";

const req = require.context("./components", true, /.tsx$/);

const loadStories = () => {
  req.keys().forEach(filename => {
    const storyName = path.dirname(filename).substr(2);
    req(filename).default(module, { storyName });
  });
};

addParameters({
  darkMode: {
    dark: { ...themes.dark },
    light: { ...themes.light },
  },
});
addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
});
addDecorator(withTheme);
addDecorator(withKnobs);

configure(loadStories, module);
