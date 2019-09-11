import NextDocument, { Head, Main, NextScript } from "next/document";

export default class Document extends NextDocument {
  public render() {
    return (
      <html style={{ overflowY: "scroll" }}>
        <Head />

        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no"
        />

        <meta name="msapplication-TileColor" content="#2b5797" />
        <meta name="theme-color" content="#ffffff" />

        <link rel="shortcut icon" href="static/favicon.ico" />
        <link rel="icon" href="static/favicon.ico" type="image/x-icon" />
        <link
          rel="shortcut-icon"
          href="static/favicon.ico"
          type="image/x-icon"
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="static/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="static/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="static/favicon-16x16.png"
        />
        <link rel="manifest" href="static/site.webmanifest" />
        <link
          rel="mask-icon"
          href="static/safari-pinned-tab.svg"
          color="#5bbad5"
        />

        <link rel="manifest" href="static/manifest.json" />

        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Dosis|PT+Sans+Narrow|Poppins:200,400,600&amp;display=swap"
        />

        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
