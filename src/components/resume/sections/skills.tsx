import React, { FunctionComponent } from "react";
import styled, { StyledComponent } from "@emotion/styled";

import { Card } from "../../card";
import { Chip } from "../../chips";
import { Donut } from "../../charts/donut";

import { sizes } from "../../../style/typography";
import { layout, alignment, display } from "../../../style/layout";
import { dimensions } from "../../../style/dimension";

import {
  IAreaOfExpertise,
  IExpertSkill,
  IOtherSkill,
} from "../../../data/types";

const Title: StyledComponent<TitleProps, TitleProps, {}> = styled.h1`
  font-size: ${sizes.l};
  margin: ${dimensions.m} ${dimensions.zero};
  text-align: ${props => (props.center ? alignment.center : alignment.left)};

  ${layout.belowM(`
    text-align: ${alignment.center};
  `)}
`;

const SectionContainer: StyledComponent<{}, {}, {}> = styled.div`
  display: ${display.flex};
  align-items: ${alignment.center};

  ${layout.belowM(`
    flex-direction: ${display.column};
  `)}
`;
const Section: StyledComponent<{}, {}, {}> = styled.div`
  width: ${dimensions.full};
`;

const SubSection: StyledComponent<{}, {}, {}> = styled.div`
  margin-top: ${dimensions.xxl};

  &:first-of-type {
    margin-top: ${dimensions.zero};
  }

  ${layout.belowM(`
    text-align: ${alignment.center};
  `)}
`;

const DonutTitle: StyledComponent<TitleProps, TitleProps, {}> = styled(Title)`
  margin-top: ${dimensions.xxl};
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
          <SubSection>
            <Title>Daily Driver</Title>
            {expertise.map(skill => (
              <Chip key={skill} variant="primary">
                {skill}
              </Chip>
            ))}
          </SubSection>
          <SubSection>
            <Title>Others</Title>
            {others.map(skill => (
              <Chip key={skill} variant="secondary">
                {skill}
              </Chip>
            ))}
          </SubSection>
        </Section>
        <Section>
          <DonutTitle center={true}>Area of interest</DonutTitle>
          <Donut size={200} stroke={13} items={areaOfExpertise} legend={true} />
        </Section>
      </SectionContainer>
    </Card>
  );
};

interface TitleProps {
  center?: boolean;
}

export interface PageProps {
  areaOfExpertise: IAreaOfExpertise[];
  expertise: IExpertSkill[];
  others: IOtherSkill[];
}

export default Skills;
export { Skills };
