import React from "react";
import { storiesOf } from "@storybook/react";
import { select, text, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import {
  ThemedBadge,
  AccentBadge,
  OutlineBadge,
} from "@kashyaprahul94/portfolio-style/lib/components/badge";

import {
  ColorVariants,
  DefaultColorVariant,
} from "@kashyaprahul94/portfolio-style/lib/components/common";

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
      const variant = select("Variant", ColorVariants, DefaultColorVariant);

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
      const variant = select("Variant", ColorVariants, DefaultColorVariant);

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
