import React, { FunctionComponent } from "react";
import styled, { StyledComponent } from "@emotion/styled";

import { Card } from "@kashyaprahul94/portfolio-style/lib/components/card";
import {
  Location,
  Mobile,
  Email,
  LinkedIn,
  GitHub,
  Skype,
} from "@kashyaprahul94/portfolio-style/lib/components/icon";

import {
  darkGrey,
  primary,
} from "@kashyaprahul94/portfolio-style/lib/style/color";
import {
  fonts,
  sizes,
} from "@kashyaprahul94/portfolio-style/lib/style/typography";
import {
  layout,
  alignment,
  display,
} from "@kashyaprahul94/portfolio-style/lib/style/layout";
import {
  dimensions,
  fromUnit,
} from "@kashyaprahul94/portfolio-style/lib/style/dimension";

import { IPersonalInfo } from "@data/types";

import { ILink } from "../types";

//

const Title: StyledComponent<{}, {}, {}> = styled.h1`
  font-size: ${sizes.jumbo};
  margin-bottom: ${dimensions.m};

  ${layout.belowM(`
    text-align: ${alignment.center};
  `)}
`;

const SubTitle: StyledComponent<{}, {}, {}> = styled.h2`
  font-size: ${sizes.xxxl};
  font-family: ${fonts.text};
  margin-bottom: ${dimensions.m};

  ${layout.belowM(`
    text-align: ${alignment.center};
  `)}
`;

const InfoItemContainer: StyledComponent<{}, {}, {}> = styled.div`
  margin-bottom: ${dimensions.m};
`;

const Text: StyledComponent<{}, {}, {}> = styled.span`
  color: ${darkGrey};
`;

const Link: StyledComponent<
  {},
  { href?: string; target?: string },
  {}
> = styled.a`
  color: ${darkGrey};

  :hover {
    color: ${primary};
  }
`;

const createLink = (input: ILink) => {
  const { link, action, type } = input;

  switch (type) {
    case "email":
      return `mailto:${link}`;

    case "location":
      return `https://maps.google.com/?q= ${link}`;

    case "phone":
      return `tel:${String(link)
        .split(" ")
        .join("")}`;

    case "skype":
      return `skype:${link}?${action}`;

    case "http":
      return link.startsWith("https") ? link : `https://${link}`;

    default:
      return link;
  }
};

const createSkypeLink = (username: string, action: string = "chat") =>
  `skype:${username}?${action}`;

const InfoItem = ({ title, Icon = null }) => (
  <InfoItemContainer>
    {Icon && <Icon size={fromUnit(dimensions.xxl)} color={primary} />}
    <Text>{title}</Text>
  </InfoItemContainer>
);

const LinkInfoItem = ({ link, Icon = null }: { link: ILink; Icon: any }) => (
  <InfoItemContainer>
    {Icon && <Icon size={fromUnit(dimensions.xxl)} color={primary} />}
    <Link href={createLink(link)} target="_blank">
      <span>{link.link}</span>
    </Link>
  </InfoItemContainer>
);

const Row: StyledComponent<{}, {}, {}> = styled.div`
  display: ${display.flex};
  width: ${dimensions.full};
  align-items: ${alignment.center};
  justify-content: ${alignment.spaceBetween};

  ${layout.belowM(`
    flex-direction: ${display.column};
  `)}
`;

const Column: StyledComponent<{}, {}, {}> = styled.div``;

const InfoRow: StyledComponent<{}, {}, {}> = styled.div`
  display: ${display.flex};
  width: ${dimensions.full};
  align-items: ${alignment.center};

  ${layout.belowM(`
    flex-direction: ${display.column};
    text-align: ${alignment.center};
  `)}
`;

const InfoColumn: StyledComponent<{}, {}, {}> = styled.div`
  padding-left: ${dimensions.xl};
`;

const Personal: FunctionComponent<PageProps> = ({ info }) => {
  return (
    <Card padding={true} transparent={true}>
      <Row>
        <Column>
          <Title>
            {info.firstName} {info.lastName}
          </Title>
          <SubTitle>{info.title}</SubTitle>
        </Column>

        <Column>
          <InfoRow>
            <InfoColumn>
              <LinkInfoItem
                link={{
                  link: `${info.city}, ${info.country}`,
                  type: "location",
                }}
                Icon={Location}
              />
              <LinkInfoItem
                link={{ link: info.mobile, type: "phone" }}
                Icon={Mobile}
              />
              <LinkInfoItem
                link={{ link: info.email, type: "email" }}
                Icon={Email}
              />
            </InfoColumn>

            <InfoColumn>
              <LinkInfoItem
                link={{ link: info.gitHub, type: "http" }}
                Icon={GitHub}
              />
              <LinkInfoItem
                link={{ link: info.linkedIn, type: "http" }}
                Icon={LinkedIn}
              />
              <LinkInfoItem
                link={{ link: info.skype, type: "skype", action: "chat" }}
                Icon={Skype}
              />
            </InfoColumn>
          </InfoRow>
        </Column>
      </Row>
    </Card>
  );
};

export interface PageProps {
  info: IPersonalInfo;
}

export default Personal;
export { Personal };
