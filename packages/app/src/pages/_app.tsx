import React from "react";
import NextApp from "next/app";
import Head from "next/head";
import { Global } from "@emotion/core";

// Context
import ThemeContext from "@kashyaprahul94/portfolio-style/lib/contexts/theme";

import { IPageProps, IComponent } from "@types";

// Styles
import { reset as cssReset } from "@style/reset";
import { fonts as cssFonts } from "@style/fonts";
import { base as cssBase } from "@style/base";
import {
  dark as themeDark,
  light as themeLight,
} from "@kashyaprahul94/portfolio-style/lib/style/themes";

// Components
import { Document } from "@kashyaprahul94/portfolio-style/lib/components/document";
import { ScrollAwareHeader as Header } from "@components/header";
import { Main } from "@components/main";

interface AppState {
  loaded: boolean;
  darkMode: {
    enabled: boolean;
  };
}
interface AppProps {
  Component: IComponent;
  pageProps: any;
}
//
export default class App extends NextApp<AppProps, {}> {
  constructor(props: IPageProps) {
    super(props);

    this.state = {
      loaded: false,
      darkMode: {
        enabled: false,
      },
    };

    this.toggleDarkMode = this.toggleDarkMode.bind(this);
  }

  public componentDidMount() {
    this.setState({ loaded: true });
  }

  public useDarkMode() {
    this.setState({ darkMode: { enabled: true } });
  }
  public useLightMode() {
    this.setState({ darkMode: { enabled: false } });
  }

  public toggleDarkMode() {
    this.setState((state: AppState) => ({
      darkMode: {
        enabled: !state.darkMode.enabled,
      },
    }));
  }

  public render() {
    const { Component, pageProps } = this.props;

    const { loaded, darkMode } = this.state as AppState;
    const { title, showHeader } = Component;

    const theme = darkMode.enabled ? themeDark : themeLight;

    const themeContext = {
      styles: theme,
      isDarkMode: darkMode.enabled,
      toggleDarkMode: this.toggleDarkMode,
    };

    return (
      <>
        <Head>
          <title>{title}</title>
        </Head>

        {loaded && (
          <ThemeContext.Provider value={themeContext}>
            <Global
              styles={[cssReset, cssFonts, cssBase(themeContext.styles)]}
            />
            <Document>
              {showHeader && <Header />}
              <Main hasHeader={showHeader}>
                <Component {...pageProps} />
              </Main>
            </Document>
          </ThemeContext.Provider>
        )}
      </>
    );
  }
}
