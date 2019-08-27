import React from "react";
import { storiesOf } from "@storybook/react";
import { select, text, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import ThemedButton from "./themed";
import AccentButton from "./accent";
import OutlineButton from "./outline";

export default (module: NodeModule, { storyName }) => {
  storiesOf(storyName, module)
    .add("themed", () => {
      const buttonText = text("Text", "Hello !");
      const size = select(
        "Size",
        ["xs", "s", "m", "l", "xl", "xxl", "jumbo", "hero"],
        "m"
      );
      const block = boolean("Block", false);

      return (
        <ThemedButton
          size={size}
          block={block}
          onClick={action("You clicked me !")}
        >
          {buttonText}
        </ThemedButton>
      );
    })
    .add("accent", () => {
      const buttonText = text("Text", "Hello !");
      const variant = select("Variant", ["primary", "secondary"], "primary");
      const size = select(
        "Size",
        ["xs", "s", "m", "l", "xl", "xxl", "jumbo", "hero"],
        "m"
      );
      const block = boolean("Block", false);

      return (
        <AccentButton
          size={size}
          block={block}
          variant={variant}
          onClick={action("You clicked me !")}
        >
          {buttonText}
        </AccentButton>
      );
    })
    .add("outline", () => {
      const buttonText = text("Text", "Hello !");
      const variant = select("Variant", ["primary", "secondary"], "primary");
      const size = select(
        "Size",
        ["xs", "s", "m", "l", "xl", "xxl", "jumbo", "hero"],
        "m"
      );
      const block = boolean("Block", false);

      return (
        <OutlineButton
          size={size}
          block={block}
          variant={variant}
          onClick={action("You clicked me !")}
        >
          {buttonText}
        </OutlineButton>
      );
    });
};
