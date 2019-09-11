import { FunctionComponent } from "react";
import PropTypes from "prop-types";
import styled, { StyledComponent } from "@emotion/styled";

import * as colors from "../../style/color";
import { fonts, lineHeight, sizes } from "../../style/typography";
import { display, border, alignment } from "../../style/layout";
import { dimensions } from "../../style/dimension";

import { ColorVariants } from "../common/variants";

import { Props } from "./types";

const Container: StyledComponent<Props, Props, {}> = styled.div`
  padding: ${dimensions.s} ${dimensions.m};
  background-color: ${props => colors[props.variant]};
  color: ${colors.white};
  border-radius: ${border.radius.xxl};
  display: ${display.inlineBlock};
  vertical-align: ${alignment.top};

  margin: ${dimensions.xs};
  cursor: default;
`;

const Content: StyledComponent<{}, {}, {}> = styled.p`
  font-family: ${fonts.primary};
  line-height: ${lineHeight.medium};
  font-size: ${sizes.default};
`;

const Chip: FunctionComponent<Props> = ({ variant, children, ...props }) => {
  return (
    <Container variant={variant} {...props}>
      <Content>{children}</Content>
    </Container>
  );
};

Chip.propTypes = {
  variant: PropTypes.oneOf(ColorVariants),
};

export { Chip };
export default Chip;
