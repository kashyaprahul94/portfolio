import {
  primary,
  secondary,
  danger,
} from "@kashyaprahul94/portfolio-style/lib/style/color";

import { IAreaOfExpertise, IExpertSkill, IOtherSkill } from "./types";

const expertSkills: ReadonlyArray<IExpertSkill> = [
  "Node.JS",
  "TypeScript/JavaScript (ESNext)",
  "GraphQL",
  "Go",
  "Docker",
  "Kubernetes",
  "Microservices",
  "Message Brokers",
  "Cloud Architecture",
];

const otherSkills: ReadonlyArray<IOtherSkill> = [
  "RabbitMQ",
  "Redis",
  "MongoDB",
  "OAuth 2",
  "Hashicorp Vault",
  "Elasticsearch",
  "CI/CD",
  "CloudFoundry",
  "Cloud Hyperscalers",
  "Distributed Systems",
  "Internet of Things",
];

const areaOfExpertise: ReadonlyArray<IAreaOfExpertise> = [
  {
    title: "System Design",
    value: 31,
    color: danger,
  },
  {
    title: "DevOps / SRE",
    value: 24,
    color: secondary,
  },
  {
    title: "SaaS Engineering",
    value: 48,
    color: primary,
  },
];

export { expertSkills, otherSkills, areaOfExpertise };
