import React, { FunctionComponent } from "react";
import styled, { StyledComponent } from "@emotion/styled";

import { Card } from "@components/card";
import { Location, Mobile, Email, LinkedIn, GitHub } from "@components/icon";

import { secondary, darkGrey, primary } from "@style/color";
import { fonts, sizes } from "@style/typography";
import { layout, alignment, display } from "@style/layout";
import { dimensions, fromUnit } from "@style/dimension";

import { IPersonalInfo } from "@data/types";

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

const createLink = (text: string) =>
  text.startsWith("https") ? text : `https://${text}`;

const InfoItem = ({ title, Icon = null, link = false }) => (
  <InfoItemContainer>
    {Icon && <Icon size={fromUnit(dimensions.xxl)} color={primary} />}
    {link ? (
      <a href={createLink(title)} target="_blank">
        <Text>{title}</Text>
      </a>
    ) : (
      <Text>{title}</Text>
    )}
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
              <InfoItem
                title={`${info.city}, ${info.country}`}
                Icon={Location}
              />
              <InfoItem title={info.mobile} Icon={Mobile} />
              <InfoItem title={info.email} Icon={Email} />
            </InfoColumn>

            <InfoColumn>
              <InfoItem title={info.gitHub} Icon={GitHub} link={true} />
              <InfoItem title={info.linkedIn} Icon={LinkedIn} link={true} />
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
