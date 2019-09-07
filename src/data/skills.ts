import { primary, secondary, danger } from "../style/color";

import { IAreaOfExpertise, IExpertSkill, IOtherSkill } from "./types";

const expertSkills: IExpertSkill[] = [
  "Node.JS",
  "TypeScript/JavaScript (ESNext)",
  "GraphQL",
  "Docker",
  "Kubernetes",
  "Microservices",
  "Message Brokers",
  "Cloud Architecture",
];

const otherSkills: IOtherSkill[] = [
  "OAuth 2",
  "Swift",
  "React",
  "Angular",
  "Redis",
  "MongoDB",
  "Apache Kafka",
  "CI/CD",
  "CloudFoundry",
  "SAP Cloud Platform",
  "Google Cloud Platform",
];

const areaOfExpertise: IAreaOfExpertise[] = [
  {
    title: "Cloud Native Engineering",
    value: 60,
    color: primary,
  },
  {
    title: "DevOps",
    value: 30,
    color: secondary,
  },
  {
    title: "Mobile Dvelopment",
    value: 10,
    color: danger,
  },
];

export { expertSkills, otherSkills, areaOfExpertise };
