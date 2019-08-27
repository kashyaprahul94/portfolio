import NextDocument, { Head, Main, NextScript } from "next/document";

export default class Document extends NextDocument {
  public render() {
    return (
      <html style={{ overflow: "hidden", overflowY: "scroll" }}>
        <Head />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"
        />

        <link rel="icon" href="static/favicon.ico" type="image/x-icon" />
        <link
          rel="shortcut-icon"
          href="static/favicon.ico"
          type="image/x-icon"
        />

        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
