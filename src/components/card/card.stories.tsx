import React from "react";
import { storiesOf } from "@storybook/react";
import { text, boolean } from "@storybook/addon-knobs";

import Card from "./";

export default (module: NodeModule, { storyName }) => {
  storiesOf(storyName, module)
    .add("With title", () => {
      const padding = boolean("Padding", true);
      const title = text("Title", "Hello !");

      const content = text("Content", "Hello !");

      return (
        <Card title={title} padding={padding}>
          <p>{content}</p>
        </Card>
      );
    })
    .add("Without title", () => {
      const padding = boolean("Padding", true);
      const content = text("Content", "Hello !");

      return (
        <Card padding={padding}>
          <p>{content}</p>
        </Card>
      );
    });
};
