import React, { FunctionComponent } from "react";

import { Card } from "../../card";

import { secondary, darkGrey } from "../../../style/color";
import { fonts, sizes } from "../../../style/typography";
import { layout, alignment, display } from "../../../style/layout";
import { dimensions } from "../../../style/dimension";

import { IExperience } from "../../../data/types";

const Experience: FunctionComponent<PageProps> = ({ experience }) => {
  return <Card padding={true} transparent={true} title="Experience" />;
};

export interface PageProps {
  experience: IExperience[];
}

export default Experience;
export { Experience };
