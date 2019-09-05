import { teal, midnightblue, pumpkin } from "../style/color";

import { IAreaOfExpertise, IExpertSkills, IOtherSkills } from "./types";

const expertSkills: IExpertSkills = [
  "TypeScript",
  "Node.JS",
  "GraphQL",
  "Docker",
  "Kubernetes",
  "Microservices",
  "Message Brokers",
  "Cloud Architecture",
];

const otherSkills: IOtherSkills = [
  "MongoDB",
  "React",
  "Angular",
  "Redis",
  "Apache Kafka",
  "Jenkins",
  "CloudFoundry",
  "SAP Cloud Platform",
  "Google Cloud Platform",
  "OAuth 2",
  "Swift",
];

const areaOfExpertise: IAreaOfExpertise[] = [
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

export { expertSkills, otherSkills, areaOfExpertise };
