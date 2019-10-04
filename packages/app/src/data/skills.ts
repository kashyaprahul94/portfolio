import { primary, secondary, danger } from "@style/color";

import { IAreaOfExpertise, IExpertSkill, IOtherSkill } from "./types";

const expertSkills: ReadonlyArray<IExpertSkill> = [
  "Node.JS",
  "TypeScript/JavaScript (ESNext)",
  "GraphQL",
  "Docker",
  "Kubernetes",
  "Microservices",
  "Message Brokers",
  "Cloud Architecture",
];

const otherSkills: ReadonlyArray<IOtherSkill> = [
  "Swift",
  "React",
  "Angular",
  "Redis",
  "MongoDB",
  "OAuth 2",
  "Elasticsearch",
  "CI/CD",
  "CloudFoundry",
  "SAP Cloud Platform",
  "Google Cloud Platform",
  "Distributed Systems",
  "Internet of Things",
];

const areaOfExpertise: ReadonlyArray<IAreaOfExpertise> = [
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
    title: "Mobile Development",
    value: 10,
    color: danger,
  },
];

export { expertSkills, otherSkills, areaOfExpertise };
