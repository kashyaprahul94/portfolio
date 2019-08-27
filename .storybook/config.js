import * as path from "path";
import { configure, addParameters, addDecorator } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs/react";

import { withTheme, themes } from "./themes";

const req = require.context("../src", true, /\.stories\.tsx$/);

const loadStories = () => {
  req.keys().forEach(filename => {
    const storyDirname = path.dirname(filename).substr(2);
    const storyName = storyDirname.replace(/^pages\//, "");
    req(filename).default(module, { storyName });
  });
};

addParameters({
  darkMode: {
    dark: { ...themes.dark },
    light: { ...themes.light }
  }
});
addDecorator(withTheme);
addDecorator(withKnobs);

configure(loadStories, module);
