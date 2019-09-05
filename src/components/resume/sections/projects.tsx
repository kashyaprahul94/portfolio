import React, { FunctionComponent } from "react";

import { pumpkin } from "../../../style/color";

import { Card } from "../../card";
import {
  Timeline,
  TimelineItem,
  TimelineItemContentSection1,
  TimelineItemContentSection2,
  TimelineItemText,
} from "../timeline";

import { IExperience, IExperienceRole, IProject } from "../../../data/types";

const Projects: FunctionComponent<PageProps> = ({ experience }) => {
  return (
    <Card padding={true} transparent={true} title="Projects">
      <Timeline color={pumpkin}>
        {experience.map((experienceItem: IExperience, _index: number) => (
          <TimelineItem
            company={experienceItem.company}
            logo={experienceItem.logo}
            key={_index}
          >
            {experienceItem.roles.map(
              (roleItem: IExperienceRole, __index: number) => (
                <TimelineItemContentSection1
                  title={roleItem.title}
                  key={__index}
                >
                  {roleItem.projects.map(
                    (projectItem: IProject, ___index: number) => (
                      <TimelineItemContentSection2
                        title={projectItem.title}
                        link={projectItem.link}
                        key={___index}
                      >
                        {projectItem.description.map(
                          (description: string, ____index: number) => (
                            <TimelineItemText key={____index}>
                              {description}
                            </TimelineItemText>
                          ),
                        )}
                      </TimelineItemContentSection2>
                    ),
                  )}
                </TimelineItemContentSection1>
              ),
            )}
          </TimelineItem>
        ))}
      </Timeline>
    </Card>
  );
};

export interface PageProps {
  experience: IExperience[];
}

export default Projects;
export { Projects };
