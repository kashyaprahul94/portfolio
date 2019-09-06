import { FunctionComponent } from "react";
import styled, { StyledComponent } from "@emotion/styled";

import { white, transparent, danger, lightGrey } from "../../style/color";
import { fonts } from "../../style/typography";

import { TimelineProps, TimelineItemProps } from "./types";

//
//

const TimelineItemContainer: StyledComponent<
  Partial<TimelineItemProps>,
  any,
  {}
> = styled.div`
  position: relative;
  margin-bottom: ${props => (props.showLogo ? "10px" : "20px")};

  &:last-child {
    margin-bottom: 0;
  }
`;

//

const TimelineItemHeaderContainer: StyledComponent<
  Partial<TimelineItemProps>,
  any,
  {}
> = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: ${props => (props.showLogo ? "0" : "10px")};

  p.Content {
    font-size: 26px;
    font-weight: 600;
    font-family: ${fonts.secondary};
  }
`;

const TimelineItemHeaderLogo: StyledComponent<{}, {}, {}> = styled.div`
  display: block;
  width: 0;
  height: 0;
  position: relative;
  left: 5px;

  img.Logo {
    max-width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    filter: grayscale(100%);
    width: 90%;
  }
`;

//
//

const TimelineItemBody: StyledComponent<any, any, any> = styled.div`
  border-left: 2px solid ${lightGrey};
  position: relative;

  margin-left: 10px;
  padding-left: 20px;
`;

const TimelineItemBodySection1: StyledComponent<any, any, any> = styled.div`
  margin-bottom: 15px;
  position: relative;

  &:last-child {
    margin-bottom: 0;
  }

  .Section1-Title {
    font-size: 22px;
    margin-bottom: 15px;
  }

  &:before {
    border-radius: 100%;
    background-color: ${transparent};
    box-shadow: 0 0 3px 10px ${white};

    display: block;
    position: absolute;
    left: -29.5px;
    top: 3px;
    width: 15px;
    height: 15px;
    content: "";
  }
`;

const TimelineItemBodySection2: StyledComponent<{}, {}, {}> = styled.div`
  margin-bottom: 15px;

  &:last-child {
    margin-bottom: 0;
  }

  .Section2-Title {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 10px;

    .Link {
      font-size: 14px;
    }
  }
`;

const TimelineItemText: StyledComponent<{}, {}, {}> = styled.p`
  font-family: ${fonts.text};
  font-size: 17px;
  line-height: 130%;
  padding-bottom: 10px;

  &:last-child {
    padding-bottom: 0;
  }
`;

//

const Container: StyledComponent<
  TimelineProps,
  TimelineProps,
  {}
> = styled.section`
  position: relative;

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
