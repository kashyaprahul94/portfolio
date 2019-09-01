import React, { Component, FunctionComponent } from "react";

import { Chip as Chips } from "../components/chips";
import { Card } from "../components/card";
import { Donut } from "../components/charts/donut";
import { Sheet } from "../components/resume/sheet";
import {
  Timeline,
  TimelineItem,
  TimelineItemContentSection1,
  TimelineItemContentSection2,
  TimelineItemText,
} from "../components/resume/timeline";

import {
  personalInfo,
  experienceInfo,
  IPersonalInfo,
  IExperience,
  IExperienceRole,
  IProject,
} from "../data";

import color, { teal, midnightblue, pumpkin, concrete } from "../style/color";

import { IPageProps } from "../types";

class Resume extends Component<PageProps> {
  public static readonly title = "Rahul Kashyap : Resume";
  public static readonly showHeader = false;

  public static async getInitialProps({ query }) {
    return {
      printMode: query.print || false,
      data: {
        personal: personalInfo,
        experience: experienceInfo,
      },
    };
  }

  public render() {
    const {
      printMode,
      data: { personal, experience },
    } = this.props;

    const skills = [
      "TypeScript",
      "Node.JS",
      "GraphQL",
      "Docker",
      "Kubernetes",
      "Cloud Native Architecture",
    ];

    const areaOfExpertise = [
      {
        title: "Cloud Native Architecture",
        value: 40,
        color: teal,
      },
      {
        title: "Full Stack Engineering",
        value: 30,
        color: midnightblue,
      },
      {
        title: "DevOps",
        value: 20,
        color: pumpkin,
      },
      {
        title: "Mobile Dvelopment",
        value: 10,
        color: concrete,
      },
    ];

    return (
      <>
        <Sheet printMode={printMode}>
          <Card padding={true} transparent={true}>
            <p>{personal.firstName}</p>
            <p>{personal.lastName}</p>
            <p>{personal.country}</p>
            <p>{personal.city}</p>
          </Card>
          <Card padding={true} transparent={true} title="Education" />
          <Card padding={true} transparent={true} title="Experience" />

          <Card padding={true} transparent={true}>
            <div
              style={{
                margin: "auto",
              }}
            >
              <Donut
                size={200}
                stroke={15}
                items={areaOfExpertise}
                legend={true}
              />
            </div>

            <div
              style={{
                width: "100%",
              }}
            >
              {skills.map(skill => (
                <Chips key={skill} variant="primary">
                  {skill}
                </Chips>
              ))}
            </div>
          </Card>

          <Card padding={true} transparent={true} title="Achievements" />
        </Sheet>

        <Sheet printMode={printMode}>
          <Card padding={true} transparent={true} title="Projects">
            <Timeline color={color.pumpkin}>
              {experience.map((experienceItem: IExperience, _index: number) => (
                <TimelineItem
                  key={_index}
                  company={experienceItem.company}
                  logo={experienceItem.logo}
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
        </Sheet>
      </>
    );
  }
}

export interface PageProps extends IPageProps {
  printMode?: boolean;

  data: {
    personal: IPersonalInfo;
    experience: IExperience[];
  };
}

export default Resume;
