import React from "react";
import NextApp, { Container } from "next/app";
import Head from "next/head";
import { Global } from "@emotion/core";

import { IAppContext, IPageProps, IComponent } from "../types";

// Styles
import {
  reset as cssReset,
  base as cssBase,
  fonts as cssFonts,
} from "../style";
import { dark as themeDark, light as themeLight } from "../style/themes";

// Component s
import Document from "../components/document";
import { ScrollAwareHeader as Header } from "../components/header";
import Main from "../components/main";

// Context
import ThemeContext from "../contexts/theme";

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
  public static async getInitialProps({ Component, ctx }: IAppContext) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

    return { pageProps };
  }

  constructor(props: IPageProps) {
    super(props);

    const { Component }: { Component: IComponent } = props;

    this.state = {
      loaded: false,
      title: Component.title || "Welcome",
      showHeader: Component.showHeader,
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

    const { loaded, title, darkMode, showHeader } = this.state as AppState;

    const theme = darkMode.enabled ? themeDark : themeLight;

    const themeContext = {
      styles: theme,
      isDarkMode: darkMode.enabled,
      toggleDarkMode: this.toggleDarkMode,
    };

    return (
      <Container>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1"
          />
          <title>{title}</title>
        </Head>

        {loaded && (
          <ThemeContext.Provider value={themeContext}>
            <Global
              styles={[cssReset, cssBase(themeContext.styles), cssFonts]}
            />
            <Document>
              {showHeader && <Header children={null} />}
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
