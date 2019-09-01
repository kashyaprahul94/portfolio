import { FunctionComponent } from "react";
import styled, { StyledComponent } from "@emotion/styled";

import color from "../../style/color";
import { fonts } from "../../style/typography";

import { Props, PartialProps } from "./types";

const Container: StyledComponent<PartialProps, PartialProps, {}> = styled.div`
  background-color: #fff;
  border: 1px solid #f5f5f5;
  margin-bottom: 15px;
  box-shadow: 0px 2px 4px 0px #bbb;

  ${props =>
    props.transparent
      ? `
  background-color: transparent !important;
    border-color: transparent !important;
    box-shadow: 0px 2px 4px 0px transparent !important;
  `
      : ""}
`;

const Title: StyledComponent<PartialProps, PartialProps, {}> = styled.header`
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 28px;
  color: ${color.teal};
  text-transform: uppercase;
  font-family: ${fonts.secondary};
  padding: 8px;
  padding-bottom: 10px;
  border-bottom: 1px solid #ddd;
  letter-spacing: 1px;
`;

const Content: StyledComponent<PartialProps, PartialProps, {}> = styled.div`
  padding: ${props => (props.padding ? "8px" : 0)};
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
