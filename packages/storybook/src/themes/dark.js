import { create, themes } from "@storybook/theming";

import { dark as darkTheme } from "@kashyaprahul94/portfolio-style/lib/style/themes";

export default create({
  ...themes.dark,
  textColor: darkTheme.colors.textPrimary,
  appBg: darkTheme.colors.backgroundPrimary,
  appContentBg: darkTheme.colors.backgroundPrimary,
});
