import React, { FunctionComponent } from "react";
import styled, { StyledComponent } from "@emotion/styled";

import { Card } from "@components/card";
import { ResponsiveGrid } from "@components/grid";

import {
  darkGrey,
  primary,
  secondary,
  danger,
  white,
  lighterGrey,
} from "@style/color";
import { fonts, sizes, weights, text, lineHeight } from "@style/typography";
import { position, display, alignment, border, layout } from "@style/layout";
import { dimensions } from "@style/dimension";

import { IExperience } from "@data/types";

const Container: StyledComponent<{}, {}, {}> = styled.div`
  padding-top: ${dimensions.l};
  width: ${dimensions.full};
`;

const ItemContainer: StyledComponent<{}, {}, {}> = styled.div`
  margin-top: ${dimensions.xxl};
  margin-bottom: ${dimensions.xxl};
  padding: ${dimensions.m};
`;

const Item: StyledComponent<{}, {}, {}> = styled.div`
  display: ${display.flex};
  align-items: ${alignment.center};

  ${layout.belowM(`
    text-align: ${alignment.center};
    flex-direction: ${display.column};
  `)}
`;

const Logo: StyledComponent<
  { color: string },
  { color: string },
  {}
> = styled.div`
  position: ${position.relative};

  width: ${dimensions.icon.xl};
  min-width: ${dimensions.icon.xl};
  height: ${dimensions.icon.xl};
  min-height: ${dimensions.icon.xl};

  background: ${white};

  margin-right: ${dimensions.xl};

  border: ${border.width.m} ${border.style.dotted} ${lighterGrey};
  border-radius: ${dimensions.full};

  ${layout.belowM(`
    margin-bottom: ${dimensions.xl};
    margin-right: ${dimensions.zero};
  `)}

  img {
    position: ${position.absolute};
    top: ${dimensions.zero};
    bottom: ${dimensions.zero};
    left: ${dimensions.zero};
    right: ${dimensions.zero};

    margin: ${dimensions.auto};
    padding: ${dimensions.m};

    width: ${dimensions.full};
    max-width: ${dimensions.full};
  }
`;

const Content: StyledComponent<{}, {}, {}> = styled.div`
  font-size: ${sizes.m};
  font-family: ${fonts.text};
`;

const Company: StyledComponent<{}, {}, {}> = styled.h3`
  font-size: ${sizes.l};
  font-weight: ${weights.bolder};
  margin-bottom: ${dimensions.s};
`;

const Place: StyledComponent<{}, {}, {}> = styled.p`
  margin-top: ${dimensions.m};
`;

const Duration: StyledComponent<{}, {}, {}> = styled.span`
  font-style: ${text.italic};
  font-family: ${fonts.secondary};
  font-size: calc(${dimensions.half} + ${dimensions.quarter});
  color: ${darkGrey};
`;

const Description: StyledComponent<{}, {}, {}> = styled.p`
  margin-top: ${dimensions.m};
  font-size: ${sizes.s};
  line-height: ${lineHeight.medium};
`;

const Experience: FunctionComponent<PageProps> = ({ experience }) => {
  const colors = [primary, secondary, danger];
  return (
    <Card padding={true} transparent={true} title="Experience">
      <Container>
        <ResponsiveGrid columns={2}>
          {experience.map((experienceItem: IExperience, index: number) => {
            const place = `${experienceItem.city}, ${experienceItem.country}`;
            const duration = `${experienceItem.from} - ${experienceItem.to ||
              "Present"}`;
            return (
              <ItemContainer key={index}>
                <Item>
                  <Logo color={colors[index]}>
                    <img src={experienceItem.logo} />
                  </Logo>
                  <Content>
                    <Company>{experienceItem.company}</Company>
                    <Place>
                      {place} <Duration>{duration}</Duration>
                    </Place>
                    <Description>{experienceItem.description}</Description>
                  </Content>
                </Item>
              </ItemContainer>
            );
          })}
        </ResponsiveGrid>
      </Container>
    </Card>
  );
};

export interface PageProps {
  experience: ReadonlyArray<IExperience>;
}

export default Experience;
export { Experience };
