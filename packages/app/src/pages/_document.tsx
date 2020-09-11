import NextDocument, { Html, Head, Main, NextScript } from "next/document";

export default class Document extends NextDocument {
  public render() {
    return (
      <Html style={{ overflowY: "scroll" }}>
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no"
          />

          <meta name="application-name" content="Portfolio" />
          <meta name="msapplication-TileColor" content="#000000" />
          <meta name="msapplication-config" content="static/browserconfig.xml" />
          <meta name="theme-color" content="#000000" />

          <link rel="apple-touch-icon" sizes="180x180" href="static/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="static/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="static/favicon-16x16.png" />
          <link rel="mask-icon" href="static/safari-pinned-tab.svg" color="#5bbad5" />
          <link rel="shortcut icon" href="static/favicon.ico" />
          <link rel="manifest" href="static/manifest.json" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
