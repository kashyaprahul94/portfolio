import React, { Component } from "react";

import { Sheet } from "@components/resume/sheet";
import { Personal as PersonalInfoSection } from "@components/resume/sections/personal";
import { Experience as ExperienceSection } from "@components/resume/sections/experience";
import { Education as EducationSection } from "@components/resume/sections/education";
import { Skills as SkillsSection } from "@components/resume/sections/skills";
import { Achievements as AchievementsSection } from "@components/resume/sections/achievements";
import { Projects as ProjectSection } from "@components/resume/sections/projects";

import {
  personalInfo,
  IPersonalInfo,
  //
  educationInfo,
  IEducation,
  //
  experienceInfo,
  IExperience,
  //
  areaOfExpertise,
  expertSkills,
  otherSkills,
  IAreaOfExpertise,
  IExpertSkill,
  IOtherSkill,
  //
  achievementInfo,
  IAchievement,
} from "@data";

import { IPageProps } from "@types";

class Resume extends Component<PageProps> {
  public static readonly title = "Rahul Kashyap : Resume";
  public static readonly showHeader = false;

  public static async getInitialProps({ query }): Promise<Partial<PageProps>> {
    return {
      printMode: query.print || false,
      data: {
        personal: personalInfo,
        education: educationInfo,
        experience: experienceInfo,
        skills: {
          areaOfExpertise,
          expertise: expertSkills,
          others: otherSkills,
        },
        achievements: achievementInfo,
      },
    };
  }

  public render() {
    const {
      printMode,
      data: { personal, education, experience, skills, achievements },
    } = this.props;

    return (
      <section>
        <Sheet printMode={printMode}>
          <PersonalInfoSection info={personal} />

          <EducationSection education={education} />

          <ExperienceSection experience={experience} />

          <SkillsSection
            areaOfExpertise={skills.areaOfExpertise}
            expertise={skills.expertise}
            others={skills.others}
          />

          <AchievementsSection achievements={achievements} />
        </Sheet>

        <Sheet printMode={printMode}>
          <ProjectSection experience={experience} />
        </Sheet>
      </section>
    );
  }
}

export interface PageProps extends IPageProps {
  printMode?: boolean;

  data: {
    personal: Readonly<IPersonalInfo>;
    education: ReadonlyArray<IEducation>;
    experience: ReadonlyArray<IExperience>;
    skills: {
      areaOfExpertise: ReadonlyArray<IAreaOfExpertise>;
      expertise: ReadonlyArray<IExpertSkill>;
      others: ReadonlyArray<IOtherSkill>;
    };
    achievements: ReadonlyArray<IAchievement>;
  };
}

export default Resume;
