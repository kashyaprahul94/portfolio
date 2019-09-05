import React, { FunctionComponent } from "react";
import styled, { StyledComponent } from "@emotion/styled";

import { Card } from "../../card";
import { Badge } from "../../icons";

import { primary } from "../../../style/color";
import { fonts, sizes } from "../../../style/typography";

import { IAchievements } from "../../../data/types";

const AchievementItemContainer: StyledComponent<{}, {}, {}> = styled.p`
  font-size: 20px;
  font-family: ${fonts.text};
  font-weight: 300;
  margin-bottom: 8px;

  &:last-child {
    marginb-bottom: 0;
  }
`;

const AchievementItem: FunctionComponent<any> = ({ children }) => {
  return (
    <AchievementItemContainer>
      <Badge size={24} color={primary} />
      <span dangerouslySetInnerHTML={{ __html: children }} />
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
  achievements: IAchievements;
}

export default Achievements;
export { Achievements };
