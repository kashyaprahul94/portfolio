export interface IPersonalInfo {
  title: string;

  firstName: string;
  lastName: string;
  email: string;
  mobile: string;

  country: string;
  city: string;

  linkedIn: string;
  gitHub: string;
  website?: string;
  skype: string;
}

export interface IEducation {
  title: string;
  institute: string;
  city: string;
  country: string;
  from: number;
  to?: number;
  score: string;
  achievements: ReadonlyArray<string>;
}

export interface IProject {
  title: string;
  description: ReadonlyArray<string>;
  link?: string;
}

export interface IExperienceRole {
  title: string;
  projects: ReadonlyArray<IProject>;
}

export interface IExperience {
  company: string;
  from: string;
  to?: string;
  city: string;
  country: string;
  logo: string;
  description?: string;
  roles: ReadonlyArray<IExperienceRole>;
}

export type IExpertSkill = string;
export type IOtherSkill = string;
export interface IAreaOfExpertise {
  title: string;
  value: number;
  color: string;
}

export type IAchievement = string;
