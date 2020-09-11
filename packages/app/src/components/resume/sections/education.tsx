import React, { FunctionComponent } from "react";
import styled, { StyledComponent } from "@emotion/styled";

import { Card } from "@kashyaprahul94/portfolio-style/lib/components/card";
import {
  Star,
  Trophy,
  GraduationCap,
} from "@kashyaprahul94/portfolio-style/lib/components/icon";

import {
  darkGrey,
  primary,
} from "@kashyaprahul94/portfolio-style/lib/style/color";
import {
  fonts,
  sizes,
  weights,
  text,
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

import { IEducation, IAchievement } from "@data/types";

const Row: StyledComponent<{}, {}, {}> = styled.div`
  display: ${display.flex};
  width: ${dimensions.full};
  align-items: ${alignment.center};
  justify-content: ${alignment.spaceAround};
  flex-wrap: ${display.wrap};

  ${layout.belowM(`
    flex-direction: ${display.column};
  `)}
`;

const Column: StyledComponent<{}, {}, {}> = styled.div`
  margin-top: ${dimensions.m};
  margin-bottom: ${dimensions.m};

  ${layout.belowM(`
    text-align: ${alignment.center};
    justify-content: ${alignment.center};
  `)}
`;

const Title: StyledComponent<{}, {}, {}> = styled.p`
  font-size: ${sizes.l};
  font-family: ${fonts.text};
  font-weight: ${weights.bolder};
  margin-bottom: ${dimensions.s};
`;
const Institute: StyledComponent<{}, {}, {}> = styled.p`
  font-size: ${sizes.m};
  font-family: ${fonts.text};
  margin-bottom: ${dimensions.m};
`;

const InfoContainer: StyledComponent<{}, {}, {}> = styled.div`
  display: ${display.flex};
  width: ${dimensions.full};
  align-items: ${alignment.center};
  justify-content: ${alignment.spaceBetween};
  margin-bottom: ${dimensions.s};
`;

const InfoItem: StyledComponent<{}, {}, {}> = styled.p`
  margin-bottom: ${dimensions.s};
  font-style: ${text.italic};
  font-family: ${fonts.secondary};
  font-size: ${sizes.s};
  color: ${darkGrey};
`;

const ScoreContainer: StyledComponent<{}, {}, {}> = styled.div`
  display: ${display.flex};
  width: ${dimensions.full};
  align-items: ${alignment.center};
  margin-bottom: ${dimensions.s};

  ${layout.belowM(`
    text-align: ${alignment.center};
    justify-content: ${alignment.center};
  `)}
`;
const Score: StyledComponent<{}, {}, {}> = styled.p``;

const AchievementContainer: StyledComponent<{}, {}, {}> = styled.div`
  display: ${display.flex};
  width: ${dimensions.full};
  align-items: ${alignment.center};
  margin-bottom: ${dimensions.s};

  ${layout.belowM(`
    text-align: ${alignment.center};
    justify-content: ${alignment.center};
  `)}
`;

const Achievement: StyledComponent<{}, {}, {}> = styled.p``;

const Spacer: FunctionComponent<any> = ({}) => {
  return <GraduationCap size={fromUnit(sizes.hero)} color={darkGrey} />;
};

const addSpacers = (education: ReadonlyArray<IEducation>) => {
  const input = [...education];

  const spacer: IEducation = {
    achievements: [],
    score: "0",
    city: "",
    country: "",
    from: 0,
    institute: "",
    title: "_SPACER_",
  };

  const totalEducationItems = education.length;
  const spacersNeeded = Math.ceil(totalEducationItems / 2);

  const totalItems = totalEducationItems + spacersNeeded;

  return new Array(totalItems)
    .fill(null)
    .map((_: any, index: number) => (index % 2 === 0 ? input.shift() : spacer));
};

const Education: FunctionComponent<PageProps> = ({ education }) => {
  return (
    <Card padding={true} transparent={true} title="Education">
      <Row>
        {addSpacers(education).map(
          (educationItem: IEducation, index: number) => {
            return (
              <Column key={index}>
                {educationItem.title === "_SPACER_" ? (
                  <Spacer />
                ) : (
                  <>
                    <Title>{educationItem.title}</Title>
                    <Institute>{educationItem.institute}</Institute>
                    <InfoContainer>
                      <InfoItem>
                        {educationItem.from} - {educationItem.to || "Present"}
                      </InfoItem>
                      <InfoItem>
                        {educationItem.city}, {educationItem.country}
                      </InfoItem>
                    </InfoContainer>
                    <ScoreContainer>
                      <Star size={fromUnit(sizes.m)} color={primary} />
                      <Score>{educationItem.score}</Score>
                    </ScoreContainer>
                    {educationItem.achievements.map(
                      (achievement: IAchievement, _index: number) => {
                        return (
                          <AchievementContainer key={_index}>
                            <Trophy size={fromUnit(sizes.m)} color={primary} />
                            <Achievement>{achievement}</Achievement>
                          </AchievementContainer>
                        );
                      },
                    )}
                  </>
                )}
              </Column>
            );
          },
        )}
      </Row>
    </Card>
  );
};

export interface PageProps {
  education: ReadonlyArray<IEducation>;
}

export default Education;
export { Education };
