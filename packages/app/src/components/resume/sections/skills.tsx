import React, { FunctionComponent } from "react";
import styled, { StyledComponent } from "@emotion/styled";

import { Card } from "@kashyaprahul94/portfolio-style/lib/components/card";
import { AccentBadge } from "@kashyaprahul94/portfolio-style/lib/components/badge";
import { Donut } from "@kashyaprahul94/portfolio-style/lib/components/charts/donut";

import { sizes } from "@kashyaprahul94/portfolio-style/lib/style/typography";
import {
  layout,
  alignment,
  display,
} from "@kashyaprahul94/portfolio-style/lib/style/layout";
import { dimensions } from "@kashyaprahul94/portfolio-style/lib/style/dimension";

import { IAreaOfExpertise, IExpertSkill, IOtherSkill } from "@data/types";

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
              <AccentBadge key={skill} variant="primary">
                {skill}
              </AccentBadge>
            ))}
          </SubSection>
          <SubSection>
            <Title>Others</Title>
            {others.map(skill => (
              <AccentBadge key={skill} variant="secondary">
                {skill}
              </AccentBadge>
            ))}
          </SubSection>
        </Section>
        <Section>
          <DonutTitle center={true}>Area of expertise</DonutTitle>
          <Donut size={230} stroke={10} items={areaOfExpertise} legend={true} />
        </Section>
      </SectionContainer>
    </Card>
  );
};

interface TitleProps {
  center?: boolean;
}

export interface PageProps {
  areaOfExpertise: ReadonlyArray<IAreaOfExpertise>;
  expertise: ReadonlyArray<IExpertSkill>;
  others: ReadonlyArray<IOtherSkill>;
}

export default Skills;
export { Skills };
