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
  font-size: ${sizes.m};
`;

const SectionContainer: StyledComponent<{}, {}, {}> = styled.div`
  display: flex;
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
      <div>
        <Donut size={150} stroke={10} items={areaOfExpertise} legend={true} />
      </div>

      <SectionContainer>
        <Section>
          <Title>Daily Driver:</Title>
          {expertise.map(skill => (
            <Chip key={skill} variant="primary">
              {skill}
            </Chip>
          ))}
        </Section>

        <Section>
          <Title>Others:</Title>
          {others.map(skill => (
            <Chip key={skill} variant="secondary">
              {skill}
            </Chip>
          ))}
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
