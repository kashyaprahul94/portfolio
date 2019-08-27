import React, { Component } from "react";
import Router from "next/router";

import {
  ThemedButton,
  AccentButton,
  OutlineButton,
} from "../components/button";
import { H1 } from "../components/heading";

import { IPageProps } from "../types";

class Resume extends Component<IPageProps> {
  public static readonly title = "Rahul Kashyap : Resume";
  public static readonly showHeader = true;

  public static async getInitialProps({}) {
    return {};
  }

  constructor(props: IPageProps) {
    super(props);
  }

  private gotoHome() {
    Router.push("/");
  }

  public render() {
    const styles = {
      marginBottom: "15px",
    };

    return (
      <section>
        <ThemedButton
          size={"jumbo"}
          block={true}
          style={{ ...styles }}
          onClick={this.gotoHome}
        >
          Themed button
        </ThemedButton>

        <AccentButton
          size={"jumbo"}
          block={true}
          style={{ ...styles }}
          onClick={this.gotoHome}
        >
          Accent button
        </AccentButton>

        <OutlineButton
          size={"jumbo"}
          block={true}
          style={{ ...styles }}
          onClick={this.gotoHome}
        >
          Outlined button
        </OutlineButton>

        <H1>This should be a theme aware heading </H1>
      </section>
    );
  }
}

export default Resume;
