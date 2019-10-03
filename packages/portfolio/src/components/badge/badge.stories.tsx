import React from "react";
import { storiesOf } from "@storybook/react";
import { select, text, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import { ThemedBadge } from "./themed";
import { AccentBadge } from "./accent";
import { OutlineBadge } from "./outline";

export default (module: NodeModule, { storyName }) => {
  storiesOf(storyName, module)
    .add("themed", () => {
      const badgeText = text("Text", "Hello !");

      const block = boolean("Block", false);

      return (
        <ThemedBadge block={block} onClick={action("You clicked me !")}>
          {badgeText}
        </ThemedBadge>
      );
    })
    .add("accent", () => {
      const buttonText = text("Text", "Hello !");
      const variant = select("Variant", ["primary", "secondary"], "primary");

      const block = boolean("Block", false);

      return (
        <AccentBadge
          block={block}
          variant={variant}
          onClick={action("You clicked me !")}
        >
          {buttonText}
        </AccentBadge>
      );
    })
    .add("outline", () => {
      const buttonText = text("Text", "Hello !");
      const variant = select("Variant", ["primary", "secondary"], "primary");

      const block = boolean("Block", false);

      return (
        <OutlineBadge
          block={block}
          variant={variant}
          onClick={action("You clicked me !")}
        >
          {buttonText}
        </OutlineBadge>
      );
    });
};
