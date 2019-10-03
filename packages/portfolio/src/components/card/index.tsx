import { useContext, FunctionComponent } from "react";
import styled, { StyledComponent } from "@emotion/styled";

import ThemeContext from "@contexts/theme";

import {
  teal,
  offWhite,
  white,
  borderGrey,
  transparent as transparentColor,
  lightGrey,
} from "@style/color";
import { fonts, sizes, text } from "@style/typography";
import { border, layout, alignment } from "@style/layout";
import { dimensions } from "@style/dimension";

import { Props, PartialProps } from "./types";

const Container: StyledComponent<PartialProps, PartialProps, {}> = styled.div`
  background-color: ${props =>
    props.transparent
      ? transparentColor
      : props.theme.styles.colors.backgroundSecondary};
  color: ${props => props.theme.styles.colors.textPrimary};

  border: ${border.width.s} ${border.style.solid}
    ${props =>
      props.transparent
        ? transparentColor
        : props.theme.styles.colors.backgroundSecondary};

  box-shadow: ${dimensions.zero} ${dimensions.unit} ${dimensions.xs}
    ${dimensions.zero}
    ${props =>
      props.transparent
        ? transparentColor
        : props.theme.styles.colors.backgroundPrimary};

  border-radius: ${dimensions.xs};
  margin-bottom: ${dimensions.xl};

  &:last-of-type {
    margin-bottom: ${dimensions.zero};
  }
`;

const Title: StyledComponent<PartialProps, PartialProps, {}> = styled.header`
  color: ${teal};
  border-bottom: ${border.width.s} ${border.style.solid}
    ${props => props.theme.styles.colors.textSecondary};

  font-size: ${sizes.xl};
  font-family: ${fonts.secondary};

  margin-top: ${dimensions.s};
  margin-bottom: ${dimensions.s};

  padding: ${dimensions.m};
  padding-bottom: calc(${dimensions.m} + ${dimensions.xs});

  text-transform: ${text.uppercase};
  letter-spacing: ${dimensions.unit};

  ${layout.belowM(`
    text-align: ${alignment.center};
  `)}
`;

const Content: StyledComponent<PartialProps, PartialProps, {}> = styled.div`
  padding: ${props => (props.padding ? dimensions.m : dimensions.zero)};
  color: inherit;
`;

const Card: FunctionComponent<Props> = ({
  padding,
  transparent,
  title,
  children,
  ...props
}) => {
  const theme = useContext(ThemeContext);
  return (
    <Container
      {...props}
      theme={theme}
      className="Card"
      transparent={transparent}
    >
      {title && (
        <Title theme={theme} className="Card-Title">
          {title}
        </Title>
      )}
      <Content className="Card-Content" padding={padding}>
        {children}
      </Content>
    </Container>
  );
};

export { Card };
export default Card;
