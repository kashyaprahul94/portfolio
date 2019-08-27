import { create, themes } from "@storybook/theming";

import { dark as darkTheme } from "../../src/style/themes";

export default create({
  ...themes.dark,
  textColor: darkTheme.colors.textPrimary,
  appBg: darkTheme.colors.backgroundPrimary,
  appContentBg: darkTheme.colors.backgroundPrimary
});
