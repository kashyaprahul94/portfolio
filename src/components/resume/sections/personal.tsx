import React, { FunctionComponent } from "react";

import { Card } from "../../card";
import {
  Location,
  Mobile,
  Email,
  LinkedIn,
  GitHub,
  Badge,
  Star,
  Trophy,
} from "../../icons";

import { midnightblue } from "../../../style/color";
import { fonts, sizes } from "../../../style/typography";

import { IPersonalInfo } from "../../../data/types";

const InfoItem = ({ title, Icon = null }) => (
  <p
    style={{
      marginBottom: "5px",
    }}
  >
    {Icon && <Icon size={24} color={midnightblue} />}
    <span>{title}</span>
  </p>
);

const Personal: FunctionComponent<PageProps> = ({ info }) => {
  return (
    <Card padding={true} transparent={true}>
      <h1
        style={{
          fontSize: sizes.hero,
        }}
      >
        {info.firstName} {info.lastName}
      </h1>
      <h2
        style={{
          fontSize: sizes.jumbo,
          fontFamily: fonts.text,
          marginBottom: "20px",
        }}
      >
        {info.title}
      </h2>

      <InfoItem title={`${info.city}, ${info.country}`} Icon={Location} />
      <InfoItem title={info.mobile} Icon={Mobile} />
      <InfoItem title={info.email} Icon={Email} />
      <InfoItem title={info.linkedIn} Icon={LinkedIn} />
      <InfoItem title={info.gitHub} Icon={GitHub} />

      <InfoItem title={info.gitHub} Icon={Trophy} />
      <InfoItem title={info.gitHub} Icon={Star} />
      <InfoItem title={info.gitHub} Icon={Badge} />
    </Card>
  );
};

export interface PageProps {
  info: IPersonalInfo;
}

export default Personal;
export { Personal };
