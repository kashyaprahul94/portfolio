import React from "react";
import { storiesOf } from "@storybook/react";

import { Header } from "./index";

export default (module: NodeModule, { storyName }) => {
  storiesOf(storyName, module).add("sticky", () => {
    return <Header />;
  });
};
