import React, { FunctionComponent } from "react";

import { pumpkin } from "../../../style/color";

import { Card } from "../../card";
import {
  VerticalTimeline,
  VerticalTimelineItem,
  VerticalTimelineItemContentSection1,
  VerticalTimelineItemContentSection2,
  VerticalTimelineItemText,
} from "../vertical-timeline";

import { IExperience, IExperienceRole, IProject } from "../../../data/types";

const Projects: FunctionComponent<PageProps> = ({ experience }) => {
  return (
    <Card padding={true} transparent={true} title="Projects">
      <VerticalTimeline color={pumpkin}>
        {experience.map((experienceItem: IExperience, _index: number) => (
          <VerticalTimelineItem
            title={experienceItem.company}
            logo={experienceItem.logo}
            key={_index}
          >
            {experienceItem.roles.map(
              (roleItem: IExperienceRole, __index: number) => (
                <VerticalTimelineItemContentSection1
                  title={roleItem.title}
                  key={__index}
                >
                  {roleItem.projects.map(
                    (projectItem: IProject, ___index: number) => (
                      <VerticalTimelineItemContentSection2
                        title={projectItem.title}
                        link={projectItem.link}
                        key={___index}
                      >
                        {projectItem.description.map(
                          (description: string, ____index: number) => (
                            <VerticalTimelineItemText key={____index}>
                              {description}
                            </VerticalTimelineItemText>
                          ),
                        )}
                      </VerticalTimelineItemContentSection2>
                    ),
                  )}
                </VerticalTimelineItemContentSection1>
              ),
            )}
          </VerticalTimelineItem>
        ))}
      </VerticalTimeline>
    </Card>
  );
};

export interface PageProps {
  experience: IExperience[];
}

export default Projects;
export { Projects };
