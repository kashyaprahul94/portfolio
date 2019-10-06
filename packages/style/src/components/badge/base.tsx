import React, { FunctionComponent } from "react";
import PropTypes from "prop-types";
import styled, { StyledComponent } from "@emotion/styled";

import * as colors from "../../style/color";
import { fonts, lineHeight, sizes } from "../../style/typography";
import { display, border, alignment } from "../../style/layout";
import { dimensions } from "../../style/dimension";

import { BaseProps } from "./types";

const Container: StyledComponent<BaseProps, BaseProps, {}> = styled.div`
  border-radius: ${border.radius.xxl};
  vertical-align: ${alignment.top};

  display: ${props => (props.block ? display.block : display.inlineBlock)};
  width: ${props => (props.block ? dimensions.full : dimensions.auto)};

  margin: ${dimensions.xs};
  padding: ${dimensions.s} ${dimensions.m};
  cursor: default;
  text-align: ${alignment.center};

  border: ${border.width.s} ${border.style.solid} ${colors.transparent};

  background-color: ${colors.transparent};
  color: ${colors.black};
`;

const Content: StyledComponent<{}, {}, {}> = styled.p`
  font-family: ${fonts.primary};
  line-height: ${lineHeight.medium};
  font-size: ${sizes.default};
`;

const Badge: FunctionComponent<BaseProps> = ({
  className,
  block,
  children,
  ...props
}) => {
  return (
    <Container {...props} block={block} className={`Badge ${className}`}>
      <Content>{children}</Content>
    </Container>
  );
};

Badge.propTypes = {
  block: PropTypes.bool,
};

Badge.defaultProps = {
  block: false,
};

export { Badge };
export default Badge;
