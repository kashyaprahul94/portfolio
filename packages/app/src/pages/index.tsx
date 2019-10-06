import React, { Component } from "react";

import Typist from "react-typist";

import { H1 } from "@kashyaprahul94/portfolio-style/lib/components/heading";

import { IPageProps } from "@types";

class Home extends Component<PageProps> {
  public static readonly title = "Rahul Kashyap : Home";
  public static readonly showHeader = true;

  public static async getInitialProps({ res }) {
    res.redirect("/resume");

    return {
      name: "Rahul Kashyap",
      titles: [
        "Cloud Native Engineer",
        "Open-Source Enthusiast",
        "Technology Evengelist",
        "Developer Avocado",
      ],
    };
  }

  public async componentDidMount() {}

  public async componentWillUnmount() {
    return Typist;
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
        </div>
      </section>
    );
  }
}

interface PageProps extends IPageProps {
  titles: ReadonlyArray<string>;
  name: string;
}

export default Home;
