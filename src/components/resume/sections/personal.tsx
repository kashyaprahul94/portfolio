import React, { FunctionComponent } from "react";
import styled, { StyledComponent } from "@emotion/styled";

import { Card } from "../../card";
import { Location, Mobile, Email, LinkedIn, GitHub } from "../../icons";

import { midnightblue } from "../../../style/color";
import { fonts, sizes } from "../../../style/typography";
import { layout, alignment, display } from "../../../style/layout";
import { dimensions } from "../../../style/dimension";

import { IPersonalInfo } from "../../../data/types";

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

const InfoItem = ({ title, Icon = null }) => (
  <InfoItemContainer>
    {Icon && <Icon size={24} color={midnightblue} />}
    <span>{title}</span>
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
              <InfoItem title={info.gitHub} Icon={GitHub} />
              <InfoItem title={info.linkedIn} Icon={LinkedIn} />
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
