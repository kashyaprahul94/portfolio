import { primary, secondary, danger } from "../style/color";

import { IAreaOfExpertise, IExpertSkills, IOtherSkills } from "./types";

const expertSkills: IExpertSkills = [
  "Node.JS",
  "TypeScript/JavaScript (ESNext)",
  "GraphQL",
  "Docker",
  "Kubernetes",
  "Microservices",
  "Message Brokers",
  "Cloud Architecture",
];

const otherSkills: IOtherSkills = [
  "OAuth 2",
  "Swift",
  "React",
  "Angular",
  "Redis",
  "MongoDB",
  "Apache Kafka",
  "Jenkins",
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
