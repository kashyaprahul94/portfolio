import React, { FunctionComponent } from "react";
import styled, { StyledComponent } from "@emotion/styled";

import { Card } from "../../card";
import { Location, Mobile, Email, LinkedIn, GitHub } from "../../icons";

import { secondary, darkGrey } from "../../../style/color";
import { fonts, sizes } from "../../../style/typography";
import { layout, alignment, display } from "../../../style/layout";
import { dimensions } from "../../../style/dimension";

import { IEducation } from "../../../data/types";

const Row: StyledComponent<{}, {}, {}> = styled.div`
  display: ${display.flex};
  width: ${dimensions.full};
  align-items: ${alignment.center};
  // justify-content: ${alignment.spaceBetween};

  ${layout.belowM(`
    flex-direction: ${display.column};
  `)}
`;

const Column: StyledComponent<{}, {}, {}> = styled.div``;

const Education: FunctionComponent<PageProps> = ({ education }) => {
  return (
    <Card padding={true} transparent={true} title="Education">
      <Row>
        {education.map((educationItem: IEducation, index: number) => {
          return (
            <Column key={index}>
              <p>{educationItem.title}</p>
              <p>{educationItem.institute}</p>
              <p>
                {educationItem.city}, {educationItem.country}
              </p>
              <p>{educationItem.score}</p>
              <p>{educationItem.title}</p>
            </Column>
          );
        })}
      </Row>
    </Card>
  );
};

export interface PageProps {
  education: IEducation[];
}

export default Education;
export { Education };
