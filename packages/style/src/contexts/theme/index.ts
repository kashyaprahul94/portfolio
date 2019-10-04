import React from "react";

import { ITheme } from "../../style/themes";

interface IThemeContext {
  styles: ITheme;
  isDarkMode: boolean;
  toggleDarkMode(): void;
}

const ThemeContext: React.Context<any> = React.createContext(null);

export default ThemeContext;
export { IThemeContext };
