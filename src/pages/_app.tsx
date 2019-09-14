import React from "react";
import NextApp, { Container } from "next/app";
import Head from "next/head";
import { Global } from "@emotion/core";

import { IPageProps, IComponent } from "../types";

// Styles
import { base as cssBase } from "../style/base";
import { reset as cssReset } from "../style/reset";
import { dark as themeDark, light as themeLight } from "../style/themes";

// Context
import ThemeContext from "../contexts/theme";

// Components
import Document from "../components/document";
import { ScrollAwareHeader as Header } from "../components/header";
import Main from "../components/main";

interface AppState {
  loaded: boolean;
  title: string;
  showHeader: boolean;
  darkMode: {
    enabled: boolean;
  };
}
//
export default class App extends NextApp<{}, {}> {
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
    const {
      Component,
      pageProps,
    }: { Component: IComponent; pageProps: any } = this.props;

    const { loaded, darkMode } = this.state as AppState;
    const { title, showHeader } = Component;

    const theme = darkMode.enabled ? themeDark : themeLight;

    const themeContext = {
      styles: theme,
      isDarkMode: darkMode.enabled,
      toggleDarkMode: this.toggleDarkMode,
    };

    return (
      <Container>
        <Head>
          <title>{title}</title>
        </Head>

        {loaded && (
          <ThemeContext.Provider value={themeContext}>
            <Global styles={[cssReset, cssBase(themeContext.styles)]} />
            <Document>
              {showHeader && <Header />}
              <Main hasHeader={showHeader}>
                <Component {...pageProps} />
              </Main>
            </Document>
          </ThemeContext.Provider>
        )}
      </Container>
    );
  }
}
