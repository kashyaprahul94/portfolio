import { create, themes } from "@storybook/theming";

import { light as lightTheme } from "@kashyaprahul94/portfolio-style/lib/style/themes";

export default create({
  ...themes.light,
  textColor: lightTheme.colors.textPrimary,
  appBg: lightTheme.colors.backgroundPrimary,
  appContentBg: lightTheme.colors.backgroundPrimary,
});
