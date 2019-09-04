import React, { Component } from "react";

import { Chip as Chips } from "../components/chips";
import { Card } from "../components/card";
import { Location, Mobile, Email, LinkedIn, GitHub } from "../components/icons";
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

const InfoItem = ({ title, Icon = null }) => (
  <p
    style={{
      marginBottom: "5px",
    }}
  >
    {Icon && <Icon size={24} color={teal} />}
    <span>{title}</span>
  </p>
);
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
      "Microservices",
      "Message Brokers",
      "12 Factor Cloud Apps",
    ];

    const other = [
      "MongoDB",
      "React",
      "Angular",
      "Jest/Mocha",
      "Cypress",
      "Babel/Webpack",
      "PWA",
      "Redis",
      "Apache Kafka",
      "CloudFoundry",
      "SAP Cloud Platform",
      "Google Cloud Platform",
      "OAuth 2",
      "Jenkins",
      "Swift",
    ];

    const areaOfExpertise = [
      {
        title: "Cloud Native Engineering",
        value: 60,
        color: teal,
      },
      {
        title: "DevOps",
        value: 30,
        color: midnightblue,
      },
      {
        title: "Mobile Dvelopment",
        value: 10,
        color: pumpkin,
      },
    ];

    return (
      <section>
        <Sheet printMode={printMode}>
          <Card padding={true} transparent={true}>
            <InfoItem title={personal.firstName} />
            <InfoItem title={personal.lastName} />
            <InfoItem
              title={`${personal.city}, ${personal.country}`}
              Icon={Location}
            />
            <InfoItem title={personal.mobile} Icon={Mobile} />
            <InfoItem title={personal.email} Icon={Email} />
            <InfoItem title={personal.linkedIn} Icon={LinkedIn} />
            <InfoItem title={personal.gitHub} Icon={GitHub} />
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
              <div>
                <h1>Expertise:</h1>
                {skills.map(skill => (
                  <Chips key={skill} variant="primary">
                    {skill}
                  </Chips>
                ))}
              </div>

              <div>
                <h1>Other skills:</h1>
                {other.map(skill => (
                  <Chips key={skill} variant="secondary">
                    {skill}
                  </Chips>
                ))}
              </div>
            </div>
          </Card>

          <Card padding={true} transparent={true} title="Achievements" />
        </Sheet>

        <Sheet printMode={printMode}>
          <Card padding={true} transparent={true} title="Projects">
            <Timeline color={color.pumpkin}>
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
        </Sheet>
      </section>
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
