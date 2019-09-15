import React, { FunctionComponent } from "react";
import styled, { StyledComponent } from "@emotion/styled";

import { Card } from "@components/card";
import { Badge } from "@components/icons";

import { primary } from "@style/color";
import { fonts, sizes, weights } from "@style/typography";
import { dimensions, fromUnit } from "@style/dimension";
import { display, alignment } from "@style/layout";

import { IAchievement } from "@data/types";

const AchievementItemContainer: StyledComponent<{}, {}, {}> = styled.div`
  margin-bottom: ${dimensions.m};

  &:last-of-type {
    marginb-bottom: ${dimensions.zero};
  }
`;

const AchievementItemContent: StyledComponent<{}, {}, {}> = styled.p`
  display: ${display.flex};
  align-items: ${alignment.center};

  font-size: ${sizes.m};
  font-family: ${fonts.text};
  font-weight: ${weights.normal};
`;

const AchievementItem: FunctionComponent<any> = ({ children }) => {
  return (
    <AchievementItemContainer>
      <AchievementItemContent>
        <Badge
          size={fromUnit(dimensions.xxl) + fromUnit(dimensions.s)}
          color={primary}
        />
        <span dangerouslySetInnerHTML={{ __html: children }} />
      </AchievementItemContent>
    </AchievementItemContainer>
  );
};

const Achievements: FunctionComponent<PageProps> = ({ achievements }) => {
  return (
    <Card padding={true} transparent={true} title="Achievements">
      {achievements.map((achievement, index) => {
        return <AchievementItem key={index}>{achievement}</AchievementItem>;
      })}
    </Card>
  );
};

export interface PageProps {
  achievements: IAchievement[];
}

export default Achievements;
export { Achievements };
