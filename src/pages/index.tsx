import React, { Component } from "react";
import Router from "next/router";
import Typist from "react-typist";

import { IPageProps } from "../types";

import { H1 } from "../components/heading";
import { OutlineButton, AccentButton } from "../components/button";

class Home extends Component<PageProps> {
  public static readonly title = "Rahul Kashyap : Home";
  public static readonly showHeader = true;

  public static async getInitialProps({}) {
    return {
      name: "Rahul Kashyap",
      titles: [
        "Full Stack Engineer",
        "Open-Source Enthusiast",
        "Technology Evengelist",
        "Developer Avocado",
      ],
    };
  }

  private gotoResume() {
    Router.push("/resume");
  }

  public render() {
    const { titles, name } = this.props;

    return (
      <section
        id="Page_Home"
        style={{
          textAlign: "center",
        }}
      >
        <H1>Hello World !</H1>

        <div
          className="sub-title"
          style={{
            fontSize: "24px",
          }}
        >
          <Typist>
            <span>I am </span>
            {titles.map((title: string) => {
              return (
                <span key={title}>
                  <span>{title}</span>
                  <Typist.Backspace count={title.length} delay={400} />
                </span>
              );
            })}
            <span>{name}</span>
          </Typist>

          <OutlineButton variant="primary" size="l" onClick={this.gotoResume}>
            Resume
          </OutlineButton>

          <AccentButton size={"l"} variant="danger">
            Hello
          </AccentButton>

          {Array(100)
            .fill(0)
            .map((_, index) => index)
            .map(number => {
              return (
                <div key={number}>
                  <h1>{number}</h1>
                </div>
              );
            })}
        </div>
      </section>
    );
  }
}

interface PageProps extends IPageProps {
  titles: string[];
  name: string;
}

export default Home;
