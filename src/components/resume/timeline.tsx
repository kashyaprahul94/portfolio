import { FunctionComponent } from "react";
import styled, { StyledComponent } from "@emotion/styled";

import { white, transparent, danger, lightGrey } from "../../style/color";
import { fonts, sizes, weights, lineHeight } from "../../style/typography";

import { TimelineProps, TimelineItemProps } from "./types";
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

const TimelineItemContainer: StyledComponent<
  Partial<TimelineItemProps>,
  any,
  {}
> = styled.div`
  position: ${position.relative};
  margin-bottom: ${props => (props.showLogo ? dimensions.m : dimensions.xxl)};

  &:last-of-type {
    margin-bottom: ${dimensions.zero};
  }
`;

//

const TimelineItemHeaderContainer: StyledComponent<
  Partial<TimelineItemProps>,
  any,
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

const TimelineItemHeaderLogo: StyledComponent<{}, {}, {}> = styled.div`
  display: ${display.block};
  width: ${dimensions.zero};
  height: ${dimensions.zero};
  position: ${position.relative};
  left: ${dimensions.s};

  img.Logo {
    max-width: ${dimensions.full};
    position: ${position.absolute};
    top: ${dimensions.zero};
    bottom: ${dimensions.zero};
    left: ${dimensions.zero};
    right: ${dimensions.zero};
    margin: ${dimensions.auto};
    filter: grayscale(${dimensions.full});
    width: calc(${dimensions.full} - 10%);
  }
`;

//
//

const TimelineItemBody: StyledComponent<any, any, any> = styled.div`
  border-left: ${border.width.m} ${border.style.solid} ${lightGrey};
  position: ${position.relative};

  margin-left: ${dimensions.m};
  padding-left: ${dimensions.xxl};
`;

const TimelineItemBodySection1: StyledComponent<any, any, any> = styled.div`
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

const TimelineItemBodySection2: StyledComponent<{}, {}, {}> = styled.div`
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

const TimelineItemText: StyledComponent<{}, {}, {}> = styled.p`
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
  TimelineProps,
  TimelineProps,
  {}
> = styled.section`
  position: ${position.relative};

  ${TimelineItemBodySection1}:before {
    background-color: ${props => props.color};
  }

  ${TimelineItemHeaderLogo} {
    width: ${props => props.logoSize};
    height: ${props => props.logoSize};
  }
`;

//

const TimelineItemContentSection1: FunctionComponent<any> = ({
  title,
  children,
}) => (
  <TimelineItemBodySection1>
    <header className="Section1-Title">{title}</header>
    {children}
  </TimelineItemBodySection1>
);

const TimelineItemContentSection2: FunctionComponent<any> = ({
  title,
  link,
  children,
}) => (
  <TimelineItemBodySection2>
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
  </TimelineItemBodySection2>
);

const TimelineItemHeader: FunctionComponent<TimelineItemProps> = ({
  company,
  logo,
  showLogo,
}) => (
  <TimelineItemHeaderContainer showLogo={showLogo}>
    <p className="Content">{company}</p>
    {showLogo && (
      <TimelineItemHeaderLogo>
        <img src={logo} className="Logo" />
      </TimelineItemHeaderLogo>
    )}
  </TimelineItemHeaderContainer>
);

const TimelineItemContent: FunctionComponent<any> = ({ children }) => (
  <TimelineItemBody>{children}</TimelineItemBody>
);

const TimelineItem: FunctionComponent<TimelineItemProps> = ({
  company,
  logo,
  showLogo = true,
  children,
}) => (
  <TimelineItemContainer showLogo={showLogo}>
    <TimelineItemHeader company={company} logo={logo} showLogo={showLogo} />
    <TimelineItemContent>{children}</TimelineItemContent>
  </TimelineItemContainer>
);

const Timeline: FunctionComponent<TimelineProps> = ({
  color,
  logoSize,
  children,
}) => {
  return (
    <Container className="Timeline-Container" color={color} logoSize={logoSize}>
      {children}
    </Container>
  );
};

Timeline.defaultProps = {
  color: danger,
  logoSize: "64px",
};

export {
  Timeline,
  TimelineItem,
  TimelineItemContentSection1,
  TimelineItemContentSection2,
  TimelineItemText,
};
