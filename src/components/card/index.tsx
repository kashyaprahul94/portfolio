import { FunctionComponent } from "react";
import styled, { StyledComponent } from "@emotion/styled";

import {
  teal,
  offWhite,
  white,
  borderGrey,
  transparent as transparentColor,
  lightGrey,
} from "../../style/color";
import { fonts, sizes, text } from "../../style/typography";
import { border, layout, alignment } from "../../style/layout";
import { dimensions } from "../../style/dimension";

import { Props, PartialProps } from "./types";

const Container: StyledComponent<PartialProps, PartialProps, {}> = styled.div`
  background-color: ${props => (props.transparent ? transparentColor : white)};
  border: ${border.width.s} ${border.style.solid}
    ${props => (props.transparent ? transparentColor : offWhite)};
  margin-bottom: ${dimensions.xl};
  box-shadow: ${dimensions.zero} ${dimensions.unit} ${dimensions.xs}
    ${dimensions.zero}
    ${props => (props.transparent ? transparentColor : borderGrey)};

  border-radius: ${dimensions.xs};

  &:last-of-type {
    margin-bottom: ${dimensions.zero};
  }
`;

const Title: StyledComponent<PartialProps, PartialProps, {}> = styled.header`
  margin-top: ${dimensions.s};
  margin-bottom: ${dimensions.s};
  font-size: ${sizes.xl};
  color: ${teal};
  font-family: ${fonts.secondary};
  padding: ${dimensions.m};
  padding-bottom: calc(${dimensions.m} + ${dimensions.xs});
  border-bottom: ${border.width.s} ${border.style.solid} ${lightGrey};
  text-transform: ${text.uppercase};
  letter-spacing: 1px;

  ${layout.belowM(`
    text-align: ${alignment.center};
  `)}
`;

const Content: StyledComponent<PartialProps, PartialProps, {}> = styled.div`
  padding: ${props => (props.padding ? dimensions.m : dimensions.zero)};
`;

const Card: FunctionComponent<Props> = ({
  padding,
  transparent,
  title,
  children,
  ...props
}) => {
  return (
    <Container className="Card" transparent={transparent} {...props}>
      {title && <Title className="Card-Title">{title}</Title>}
      <Content className="Card-Content" padding={padding}>
        {children}
      </Content>
    </Container>
  );
};

export { Card };
export default Card;
