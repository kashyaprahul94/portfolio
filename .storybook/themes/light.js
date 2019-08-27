import { create, themes } from "@storybook/theming";

import { light as lightTheme } from "../../src/style/themes";

export default create({
  ...themes.light,
  textColor: lightTheme.colors.textPrimary,
  appBg: lightTheme.colors.backgroundPrimary,
  appContentBg: lightTheme.colors.backgroundPrimary
});
