import { FunctionComponent } from "react";
import styled, { StyledComponent } from "@emotion/styled";

import { white, transparent, danger, lightGrey } from "../../style/color";
import { fonts, sizes, weights, lineHeight } from "../../style/typography";

import { VerticalTimelineProps, VerticalTimelineItemProps } from "./types";
import {
  position,
  display,
  alignment,
  border,
  layout,
} from "../../style/layout";
import { dimensions } from "../../style/dimension";

//
//

const VerticalTimelineItemContainer: StyledComponent<
  Partial<VerticalTimelineItemProps>,
  Partial<VerticalTimelineItemProps>,
  {}
> = styled.div`
  position: ${position.relative};
  margin-bottom: ${props => (props.showLogo ? dimensions.m : dimensions.xxl)};

  &:last-of-type {
    margin-bottom: ${dimensions.zero};
  }
`;

//

const VerticalTimelineItemHeaderContainer: StyledComponent<
  Partial<VerticalTimelineItemProps>,
  Partial<VerticalTimelineItemProps>,
  {}
> = styled.header`
  display: ${display.flex};
  align-items: ${alignment.center};
  margin-bottom: ${props => (props.showLogo ? dimensions.zero : dimensions.m)};

  ${layout.belowM(`
    justify-content: ${alignment.center};
  `)}

  p.Content {
    font-size: ${sizes.xl};
    font-weight: ${weights.bolder};
    font-family: ${fonts.secondary};
  }
`;

const VerticalTimelineItemHeaderLogo: StyledComponent<
  Partial<VerticalTimelineItemProps>,
  Partial<VerticalTimelineItemProps>,
  {}
> = styled.div`
  display: ${display.block};
  width: ${dimensions.zero};
  height: ${dimensions.zero};
  position: ${position.relative};
  left: ${dimensions.s};

  width: ${props => props.logoSize};
  height: ${props => props.logoSize};

  img.Logo {
    max-width: ${dimensions.full};
    position: ${position.absolute};
    top: ${dimensions.zero};
    bottom: ${dimensions.zero};
    left: ${dimensions.zero};
    right: ${dimensions.zero};
    margin: ${dimensions.auto};
    width: calc(${dimensions.full} - 10%);

    filter: ${props =>
      props.grayscaleLogo ? `grayscale(${dimensions.full})` : null};
  }
`;

//
//

const VerticalTimelineItemBody: StyledComponent<any, any, any> = styled.div`
  border-left: ${border.width.m} ${border.style.solid} ${lightGrey};
  position: ${position.relative};

  margin-left: ${dimensions.m};
  padding-left: ${dimensions.xxl};
`;

const VerticalTimelineItemBodySection1: StyledComponent<
  any,
  any,
  any
> = styled.div`
  margin-bottom: ${dimensions.xl};
  position: ${position.relative};

  &:last-of-type {
    margin-bottom: ${dimensions.zero};
  }

  .Section1-Title {
    font-size: ${sizes.l};
    margin-bottom: ${dimensions.xl};
  }

  &:before {
    border-radius: ${dimensions.full};
    background-color: ${transparent};
    box-shadow: ${dimensions.zero} ${dimensions.zero} ${dimensions.xs}
      ${dimensions.m} ${white};

    display: ${display.block};
    position: ${position.absolute};
    left: calc(-${dimensions.xxxl} + 1.25px);
    top: ${dimensions.xs};
    width: ${dimensions.xl};
    height: ${dimensions.xl};
    content: "";
  }
`;

const VerticalTimelineItemBodySection2: StyledComponent<
  {},
  {},
  {}
> = styled.div`
  margin-bottom: ${dimensions.xl};

  &:last-of-type {
    margin-bottom: ${dimensions.zero};
  }

  .Section2-Title {
    font-size: ${sizes.s};
    font-weight: ${weights.bolder};
    margin-bottom: ${dimensions.m};

    .Link {
      font-size: ${sizes.default};
    }
  }
`;

const VerticalTimelineItemText: StyledComponent<{}, {}, {}> = styled.p`
  font-family: ${fonts.text};
  font-size: ${sizes.s};
  line-height: ${lineHeight.medium};
  padding-bottom: ${dimensions.m};

  &:last-of-type {
    padding-bottom: ${dimensions.zero};
  }
`;

//

const Container: StyledComponent<
  VerticalTimelineProps,
  VerticalTimelineProps,
  {}
> = styled.section`
  position: ${position.relative};

  ${VerticalTimelineItemBodySection1}:before {
    background-color: ${props => props.color};
  }
`;

//

const VerticalTimelineItemContentSection1: FunctionComponent<any> = ({
  title,
  children,
}) => (
  <VerticalTimelineItemBodySection1>
    <header className="Section1-Title">{title}</header>
    {children}
  </VerticalTimelineItemBodySection1>
);

const VerticalTimelineItemContentSection2: FunctionComponent<any> = ({
  title,
  link,
  children,
}) => (
  <VerticalTimelineItemBodySection2>
    <header className="Section2-Title">
      {title}
      {link && (
        <span className="Link">
          <span> - </span>
          <a href={link} target="_blank">
            {link}
          </a>
        </span>
      )}
    </header>
    {children}
  </VerticalTimelineItemBodySection2>
);

const VerticalTimelineItemHeader: FunctionComponent<
  VerticalTimelineItemProps
> = ({ title, logo, showLogo, logoSize, grayscaleLogo }) => (
  <VerticalTimelineItemHeaderContainer showLogo={showLogo}>
    <p className="Content">{title}</p>
    {showLogo && (
      <VerticalTimelineItemHeaderLogo
        logoSize={logoSize}
        grayscaleLogo={grayscaleLogo}
      >
        <img src={logo} className="Logo" />
      </VerticalTimelineItemHeaderLogo>
    )}
  </VerticalTimelineItemHeaderContainer>
);

const VerticalTimelineItemContent: FunctionComponent<any> = ({ children }) => (
  <VerticalTimelineItemBody>{children}</VerticalTimelineItemBody>
);

const VerticalTimelineItem: FunctionComponent<VerticalTimelineItemProps> = ({
  title,
  logo,
  showLogo,
  logoSize,
  children,
}) => (
  <VerticalTimelineItemContainer showLogo={showLogo}>
    <VerticalTimelineItemHeader
      title={title}
      logo={logo}
      showLogo={showLogo}
      logoSize={logoSize}
    />
    <VerticalTimelineItemContent>{children}</VerticalTimelineItemContent>
  </VerticalTimelineItemContainer>
);

const VerticalTimeline: FunctionComponent<VerticalTimelineProps> = ({
  color,
  children,
}) => {
  return (
    <Container className="VerticalTimeline-Container" color={color}>
      {children}
    </Container>
  );
};

VerticalTimeline.defaultProps = {
  color: danger,
};

VerticalTimelineItem.defaultProps = {
  showLogo: true,
  logoSize: dimensions.icon.xl,
  grayscaleLogo: false,
};

export {
  VerticalTimeline,
  VerticalTimelineItem,
  VerticalTimelineItemContentSection1,
  VerticalTimelineItemContentSection2,
  VerticalTimelineItemText,
};
