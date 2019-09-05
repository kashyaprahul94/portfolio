import React, { FunctionComponent } from "react";
import styled, { StyledComponent } from "@emotion/styled";

import { Card } from "../../card";
import { Chip } from "../../chips";
import { Donut } from "../../charts/donut";

import { sizes } from "../../../style/typography";

import {
  IAreaOfExpertise,
  IExpertSkills,
  IOtherSkills,
} from "../../../data/types";

const Title: StyledComponent<{}, {}, {}> = styled.h1`
  font-size: ${sizes.l};
  margin: 5px 0;
`;

const SectionContainer: StyledComponent<{}, {}, {}> = styled.div`
  display: flex;
  align-items: center;
`;
const Section: StyledComponent<{}, {}, {}> = styled.div`
  width: 100%;
`;

const Skills: FunctionComponent<PageProps> = ({
  areaOfExpertise,
  expertise,
  others,
}) => {
  return (
    <Card padding={true} transparent={true} title="Skills">
      <SectionContainer>
        <Section>
          <Title>Daily Driver</Title>
          {expertise.map(skill => (
            <Chip key={skill} variant="primary">
              {skill}
            </Chip>
          ))}
          <Title>Others</Title>
          {others.map(skill => (
            <Chip key={skill} variant="secondary">
              {skill}
            </Chip>
          ))}
        </Section>

        <Section>
          <div>
            <Donut
              size={230}
              stroke={15}
              items={areaOfExpertise}
              legend={true}
            />
          </div>
        </Section>
      </SectionContainer>
    </Card>
  );
};

export interface PageProps {
  areaOfExpertise: IAreaOfExpertise[];
  expertise: IExpertSkills;
  others: IOtherSkills;
}

export default Skills;
export { Skills };
