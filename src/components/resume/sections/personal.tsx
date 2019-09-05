import React, { FunctionComponent } from "react";
import styled, { StyledComponent } from "@emotion/styled";

import { Card } from "../../card";
import { Location, Mobile, Email, LinkedIn, GitHub } from "../../icons";

import { midnightblue } from "../../../style/color";
import { fonts, sizes } from "../../../style/typography";

import { IPersonalInfo } from "../../../data/types";

//

const Title: StyledComponent<{}, {}, {}> = styled.h1`
  font-size: ${sizes.hero};
  margin-bottom: 5px;
`;

const SubTitle: StyledComponent<{}, {}, {}> = styled.h2`
  font-size: ${sizes.jumbo};
  font-family: ${fonts.text};
  margin-bottom: 20px;
`;

const InfoItemContainer: StyledComponent<{}, {}, {}> = styled.div`
  margin-bottom: 10px;
`;

const InfoItem = ({ title, Icon = null }) => (
  <InfoItemContainer>
    {Icon && <Icon size={24} color={midnightblue} />}
    <span>{title}</span>
  </InfoItemContainer>
);

const InfoRow: StyledComponent<{}, {}, {}> = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

const InfoColumn: StyledComponent<{}, {}, {}> = styled.div`
  width: 50%;
`;

const Personal: FunctionComponent<PageProps> = ({ info }) => {
  return (
    <Card padding={true} transparent={true}>
      <InfoRow>
        <InfoColumn>
          <Title>
            {info.firstName} {info.lastName}
          </Title>
          <SubTitle>{info.title}</SubTitle>
        </InfoColumn>

        <InfoColumn>
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
        </InfoColumn>
      </InfoRow>
    </Card>
  );
};

export interface PageProps {
  info: IPersonalInfo;
}

export default Personal;
export { Personal };
