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
  "Elasticsearch",
  "OAuth 2.0",
  "CloudFoundry",
  "CI/CD",
  "Internet of Things",
  "Distributed Systems",
  "Design Patterns",
  "E-Commerce",
  "Marketing",
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
