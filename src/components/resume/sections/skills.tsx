import React, { FunctionComponent } from "react";

import { Card } from "../../card";
import { Chip } from "../../chips";
import { Donut } from "../../charts/donut";

import {
  IAreaOfExpertise,
  IExpertSkills,
  IOtherSkills,
} from "../../../data/types";

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

      <div>
        <div>
          <h1>Daily Driver:</h1>
          {expertise.map(skill => (
            <Chip key={skill} variant="primary">
              {skill}
            </Chip>
          ))}
        </div>

        <div>
          <h1>Others:</h1>
          {others.map(skill => (
            <Chip key={skill} variant="midnightblue">
              {skill}
            </Chip>
          ))}
        </div>
      </div>
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
