import React, { FunctionComponent } from "react";

import { Card } from "../../card";
import { Location, Mobile, Email, LinkedIn, GitHub } from "../../icons";

import { secondary, darkGrey } from "../../../style/color";
import { fonts, sizes } from "../../../style/typography";
import { layout, alignment, display } from "../../../style/layout";
import { dimensions } from "../../../style/dimension";

import { IEducation } from "../../../data/types";

const Education: FunctionComponent<PageProps> = ({ education }) => {
  return (
    <Card padding={true} transparent={true} title="Education">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </Card>
  );
};

export interface PageProps {
  education: IEducation[];
}

export default Education;
export { Education };
