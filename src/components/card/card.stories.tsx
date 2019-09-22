import React from "react";
import { storiesOf } from "@storybook/react";
import { text, boolean } from "@storybook/addon-knobs";

import { Card } from "./";

export default (module: NodeModule, { storyName }) => {
  storiesOf(storyName, module)
    .add("With title", () => {
      const padding = boolean("Padding", true);
      const title = text("Title", "Hello !");
      const transparent = boolean("Transparent", false);

      const content = text("Content", "Hello !");

      return (
        <Card title={title} padding={padding} transparent={transparent}>
          <p>{content}</p>
        </Card>
      );
    })
    .add("Without title", () => {
      const padding = boolean("Padding", true);
      const transparent = boolean("Transparent", false);
      const content = text("Content", "Hello !");

      return (
        <Card padding={padding} transparent={transparent}>
          <p>{content}</p>
        </Card>
      );
    });
};
